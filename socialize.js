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
    Share,
} from "react-native";
import { withNavigation } from "react-navigation";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { Feather } from "@expo/vector-icons";
import Tweet from "../components/Tweet";

  //Async methods pulled from https://blog.jscrambler.com/how-to-use-react-native-asyncstorage
  const socialize = ({navigation, type, UserInfo}) => {
    const UserType = navigation.getParam("type");
    const UserInformation = navigation.getParam("UserInfo")
    if (UserType == 0) {
      const [object, setObject] = useState(usersAndMessages);
      const [message, setMessage] = useState("");
        
      const usersAndMessages = [
        "A==First Message",
        "B==Second Message",
        "C==https://upload.wikimedia.org/wikipedia/commons/b/b3/Nature_.jpg"
      ]

      const saveMessage = async () => {
        try {
          const jsonValue = JSON.stringify(object)
          await AsyncStorage.setItem("socials", jsonValue)
        }catch (error) {
          alert("Error in saving")
        }
      };
      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem("socials")
          setObject(arr => [...JSON.parse(jsonValue)])
          return JSON.parse(jsonValue);
          
        }catch (error) {
          alert("Error in retrieving")
        }
      };
      const deleteData = () => {
        try {
          const jsonValue = JSON.stringify(usersAndMessages)
          AsyncStorage.setItem("socials", jsonValue);
          setObject(usersAndMessages)
        } catch (error) {
          alert("Error in deleting")
        }
      };
    
      React.useEffect(() => {
        getData();
      }, []);
    
      const onShare = async () => {
          try {
            const result = await Share.share({
              message:message,
            });
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error) {
            Alert.alert(error.message);
          }
        };

      return (
        <View>
          <Text> </Text>
          <Text style={{textAlign:"center", fontSize: 30}}>Welcome to{""}
            <Text style={{fontStyle: 'italic', fontWeight: 'bold', color:"rgb(255,175,0)"}}>{" "}The Nest</Text>
          </Text>
          <Text> </Text>
          
           <Text style={{fontSize: 20}}>{" "}Make a post: </Text>
          <Text>{" "}Posting as: {UserInformation.User.split(".")[0]}</Text>
          <View style={{backgroundColor:"rgb(234,234,234)"}}>
            <TextInput  style={styles.input} placeholder="input name" onChangeText={setMessage} onEndEditing={(theNote) => {setObject(arr => [...object, UserInformation.User.split(".")[0] + "==" + message])}}/>
          </View>
          <Text></Text>
          <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={{flex:1, textAlign:"center", justifyContent:"center", alignItems:"center"}} onPress={saveMessage}>
              <Text style={{fontSize:25, fontWeight: 'bold', color:"rgb(255,175,0)"}}>
              <Feather
										style={{ paddingRight: 10, color:"rgb(255,175,0)", fontSize:20, flex: 1}}
										name="send"
										size={12}
										color="black"
									/>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1, textAlign:"center", justifyContent:"center", alignItems:"center"}} onPress={onShare}>
              <Text style={{fontSize:25, fontWeight: 'bold', color:"rgb(0,85,255)"}}>
              <Feather
										style={{ paddingRight: 10, color:"rgb(0,85,255)", fontSize:20, flex: 1}}
										name="upload"
										size={12}
										color="black"
									/>
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={deleteData}>
            <Text style={{color:"rgb(244,244,244)"}}>Delete Data?</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 15}}>{" "}Message that was just sent: {message}</Text>
          <Text></Text>
          <Text style={{fontWeight: 'bold', textAlign:"center", fontSize:20}}>{" "}Feed</Text>
          <Tweet navigation={navigation} message={object} type={UserType}></Tweet>
    
        </View>
      );
    
  } else if (UserType == 1) {
    const [object, setObject] = useState(usersAndMessages);
      const [message, setMessage] = useState("");
        
      const usersAndMessages = [
        "A==First Message",
        "B==Second Message",
        "C==https://upload.wikimedia.org/wikipedia/commons/b/b3/Nature_.jpg"
      ]

      const saveMessage = async () => {
        try {
          const jsonValue = JSON.stringify(object)
          await AsyncStorage.setItem("socials", jsonValue)
        }catch (error) {
          alert("Error in saving")
        }
      };
      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem("socials")
          setObject(arr => [...JSON.parse(jsonValue)])
          return JSON.parse(jsonValue);
          
        }catch (error) {
          alert("Error in retrieving")
        }
      };
      const deleteData = () => {
        try {
          const jsonValue = JSON.stringify(usersAndMessages)
          AsyncStorage.setItem("socials", jsonValue);
          setObject(usersAndMessages)
        } catch (error) {
          alert("Error in deleting")
        }
      };
    
      React.useEffect(() => {
        getData();
      }, []);
    
      const onShare = async () => {
          try {
            const result = await Share.share({
              message:message,
            });
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error) {
            Alert.alert(error.message);
          }
        };

      return (
        <View>
          <Text> </Text>
          <Text style={{textAlign:"center", fontSize: 30}}>Welcome to{""}
            <Text style={{fontStyle: 'italic', fontWeight: 'bold', color:"rgb(255,175,0)"}}>{" "}The Nest</Text>
          </Text>
          <Text> </Text>
          
           <Text style={{fontSize: 20}}>{" "}Make a post: </Text>
          <Text>{" "}Posting as: {UserInformation.Teacher.split(".")[0]}</Text>
          <View style={{backgroundColor:"rgb(234,234,234)"}}>
            <TextInput  style={styles.input} placeholder="input name" onChangeText={setMessage} onEndEditing={(theNote) => {setObject(arr => [...object, UserInformation.Teacher.split(".")[0] + "==" + message])}}/>
          </View>
          <Text></Text>
          <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={{flex:1, textAlign:"center", justifyContent:"center", alignItems:"center"}} onPress={saveMessage}>
              <Text style={{fontSize:25, fontWeight: 'bold', color:"rgb(255,175,0)"}}>
              <Feather
										style={{ paddingRight: 10, color:"rgb(255,175,0)", fontSize:20, flex: 1}}
										name="send"
										size={12}
										color="black"
									/>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1, textAlign:"center", justifyContent:"center", alignItems:"center"}} onPress={onShare}>
              <Text style={{fontSize:25, fontWeight: 'bold', color:"rgb(0,85,255)"}}>
              <Feather
										style={{ paddingRight: 10, color:"rgb(0,85,255)", fontSize:20, flex: 1}}
										name="upload"
										size={12}
										color="black"
									/>
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={deleteData}>
            <Text style={{color:"rgb(244,244,244)"}}>Delete Data?</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 15}}>{" "}Message that was just sent: {message}</Text>
          <Text></Text>
          <Text style={{fontWeight: 'bold', textAlign:"center", fontSize:20}}>{" "}Feed</Text>
          <Tweet navigation={navigation} message={object} type={UserType}></Tweet>
    
        </View>
      );
  } else if (UserType == 2) {
    const [object, setObject] = useState(usersAndMessages);
      const [message, setMessage] = useState("");
        
      const usersAndMessages = [
        "A==First Message",
        "B==Second Message",
        "C==https://upload.wikimedia.org/wikipedia/commons/b/b3/Nature_.jpg"
      ]

      const saveMessage = async () => {
        try {
          const jsonValue = JSON.stringify(object)
          await AsyncStorage.setItem("socials", jsonValue)
        }catch (error) {
          alert("Error in saving")
        }
      };
      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem("socials")
          setObject(arr => [...JSON.parse(jsonValue)])
          return JSON.parse(jsonValue);
          
        }catch (error) {
          alert("Error in retrieving")
        }
      };
      const deleteData = () => {
        try {
          const jsonValue = JSON.stringify(usersAndMessages)
          AsyncStorage.setItem("socials", jsonValue);
          setObject(usersAndMessages)
        } catch (error) {
          alert("Error in deleting")
        }
      };
    
      React.useEffect(() => {
        getData();
      }, []);
    
      const onShare = async () => {
          try {
            const result = await Share.share({
              message:message,
            });
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error) {
            Alert.alert(error.message);
          }
        };

      return (
        <View>
          <Text> </Text>
          <Text style={{textAlign:"center", fontSize: 30}}>Welcome to{""}
            <Text style={{fontStyle: 'italic', fontWeight: 'bold', color:"rgb(255,175,0)"}}>{" "}The Nest</Text>
          </Text>
            <TouchableOpacity onPress={deleteData}>
            <Text style={{color:"rgb(244,244,244)"}}>Delete Data?</Text>
          </TouchableOpacity>
          <Text></Text>
          <Text style={{fontWeight: 'bold', textAlign:"center", fontSize:20}}>{" "}Feed</Text>
          <Tweet navigation={navigation} message={object} type={UserType}></Tweet>
    
        </View>
      );
  }
};
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 30,
    },
    input: {
      fontSize: 20,
      textAlign: 'center',
      height: 60
  },
  });
  
  export default withNavigation(socialize);