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
import termsAndConditions from "./termsAndConditions";

function ForgotPasswd({ forgotPassword }) {
    if (forgotPassword){
        return(
            <Text style={{textAlign:"center", }}>Please contact your school's admistrators to reset your password</Text>
        );
    }
    return;
}

const masterLogin = (props) => {
    const [Username, onChangeUsername] = useState('.');
    const [Password, onChangePassword] = useState('.');
    const [forgotPassword, onForgotPassword] = useState(false);
    
    const studentsAccounts = [
        {User: "S.s"},
        {User: "A.a"},
        {User: "Hi.Hi"}
    ]

    const teacherAccounts = [
        {Teacher: "T.t"},
        {Teacher: "B.b"},
        {Teacher: "Hello.Hello"}
    ]

    const parentAccounts = [
        {Parent: "P.p", Kid: "John"},
        {Parent: "I.i", Kid: "Jack"}
    ]


    return ( 
        <View style={styles.container}>
            
            <View style={{flex:1, alignContent: "center", justifyContent: "center", alignItems: "center"}}>
                <Image style = {{ width: 200, height: 200 }} source = {{uri:'http://s3-us-west-2.amazonaws.com/sportshub2-uploads-prod/files/sites/3061/2021/08/04152939/Freedom-Logo.png'}}/>
            </View>
            <View style={{flex: 1}}>
                <Text></Text>
            </View>
            <Text style={styles.text}>Login</Text>
            <View style={{flexDirection:"row", flex: 1}}>
                <View style={{flex:1}}></View>
                <TextInput style={styles.input} placeholder="Username" onChangeText={onChangeUsername}/>
                <View style={{flex:1}}></View>
            </View>
            <View style={{flexDirection:"row", flex: 1}}>
                <View style={{flex:1}}></View>
                <TextInput style={styles.input} placeholder="Password" onChangeText={onChangePassword} secureTextEntry={true}/>
                <View style={{flex:1}}></View>
            </View>
            <View style={{flexDirection: "row", flex: 1}}>
                <View style={{flex:1, backgroundColor:"rgb(234,234,234)"}}></View>
                    <TouchableOpacity style={styles.submitButton} onPress={() => {
                        let tmpString = Username+"."+Password
                        if (studentsAccounts.some((studentAccount) => studentAccount.User.includes(tmpString))) {
                            props.navigation.navigate("HomeScreen", {title: "0", UserInfo: studentsAccounts.find((studentAccount) => studentAccount.User === tmpString)})
                        }else if (teacherAccounts.some((teacherAccount) => teacherAccount.Teacher.includes(tmpString))) {
                            props.navigation.navigate("HomeScreen", {title: "1", UserInfo: teacherAccounts.find((teacherAccount) => teacherAccount.Teacher === tmpString)})
                        }else if (parentAccounts.some((parentAccount) => parentAccount.Parent.includes(tmpString))) {
                            props.navigation.navigate("HomeScreen", {title: "2", UserInfo: parentAccounts.find((parentAccount) => parentAccount.Parent === tmpString)})
                        }else{
                            alert("Wrong password! Try again")
                        }
                    }}>
                        <Text>{" "}</Text>
                        <Text style={{fontSize:30, textAlign:"center", color:"white"}}>Submit</Text>
                    </TouchableOpacity>
                <View style={{flex:1, backgroundColor:"rgb(234,234,234)"}}></View>
            </View>
            <View style={{flex:1}}></View>
            <TouchableOpacity style={styles.termsButton} onPress={() => {props.navigation.navigate("termsAndConditions")}}>
                <Text style={{color:"rgb(0, 100, 255)", textAlign: "center"}}>View licensing and terms of agreement</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1}} onPress={() => {onForgotPassword(true)}}>
                <Text style={{color:"rgb(0, 100, 255)", textAlign: "center"}}>Forgot password?</Text>
                <ForgotPasswd forgotPassword={forgotPassword}></ForgotPasswd>
            </TouchableOpacity>
            <View style={{flex:1}}></View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
		flex: 1,
		paddingTop: 100,
		backgroundColor: "rgb(234,234,234)",
        flexDirection: "column",
	},
    text: {
        fontSize: 30,
        textAlign: "center",
        textDecorationLine: "underline",
        flex: 1
    },
    input: {
        fontSize: 20,
        textAlign: "center",
        borderColor: 'grey',
        borderWidth: 1,
        height: 50,
        flex: 4,
        borderRadius: 20,
    },
    submitButton : {
        fontSize: 20,
        backgroundColor: "rgb(0, 100, 255)",
        flex:4,
        textAlign: "center",
        borderRadius: 20,
        alignContent: "center",
        alignItems: "center"
    },
    termsButton: {
        fontSize: 15,
        textAlign: "center",
        flex: 1
    }
});

export default withNavigation(masterLogin);