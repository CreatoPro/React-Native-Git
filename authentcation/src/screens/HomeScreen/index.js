import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Category from "../../components/Explore/Category";
import CustomCourses from "../../components/CustomCourses";
import { Row, Column as Col, Grid } from "react-native-responsive-grid";
import { useNavigation, StackRouter } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableHighlight } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("window");


class Explore extends Component {
  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
    
  }
  

  render() 
  {
  //  const navigation = useNavigation();
    const onVideoPlayerPressed = async (val) => {
        console.warn("Video", val);
        try { 
          this.props.navigation('VideoPlayer');
         // Navigation('VideoPlayer');
            await AsyncStorage.setItem('videoUrl', val);
          //  Navigation.navigate('VideoPlayer')

        } catch (e) {
            console.log('error in catch block', e);
        }
    } 
    
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: this.startHeaderHeight,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 0,
                backgroundColor: "purple",
                marginHorizontal: 0,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "white",
                shadowOpacity: 0.2,
                elevation: 10,
                marginTop: Platform.OS == "android" ? 30 : null,
              }}
            >
              <View style={styles.textStyle}>
                <Row>
                  <Col style={{ width: "40%" }}>
                    <View style={styles.avatarContainer}>
                      <Image
                        style={styles.avatar}
                        source={require("../../../assets/images/images.jpg")}
                      />
                    </View>
                  </Col>
                  <Text style={styles.textStyle}>Allen Digital</Text>
                </Row>
              </View>
            </View>
          </View>
          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20,
                }}
              >
                Your Subjects
              </Text>

              <View
                style={{
                  height: 130,
                  marginTop: 20,
                  borderRadius: 40,
                  marginBottom: 20,
                }}
              >
                <TouchableHighlight onPress={()=>onVideoPlayerPressed('hello')}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    imageUri={require("../../../assets/physics.jpg")}
                    name="Physics"
                  />
                  <Category
                    imageUri={require("../../../assets/maths.jpg")}
                    name="Maths"
                  />
                  <Category
                    imageUri={require("../../../assets/chemistry.png")}
                    name="Chemistry"
                  />
                  <Category
                    imageUri={require("../../../assets/biology.jpg")}
                    name="Biology"
                  />
                </ScrollView>
                </TouchableHighlight>
              </View>
              <View
                style={{
                  marginTop: 10,
                  paddingHorizontal: 20,
                  backgroundColor: "white",
                }}
              >
                <Text style={{ fontSize: 24, fontWeight: "700" }}>
                  New/Recomended Courses
                </Text>
              </View>
            </View>
          </ScrollView>
          <ScrollView style={{ height: "50%" }}>
            <CustomCourses />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    flex: 1,
    flexDirection: "column",
    fontSize: 20,
    padding: 10,
    backgroundColor: "purple",
    margin: 10,
    color: "white",
    borderRadius: 15,
    borderColor: "red",
    borderWidth: 0,
    textAlign: "center",
    textAlignVertical: "center",
  },
  listStyle: {
    textAlign: "right",
    margin: 0,
    padding: 0,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 13,
  },
  avatarContainer: {
    flex: 1,
    flexDirection: "column",
    width: "50%",
    backgroundColor: "white",
    borderRadius: 10,
    height: 90,
    width: 90,
    justifyContent: "space-evenly",
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 10,
    justifyContent: "space-evenly",
    borderColor: "yellow",
    borderWidth: 0,
  },
});
