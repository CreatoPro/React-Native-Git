/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeLoading from 'react-native-awesome-loading';
import AwesomeAlert from 'react-native-awesome-alerts';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

import { Row, Column as Col, Grid } from 'react-native-responsive-grid'
import Icon from 'react-native-vector-icons/Feather';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import DropDownPicker from 'react-native-dropdown-picker';
const options = {
  includeBase64: true,
  quality:0, maxWidth: 400, maxHeight: 400,
}

const options2 = {
  includeBase64: true,
  quality:0, maxWidth: 400, maxHeight: 400,
}


export default class Profile extends Component<{}> {


  constructor() {
    // let Image_Http_URL ={ uri: 'https://thesmarter.website/tqmsonline/administrator/components/com_tqms/assets/images/profile/1613739100images.png'};

    super();
    this.state = {
      username: '',
      userId: '',
      prefix: 'Select Prefix',
      firstName: '',
      lastName: '',
      email: '',
      phoneNo: '',
      password: '123456',
      rePassword: '123456',
      avatarSource: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
      profileImage: 'https://reactnativecode',
      profileThumb: '',
      signature: 'https://reactnativecode',
      isProfilePicAvailable: false,
      isSignatureAvailable: false,
      showDummyPic: false,
      showDummySignature: false,
      fileName: 'No file chosen',
      filePath: '',
      fileData: '',
      fileUri: '',
      showLoader: false,
      globalPhoto: {},
      base64StringData: '',
      savedPassword: '',
      savedConfirmPassword: '',
      alertTitle: 'Success'
    }

  }



   myFunc = () => {
    
    launchImageLibrary(options, (response) => {
   
    if(!response.didCancel && !response.error) {
      let sources = 'data:image/jpeg;base64,' + response.base64;
       // console.log('checking returned : ', sources);
       this.setState({
         profileImage: sources,
         isProfilePicAvailable: true,
         showDummyPic: false
       });
    }
    })
  }

  uploadSignatureFunc = () => {

    launchImageLibrary(options2, (response) => {

      if(!response.didCancel && !response.error) {

      let signatures = 'data:image/jpeg;base64,' + response.base64;
        this.setState({
          isSignatureAvailable: true,
          signature: signatures,
          fileName: response.fileName
        });
      }
    })

  }

  handleInputTextChange = (newText) => {
    this.setState({ lastName: newText })
  }

  handleInputTextChangeFirstName = (newText) => {
    this.setState({ firstName: newText })
  }

