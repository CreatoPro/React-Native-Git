/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, createRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from '@react-native-async-storage/async-storage';

Icon.loadFont();

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
  TouchableHighlight
} from 'react-native';
import SignatureCapture from 'react-native-signature-capture';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Actions } from 'react-native-router-flux';
import { Row, Column as Col, Grid } from 'react-native-responsive-grid'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'


// const Login: () => React$Node = () => {
export default class TarForm extends Component<{}> {

  date;
  constructor(props) {
    super(props);
    this.state = {
      color: 'normal',
      showTextArea: true,
      showSignatureArea: false,
      showAlert: false,
      showSignatureAreas: true,
      signature: 'https://reactnativecode',
      client: this.props.client,
      qualification: this.props.qualification,
      workArea: this.props.workArea,
      student: this.props.student,
      group: this.props.group,
      isGradded: false,
      message: '',
      title: '',
    }
  }

  setDateFormat = (month) => {
   // alert('month received' + month);
    let str = month.toString();
   // alert(str.length);
    if (str.length == 1) {
    
      let newMon = '0'+str;
   //   alert('newMon' + newMon);
      return newMon
    } else {
     // alert('length is 2');
     return str;
    }
    return month;
    
  }

  async componentDidMount() {
    
    const value = await AsyncStorage.getItem('trainerDetails');
    let user_details = JSON.parse(value);
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    let completeDate = year + '-' + this.setDateFormat(month) + '-' + date;
    this.date = completeDate;
    console.log('this is created date : ', this.date);
    if (value !== null) {

      if (user_details.data.content.profile.signature == '') {
        this.setState({
          signature: 'https://reactnativecode'
        })
      } else {
        this.setState({
          signature: user_details.data.content.profile.signature,
        })
      }

    
    }
    else {
      console.log('else');
    }
  }


  toggleSignature = () => {
    this.setState({
      showTextArea: !this.state.showTextArea
    });
    this.setState({
      showSignatureArea: !this.state.showSignatureArea
    });
  }
  submitForm = () => {
   if(this.state.isGradded){
    this.showAlert();
   } else {
     this.setState({
      message: 'Please provide a student signature first',
      title: 'Error!',
      showAlert: true
    });
   }
  

  }


  showAlert = () => {
    this.setState({
      message: "TAR (Training Attendance Record) has been successfully completed.",
      title: 'Success!',
      showAlert: true
    });
    Actions.Home({getClient: true});
  };

  handleClick = () => {
    Actions.Home({getClient: true});
  }

