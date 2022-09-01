import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native-webview';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <WebView source={{
        uri:'https://11e456025f52.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.684168337650.channel.nr6ifPrGtBaZ.m3u8'
      }}
      onError={(event) => alert(`Webview error ${event.nativeEvent.description}`)}
      style={{height:"100%", width:350, marginTop:50}}  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
