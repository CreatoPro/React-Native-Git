import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from '../screens/SignInScreen/SigninScreen';
import SignupScreen from '../screens/SignUpScreen/SignupScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import Explore from '../screens/HomeScreen';
import VideoPlayer from '../screens/VideoPlayerScreen';

const Stack = createNativeStackNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='SignIn' component={SigninScreen} />
                <Stack.Screen name='SignUp' component={SignupScreen} />
                <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
                <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
                <Stack.Screen name='NewPassword' component={NewPasswordScreen} />
                <Stack.Screen name='Home' component={Explore} />
                <Stack.Screen name='VideoPlayer' component={VideoPlayer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;