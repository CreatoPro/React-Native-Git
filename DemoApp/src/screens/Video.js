//import { StyleSheet, View } from 'react-native';
//import { StatusBar } from 'expo-status-bar';
//import React from 'react';
//import YoutubePlayer from 'react-native-youtube-iframe';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Video, AVPlaybackStatus } from "expo-av";
import { Icon } from "react-native-elements";

import { useNavigation } from "@react-navigation/native";

const Vd = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const navigation = useNavigation();
  const Back = () => {
    navigation.navigate("Home");
  };
  return (
    <>
      <View>
        <View style={{ marginTop: 10 }}>
          <View style={styles.head}>
            <View style={styles.icon}>
              <View style={styles.cont}>
                <TouchableOpacity onPress={Back}>
                  <Icon
                    name="arrow-back"
                    type="ionicon"
                    color="#000"
                    size={35}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.heading}>Video</Text>
          </View>
        </View>
        <View>
          <View style={styles.player}>
            <View style={styles.container}>
              <Video
                ref={video}
                style={styles.video}
                source={{
                  uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={setStatus}
              />
              <View style={styles.button}>
                <Button
                  title={status.isPlaying ? "Pause" : "Play"}
                  onPress={() =>
                    status.isPlaying
                      ? video.current.pauseAsync()
                      : video.current.playAsync()
                  }
                />
              </View>
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const deviceHeight = Math.round(Dimensions.get("window").height);
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  video: {
    alignSelf: "center",
    width: "90%",
    height: 300,
  },
  button: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  head: {
    flexDirection: "row",
    paddingHorizontal: 20,
    width: deviceWidth,
    height: 60,
    backgroundColor: "#E49B0F",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  heading: {
    fontSize: 30,
    fontWeight: "500",
    marginHorizontal: 20,
    marginBottom: 4,
    alignSelf: "center",
  },
  icon: {
    position: "relative",
    left: 5,
  },
  cont: {
    flexDirection: "row",
  },
});

export { Vd };
