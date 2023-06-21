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
    Linking,
} from "react-native";
import { withNavigation } from "react-navigation";
import AsyncStorage from '@react-native-async-storage/async-storage';
import studentHandbook from "./studentHandbook";
import { Feather } from "@expo/vector-icons";



const termsAndConditions = (props) => {
    return(
        <View style={styles.container}>
            <ScrollView>
                <Text style={{fontSize:20, fontWeight: 'bold', paddingLeft:10, paddingRight: 10}}>Conduct:</Text>
                <Text style={{paddingLeft:10 , paddingRight: 10}}>By using this app, you agree to the rules set forth in the Freedom High School Student Handbook:</Text>
                <Text style={{color: 'blue', paddingLeft:10 , paddingRight: 10}} onPress={() => Linking.openURL('https://www.lcps.org/cms/lib/VA01000195/Centricity/Domain/1803/Student%20Handbook%202022-23%20Update%208.24.pdf ')}> Student Handbook </Text>
                <TouchableOpacity onPress={(text) => {props.navigation.navigate("studentHandbook")}}>
                    <View>
                        <Text style={{paddingLeft:10 , paddingRight: 10, fontWeight: 'bold'}}>Read the handbook
                        <Feather
                        style={{ paddingRight: 10 }}
                        name="arrow-right"
                        size={12}
                        color="black"
                    />
                    </Text>
                    </View>
                </TouchableOpacity>
                <Text></Text>

                
                <Text style={{fontSize:20, fontWeight: 'bold', paddingLeft:10, paddingRight: 10}}>Licensing:</Text>
                <Text style={{textDecorationLine: 'underline', paddingLeft:10, paddingRight: 10}}>MIT License</Text>
                <Text style={{textDecorationLine: 'underline', paddingLeft:10, paddingRight: 10}}>Copyright (c) Meta Platforms, Inc. and affiliates.</Text>
                <Text> </Text>
                <Text style={{paddingLeft:10, paddingRight: 10}}>Permission is hereby granted, free of charge, to any person obtaining a copy 
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
                </Text>
                <Text> </Text>
                <Text style={{paddingLeft:10, paddingRight: 10}}>The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
                </Text>
                <Text> </Text>
                <Text style={{paddingLeft:10, paddingRight: 10}}>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
                </Text>
            
            
            
            <Text></Text>
            

            </ScrollView>
            
        </View>
    );
};
/*
https://www.lcps.org/cms/lib/VA01000195/Centricity/Domain/1803/Student%20Handbook%202022-23%20Update%208.24.pdf 
*/

const styles = StyleSheet.create({
    container: {
		flex: 1,
		paddingTop: 10,
		backgroundColor: "white",
	},
    text: {
        fontSize: 30,
        textAlign: "center",
        textDecorationLine: "underline"
    },
    input: {
        fontSize: 30,
        textAlign: "center"
    },
});

export default withNavigation(termsAndConditions);