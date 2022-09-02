// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import { WebView } from "react-native-webview";
// import KSYVideo from "react-native-ksyvideo";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Text>Open up App.js to start working on your app!</Text> */}
//       {/* <WebView source={{
//         uri:'https://11e456025f52.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.684168337650.channel.nr6ifPrGtBaZ.m3u8'
//       }}
//       onError={(event) => alert(`Webview error ${event.nativeEvent.description}`)}
//       style={{height:"100%", width:350, marginTop:50}}  />
//       <StatusBar style="auto" /> */}

//       <KSYVideo
//         source={{
//           uri: "rtmp://184.72.239.149/vod/mp4:bigbuckbunny_1500.mp4",
//         }} // Can be a URL or a local file.
//         ref={(ref) => {
//           this.player = ref;
//         }} // Store reference
//         volume={1.0}
//         muted={false}
//         paused={this.state.paused} // Pauses playback entirely.
//         resizeMode="cover" // Fill the whole screen at aspect ratio.*
//         repeat={true} // Repeat forever.
//         playInBackground={true} // Audio continues to play when app entering background.
//         progressUpdateInterval={250.0}
//         style={{ height: 400 }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, Button } from "react-native";
import KSYVideo from "react-native-ksyvideo";
class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false
    };
  }
  render() {   
    return (
      <View>
        <KSYVideo
          source={{
            uri: "rtmp://184.72.239.149/vod/mp4:bigbuckbunny_1500.mp4"
          }} // Can be a URL or a local file.
          ref={ref => {
            this.player = ref;
          }} // Store reference
          volume={1.0}
          muted={false}
          paused={this.state.paused} // Pauses playback entirely.
          resizeMode="cover" // Fill the whole screen at aspect ratio.*
          repeat={true} // Repeat forever.
          playInBackground={true} // Audio continues to play when app entering background.
          progressUpdateInterval={250.0}
          style={{ height: 400 }}
        />
        {/*<Text>Video streaming....</Text>*/}
        <View style={styles.buttonStyle}>
          <Button
            title={"Pause"}
            style={styles.buttonStyle}
            onPress={() => {
              this.setState({ paused: true });
            }}
            color="#841584"
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            title={"Play"}
            onPress={() => {
              this.setState({ paused: false });
            }}
            color="green"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  buttonStyle: {
    marginHorizontal: 20,
    marginTop: 5
  }
});
export default VideoPlayer;