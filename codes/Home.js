import React, { Component, useState } from 'react';
import { Text, SafeAreaView, StatusBar ,View, Button, TextInput, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {Video} from 'expo-av';

let firstVideo = '';
let secondVideo = '';
const Home = ({navigation}) => {
  const video = React.useRef(null);
  const [status, useStatus] =  useState('');
  const [name, setName] = useState('');
  const submit = () => {
   const uri = "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";
   firstVideo = uri;
   navigation.navigate('Profile',{
    myName: name,
    myFirstVideo: firstVideo
   })
  }
 const videoSubmit = () => {
  const uri1 = "http://techslides.com/demos/sample-videos/small.mp4";
  secondVideo = uri1;
  navigation.navigate('VideoPlayer',{
    myName: name,
    mySecondVideo: secondVideo
   })
 }
  return (
<View>
  <Text style={{marginVertical:10,padding:20,fontSize:20}}>Hey Allen Institute</Text>
  <TextInput style={{marginHorizontal:10,padding:10,borderWidth:2,width:width-20}}placeholder="enter name"
  value={name} onChangeText={(text) => setName(text)}
  />
 <TouchableOpacity style={style.submitButton} onPress={()=> submit()}>
  <Text style={{textAlign:'center'}}>Submit</Text>
 </TouchableOpacity>
<View style={{marginTop:15}}>
<TouchableOpacity style={style.submitButton} onPress={()=> videoSubmit()}>
  <Text style={{textAlign:'center'}}>Go to Video Screen</Text>
 </TouchableOpacity>
</View>
</View>
  );
};
const {width} = Dimensions.get('screen');
const style = StyleSheet.create({
 submitButton:{
  width:width - 20,
  backgroundColor: 'grey',
  padding:10,
  marginTop:20,
  borderRadius:35,
  marginHorizontal:10
 },
 video:{
  flex:1,
  alignSelf:'stretch'
 }
});
export default Home;


