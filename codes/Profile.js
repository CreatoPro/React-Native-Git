import React, { Component, useState } from 'react';
import { Text, SafeAreaView, StatusBar, View, Dimensions, StyleSheet, Button } from 'react-native';
import { Video } from 'expo-av';

const Profile = ({ route, navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = useState({});

   console.log('profile page data check',route.params);
 
  return (
    <View style={{ marginTop: 10, justifyContent: 'center' }}>
      <Text> Profile Page </Text>
      <Text>Details:  {route.params.myName}</Text>
      <View style={{ marginTop: 50 }}>
        <Video
          ref={video}
          style={style.video}
           // source={{ uri:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
            source= {{uri:route.params.myFirstVideo}}
          useNativeControls
          resizeMode='contain'
          isLooping
          onPlaybackStatusUpdate={setStatus}
        />
        </View>
        <View style={style.newView}>
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() => video.current.playFromPositionAsync(5000)
              //checkIfFileAvailable()
              // status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          />
        </View>     
    </View>


  );

}
const { width } = Dimensions.get('screen');
const style = StyleSheet.create({
  submitButton: {
    width: width - 20,
    backgroundColor: 'red',
    padding: 10,
    marginTop: 20,
    borderRadius: 35,
    marginHorizontal: 10
  },
  video: {
    alignSelf:'center',
    width: '100%',
    height:300
  },
  newView: {

    marginTop: 10
  }
});
export default Profile;