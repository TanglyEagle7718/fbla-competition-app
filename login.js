import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	ScrollView,
	Image,
	ListItem,
	TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import AttendenceScreen from "./Attendence";
import student from "./student";

const login = (props) => {
  return ( 
  <View>
    <Text style={styles.text}>Login</Text>
    <Text style={styles.text}>Are you a:</Text>
    <TouchableOpacity onPress={() => props.navigation.navigate("Student")}>
				<Text>Student?</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => props.navigation.navigate("Attendence")}>
				<Text>Teacher</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => props.navigation.navigate("Attendence")}>
				<Text>Parent</Text>
    </TouchableOpacity>

  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default withNavigation(login);