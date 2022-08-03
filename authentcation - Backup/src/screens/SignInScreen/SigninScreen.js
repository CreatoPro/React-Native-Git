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
      <Image source={Logo} style={[styles.logo, { height: height * 0.6 }]} resizeMode='contain'
        placeholder="Username"
        value={username}
        setValue={setUsername} />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true} />
      <CustomButton
        text="Sign In"
        onPress={onSignInPressed}
      />
      <CustomButton
        text="Forgot Password?"
        onPress={onForgotPasswordPressed}
        type='TERTIARY'
      />
      <SocialSignInButtons />
      <CustomButton
        text="Don't have an account? Create one"
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
  logo: {
    width: '108%',
    maxWidth: 700,
    maxHeight: 220,
    borderRadius: 15,
    marginBottom:40,
  },
})

export default SigninScreen;