  async componentDidMount() {
    const value = await AsyncStorage.getItem('trainerDetails');
    let user_details = JSON.parse(value);
    const credentialsVal = await AsyncStorage.getItem('credentials');
    let user_credentials = JSON.parse(credentialsVal);
    this.setState({
      savedPassword: user_credentials.password,
      savedConfirmPassword: user_credentials.password
    });
   
    if (value !== null) {
      if (user_details.data.content.profile.profile_image == '') {
        this.setState({
          showDummyPic: true,
          isProfilePicAvailable: false,
          profileImage: 'https://reactnativecode'
        })
      } else {
        this.setState({
          isProfilePicAvailable: true,
          profileImage: user_details.data.content.profile.profile_image,
          showDummyPic: false
        })
      }

      if (user_details.data.content.profile.signature == '') {
        this.setState({
          isSignatureAvailable: false,
          signature: 'https://reactnativecode'
        })
      } else {
        this.setState({
          isSignatureAvailable: true,
          signature: user_details.data.content.profile.signature,
        })
      }
   
     this.setState({
       username: user_details.data.content.profile.first_name +" " + user_details.data.content.profile.last_name,
       userId: user_details.data.content.profile.user_id,
        prefix: user_details.data.content.profile.prefix,
        firstName: user_details.data.content.profile.first_name,
        lastName: user_details.data.content.profile.last_name,
        email: user_details.data.content.profile.email,
        phoneNo: user_details.data.content.profile.phone,
        password: '',
        rePassword: '',
        profileThumb: user_details.data.content.profile.profile_thumb,
       // isProfilePicAvailable: true
      });

    //  alert('checking get data profile image : ' + this.state.profileImage);
    }
    else {
      alert('else');
    }
  }

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
    this.setState({
      showLoader: false
    });
  };
  handleClick = (type) => {
    if (type == 'logout') {
      Actions.Login();
    } else if (type == 'save') {

      // alert('These are data' + this.state.firstName + ' ' + this.state.lastName
      // + ' ' + this.state.email + ' ' + this.state.password + ' ' + this.state.prefix + ' ' + this.state.phoneNo)
      // // do nothing
    } else if (type == 'form') {
      Actions.Home({getClient: true});
    } else if (type == 'students') {
      Actions.Students();
    } else {
      // else condition
    }
  }

  handleClickSignature = () => {
    // navigation.navigate('Students');
  }

  saveProfile =  () => {

   
    this.setState({
      showLoader: !this.state.showLoader
        });

       
    if (this.state.firstName == '') {
      this.setState({
        showLoader: false
      });
      let message = "First name can't be blank";
      let title = 'Error!'
      this.setState({
        alertTitle: title,
        message: message
      });
      this.showAlert();
      return

    }
    if(this.state.prefix == 'Select Prefix') {
       this.setState({
        showLoader: false
      });
      let message = "Please select prefix";
      let title = 'Error!'
      this.setState({
        alertTitle: title,
        message: message
      });
      this.showAlert();
      return
    } 
    
    if (this.state.lastName == '') {
      this.setState({
        showLoader: false
      });
      let message = "Last name can't be blank";
      let title = 'Error!'
      this.setState({
        alertTitle: title,
        message: message
      });
      this.showAlert();
      return
    }
    if (this.state.password !== '') {
      
      if (this.state.rePassword == '') {
        this.setState({
          showLoader: false
        });
        let message = "Re-Password can't be blank";
        let title = 'Error!'
        this.setState({
          alertTitle: title,
          message: message
        });
        this.showAlert();
        return
      }
      // alert("Password can't be blank");
      // this.setState({
      //   showLoader: false
      // });
      // return
    }

    if (this.state.rePassword !== '') {
      if (this.state.password == '') {
        this.setState({
          showLoader: false
        });
        let message = "Password can't be blank";
        let title = 'Error!'
        this.setState({
          alertTitle: title,
          message: message
        });
        this.showAlert();
        return
      }
    }


    if (this.state.password !== this.state.rePassword) {
      this.setState({
        showLoader: false
      });
      let message = "Password and Re-Password should be same";
      let title = 'Error!'
      this.setState({
        alertTitle: title,
        message: message
      });
      this.showAlert();
      return
    }
   
    var data = new FormData();
    data.append('option', 'com_tqms');
    data.append('task', 'api.updateProfile');
    data.append('auth_key', 'cb199A13x57e46SBQI2Knovf3');
    data.append('user_id', this.state.userId);
    data.append('prefix', this.state.prefix);
    data.append('first_name', this.state.firstName);
    data.append('last_name', this.state.lastName);
    data.append('email', this.state.email);
    if (this.state.password == '') {
      data.append('password', this.state.savedPassword);
    } else {
      let credentials = {
        password: this.state.password
      };
      AsyncStorage.setItem('credentials', JSON.stringify(credentials) )
      data.append('password', this.state.password);
    }
    if (this.state.rePassword == '') {
      data.append('confirm_password', this.state.savedConfirmPassword);
    } else {
      data.append('confirm_password', this.state.rePassword);
    }
    data.append('phone', this.state.phoneNo);
    data.append('profile_image', this.state.profileImage);
    data.append('signature', this.state.signature);
  
    console.log('checking base64 going to server : ', this.state.profileImage);
    var config = {
      method: 'post',
      url: 'https://thesmarter.website/tqmsonline/index.php',
      headers: {
        'Cookie': 'a82afbe4b4a8cd65774915e75d0eac3d=1',
      },
      data: data
    };
//alert('checking data : ' + JSON.stringify(data));
    axios(config)
      .then(res => {
        if (res.data.status == "200") {
          this.setState({
            showLoader: !this.state.showLoader
          });
          let message = "Profile has been successfully saved";
          let title = 'Success!'
          this.setState({
            alertTitle: title,
            message: message
          });
          this.showAlert();
          try {
            AsyncStorage.setItem('trainerDetails', JSON.stringify(res) )
           // alert('checking res : ' + JSON.stringify(res));
         } catch (e) {
        
         }
           
        } else {
          this.setState({
            showLoader: !this.state.showLoader
          });
          alert('Something went wrong');
          let message = "Something went wrong, please try logout and relogin";
          let title = 'Error!'
          this.setState({
            alertTitle: title,
            message: message
          });
          this.showAlert();      
        }

      })
      .catch(error => {
        this.setState({
          showLoader: !this.state.showLoader
        });
        let message = "Something went wrong, please try logout and relogin";
        let title = 'Error!'
        this.setState({
          alertTitle: title,
          message: message
        });
        this.showAlert();  
      });

  }

  showAlert = () => {
    this.setState({
      showAlert: true
    });
   
  };

  render() {

    const { showAlert } = this.state;

    return (
        <SafeAreaView>

          <ScrollView >
          <AwesomeLoading indicatorId={2} size={50} isActive={this.state.showLoader} text="Please wait.." />

            <View style={styles.logoContainer}>
            
              <Image source={require('./../images/logo/TQMSlogo.png')}
                style={styles.logo} />
            </View>
            <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title={this.state.alertTitle}
            message={this.state.message}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            cancelText="No, cancel"
            confirmText="Okay"
            confirmButtonColor="#549622"
            contentContainerStyle={styles.alertContainerStyle}
            titleStyle={{ color: 'red', fontSize: 24 }}
            messageStyle={{ color: '#333333', fontSize: 20, fontWeight: 'bold' }}
            confirmButtonStyle={{ width: 100 }}
            confirmButtonTextStyle={{ alignItems: 'center', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}
            onCancelPressed={() => {
              this.hideAlert();
            }}
            onConfirmPressed={() => {
              this.hideAlert();
            }}
          />
            <View style={styles.userDetails}>
              <Row>
                <Col style={styles.userDetailsCol}>
                  <View style={{ paddingTop: '2%', paddingLeft: '5%' }}>
                    <Text style={{ fontSize: 20, fontWeight: "600", color: 'white' }}>
                      User Name : Hello, {this.state.username}
                    </Text>
                  </View>
                </Col>

                <Col style={styles.userDetailsCol1}
                >
                  <TouchableOpacity
                    style={styles.submitSave}
                    onPress={this.saveProfile}
                    underlayColor={'#809fff'}>
                    <Text style={styles.submitText}>Save
                    {/* <FontAwesomeIcon icon="check-square" /> */}
                      <FontAwesomeIcon icon="pen-square" size={20} style={{ color: 'white', marginLeft: 20 }} />
                    </Text>
                  </TouchableOpacity>
                </Col>

                <Col style={styles.userDetailsCol2}>
                  <TouchableHighlight
                    style={styles.submit}
                    onPress={() => this.handleClick('form')}
                    underlayColor={'#809fff'}>
                    <Text style={styles.submitText}>Form
                    <FontAwesomeIcon icon="check-square" size={20} style={{ color: 'white', marginLeft: 20 }} /></Text>
                  </TouchableHighlight>
                </Col>

                <Col style={styles.userDetailsCol3}>
                  <TouchableHighlight
                    style={styles.submit}
                    underlayColor={'#809fff'}>
                    <Text style={styles.submitText}>Students
                    <FontAwesomeIcon icon="users" size={20} style={{ color: 'white', marginLeft: 20 }} />
                    </Text>
                  </TouchableHighlight>
                </Col>

                <Col style={styles.userDetailsCol4}>
                  <TouchableHighlight
                    style={styles.submit}
                    onPress={() => this.handleClick('logout')}
                    underlayColor={'#809fff'}>
                    <Text style={styles.submitText}>Logout !
                    <FontAwesomeIcon icon="power-off" size={20} style={{ color: 'white', marginLeft: 20 }} />
                    </Text>
                  </TouchableHighlight>

                </Col>
              </Row>
            </View>

            <View style={styles.profileBody}>
              <Row>
                <Col style={styles.prefixCol}>
                  <View style={styles.firstName}>
                    <Text style={{ fontSize: 20 }}>Prefix<Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={styles.onlyPicker}>
                      <DropDownPicker
                        items={[
                          { label: 'Select Prefix', value: 'Select Prefix'},
                          { label: 'Mr.', value: 'Mr.'},
                          { label: 'Mrs.', value: 'Mrs.' },
                          { label: 'Miss', value: 'Miss' },

                        ]}
                        labelStyle={{ fontSize: 20 }}
                        defaultValue={this.state.prefix}
                        containerStyle={{ height: 50 }}
                        style={styles.prefixPicker}
                        itemStyle={{
                          justifyContent: 'flex-start'
                        }}
                        dropDownStyle={styles.prefixPicker}
                        onChangeItem={item => this.setState({
                          prefix: item.value
                        })}
                      />

                      <View style={{ paddingTop: 30 }}>
                        <Text style={styles.labelOfBoxed}>First Name<Text style={{ color: 'red' }}>*</Text></Text>
                        <View style={styles.textBoxesCls}>
                          <TextInput style={styles.userName}
                            onChangeText={text => this.setState({ firstName: text })}
                            value={this.state.firstName}
                            placeholder="Enter your first name"
                            placeholderTextColor="grey"
                          >
                          </TextInput>
                        </View>
                      </View>
                    </View>

                  </View>



                  <View style={{ paddingTop: 3 }}>
                    <Text style={styles.labelOfBoxed}>Email<Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={styles.textBoxesCls}>
                      <TextInput style={styles.userNameEmail}
                        value={this.state.email}
                        placeholderTextColor="black"
                        editable={false} selectTextOnFocus={false}>
                      </TextInput>
                    </View>
                  </View>

                  <View style={{ paddingTop: 30 }}>
                    <Text style={styles.labelOfBoxed}>Password</Text>
                    <View style={styles.textBoxesCls}>
                      <TextInput style={styles.userName11}
                        placeholder="Password"
                        placeholderTextColor="grey"
                        value={this.state.password}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={text => this.setState({ password: text })}>

                      </TextInput>
                    </View>
                  </View>
                </Col >

                <Col style={styles.lastNameCol}>

                  <View style={{ paddingTop: 145 }}>
                    <Text style={styles.labelOfBoxed}>Last Name<Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={styles.textBoxesCls}>
                      <TextInput style={styles.userName}
                        onChangeText={text => this.setState({ lastName: text })}
                        value={this.state.lastName}
                        placeholder="Enter your last name"
                        placeholderTextColor="grey">
                      </TextInput>
                    </View>
                  </View>
                  <View style={{ paddingTop: 30 }}>
                    <Text style={styles.labelOfBoxed}>Phone No</Text>
                    <View style={styles.textBoxesCls}>
                      <TextInput style={styles.userName}
                        onChangeText={text => this.setState({ phoneNo: text })}
                        value={this.state.phoneNo}
                        placeholder="Enter your phone number"
                        placeholderTextColor="grey">
                      </TextInput>
                    </View>
                  </View>

                  <View style={{ paddingTop: 30 }}>
                    <Text style={styles.labelOfBoxed}>Re-Password</Text>
                    <View style={styles.textBoxesCls}>
                      <TextInput style={styles.userName}
                        placeholder="Re-Password"
                        placeholderTextColor="grey"
                        value={this.state.rePassword}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={text => this.setState({ rePassword: text })}>
                      </TextInput>
                    </View>
                  </View>

                </Col>
                <Col style={{ width: '8%' }}>
                </Col>
                <Col style={styles.signatureCol}>
                  <View style={styles.logoContainerBrowse}>
                    {this.state.isProfilePicAvailable && (

                      <ImageBackground source={{ uri: this.state.profileImage }}
                        style={styles.logoBrowse}
                        imageStyle={{ borderRadius: 300}}>
                        <View style={{ top: '85%', left: 0, right: 0, bottom: 0, alignItems: 'center' }}>
                          <TouchableHighlight
                            onPress={this.myFunc}>
                            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>BROWSE</Text>
                          </TouchableHighlight>
                        </View>
                      </ImageBackground>
                    )}

                    {this.state.showDummyPic && (
                         <ImageBackground source={require('./../images/logo/avatar.png')}
                         style={styles.logoBrowse}
                         imageStyle={{ borderRadius: 300}}>
                        <View style={{ top: '90%', left: 0, right: 0, bottom: 0, alignItems: 'center' }}>
                           <TouchableHighlight
                             onPress={this.myFunc}>
                             <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Browse</Text>
                           </TouchableHighlight>
 
                         </View>
                       </ImageBackground>
                   
                    )}
                  </View>
                  <View style={styles.signatureCls}>
                    <Text style={{ fontWeight: "bold", fontSize: 24, paddingTop: '1%', paddingLeft: '12%' }}>
                      Trainer Signature
                 </Text>
                    <Row>
                      <Col style={{ width: '30%' }}>
                        <View style={styles.chooseBtnView}>
                          <TouchableHighlight
                            onPress={this.uploadSignatureFunc}
                            underlayColor={'#809fff'}
                            style={styles.chooseFileBtn}>
                            <Text >Choose File
                              </Text>
                          </TouchableHighlight>
                        </View>
                      </Col>

                      <Col style={{ width: '65%' }}>
                        <View style={styles.noFile}>
                          <Text>{this.state.fileName}</Text>
                        </View>
                      </Col>
                    </Row>
                  </View>
                  <View style={styles.logoContainerBrowse1}>
                  
                      <Image source={{ uri: this.state.signature }}
                        style={styles.logoBrowse1} />
                  </View>

                </Col>
              </Row>
             


            </View>
           
          </ScrollView>

        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 50
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },

  labelOfBoxed: {
    fontSize: 20
  },


  noFile: {
    width: '100%',
    paddingTop: 30
  },

  chooseBtnView: {
    width: 100,
    paddingTop: 25,

  },

  chooseFileBtn: {

    height: 30,
    width: '90%',
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: 5,
    backgroundColor: '#F0F0F0',
    borderColor: 'black',
    borderWidth: 1
  },

  choodebtn: {
    paddingLeft: 50
  },

  chooseFileCls: {
   
    height: 300,
    justifyContent: 'center'
  },

  signatureCls: {

    justifyContent: 'center',
    width: '100%',

  },

  userDetailsCol: {
    width: '36%',
  },

  userDetailsCol1: {
    width: '14%',
  },

  userDetailsCol2: {
    width: '14%'

  },

  userDetailsCol3: {
    width: '18%',

  },

  userDetailsCol4: {
    width: '18%',

  },

  textBoxesCls: {
    paddingTop: 10
  },

  onlyPicker: {
    paddingTop: 10,
    minHeight: 200,
  
  },

  firstName: {
    paddingTop: 30,
    
  },

  prefixPicker: {
    width: 150,
    borderWidth: 1,
    borderColor: 'grey',
    fontSize: 16
  },

  prefixCol: {
    width: '30%',
    height: 800,
    justifyContent: 'center',
    paddingLeft: 50
  },

  signatureCol: {
    width: '30%',
  },

  lastNameCol: {
    width: '30%',
    justifyContent: 'center',
  },

  profileBody: {
    height: 1000,
    width: '100%',
    paddingTop: 20,
  },

  logoContainer: {
    paddingTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',

  },

  logoContainerBrowse: {
    height: 350,
    width: 320,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  logoContainerBrowse1: {
    height: 180,
    width: 300,
    paddingTop: '1%',
    paddingLeft: '10%',
   
  },

  logoBrowse: {
    height: 300,
    //width: 300,
    // width: 200,
     aspectRatio: 1,
    // resizeMode: 'contain',

  },

  logoBrowse1: {
    // height: 160,
    // width: 200,
    // backgroundColor: 'white',
    // width: 200,
    aspectRatio: 2,
    resizeMode: 'contain',
   
  },

  logo: {
    height: 100,
    width: 300,
  },

  submitContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },

  wholeBody: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%'
  },
  userDetails: {
    height: 100,
    width: '100%',
    backgroundColor: '#549622',
    marginTop: 5,
    justifyContent: 'center'
  },

  submitText: {

    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'normal'

  },
  submit: {

    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    height: 40,
    width: '85%',
    marginLeft: 15,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  submitSave: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#05afee',
    height: 40,
    width: '85%',
    marginLeft: 15,
    justifyContent: 'center',
    backgroundColor: '#05afee',
  },


  userName: {
    backgroundColor: "#fff",
    height: 50,
    width: '90%',
    borderColor: 'grey',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 4,
    color: 'grey',
    fontSize: 20
  },

  userName11: {
    backgroundColor: "#E8F0FE",
    height: 50,
    width: '90%',
    borderColor: 'grey',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 4,
    color: 'grey',
    fontSize: 20
  },

  userNameEmail: {
    backgroundColor: "#DCDCDC",
    height: 50,
    width: '90%',
    borderColor: 'grey',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 4,
    color: 'grey',
    fontSize: 20
  },

  password: {
    backgroundColor: "#e6ecff",
    height: 40,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
  },

  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
