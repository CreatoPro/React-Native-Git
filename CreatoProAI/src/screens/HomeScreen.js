import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Features from '../components/features';
import {dummyMessages} from '../constants';
// import Voice from '@react-native-voice/voice';

export default function HomeScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const clear = () => {
    setMessages([]);
  };
  const stopSpeaking = () => {
    setSpeaking(false);
  };
  const speechStartHandler = e => {
    console.log('speech start handler');
  };
  const speechEndHandler = e => {
    setRecording(false);
    console.log('speech end handler');
  };
  const speechResultsHandler = e => {
    console.log('voice event', e);
  };

  const speechErrorHandler = e => {
    console.log('speech error handler', e);
  };

  const startRecording = async () => {
    setRecording(true);

    try {
      // await Voice.start('en-GB');
    } catch (error) {
      console.log('error:', error);
    }
  };

  const stopRecording = async () => {
    try {
      // await Voice.stop();
      setRecording(false);
      // fetch response
    } catch (error) {
      console.log('error:', error);
    }
  };

  // useEffect(() => {
  //   //voice handler events
  //   Voice.onSpeechStart = speechStartHandler;
  //   Voice.onSpeechEnd = speechEndHandler;
  //   Voice.onSpeechResults = speechResultsHandler;
  //   Voice.onSpeechError = speechErrorHandler;

  //   return () => {
  //     // destroy the voice instance
  //     Voice.destroy().then(Voice.removeAllListeners);
  //   };
  // });

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5">
        {/* bot icon */}
        <View className="flex-row justify-center">
          <Image
            source={require('../../assets/images/bot.png')}
            style={{height: hp(15), width: hp(15)}}
          />
        </View>
        {/* featurs || meassages */}
        {messages.length > 0 ? (
          <View className="space-y-2 flex-1">
            <Text
              style={{fontSize: wp(5)}}
              className="text-gray-700 font-semibold ml-1">
              Assitant
            </Text>
            <View
              style={{height: hp(50)}}
              className="bg-neutral-200 rounded-3xl p-4">
              <ScrollView
                bounces={false}
                className=" space-y-4"
                showsVerticalScrollIndicator={false}>
                {messages.map((message, index) => {
                  if (message.role === 'assistant') {
                    if (message.content.includes('https')) {
                      //its an image
                      return (
                        <View key={index} className="flex-row justify-start">
                          <View className="p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none">
                            <Image
                              source={{uri: message.content}}
                              className="rounded-2xl"
                              resizeMode="contain"
                              style={{height: wp(55), width: wp(55)}}
                            />
                          </View>
                        </View>
                      );
                    } else {
                      //text response
                      return (
                        <View
                          key={index}
                          style={{width: wp(70)}}
                          className="rounded-xl p-2 rounded-tl-none bg-emerald-100">
                          <Text>{message.content}</Text>
                        </View>
                      );
                    }
                  } else {
                    return (
                      <View key={index} className="flex-row justify-end">
                        <View
                          style={{width: wp(70)}}
                          className="bg-white rounded-xl p-2 rounded-tr-none">
                          <Text>{message.content}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}
        {/* recording, clear and stop buttons  */}
        <View className="flex justify-center items-center">
          {recording ? (
            <TouchableOpacity onPress={stopRecording}>
              {/* recording stop button  */}
              <Image
                className="rounded-full"
                source={require('../../assets/images/voiceLoading.gif')}
                style={{width: hp(10), height: hp(10)}}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={startRecording}>
              {/* recording start button  */}
              <Image
                className="rounded-full"
                source={require('../../assets/images/recordingIcon.png')}
                style={{width: hp(10), height: hp(10)}}
              />
            </TouchableOpacity>
          )}
          {messages.length > 0 && (
            <TouchableOpacity
              onPress={clear}
              className="bg-neutral-400 rounded-3xl p-2 absolute right-10">
              <Text className="text-white font-semibold">Clear</Text>
            </TouchableOpacity>
          )}
          {speaking && (
            <TouchableOpacity
              onPress={stopSpeaking}
              className="bg-red-400 rounded-3xl p-2 absolute left-10">
              <Text className="text-white font-semibold">Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}
