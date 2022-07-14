import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";
import React, {Component, createRef} from 'react';
import { Video } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class VideoPlayer extends Component {

  constructor() {
    super();

    this.state = {
      status: false,
      videoUrl: ''
    }

  }


  componentDidMount() {
    console.log('componentDidMount called in Video Player');
   // this.getData();
    
  }

  getData = async () => {
    console.log('get Data on VideoPlayer page called');
    try {
      const value = await AsyncStorage.getItem('videoUrl')
      if(value !== null) {
        console.log('this is stored val in localSTorage :', value);
        this.state.videoUrl = value;
        // value previously stored
      }
    } catch(e) {
      console.log('error in ctcg', e);
      // error reading value
    }
  }
  render() {
    
    const video = createRef();
    const videoUrl = '';

    const checkIfFileAvailable = async() => {

      console.log('function gets called', this.state.videoUrl);
      video.current.playAsync();

      // if(this.state.status) {
      //   this.state.status = false;
      //   video.current.pauseAsync();
      // } else {
      //   this.state.status = true;
      //   video.current.playAsync();
      // }
    }

  return (

    
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: this.state.videoUrl,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={()=> this.state.status= !this.state.status}
      />
      <View style={styles.newView}>
        <Button
          title={'Play'}
          onPress={()=> checkIfFileAvailable()}
        />
      </View>
    </View>
  );
};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: 300
  },
  buttons: {
    margin: 16,
  },
  newView: {
    marginTop: 10
  }
});

//export default VideoPlayer;
