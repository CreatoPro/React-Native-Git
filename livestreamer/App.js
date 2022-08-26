import React from "react";
import { Dimensions, View } from "react-native";
import BroadcastView from "react-native-broadcast";
import Video from 'react-native-video';
import IVSPlayer from 'amazon-ivs-react-native-player';



// const BroadcastScreen = () => {
//   const cameraViewRef = React.useRef(null);
//   // const streamKey = "InputLive";
//   // const url = `rtmp://13.127.246.52:1935/AllenMumbai/${streamKey}`;
//   const URL =
// 'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8';
//   return (
//     <View style={{ flex: 1, height:100, width:100 }}>
//       <BroadcastView
//         publish="rtmp://13.127.246.52:1935/AllenMumbai/InputLive"
//         cameraPosition="front"
//       />
//     </View>
//   );
// };

// export default BroadcastScreen;


const BroadcastScreen = () => {
  const cameraViewRef = React.useRef(null);
  // const streamKey = "InputLive";
  // const url = `rtmp://13.127.246.52:1935/AllenMumbai/${streamKey}`;
  const URL ='https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8';
  return (
    <View style={{ flex: 1, height:100, width:100 }}>
      <IVSPlayer streamUrl={URL} />;
    </View>
  );
};

export default BroadcastScreen;
