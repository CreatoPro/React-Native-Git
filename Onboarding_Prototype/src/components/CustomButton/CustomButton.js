import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';



const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor, image}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
      <Image
      style={[
        styles.image,
        styles[`image_${type}`],
      ]}
      >
        {image}
      </Image>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },

  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },

  container_NEW: {
    borderColor: '#e7e2e2',
    backgroundColor: '#e7e2e2',
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_SECONDARY: {
    color: '#3B71F3',
  },

  text_TERTIARY: {
    color: 'gray',
  },
  
  text_TERTIARY: {
    color: 'black',
  },

  text_NEW: {
    color: 'black',
  },  
});




export default CustomButton;
