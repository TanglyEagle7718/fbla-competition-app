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
import { Feather } from "@expo/vector-icons";


function PastReports({ reportsList }) {
  console.log(reportsList)
  return(
    <FlatList data={reportsList.slice(1)} renderItem={({item}) => <Text style={{paddingLeft:10}}>{item}</Text>}></FlatList>
  );
}


//Async methods pulled from https://blog.jscrambler.com/how-to-use-react-native-asyncstorage
const reportBug = ({navigation, type, UserInfo}) => {
  const UserType = navigation.getParam("type");
  const UserInformation = navigation.getParam("UserInfo")
  if (UserType == 0) {
    const [object, setObject] = useState(["."]);
    const [note, setNote] = useState("");
    
    
    const saveBug = async () => {
        try {
        const jsonValue = JSON.stringify(object)
        await AsyncStorage.setItem(UserInformation.User.split(".")[0], jsonValue)
        }catch (error) {
        alert("Error in saving")
        }
    };

    const getData = async () => {
        try {
        const jsonValue = await AsyncStorage.getItem(UserInformation.User.split(".")[0])
        setObject(arr => [...JSON.parse(jsonValue)])
        return JSON.parse(jsonValue);
        
        }catch (error) {
        alert("Error in retrieving")
        }
    };

    const deleteData = () => {
        try {
        const jsonValue = JSON.stringify(["."])
        AsyncStorage.setItem(UserInformation.User.split(".")[0], jsonValue);
        setObject(["."])
        } catch (error) {
        alert("Error in deleting")
        }
    };

    React.useEffect(() => {
        getData();
    }, []);

    const returnUserName = () => {
        let tmpStr = UserInformation.User
        let tmpArr = tmpStr.split()
        console.log(tmpArr)
        return tmpArr[1]
    }

    return (
        <View>
        <Text style={{fontSize: 20, textAlign:"center"}}>Please explain the bug in detail</Text>
        <TextInput style={styles.input} placeholder="input name" onChangeText={setNote} onEndEditing={(theNote) => {setObject(arr => [...object, note])}}></TextInput>
        <TouchableOpacity onPress={saveBug}>
            <Text style={{fontSize:20, textAlign:"center"}}>Send Bug Report{" "}
                <Feather
                    style={{ paddingRight: 10, fontSize:20, flex: 1}}
                    name="send"
                    size={12}
                    color="black"
                />
        </Text>
        </TouchableOpacity>

        

        <Text style={{fontSize: 15, paddingLeft: 10}}>Bug Report that was just saved: {note}</Text>
        <Text> </Text>
        <Text style={{paddingLeft: 10}}>Past bug reports sent by you ({UserInformation.User.split(".")[0]}) </Text>
        <Text></Text>
        <PastReports reportsList={object}></PastReports>
        <Text></Text>

        <TouchableOpacity onPress={deleteData}>
            <Text style={{fontSize: 15, paddingLeft: 10}}>Delete Past reports?</Text>
        </TouchableOpacity>

        </View>
    );
  } else if (UserType == 1) {
    const [object, setObject] = useState(["."]);
    const [note, setNote] = useState("");
    
    
    const saveBug = async () => {
        try {
        const jsonValue = JSON.stringify(object)
        await AsyncStorage.setItem(UserInformation.Teacher.split(".")[0], jsonValue)
        }catch (error) {
        alert("Error in saving")
        }
    };

    const getData = async () => {
        try {
        const jsonValue = await AsyncStorage.getItem(UserInformation.Teacher.split(".")[0])
        setObject(arr => [...JSON.parse(jsonValue)])
        return JSON.parse(jsonValue);
        
        }catch (error) {
            console.log(error);
        }
    };

    const deleteData = () => {
        try {
        const jsonValue = JSON.stringify(["."])
        AsyncStorage.setItem(UserInformation.Teacher.split(".")[0], jsonValue);
        setObject(["."])
        } catch (error) {
        alert("Error in deleting")
        }
    };

    React.useEffect(() => {
        getData();
    }, []);

    return (
        <View>
        <Text style={{fontSize: 20, textAlign:"center"}}>Please explain the bug in detail</Text>
        <TextInput style={styles.input} placeholder="input name" onChangeText={setNote} onEndEditing={(theNote) => {setObject(arr => [...object, note])}}></TextInput>
        <TouchableOpacity onPress={saveBug}>
            <Text style={{fontSize:20, textAlign:"center"}}>Send Bug Report{" "}
                <Feather
                    style={{ paddingRight: 10, fontSize:20, flex: 1}}
                    name="send"
                    size={12}
                    color="black"
                />
        </Text>
        </TouchableOpacity>

        

        <Text style={{fontSize: 15, paddingLeft: 10}}>Bug Report that was just saved: {note}</Text>
        <Text> </Text>
        <Text style={{paddingLeft: 10}}>Past bug reports sent by you ({UserInformation.Teacher.split(".")[0]}) </Text>
        <Text></Text>
        <PastReports reportsList={object}></PastReports>
        <Text></Text>

        <TouchableOpacity onPress={deleteData}>
            <Text style={{fontSize: 15, paddingLeft: 10}}>Delete Past reports?</Text>
        </TouchableOpacity>

        </View>
    );

  } else if (UserType == 2) {
    const [object, setObject] = useState(["."]);
    const [note, setNote] = useState("");
    
    
    const saveBug = async () => {
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
        setObject(arr => [...JSON.parse(jsonValue)])
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

    const returnUserName = () => {
        let tmpStr = UserInformation.Parent
        let tmpArr = tmpStr.split()
        console.log(tmpArr)
        return tmpArr[1]
    }

    return (
        <View>
        <Text style={{fontSize: 20, textAlign:"center"}}>Please explain the bug in detail</Text>
        <TextInput style={styles.input} placeholder="input name" onChangeText={setNote} onEndEditing={(theNote) => {setObject(arr => [...object, note])}}></TextInput>
        <TouchableOpacity onPress={saveBug}>
            <Text style={{fontSize:20, textAlign:"center"}}>Send Bug Report{" "}
                <Feather
                    style={{ paddingRight: 10, fontSize:20, flex: 1}}
                    name="send"
                    size={12}
                    color="black"
                />
        </Text>
        </TouchableOpacity>

        

        <Text style={{fontSize: 15, paddingLeft: 10}}>Bug Report that was just saved: {note}</Text>
        <Text> </Text>
        <Text style={{paddingLeft: 10}}>Past bug reports sent by you ({UserInformation.Parent.split(".")[0]}) </Text>
        <Text></Text>
        <PastReports reportsList={object}></PastReports>
        <Text></Text>

        <TouchableOpacity onPress={deleteData}>
            <Text style={{fontSize: 15, paddingLeft: 10}}>Delete Past reports?</Text>
        </TouchableOpacity>

        </View>
    );
  }
  YellowBox.ignoreWarnings([
    // See: https://github.com/react-navigation/react-navigation/issues/7839
    'Sending \`onAnimatedValueUpdate\` with no listeners registered.',
  ]);
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
  }
});

export default withNavigation(reportBug);