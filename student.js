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
} from "react-native";
import { withNavigation } from "react-navigation";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AttendenceScreen from "./Attendence";
import HomeScreen from "./HomeScreen";
const students = (props) => {
    const [Username, onChangeUsername] = useState('.');
    const [Password, onChangePassword] = useState('.');
    const [authenticated, setAuthentication] = useState(false);
    const [clicked, setClicked] = useState(0);
    const studentsAccounts = [
        {User: "123123"},
        {User: "Aa"},
        {User: "HiHi"}
    ]

    return ( 
        <View>
            <Text style={styles.text}>Login</Text>
            <TextInput style={styles.input} placeholder="username (ex:aaa@student.school.edu)" onChangeText={onChangeUsername}/>
            <TextInput style={styles.input} placeholder="password" onChangeText={onChangePassword} secureTextEntry={true}/>
            <Text>{authenticated}</Text>
            <TouchableOpacity onPress={() => {
                let tmpString = Username + Password
                if (studentsAccounts.some((studentAccount) => studentAccount.User.includes(tmpString))) {
                    props.navigation.navigate("HomeScreen", {title: "0"})
                }else{
                    alert("Wrong password! Try again")
                }
            }}>
                <Text>Submit</Text>
                
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

export default withNavigation(students);