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
    SafeAreaView,
    Button,
} from "react-native";
import { withNavigation } from "react-navigation";
import AsyncStorage from '@react-native-async-storage/async-storage';



const reportingMessages = (props) => {
  const [object, setObject] = useState(["."]);
  const [note, setNote] = useState("");
  
  const saveMessage = async () => {
    try {
      const jsonValue = JSON.stringify(object)
      await AsyncStorage.setItem("reports", jsonValue)
    }catch (error) {
      alert("Error in saving")
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("reports")
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
      AsyncStorage.setItem("reports", jsonValue);
      setObject(["."])
    } catch (error) {
      alert("Error in deleting")
    }
  };

  React.useEffect(() => {
    getData()
  }, []);

  console.log({object})

  // Only parents can access this page
  return (
    <View>
      <Text style={{fontSize: 20, textAlign:"center"}}>Please explain why you are reporting this message </Text>
      <TextInput style={styles.input} placeholder="input name" onChangeText={setNote} onEndEditing={(theNote) => {setObject(arr => [...object, note])}}></TextInput>
      <TouchableOpacity onPress={saveMessage}>
        <Text style={{textAlign:"center"}}>Send Report</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 15}}>Report that was just sent: {note}</Text>

      <TouchableOpacity onPress={deleteData}>
        <Text style={{fontSize:40, color:"rgb(244,244,244)"}}>Delete Data?</Text>
      </TouchableOpacity>

    </View>
  );


};

const styles = StyleSheet.create({
    container: {
		flex: 1,
		paddingTop: 10,
		backgroundColor: "rgb(234,234,234)",
        flexDirection: "column",
        alignContent: "center",
	},
    item: {
        fontSize: 15
    },
    input: {
        fontSize: 20,
        textAlign: 'center',
        height: 60
    },
});

export default withNavigation(reportingMessages);