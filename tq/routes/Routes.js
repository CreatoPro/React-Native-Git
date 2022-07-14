import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Home from '../screens/home';
import Login from '../screens/login';
import Profile from '../screens/profile';
import Students from '../screens/students';
import TarForm from '../screens/tarForm';
import WerForm from '../screens/werForm';
import WerForm2 from '../screens/werForm2';
import WerForm3 from '../screens/werForm3';
import SaForm from '../screens/saForm';
import SaForm2 from '../screens/saForm2';
import SaForm3 from '../screens/saForm3';
import AjcForm from '../screens/ajcForm';
import AjcForm2 from '../screens/ajcForm2';
import AjcForm3 from '../screens/ajcForm3';

export default class Routes extends Component<{}> {

  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={false}>
          <Scene key="Login" component={Login} title="Login" initial={true} />
          <Scene key="Home" component={Home} title="Home" />
          <Scene key="Profile" component={Profile} title="Profile" />
          <Scene key="Students" component={Students} title="Students" />
          <Scene key="TarForm" component={TarForm} title="TAR Form" />
          <Scene key="WerForm" component={WerForm} title="WER Form" />
          <Scene key="WerForm2" component={WerForm2} title="WER Form 2" />
          <Scene key="WerForm3" component={WerForm3} title="WER Form 3" />
          <Scene key="SaForm" component={SaForm} title="SA Form" />
          <Scene key="SaForm2" component={SaForm2} title="SA Form2" />
          <Scene key="SaForm3" component={SaForm3} title="SA Form3" />
          <Scene key="AjcForm" component={AjcForm} title="AjcForm" />
          <Scene key="AjcForm2" component={AjcForm2} title="AjcForm2" />
          <Scene key="AjcForm3" component={AjcForm3} title="AjcForm3" />
        </Stack>
      </Router>
    )
  }
}