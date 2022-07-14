import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import * as React from "react";
import { Video, AVPlaybackStatus } from "expo-av";
// import ReactDOM from 'react-dom';
import * as ReactDOM from "react-dom";

import ReactHlsPlayer from "react-hls-player";

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <>
      <View>
        <View style={styles.container}>
          <Text>test app </Text>
        </View>
        <Text style={styles.heading}> Test 1</Text>
        <View style={styles.appContainer}>
          <Text style={styles.ques}>First ques.</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textinput}
              placeholder="Type your answer here."
            />
          </View>
          <Text style={styles.ques}>Second ques.</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textinput}
              placeholder="Type your answer here."
            />
            <Button style={styles.s} title="Submit" />
          </View>

          <View style={styles.player}>
            <View style={styles.cont}>
              <Video
                ref={video}
                style={styles.video}
                source={{
                  uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              />
              <View style={styles.buttons}>
                <Button
                  title={status.isPlaying ? "Pause" : "Play"}
                  onPress={() =>
                    status.isPlaying
                      ? video.current.pauseAsync()
                      : video.current.playAsync()
                  }
                />
              </View>
              <View>
                ReactDOM.render(
                <ReactHlsPlayer
                  src="https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8"
                  hlsConfig={{
                    maxLoadingDelay: 4,
                    minAutoBitrate: 0,
                    lowLatencyMode: true,
                  }}
                />
                , document.getElementById('App') );
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  player: {
    width: "50%",
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    flex: 1,
    fontSize: 30,
    fontWeight: "bold",
    padding: 5,
  },
  ques: {
    paddingVertical: 10,
    fontSize: 20,
  },
  appContainer: {
    padding: 20,
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textinput: {
    borderColor: "black",
    borderWidth: 1,
    width: "60%",
    margin: 8,
    padding: 8,
    justifyContent: "center",
  },
  s: {
    width: "20%",
    height: "20%",
    flex: 1,
    justifyContent: "center",
  },
  cont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 30,
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});