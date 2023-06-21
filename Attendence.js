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
import { Feather } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';


function PastMessages({ messagesList }) {
  return(
    <FlatList data={messagesList.slice(1)} renderItem={({item}) => 
    <View>
      <Text style={styles.item}>{item}</Text>
      <Text> </Text>
    </View>
  
    }></FlatList>
  );
}



//Async methods pulled from https://blog.jscrambler.com/how-to-use-react-native-asyncstorage
const AttendenceScreen = ({navigation, type, UserInfo}) => {
  const UserType = navigation.getParam("type");
  const UserInformation = navigation.getParam("UserInfo")
  const [object, setObject] = useState(["."]);
  const [note, setNote] = useState("");
  
  const saveMessage = async () => {
    try {
      const jsonValue = JSON.stringify(object)
      await AsyncStorage.setItem(UserInformation.Parent.split(".")[0], jsonValue)
    }catch (error) {
      alert("Error in saving")
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(UserInformation.Parent.split(".")[0])
      if (object[0].slice(0) === ".") {
        console.log("yikes!")
      }
      setObject(arr => [...JSON.parse(jsonValue)])
      //return jsonValue != null ? JSON.parse(jsonValue) : null;
      return JSON.parse(jsonValue);

    }catch (error) {
      alert("Error in retrieving")
    }
  };

  const deleteData = () => {
    try {
      const jsonValue = JSON.stringify(["."])
      AsyncStorage.setItem(UserInformation.Parent.split(".")[0], jsonValue);
      setObject(["."])
    } catch (error) {
      alert("Error in deleting")
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  console.log({object})

  // Only parents can access this page
  return (
    <View>
      <Text style={{fontSize: 20, alignContent: "center", textAlign:"center"}}>Please explain why your student will be tardy or absent.</Text>
      <Text></Text>
      <Text style={{fontSize: 20, alignContent: "center", textAlign:"center"}}>Your message will be processed by the attendence secretary</Text>
      <TextInput style={styles.input} placeholder="input name" onChangeText={setNote} onEndEditing={(theNote) => {setObject(arr => [...object, note])}}></TextInput>
      <TouchableOpacity onPress={saveMessage}>
      <Text style={{fontSize:20, textAlign:"center"}}>Send Message
        <Feather
            style={{ paddingRight: 10, fontSize:20, flex: 1}}
            name="send"
            size={12}
            color="black"
          />
      </Text>
      <Text></Text>
      </TouchableOpacity>
      <Text style={{fontSize: 15, paddingLeft: 10}}>Message that was just saved: {note}</Text>
      <Text style={{paddingLeft: 10}}>Past messages sent by you ({UserInformation.Parent.split(".")[0]}) </Text>
      <Text></Text>
      <PastMessages messagesList={object}></PastMessages>

      <TouchableOpacity onPress={deleteData}>
        <Text style={{fontSize:60, color:"rgb(240,240,240)"}}>Delete Data?</Text>
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
    fontSize: 20,
    textAlign: 'center',
    height: 60
},
});

export default withNavigation(AttendenceScreen);