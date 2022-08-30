// import React from "react";
// import { Dimensions, View } from "react-native";
// import BroadcastView from "react-native-broadcast";
// import Video from 'react-native-video';
// import IVSPlayer from 'amazon-ivs-react-native-player';



// // const BroadcastScreen = () => {
// //   const cameraViewRef = React.useRef(null);
// //   // const streamKey = "InputLive";
// //   // const url = `rtmp://13.127.246.52:1935/AllenMumbai/${streamKey}`;
// //   const URL =
// // 'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8';
// //   return (
// //     <View style={{ flex: 1, height:100, width:100 }}>
// //       <BroadcastView
// //         publish="rtmp://13.127.246.52:1935/AllenMumbai/InputLive"
// //         cameraPosition="front"
// //       />
// //     </View>
// //   );
// // };

// // export default BroadcastScreen;


// const BroadcastScreen = () => {
//   const cameraViewRef = React.useRef(null);
//   // const streamKey = "InputLive";
//   // const url = `rtmp://13.127.246.52:1935/AllenMumbai/${streamKey}`;
//   const URL ='https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8';
//   return (
//     <View style={{ flex: 1, height:100, width:100 }}>
//       <IVSPlayer streamUrl={URL} />;
//     </View>
//   );
// };

// export default BroadcastScreen;

import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import IVSPlayer from 'amazon-ivs-react-native-player';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const URL = 'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8';
  return (
    <SafeAreaView style={styles.container}>
      {/* <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://11e456025f52.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.684168337650.channel.nr6ifPrGtBaZ.m3u8',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View> */}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff', 

  },
  video: {
    height:'50%',
    width:'100%',
    alignContent:"center",
    justifyContent:"center"
  },
  buttons:{
    margin:"10%"
  }

});