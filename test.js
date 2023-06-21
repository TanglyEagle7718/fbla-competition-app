import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	ScrollView,
	Image,
	ListItem,
	TouchableOpacity,
    TextInput,
    Pressable,
} from "react-native";
import { withNavigation } from "react-navigation";
import AsyncStorage from '@react-native-async-storage/async-storage';

//Async methods pulled from https://blog.jscrambler.com/how-to-use-react-native-asyncstorage
const test = ({navigation}) => {
  const [text, setText] = useState("");

  const saveName = async () => {
    try {
        AsyncStorage.setItem('appdata', text);
    }catch (error) {
        console.log("error")
    }
  }

  const getName = async () => {
    try {
        const name = await AsyncStorage.getItem("appdata")
        setText(name);
    }catch (error) {
        console.log("error")
    }
  }

  const deleteName = () => {
    AsyncStorage.removeItem("appdata")
  }

  React.useEffect(() => {
    getName();
  }, []);

  return (
    <View>
        <TextInput placeholder="Input" onChangeText={value => setText(value)}></TextInput>
        <TouchableOpacity onPress={saveName}>
            <Text>Send Message</Text>
        </TouchableOpacity>

        <Text>{text}</Text>

        <TouchableOpacity onPress={deleteName}>
            <Text>Delete Data?</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  numberInput: {
    backgroundColor: "pink",
    flex: 1,
    fontSize: 50,
    textAlign: "center",
  },
  input: {
    fontSize: 30
  }
});

export default withNavigation(test);