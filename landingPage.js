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
import masterLogin from "./masterLogin";

const landingPage = (props) => {

    return ( 
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={{flexDirection:"row", flex: 0.5}}>
                    <View style={{flex:1, alignContent: "center", justifyContent: "center", alignItems: "center"}}></View>
                    <View style={{flex:1, alignContent: "center", justifyContent: "center", alignItems: "center"}}></View>
                    <View style={{flex:1, alignContent: "center", justifyContent: "center", alignItems: "center"}}></View>
                </View>
                <View style={{flexDirection:"row", flex: 1}}>
                    <View style={{flex:1, alignContent: "center", justifyContent: "center", alignItems: "center"}}></View>
                    <View style={{flex:1, alignContent: "center", justifyContent: "center", alignItems: "center"}}>
                        <Image style = {{ width: 200, height: 200 }} source = {{uri:'http://s3-us-west-2.amazonaws.com/sportshub2-uploads-prod/files/sites/3061/2021/08/04152939/Freedom-Logo.png'}}/>
                    </View>
                    <View style={{flex:1, alignContent: "center", justifyContent: "center", alignItems: "center"}}></View>
                </View>
                <View style={{flexDirection:"row", flex: 1}}>
                    <View style={{flex:1}}></View>
                    <View style={{flex:2}}>
                        <Text style={{textAlign:"center", fontSize:30}}>Welcome!</Text>
                        <Text style={{textAlign:"center"}}> </Text>
                        <TouchableOpacity onPress={() => {props.navigation.navigate("masterLogin")}}>
                            <Text style={{textAlign:"center"}}>Tap to enter</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, alignContent: "center", justifyContent: "center", alignItems: "center"}}></View>
                </View>
                
            </View>
        </SafeAreaView>
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
});

export default withNavigation(landingPage);