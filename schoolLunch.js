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

    const FOODBreakfast = ["Cinnamon Toast Crunch Cereal", "String Cheese", "Apple Slices", "1% White MilkFat Free", "Chocolate Milk"]

    const FOODLunch = ["Penne Pasta", "Italian Chicken", "Alfredo Sauce", "Apple Slices", "Shredded Lettuce", "1% White Milk", "Fat Free Chocolate Milk"]

    return ( 
        <View style={{flexDirection:"column", flex: 1}}>
            <Text  style={{textAlign:"center", fontSize: 30}}>Today's options from the 
                <Text style={{fontStyle: 'italic', fontWeight: 'bold', color:"rgb(255,175,0)"}}>{" "}Ignition Cafe</Text>
            </Text>
            <Text>{""}</Text>
            <Text style={{textDecorationLine: 'underline'}}>Timings:</Text>
            <Text>{""}</Text>
            <Text>{" "}Breakfast: 9:00 pm - 9:30 pm</Text>
            <Text>{""}</Text>
            <Text>{" "}Lunch: 12:00 pm - 2:00 pm</Text>
            <Text>{""}</Text>
            <Text style={{fontSize:20}}>{"   "}Breakfast:</Text>
            <Text>{""}</Text>
            <FlatList data={FOODBreakfast} renderItem={({item}) => <View><Text style={styles.item}>{"   "}-  {item}</Text><Text>{" "}</Text></View>}/> 
            <Text style={{fontSize:20}}>{"   "}Lunch:</Text> 
            <Text>{""}</Text>
            <FlatList data={FOODLunch} renderItem={({item}) => <View><Text style={styles.item}>{"   "}-  {item}</Text><Text>{" "}</Text></View>}/> 
             
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
    }
});

export default withNavigation(SchoolCalendar);