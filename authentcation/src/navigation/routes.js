import { View, Text } from 'react-native';
import React, {Component} from 'react';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from '../screens/SignInScreen/SigninScreen';
import SignupScreen from '../screens/SignUpScreen/SignupScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import Explore from '../screens/HomeScreen';
import VideoPlayer from '../screens/VideoPlayerScreen';
import { Router, Stack, Scene } from 'react-native-router-flux';


export default class Routes extends Component<{}> {

render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={false}>
          <Scene key="SignIn" component={SigninScreen} title="SigninScreen" />
          <Scene key="SignUp" component={Home} title="SignupScreen" />
          <Scene key="ConfirmEmail" component={Profile} title="ConfirmEmailScreen" />
          <Scene key="ForgotPassword" component={Students} title="ForgotPasswordScreen" />
          <Scene key="NewPassword" component={TarForm} title="NewPasswordScreen" />
          <Scene key="Home" component={WerForm} title="Explore" />
          <Scene key="VideoPlayer" component={WerForm2} title="VideoPlayer" />
        </Stack>
      </Router>
    )
  }
}