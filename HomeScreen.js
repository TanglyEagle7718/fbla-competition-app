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
import { Feather } from "@expo/vector-icons";

import AttendenceScreen from "./Attendence";
import SchoolCalendar from "./SchoolCalendar";
import socialize from "./socialize";
import reportBug from "./reportBug";
import schoolLunch from "./schoolLunch";
import { AntDesign } from "@expo/vector-icons";
import {WebView} from 'react-native-webview';
import articles from "./articles";
import lcpsUpdates from "./lcpsUpdates";



function UserType({ navigation, type, UserInformation }) {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  let todayDate = month + '/' + date + '/' + year

  if (type == 0) {
    return (
      <ScrollView>
        <View style={{flexDirection: "column"}}>
        <Text>{""}</Text>
        <Text style={{textAlign:"center", fontSize: 30}}>Welcome {""}
          <Text style={{color:"rgb(0, 0, 0)"}}>{UserInformation.User.split(".")[0]}</Text>
        </Text>
        <Text>{""}</Text>
        <Text style={{fontStyle: 'italic', textAlign:"center", fontSize:20}}>"Where there is 
            <Text style={{fontStyle: 'italic', fontWeight: 'bold', color:"rgb(255,175,0)"}}>{" "}unity</Text>
            , there is 
            <Text style={{fontStyle: 'italic', fontWeight: 'bold', color:"rgb(255,175,0)"}}>{" "}Freedom</Text>
            "</Text>
        <Text>{""}</Text>
        <Text style={{textAlign:"center", fontSize:15}}>Today's date is: {todayDate}</Text>
        <Text>{""}</Text>
        <Text style={{fontSize: 20}}>{" "}Actions:</Text>

          <View>
            <TouchableOpacity style={{fontSize: 20,flex:4,textAlign: "center",textAlign: 'center',marginTop: 15,paddingBottom:20,paddingTop: 20,paddingLeft: 20, backgroundColor:"rgb(255,179,186)"}} onPress = {() => {navigation.navigate("schoolLunch")}}>
              <Text>Cafeteria Menu {""}
                <Feather
                    style={{ paddingRight: 10 }}
                    name="arrow-right"
                    size={12}
                    color="black"
                  />
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{fontSize: 20,flex:4,textAlign: "center",textAlign: 'center',marginTop: 15,paddingBottom:20,paddingTop: 20,paddingLeft: 20, backgroundColor:"rgb(255,223,186)"}} onPress = {() => {navigation.navigate("SchoolCalendar")}}>
            <Text>School Calendar
            <Feather
                    style={{ paddingRight: 10 }}
                    name="arrow-right"
                    size={12}
                    color="black"
                  />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{fontSize: 20,flex:4,textAlign: "center",textAlign: 'center',marginTop: 15,paddingBottom:20,paddingTop: 20,paddingLeft: 20, backgroundColor:"rgb(255,255,186)"}} onPress = {() => {navigation.navigate("socialize", {type: "0", UserInfo: UserInformation})}}>
            <Text>The Nest
            <Feather
                    style={{ paddingRight: 10 }}
                    name="arrow-right"
                    size={12}
                    color="black"
                  />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{fontSize: 20,flex:4,textAlign: "center",textAlign: 'center',marginTop: 15,paddingBottom:20,paddingTop: 20,paddingLeft: 20, backgroundColor:"rgb(186,255,201)"}} onPress = {() => {navigation.navigate("articles")}}>
            <Text>Read the School Newspaper
            <Feather
                    style={{ paddingRight: 10 }}
                    name="arrow-right"
                    size={12}
                    color="black"
                  />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{fontSize: 20,flex:4,textAlign: "center",textAlign: 'center',marginTop: 15,paddingBottom:20,paddingTop: 20,paddingLeft: 20, backgroundColor:"rgb(186,225,255)"}} onPress = {() => {navigation.navigate("lcpsUpdates")}}>
              <Text>County Wided Updates {""}
                <Feather
                    style={{ paddingRight: 10 }}
                    name="arrow-right"
                    size={12}
                    color="black"
                  />
              </Text>
            </TouchableOpacity>
          <TouchableOpacity style={{fontSize: 20,flex:4,textAlign: "center",textAlign: 'center',marginTop: 15,paddingBottom:20,paddingTop: 20,paddingLeft: 20, backgroundColor:"rgb(232,232,232)"}} onPress = {() => {navigation.navigate("reportBug", {type: "0", UserInfo: UserInformation})}}>
            <Text>Report A Bug
            <Feather
                    style={{ paddingRight: 10 }}
                    name="arrow-right"
                    size={12}
                    color="black"
                  />
            </Text>
          </TouchableOpacity>
          

        </View>
      </ScrollView>
    );
  }else if (type == 1) {
    return (
      <View>
        <Text>{""}</Text>
        <Text style={{textAlign:"center", fontSize: 30}}>Welcome {""}
          <Text style={{color:"rgb(0, 0, 0)"}}>{UserInformation.Teacher.split(".")[0]}</Text>
        </Text>
        <Text>{""}</Text>
        <Text style={{fontStyle: 'italic', textAlign:"center", fontSize:20}}>"Where there is 
            <Text style={{fontStyle: 'italic', fontWeight: 'bold', color:"rgb(255,175,0)"}}>{" "}unity</Text>
            , there is 
            <Text style={{fontStyle: 'italic', fontWeight: 'bold', color:"rgb(255,175,0)"}}>{" "}Freedom</Text>
            "</Text>
        <Text>{""}</Text>
        <Text style={{textAlign:"center", fontSize:15}}>Today's date is: {todayDate}</Text>
        <Text>{""}</Text>
        <Text style={{fontSize: 20}}>{" "}Actions:</Text>


        <TouchableOpacity style={{fontSize: 20,flex:4,textAlign: "center",textAlign: 'center',marginTop: 15,paddingBottom:20,paddingTop: 20,paddingLeft: 20, backgroundColor:"rgb(255,179,186)"}} onPress = {() => {navigation.navigate("lcpsUpdates")}}>
              <Text>County Wided Updates {""}
                <Feather
                    style={{ paddingRight: 10 }}
                    name="arrow-right"
                    size={12}
                    color="black"
                  />
              </Text>
            </TouchableOpacity>
        <TouchableOpacity style={{fontSize: 20,flex:4,textAlign: "center",textAlign: 'center',marginTop: 15,paddingBottom:20,paddingTop: 20,paddingLeft: 20, backgroundColor:"rgb(255,223,186)"}} onPress = {() => {navigation.navigate("SchoolCalendar")}}>
          <Text>School Calendar
          <Feather
                    style={{ paddingRight: 10 }}
                    name="arrow-right"
                    size={12}
                    color="black"
                  />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{fontSize: 20,flex:4,textAlign: "center",textAlign: 'center',marginTop: 15,paddingBottom:20,paddingTop: 20,paddingLeft: 20, backgroundColor:"rgb(255,255,186)"}} onPress = {() => {navigation.navigate("socialize", {type: "1", UserInfo: UserInformation})}}>
            <Text>The Nest
            <Feather
                    style={{ paddingRight: 10 }}
                    name="arrow-right"
                    size={12}
                    color="black"
                  />
            </Text>
          </TouchableOpacity>
        <View>
          <TouchableOpacity style={{fontSize: 20,flex:4,textAlign: "center",textAlign: 'center',marginTop: 15,paddingBottom:20,paddingTop: 20,paddingLeft: 20, backgroundColor:"rgb(186,255,201)"}} onPress = {() => {navigation.navigate("schoolLunch")}}>
            <Text>Cafeteria Menu {""}
              <Feather
                  style={{ paddingRight: 10 }}
                  name="arrow-right"
                  size={12}
                  color="black"
                />
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{fontSize: 20,flex:4,textAlign: "center",textAlign: 'center',marginTop: 15,paddingBottom:20,paddingTop: 20,paddingLeft: 20, backgroundColor:"rgb(186,225,255)"}} onPress = {() => {navigation.navigate("articles")}}>
            <Text>Read the School Newspaper
            <Feather
                    style={{ paddingRight: 10 }}
                    name="arrow-right"
                    size={12}
                    color="black"
                  />
            </Text>
          </TouchableOpacity>
        <TouchableOpacity style={{fontSize: 20,flex:4,textAlign: "center",textAlign: 'center',marginTop: 15,paddingBottom:20,paddingTop: 20,paddingLeft: 20, backgroundColor:"rgb(232,232,232)"}} onPress = {() => {navigation.navigate("reportBug", {type: "1", UserInfo: UserInformation})}}>
          <Text>Report Bug
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
  }else if (type == 2) {
    return (
      <View>
        <Text>{""}</Text>
        <Text style={{textAlign:"center", fontSize: 30}}>Welcome {""}
          <Text style={{color:"rgb(0, 0, 0)"}}>{UserInformation.Parent.split(".")[0]}</Text>
        </Text>
        <Text>{""}</Text>
        <Text style={{fontStyle: 'italic', textAlign:"center", fontSize:20}}>"Where there is 
            <Text style={{fontStyle: 'italic', fontWeight: 'bold', color:"rgb(255,175,0)"}}>{" "}unity</Text>
            , there is 
            <Text style={{fontStyle: 'italic', fontWeight: 'bold', color:"rgb(255,175,0)"}}>{" "}Freedom</Text>
            "</Text>
        <Text>{""}</Text>
        <Text style={{textAlign:"center", fontSize:15}}>Today's date is: {todayDate}</Text>
        <Text>{""}</Text>
        <Text style={{fontSize: 20}}>{" "}Actions:</Text>
        <TouchableOpacity style={{fontSize: 20,flex:4,textAlign: "center",textAlign: 'center',marginTop: 15,paddingBottom:20,paddingTop: 20,paddingLeft: 20, backgroundColor:"rgb(255,179,186)"}} onPress = {() => {navigation.navigate("lcpsUpdates")}}>
              <Text>County Wided Updates {""}
                <Feather
                    style={{ paddingRight: 10 }}
                    name="arrow-right"
                    size={12}
                    color="black"
                  />
              </Text>
            </TouchableOpacity>
        <TouchableOpacity style={{fontSize: 20,flex:4,textAlign: "center",textAlign: 'center',marginTop: 15,paddingBottom:20,paddingTop: 20,paddingLeft: 20, backgroundColor:"rgb(255,223,186)"}} onPress = {() => {navigation.navigate("schoolLunch")}}>
          <Text>Cafeteria Menu {""}
          <Feather
                    style={{ paddingRight: 10 }}
                    name="arrow-right"
                    size={12}
                    color="black"
                  />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{fontSize: 20,flex:4,textAlign: "center",textAlign: 'center',marginTop: 15,paddingBottom:20,paddingTop: 20,paddingLeft: 20, backgroundColor:"rgb(255,255,186)"}} onPress = {() => {navigation.navigate("SchoolCalendar")}}>
          <Text>School Calendar
          <Feather
                    style={{ paddingRight: 10 }}
                    name="arrow-right"
                    size={12}
                    color="black"
                  />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{fontSize: 20,flex:4,textAlign: "center",textAlign: 'center',marginTop: 15,paddingBottom:20,paddingTop: 20,paddingLeft: 20, backgroundColor:"rgb(186,255,201)"}} onPress = {() => {navigation.navigate("Attendence", {type: "2", UserInfo: UserInformation})}}>
          <Text>Report Attendence
          <Feather
                    style={{ paddingRight: 10 }}
                    name="arrow-right"
                    size={12}
                    color="black"
                  />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{fontSize: 20,flex:4,textAlign: "center",textAlign: 'center',marginTop: 15,paddingBottom:20,paddingTop: 20,paddingLeft: 20, backgroundColor:"rgb(186,225,255)"}} onPress = {() => {navigation.navigate("articles")}}>
            <Text>Read the School Newspaper
            <Feather
                    style={{ paddingRight: 10 }}
                    name="arrow-right"
                    size={12}
                    color="black"
                  />
            </Text>
          </TouchableOpacity>
        <TouchableOpacity style={{fontSize: 20,flex:4,textAlign: "center",textAlign: 'center',marginTop: 15,paddingBottom:20,paddingTop: 20,paddingLeft: 20, backgroundColor:"rgb(224,215,255)"}} onPress = {() => {navigation.navigate("socialize", {type: "2", UserInfo: UserInformation})}}>
          <Text>The Nest
          <Feather
                    style={{ paddingRight: 10 }}
                    name="arrow-right"
                    size={12}
                    color="black"
                  />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{fontSize: 20,flex:4,textAlign: "center",textAlign: 'center',marginTop: 15,paddingBottom:20,paddingTop: 20,paddingLeft: 20, backgroundColor:"rgb(232,232,232)"}} onPress = {() => {navigation.navigate("reportBug", {type: "2", UserInfo: UserInformation})}}>
          <Text>Report Bug
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
  }
}

const HomeScreen = ({navigation, title, UserInfo}) => {
  const type = navigation.getParam("title");
  const UserInformation = navigation.getParam("UserInfo")
  return (
  <View styles={{flexDirection:"column", flex:1}}>
    <ScrollView styles={styles.scrollingBackground}>
      <UserType navigation={navigation} type = {type} UserInformation = {UserInformation}/>
    </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  scrollingBackground: {
		backgroundColor: "pink",
		marginHorizontal: 10,
		marginBottom: 20,
	},
  transitionButton : {
    fontSize: 20,
    backgroundColor: "rgb(228, 228, 228)",
    flex:4,
    textAlign: "center",
    textAlign: 'center',
    marginTop: 15,
    paddingBottom:20,
    paddingTop: 20,
    paddingLeft: 20
},
});

export default withNavigation(HomeScreen); // This is a function. The HomeScreen is a function that is called in this statement.