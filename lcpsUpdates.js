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
import {WebView} from 'react-native-webview';

import AsyncStorage from '@react-native-async-storage/async-storage';


const lcpsUpdates = ({navigation}) => {


    return ( 
        <SafeAreaView style={{flex: 1}}>
            <WebView source={{uri: 'https://twitter.com/LCPSOfficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'}} />
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

export default withNavigation(lcpsUpdates);