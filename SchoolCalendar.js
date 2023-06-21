// link: https://schoolcalendarinfo.com/wp-content/uploads/2022/09/Loudoun-County-Public-Schools-Calendar.jpg


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

const SchoolCalendar = (props) => {

    return ( 
        <View style={{flexDirection:"column", flex: 1}}>
            <Image resizeMode='contain' style = {{ flex:1 }} source = {{uri:'https://schoolcalendarinfo.com/wp-content/uploads/2022/09/Loudoun-County-Public-Schools-Calendar.jpg'}}/>
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
});

export default withNavigation(SchoolCalendar);