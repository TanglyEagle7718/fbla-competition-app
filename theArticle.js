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


const theArticle = ({navigation, articleName}) => {
    const nameOfArticle = navigation.getParam("articleName");

    if (nameOfArticle === "FHS Students and Staff Help Spread Breast Canc") {
        return ( 
            <SafeAreaView style={{flex: 1}}>
                <WebView source={{uri: 'https://uncagedfhs.org/13448/news/fhs-students-and-staff-help-spread-breast-cancer-awareness-during-october/'}} />
          </SafeAreaView>
        );
    } else if (nameOfArticle === "FHS Students are Making a Change Through") {
        return ( 
            <SafeAreaView style={{flex: 1}}>
                <WebView source={{uri: 'https://uncagedfhs.org/13346/news/fhs-students-are-making-a-change-through-volunteering/'}} />
          </SafeAreaView>
        );
    } else if (nameOfArticle === "Seniors enjoy a workday while others take the PSAT") {
        return ( 
            <SafeAreaView style={{flex: 1}}>
                <WebView source={{uri: 'https://uncagedfhs.org/14175/news/senior-workday/'}} />
          </SafeAreaView>
        );
    } else if (nameOfArticle === "Students Have Mixed Feelings About the 10 Minute Bre") {
        return ( 
            <SafeAreaView style={{flex: 1}}>
                <WebView source={{uri: 'https://uncagedfhs.org/13023/news/students-have-mixed-feelings-about-the-10-minute-break/'}} />
          </SafeAreaView>
        );
    } else if (nameOfArticle === "Freedom Eagle Broadcast 2/10/2023") {
        return ( 
            <SafeAreaView style={{flex: 1}}>
                <WebView source={{uri: 'https://uncagedfhs.org/15760/broadcasts/freedom-eagle-broadcast-2-10-2023/'}} />
          </SafeAreaView>
        );
    } else if (nameOfArticle === "Freedom Eagle Broadcast 2/3/2023") {
        return ( 
            <SafeAreaView style={{flex: 1}}>
                <WebView source={{uri: 'https://uncagedfhs.org/15742/broadcasts/freedom-eagle-broadcast-2-3-2023/'}} />
          </SafeAreaView>
        );
    } else if (nameOfArticle === "Freedom Eagle Broadcast 1/27/2023") {
        return ( 
            <SafeAreaView style={{flex: 1}}>
                <WebView source={{uri: 'https://uncagedfhs.org/15739/broadcasts/freedom-eagle-broadcast-1-27-2023/'}} />
          </SafeAreaView>
        );
    } else if (nameOfArticle === "Freedom Eagle Broadcast 1/20/2023") {
        return ( 
            <SafeAreaView style={{flex: 1}}>
                <WebView source={{uri: 'https://uncagedfhs.org/15736/broadcasts/freedom-eagle-broadcast-1-20-2023/'}} />
          </SafeAreaView>
        );
    } else if (nameOfArticle === "Freedom Eagle Broadcast 1/13/2023") {
        return ( 
            <SafeAreaView style={{flex: 1}}>
                <WebView source={{uri: 'https://uncagedfhs.org/15745/broadcasts/freedom-eagle-broadcast-1-13-2023/'}} />
          </SafeAreaView>
        );
    }else if (nameOfArticle === "Freedom Eagle Broadcast 1/6/2023") {
        return ( 
            <SafeAreaView style={{flex: 1}}>
                <WebView source={{uri: 'https://uncagedfhs.org/15733/broadcasts/freedom-eagle-broadcast-1-6-2023/'}} />
          </SafeAreaView>
        );
    }
    return;
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

export default withNavigation(theArticle);