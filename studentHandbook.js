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


const studentHandbook = ({navigation}) => {
    const nameOfArticle = navigation.getParam("articleName");
    return (
        <SafeAreaView style={{flex: 1}}>
            <WebView source={{uri: 'https://www.lcps.org/cms/lib/VA01000195/Centricity/Domain/1803/Student%20Handbook%202022-23%20Update%208.24.pdf'}} />
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

export default withNavigation(studentHandbook);