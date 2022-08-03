import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Logo from "../../../assets/images/images.jpg";
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SigninScreen = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn("Sign in");
    navigation.navigate('Home')

  }
  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password");
    navigation.navigate('ForgotPassword')

  }
  const onSignUpPressed = () => {
    console.warn('Create Account');
    navigation.navigate('SignUp')
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
    <Image source={Logo} style={styles.logo} resizeMode="contain"></Image>
      <Text style={{
        fontSize: 30,
        color:"black",
        alignContent: "center",
        margin: 40,
        textAlign: "center",
        marginTop: -30
      }}>Welcome back! 
      {"\n"}Sign In to continue! </Text>
      {/* <CustomButton
        text="Login with Google"
        onPress={onSignInPressed}
        type='NEW'
      />
      <CustomButton
        text="Login with Facebook"
        onPress={onSignInPressed}
        type='NEW'
      /> */}
      <SocialSignInButtons></SocialSignInButtons>
      <CustomButton
        text="or"
        onPress={onForgotPasswordPressed}
        type='TERTIARY'
      />
      <CustomButton
        text="Sign Up using Email"
        onPress={onSignInPressed}
        type='NEW'
      />
      <Text
      style={{
        fontSize: 12,
        marginTop: 10,

      }}
      >By Signing Up you agree to the terms and conditions</Text>
    
    <CustomButton
          text="Alreday have an account? Sign In"
          onPress={onSignUpPressed}
          type='TERTIARY'
        />
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#FFFFFF',
  },
  root1: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 700,
    maxHeight: 220,
    borderRadius: 15,
  },
})

export default SigninScreen;