  handleClick2 = () => {

  }

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  render() {

    const { showAlert } = this.state;


    // adding code for Signature Pad
    const sign = createRef();
    const sign2 = createRef();

    const saveSign = () => {
      sign.current.saveImage();
    };

    const resetSign = () => {
      sign.current.resetImage();
      this.setState({
        isGradded: false
      });
      this.forceUpdate();
    };
    const resetSign2 = () => {
      sign2.current.resetImage();
      this.setState({
        isGradded: false
      });
      this.forceUpdate();
    };
    const _onSaveEvent = (result) => {
      //result.encoded - for the base64 encoded png
      //result.pathName - for the file path name
      alert('Signature Captured Successfully');
      console.log(result.encoded);
    };

    const _onSaveEvent2 = (result) => {
      //result.encoded - for the base64 encoded png
      //result.pathName - for the file path name
      alert('Signature Captured Successfully');
      console.log(result.encoded);
    };

    _onDragEvent = () => {
      // This callback will be called when the user enters signature
      console.log('dragged');
      this.setState({
        isGradded: true
      });
    };
    

    _onDragEvent2 = () => {
      // This callback will be called when the user enters signature
      console.log('dragged');
      this.setState({
        isGradded: true
      });
    };
    
   

    return (
      <SafeAreaView>

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.container2}>

          <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title={this.state.title}
            message={this.state.message}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            cancelText="No, cancel"
            confirmText="Okay"
            confirmButtonColor="#549622"
            contentContainerStyle={styles.alertContainerStyle}
            titleStyle={{ color: '#549622', fontSize: 24 }}
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
          <View style={styles.logoContainer}>
            <Image source={require('./../images/logo/TQMSlogo.png')}
              style={styles.scrollView} />
          </View>
          <View style={styles.userDetails}>
            <Row styles={{ width: '100%' }}>
              <Col style={{ width: '80%' }}>
                <Row style={styles.rowCol2}>
                  <Col style={styles.userDetailsCol}>
                    <View style={{ paddingLeft: '5%' }}>

                    </View>
                  </Col>
                </Row>

                <Row style={styles.rowCol1}>
                  <Col style={styles.userDetailsCol}>
                    <View style={{ paddingLeft: '5%' }}>
                      <Text style={{ fontSize: 20, color: 'white' }}>
                        Student Name:   { this.state.student[0].name}

                </Text>
                    </View>
                  </Col>


                </Row>

                <Row style={styles.rowCol1}>
                  <Col style={styles.userDetailsCol}>
                    <View style={{ paddingLeft: '5%' }}>
                      <Text style={{ fontSize: 20, color: 'white' }}>
                        Client:                   {this.state.client.label}
                </Text>
                    </View>
                  </Col>
                </Row>

                <Row style={styles.rowCol1}>
                  <Col style={styles.userDetailsCol}>
                    <View style={{ paddingLeft: '5%' }}>
                      <Text style={{ fontSize: 20, color: 'white' }}>
                        Qualification:       {this.state.qualification.label}
                </Text>
                    </View>
                  </Col>
                </Row>

                <Row style={styles.rowCol1}>
                  <Col style={styles.userDetailsCol}>
                    <View style={{ paddingLeft: '5%' }}>
                      <Text style={{ fontSize: 20, color: 'white' }}>
                        Workarea:            {this.state.workArea.label}
                </Text>
                    </View>
                  </Col>
                </Row>
                <Row style={styles.rowCol1}>
                  <Col style={styles.userDetailsCol}>
                    <View style={{ paddingLeft: '5%' }}>
                      <Text style={{ fontSize: 20, color: 'white' }}>
                        Group:                  {this.state.group.label}
                </Text>
                    </View>
                  </Col>
                </Row>
                <Row style={styles.rowCol2}>
                  <Col style={styles.userDetailsCol}>
                    <View style={{ paddingLeft: '5%' }}>
                      {/* <Text style={{ fontSize: 20, color: 'white' }}>
                    User Name : Hello, Greg Cotter
                </Text> */}
                    </View>
                  </Col>
                </Row>

              </Col>

              <Col style={{ width: '20%', height: '40%' }}>

                <Row style={{ width: '20%', height: '40%' }}>

                </Row>

                <Row>
                  <Col style={styles.userDetailsCol1}>
                    <TouchableHighlight
                      style={styles.profileBtn}
                      onPress={this.handleClick}
                      underlayColor={'#809fff'}>
                      <Text style={styles.profileText}>Form
                    <FontAwesomeIcon icon="check-square" style={{ color: 'white', marginLeft: 20 }} />
                      </Text>
                    </TouchableHighlight>
                  </Col>
                </Row>
              </Col>
            </Row>
          </View>

          <View style={styles.profileBody}>

            <View style={styles.unitArea}>

              <Row style={styles.firstRow}>
                {/* 1st row will contain nothing */}
              </Row>

              <Row style={styles.firstRow}>
                <Col style={styles.dateCol}>
                  <Text style={{ color: '#C0504D', fontSize: 20, paddingLeft: 45, fontWeight: 'bold' }}>Date : <Text style={{ color: '#333333' }}>{this.date}</Text></Text>
                </Col>

                <Col style={styles.unit1}>
                  <Text style={{ color: '#C0504D', fontSize: 20, paddingLeft: 45, fontWeight: 'bold' }}>Unit : <Text style={{ color: '#333333' }}>AMPCOR205 Communicate in the workplace</Text></Text>

                </Col>

              </Row>

              <Row style={styles.firstRow}>
                <Col style={styles.dateCol}>
                </Col>

                <Col style={styles.unit1}>
                  <Text style={{ color: '#333333', fontSize: 20, paddingLeft: 100, fontWeight: 'bold' }}>AMPCOR206 Overview the meat industry</Text>

                </Col>

              </Row>

              <Row style={styles.firstRow}>
                <Col style={styles.dateCol}>
                </Col>

                <Col style={styles.unit1}>
                  <Text style={{ color: '#333333', fontSize: 20, paddingLeft: 100, fontWeight: 'bold' }}>AMPX208 Apply enviornmentally sustainable work practices</Text>

                </Col>

              </Row>

              <Row style={styles.firstRow}>

              </Row>

            </View>

            <View style={styles.descriptionView}>
              <Row style={styles.descriptionRow}>
                <Col style={styles.sessionCol}>
                  <Text style={{ color: '#333333', fontSize: 24, paddingLeft: 45, paddingTop: 30, fontWeight: 'bold' }}>Session Description :</Text>
                </Col>
              </Row>
              <Row>
                <Col style={styles.signaturePadCol1}>
                </Col>

                <Text style={styles.inputDescription}>
                  This unit describes the skills and knowledge required to calculate and record workplace measure used in the meat industry and include the use of measuring instruments.
                  </Text>
                {/* <TextInput
                      style={styles.input}
                      placeholder='Enter Description..'
                      multiline={true}
                    /> */}
              </Row>


            </View>

            <View style={{ height: 80 }}>
              <Row style={styles.descriptionRow2}>
                <Col style={styles.sessionCol}>
                  <Text style={{ color: '#333333', fontSize: 24, paddingLeft: 45, paddingTop: 5, fontWeight: 'bold' }}>Additional Comments :</Text>
                </Col>
              </Row>
            </View>


            <View>
              {this.state.showSignatureArea && (
                <View style={styles.container}>
                  <Row>
                    <Col style={styles.signaturePadCol1}>
                    </Col>
                    <Col style={styles.signaturePadCol2}>

                      <SignatureCapture
                        style={styles.signature}
                        ref={sign2}
                        onSaveEvent={_onSaveEvent2}
                        onDragEvent={_onDragEvent2}
                        showNativeButtons={false}
                        showTitleLabel={false}
                        viewMode={'portrait'}
                      />

                    </Col>
                    <Col style={styles.signaturePadCol1}>

                    </Col>
                  </Row>

                </View>

              )}

              {this.state.showTextArea && (
                <View style={styles.container}>
                  <Row>
                    <Col style={styles.signaturePadCol1}>
                    </Col>

                    <Col style={styles.signaturePadCol2}>
                      <TextInput
                        style={styles.input}
                        multiline={true}
                      />

                    </Col>

                    <Col style={styles.signaturePadCol1}>

                    </Col>
                  </Row>

                </View>
              )}
            </View>


            <View style={styles.toggleView}>
              <Row >
                <Col style={styles.toggleCol1}>
                </Col>

                <Col style={styles.toggleCol2}>

                  <View style={{ paddingTop: 2, paddingLeft: 10 }}>
                    {this.state.showSignatureArea && (
                      <TouchableHighlight
                        style={styles.buttonStyle3}
                        onPress={
                          resetSign2
                        }>
                        <Text style={{ color: 'white', fontWeight: '500', fontSize: 20, textAlign: 'center' }}>Clear</Text>
                      </TouchableHighlight>
                    )}
                  </View>
                </Col>
                <Col style={styles.toggleCol4}>
                </Col>
                <Col style={styles.toggleCol3}>
                  <Text onPress={() => this.toggleSignature()} style={{ color: '#05afee', fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline', paddingLeft: 0 }}>
                    <FontAwesomeIcon icon={faPencilAlt} style={{ color: '#05afee', marginLeft: 12, }} />
                    Toggle Pencil</Text>
                </Col>
              </Row>
            </View>

            <View style={styles.trainerSignatureTextView}>
              <Row style={{ height: '13%' }}>

              </Row>
              <Row style={{ height: '13%', }}>
                <Col style={styles.bottomView1}>
                </Col>
                <Col style={styles.bottomView2}>
                  <Text style={{ color: '#333333', fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
                    Trainer Signature
  </Text>
                </Col>
                <Col style={styles.bottomView1}>
                </Col>

                <Col style={styles.bottomView2}>
                  <Text style={{ color: '#333333', fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
                    Student Signature
  </Text>
                </Col>

                <Col style={styles.bottomView1}>
                </Col>

              </Row>
              <Row style={{ height: '58%' }}>
                <Col style={styles.bottomView1}>
                </Col>

                <Col style={styles.bottomView22}>
                  <Image source={{ uri: this.state.signature }}
                    style={styles.logoBrowse} />
                </Col>

                <Col style={styles.bottomView1}>
                </Col>

                <Col style={styles.bottomView22}>
                  <SignatureCapture
                    style={styles.signature}
                    ref={sign}
                    onSaveEvent={_onSaveEvent}
                    onDragEvent={_onDragEvent}
                    showNativeButtons={false}
                    showTitleLabel={false}
                    viewMode={'portrait'}
                  />
                </Col>

                <Col style={styles.bottomView1}>
                </Col>
              </Row>
              <Row style={{ height: '16%' }}>
                <View style={styles.toggleView2}>
                  <Row >
                    <Col style={{ width: '78%' }}>
                    </Col>

                    <Col style={styles.toggleCol5}>

                      {this.state.showSignatureAreas && (
                        <View style={{ paddingTop: 2, paddingLeft: 4 }}>
                          <TouchableHighlight
                            style={styles.buttonStyle3}
                            onPress={
                              resetSign
                            }>
                            <Text style={{ color: 'white', fontWeight: '500', fontSize: 20, textAlign: 'center' }}>Clear</Text>
                          </TouchableHighlight>
                        </View>
                      )}
                    </Col>

                  </Row>
                </View>
              </Row>
            </View>


            <View style={{ width: '100%', height: 250 }}>
              <Row style={{ width: '100%', height: '20%' }}>

              </Row>
              <Row style={{ width: '100%', height: '46%' }}>
                <Col style={{ width: '38%' }}>
                </Col>
                <Col style={{ width: '24%' }}>
                  <View style={styles.submitContainer}>
                    <TouchableHighlight
                      style={styles.submit}
                      onPress={this.submitForm}
                    >
                      <Text style={styles.submitText}>Submit</Text>
                    </TouchableHighlight>
                  </View>
                </Col>
                <Col style={{ width: '38%' }}>
                </Col>
              </Row>
              <Row style={{ width: '100%', height: '33%' }}>

              </Row>
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

//};

const styles = StyleSheet.create({

  profileBody: {
    height: 1700,
    width: '100%',
  },

  alertContainerStyle: {
    height: 200,
    width: 600,
    justifyContent: 'center'
  },

  logoBrowse: {
    aspectRatio: 2,
    resizeMode: 'contain',
  },

  bottomView1: {

    width: '10%'
  },

  bottomView2: {
    width: '35%',
  },

  bottomView22: {
    borderColor: '#333333',
    borderWidth: 1,
    width: '35%',
  },

  trainerSignatureTextView: {
    paddingTop: 20,
    width: '100%',
    height: 450,


  },

  toggleCol1: {
    width: '3%',
    height: 29,

  },

  toggleCol2: {
    width: '13%',
    height: 60,
 
  },

  toggleCol4: {
    width: '66%',
  
  },

  toggleCol3: {
    width: '15%',
    height: 29,
  
  },

  toggleCol5: {
    width: '12%',
    height: 70,
  },

  signaturePadCol1: {
    width: 45,
    height: 150,

  },

  signaturePadCol2: {
    width: '93%',
    height: 200,
    borderColor: 'grey',
    borderWidth: 1,

  },

  input: {
    paddingRight: 10,
    paddingLeft: 10,

    lineHeight: 23,
    flex: 1,
    textAlignVertical: 'top',
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    color: '#333333',
    borderColor: '#ccc',
    borderWidth: 1,
    textAlignVertical: 'center',

  },

  inputDescription: {
    paddingRight: 10,
    paddingTop: 10,
    lineHeight: 23,
    flex: 1,
    textAlignVertical: 'top',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontSize: 22,
    color: '#333333'
  },

  sessionCol: {
    justifyContent: 'center',
    width: '100%'
  },

  toggleView: {
    width: '100%',
    height: 80,

    // shadowOpacity: 0.5, shadowRadius: 2, shadowOffset: { width: 2, height: 5,
    // },   
  },

  toggleView2: {
    paddingTop: 2,
    width: '100%',
    height: 100,

  },

  descriptionView: {
    width: '100%',
    height: 230,
    paddingTop: 40

  },

  descriptionRow: {
    height: '40%',

  },

  descriptionRow2: {
    paddingTop: 30
  },

  buttonStyle: {
    justifyContent: 'center', height: 40,
    width: 120,
    backgroundColor: '#5B5B5B',
    borderRadius: 10
  },

  buttonStyle3: {
    justifyContent: 'center',
    height: 50,
    width: 120,
    backgroundColor: '#5B5B5B',
    borderRadius: 10
  },

  buttonStyle2: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 150,
  },

  signature: {
    flex: 1,
    width: '100%',
    height: 100,

  },
  container: {
    width: '100%',
    height: 201,

  },

  container2: {
    width: '100%',
    height: 999,
  },


  dateColor: {
    color: '#C0504D'
  },

  dateCol: {
    width: '30%',
   
  },

  unit1: {
    width: '70%',
 
  },

  firstRow: {
    height: '20%',

  },

  unitArea: {
    backgroundColor: '#DAEEF3',
    width: '100%',
    height: 150
  },

  userDetails: {
    height: 180,
    width: '100%',

    backgroundColor: '#549622',
    marginTop: 5,
  },

  rowCol1: {
   
    height: '16%',
    justifyContent: 'center'

  },
  rowCol2: {
  
    height: '10%',
    justifyContent: 'center'

  },

  userDetailsCol: {
    width: '80%',

  },

  profileText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'normal'
  },

  userDetailsCol1: {
    width: '90%',
    paddingLeft: 30,
   
  },

  profileBtn: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    height: 40,
    width: '70%',
    marginLeft: 5,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  selectStudent: {
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
    paddingLeft: 15,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: '500'
    ,
  },

  containerStyleForDropdown: {
    height: 50, shadowOpacity: .5, shadowRadius: 2, shadowOffset: {
      width: 2, height: 1,
    }
  },

  pickerCls: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: 'grey',

  },

  nestedView: {
    paddingTop: '3%'
  },

  restOfTheBody: {
    justifyContent: 'center'
  },

  pickerContainer: {
    paddingTop: 50,
    minHeight: 300,

  },

  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',

  },

  logo: {
    height: 100,
    width: 300,
  },

  submitContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  wholeBody: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%'
  },

  submitText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20
  },

  submit: {

    borderRadius: 5,
    height: 60,
    width: '70%',
    color: "#05afee",
    backgroundColor: "#05afee",
    textAlign: 'center',
  },



  userName: {
    backgroundColor: "#e6ecff",
    height: 40,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
  },

  password: {
    backgroundColor: "#e6ecff",
    height: 40,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
  },

  scrollView: {
    backgroundColor: '#ffffff',
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
