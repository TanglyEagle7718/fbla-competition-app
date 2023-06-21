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
    Touchable,
} from "react-native";
import { withNavigation } from "react-navigation";
import {WebView} from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import theArticle from "./theArticle";
import { Feather } from "@expo/vector-icons";


const articles = ({navigation}) => {
    
    return ( 
        <View>
            <Text style={{fontWeight: 'bold', color:"rgb(255,175,0)", textAlign:"center", fontSize: 30}}>UN
                <Text style={{fontWeight: 'bold', color:"black"}}>CAGED</Text>
            </Text>
            <Text></Text>
            <Text style={{textDecorationLine: 'underline', fontSize: 20}}>Articles:</Text>
            <Text></Text>
            <TouchableOpacity onPress={(text) => {navigation.navigate("theArticle", {articleName: "FHS Students and Staff Help Spread Breast Canc"})}}>
                <Text>{"   "}-  FHS Students and Staff Help Spread Br...
                    <Feather
                        style={{ paddingRight: 10 }}
                        name="arrow-right"
                        size={12}
                        color="black"
                    />
                </Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity onPress={(text) => {navigation.navigate("theArticle", {articleName: "FHS Students are Making a Change Through"})}}>
                <Text>{"   "}-  FHS Students are Making a Change Through ...
                    <Feather
                            style={{ paddingRight: 10 }}
                            name="arrow-right"
                            size={12}
                            color="black"
                        />
                </Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity onPress={(text) => {navigation.navigate("theArticle", {articleName: "Seniors enjoy a workday while others take the PSAT"})}}>
                <Text>{"   "}-  Seniors enjoy a workday while others take...
                    <Feather
                            style={{ paddingRight: 10 }}
                            name="arrow-right"
                            size={12}
                            color="black"
                        />
                </Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity onPress={(text) => {navigation.navigate("theArticle", {articleName: "Students Have Mixed Feelings About the 10 Minute Bre"})}}>
                <Text>{"   "}-  Students Have Mixed Feelings About the 10 Mi...
                    <Feather
                                style={{ paddingRight: 10 }}
                                name="arrow-right"
                                size={12}
                                color="black"
                            />
                </Text>
            </TouchableOpacity>
            <Text></Text>
            <Text></Text>
            <Text style={{textDecorationLine: 'underline', fontSize: 20}}>Past News Broadcasts:</Text>
            <Text></Text>
            <TouchableOpacity onPress={(text) => {navigation.navigate("theArticle", {articleName: "Freedom Eagle Broadcast 2/10/2023"})}}>
                <Text>{"   "}-  Freedom Eagle Broadcast 2/10/2023
                    <Feather
                                style={{ paddingRight: 10 }}
                                name="arrow-right"
                                size={12}
                                color="black"
                            />
                </Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity onPress={(text) => {navigation.navigate("theArticle", {articleName: "Freedom Eagle Broadcast 2/3/2023"})}}>
                <Text>{"   "}-  Freedom Eagle Broadcast 2/3/2023
                    <Feather
                                style={{ paddingRight: 10 }}
                                name="arrow-right"
                                size={12}
                                color="black"
                            />
                </Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity onPress={(text) => {navigation.navigate("theArticle", {articleName: "Freedom Eagle Broadcast 1/27/2023"})}}>
                <Text>{"   "}-  Freedom Eagle Broadcast 1/27/2023
                    <Feather
                                style={{ paddingRight: 10 }}
                                name="arrow-right"
                                size={12}
                                color="black"
                            />
                </Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity onPress={(text) => {navigation.navigate("theArticle", {articleName: "Freedom Eagle Broadcast 1/20/2023"})}}>
                <Text>{"   "}-  Freedom Eagle Broadcast 1/20/2023
                    <Feather
                                style={{ paddingRight: 10 }}
                                name="arrow-right"
                                size={12}
                                color="black"
                            />
                </Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity onPress={(text) => {navigation.navigate("theArticle", {articleName: "Freedom Eagle Broadcast 1/13/2023"})}}>
                <Text>{"   "}-  Freedom Eagle Broadcast 1/13/2023
                    <Feather
                                style={{ paddingRight: 10 }}
                                name="arrow-right"
                                size={12}
                                color="black"
                            />
                </Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity onPress={(text) => {navigation.navigate("theArticle", {articleName: "Freedom Eagle Broadcast 1/6/2023"})}}>
                <Text>{"   "}-  Freedom Eagle Broadcast 1/6/2023
                    <Feather
                                style={{ paddingRight: 10 }}
                                name="arrow-right"
                                size={12}
                                color="black"
                            />
                </Text>
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
});

export default withNavigation(articles);