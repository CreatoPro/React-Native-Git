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
    TouchableHighlight,
} from 'react-native';
import SignatureCapture from 'react-native-signature-capture';
import CheckBox from 'react-native-check-box'


import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Picker } from '@react-native-picker/picker';
import { Actions } from 'react-native-router-flux';
import DropDownPicker from 'react-native-dropdown-picker';
import { Row, Column as Col, Grid } from 'react-native-responsive-grid'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { isThisTypeNode } from 'typescript';


// const Login: () => React$Node = () => {
export default class WerForm2 extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            client: 'Select Client',
            qualification: 'Select Qualification',
            workArea: 'Select Work Area',
            group: 'Select Group',
            form: 'Select TAR/WER/SA/AJC',
            color: 'normal',
            showTextArea: false,
            showSignatureArea: true,
            showAlert: false,
            isChecked1: false,
            isChecked2: false,
            isChecked3: true,
            isBorder: false
        }
    }

    onFocus = () => {
        this.setState({
            isBorder: true
        })
      };
    
      onBlur = () => {
        this.setState({
            isBorder: false
        })
      };
    toggleSignature = () => {
        this.setState({
            showTextArea: !this.state.showTextArea
        });
        this.setState({
            showSignatureArea: !this.state.showSignatureArea
        });
    }

    goToPreviousScreen = () => {
        Actions.WerForm2();
    };
    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };

    handleClick = () => {
        Actions.Login();
    }

    handleClick2 = () => {

    }

    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };

    initialArray = [
        {
            observe: 'S-Ob. 1',
            skills: 'Does the student demontrate the ability to exchange relevant routine information with others to: ',
            previois: 'S',
            S: false,
            U: false,
            N: true
        },
        {
            observe: 'S-Ob. 2',
            skills: 'Observe the student communicating with supervisors and colleagues. Do they demonstrate demonstrate effective communication technique? ',
            previois: 'S',
            S: false,
            U: false,
            N: true
        },
        {
            observe: 'S-Ob. 2',
            skills: 'Observe the student communicating with supervisors and colleagues. Do they demonstrate demonstrate effective communication technique? ',
            previois: 'S',
            S: false,
            U: false,
            N: true
        },
        {
            observe: 'S-Ob. 2',
            skills: 'Observe the student communicating with supervisors and colleagues. Do they demonstrate demonstrate effective communication technique? ',
            previois: 'S',
            S: false,
            U: false,
            N: true
        },
        {
            observe: 'S-Ob. 2',
            skills: 'Observe the student communicating with supervisors and colleagues. Do they demonstrate demonstrate effective communication technique? ',
            previois: 'S',
            S: false,
            U: false,
            N: true
        },
    ];

    render() {

        const { showAlert } = this.state;


        // adding code for Signature Pad
        const sign = createRef();

        const saveSign = () => {
            sign.current.saveImage();
        };

        const resetSign = () => {
            sign.current.resetImage();
        };

        const _onSaveEvent = (result) => {
            //result.encoded - for the base64 encoded png
            //result.pathName - for the file path name
            alert('Signature Captured Successfully');
            console.log(result.encoded);
        };

        _onDragEvent = () => {
            // This callback will be called when the user enters signature
            console.log('dragged');
        };

        return (
            <SafeAreaView>

                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.container2}>

<AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Success!"
          message="Form has been successfully submitted, Thank You"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Okay"
          confirmButtonColor="#549622"
          contentContainerStyle={styles.alertContainerStyle}
          titleStyle={{color: '#549622', fontSize: 24}}
          messageStyle={{color: '#333333', fontSize: 20, fontWeight: 'bold'}}
          confirmButtonStyle={{width: 100}}
          confirmButtonTextStyle={{alignItems: 'center', textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('./../images/logo/TQMSlogo.png')}
                            style={styles.scrollView} />
                    </View>

                    <View style={styles.userDetails}>
                        <Row>
                            <Col style={styles.userDetailsCol}>
                                <View style={{ paddingTop: '1%', paddingLeft: '3%' }}>
                                    <Text onPress={this.handleClick}
                                        style={{ fontSize: 20, fontWeight: "600", color: 'white' }}>
                                        Student Name: ARMSTRONG Donald
                </Text>
                                </View>
                            </Col>

                            <Col style={styles.userDetailsCol1}>
                                <View style={{ paddingTop: '1%', paddingLeft: '2%' }}>
                                    <Text style={{ fontSize: 20, fontWeight: "600", color: 'white' }}>
                                        Client: Don KR
                </Text>
                                </View>
                            </Col>
                        </Row>

                        <Row>
                            <View style={{ paddingTop: '1%', paddingLeft: '1%' }}>
                                <Text style={{ fontSize: 20, fontWeight: "600", color: 'white' }}>
                                    Qualification: AMP31016DN-Ham Production
                </Text>
                            </View>
                        </Row>
                    </View>

                    <View style={styles.unitArea}>

                        <Row style={styles.firstRow}>
                            {/* 1st row will contain nothing */}
                        </Row>

                        <Row style={styles.firstRow}>
                            <Col style={{ width: '25%' }}>
                            </Col>

                            <Col style={{ width: '50%', }}>
                                <Text style={{ fontSize: 26, fontWeight: "bold", color: '#333333', textAlign: 'center', paddingTop: 5 }}>
                                    Unit: AMPCOR205 Communicate in the workplace
                             </Text>
                            </Col>

                            <Col style={{ width: '25%' }}>
                            </Col>

                        </Row>

                        <Row style={styles.firstRow}>
                            {/* 3rd row will contain nothing */}
                        </Row>
                    </View>

                    <View style={styles.descriptionView}>
                        <Row style={styles.descriptionRow}>
                            {/* 1st row will contain nothing */}
                        </Row>

                        <Row style={styles.descriptionRow2}>
                            <Col style={styles.datesCol}>
                            </Col>

                            <Col style={styles.datesCol1Special}>
                                <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: '500', paddingTop: 16, paddingLeft: 10 }}> Previous Visit Dates:</Text>

                            </Col>

                            <Col style={styles.datesCol2}>

                            </Col>

                            <Col style={styles.datesCol1}>

                                <Text style={{color: '#c0504d', fontSize: 20, fontWeight: 'bold', paddingTop: 15, paddingLeft: 10 }}> V1 -  <Text style={{color: '#333333', fontSize: 20, fontWeight: 'bold', paddingTop: 12 }}>2021-03-08</Text> </Text>

                            </Col>

                            <Col style={styles.datesCol2}>

                            </Col>

                            <Col style={styles.datesCol1}>
                            <Text style={{color: '#c0504d', fontSize: 20, fontWeight: 'bold', paddingTop: 15, paddingLeft: 10 }}> V2 -  <Text style={{color: '#333333', fontSize: 20, fontWeight: 'bold', paddingTop: 12 }}>2021-03-08</Text> </Text>

                            </Col>

                            <Col style={styles.datesCol2}>
                            </Col>
                            <Col style={styles.datesCol1}>
                            <Text style={{color: '#c0504d', fontSize: 20, fontWeight: 'bold', paddingTop: 15, paddingLeft: 10 }}> V3 -  <Text style={{color: '#333333', fontSize: 20, fontWeight: 'bold', paddingTop: 12 }}>2021-03-08</Text> </Text>

                            </Col>
                            <Col style={styles.datesCol2}>
                            </Col>

                            <Col style={styles.datesCol1}>
                            <Text style={{color: '#c0504d', fontSize: 20, fontWeight: 'bold', paddingTop: 15, paddingLeft: 10 }}> V4 -  <Text style={{color: '#333333', fontSize: 20, fontWeight: 'bold', paddingTop: 12 }}>2021-03-08</Text> </Text>

                            </Col>

                            <Col style={styles.datesCol2}>
                            </Col>

                            <Col style={styles.datesCol1}>
                            <Text style={{color: '#c0504d', fontSize: 20, fontWeight: 'bold', paddingTop: 15, paddingLeft: 10 }}> V5 -  <Text style={{color: '#333333', fontSize: 20, fontWeight: 'bold', paddingTop: 12 }}>2021-03-08</Text> </Text>

                            </Col>


                            <Col style={styles.datesCol}>
                            </Col>
                        </Row>

                        <Row style={styles.descriptionRow}>
                            {/* 3rd row will contain nothing */}
                        </Row>
                    </View>


                    <View style={styles.questionsArea}>

                        <Row style={styles.commentsArea}>
                            <Text style={{ fontSize: 32, color: '#333', fontFamily: 'Helvetica Neue', fontWeight: '700', paddingTop: 35, paddingLeft: 45 }}>
                                What is your comment?
                             </Text>
                        </Row>

                        <View style={styles.container}>
                            <Row>
                                <Col style={styles.signaturePadCol1}>
                                </Col>

                                <Col style={styles.signaturePadCol2}>
                                    <TextInput
                                        onBlur={ () => this.onBlur() }
                                        onFocus={ () => this.onFocus() }
                                        style={this.state.isBorder ? styles.input : styles.inputBlur}
                                        multiline={true}
                                    />

                                </Col>

                                <Col style={styles.signaturePadCol1}>

                                </Col>
                            </Row>

                        </View>
                        {/* <Row style={styles.commentsSection}>

            </Row> */}


                        <Row style={styles.blackArea}>

                        </Row>
                        <Row style={styles.btnArea}>
                            <Col style={styles.btnClm}>
                            </Col>

                            <Col style={styles.btnClm1}>
                                <TouchableHighlight
                                    style={styles.submit}
                                    onPress={() => {
                                        this.goToPreviousScreen();
                                    }}
                                >
                                    <Text style={styles.submitText}>Back</Text>
                                </TouchableHighlight>
                            </Col>

                            <Col style={styles.btnClm2}>
                            </Col>

                            <Col style={styles.btnClm1}>
                                <TouchableHighlight
                                    style={styles.submit}
                                    onPress={() => {
                                        this.showAlert();
                                    }}
                                >
                                    <Text style={styles.submitText}>Submit</Text>
                                </TouchableHighlight>
                            </Col>

                            <Col style={styles.btnClm}>
                            </Col>




                        </Row>
                    </View>

                </ScrollView>
            </SafeAreaView>
        );
    }
}

//};

const styles = StyleSheet.create({

    signaturePadCol1: {
        width: 45,
        height: 150,

    },

    signaturePadCol2: {
        width: '93%',
        height: 300,
       

    },

    commentsSection: {
        width: '100%',
        height: 400,
        borderColor: 'black',
        borderWidth: 1
    },


    commentsArea: {
       
        width: '100%',
        height: 100
    },

    btnClm:{
       
        width: '6%'
    },

    btnClm1:{
       
        width: '12%'
    },

    btnClm2:{
        
        width: '64%'
    },
    indexCls: {
        fontFamily: 'Helvetica Neue',
        color: '#333333', textAlign: 'center', fontSize: 22, paddingTop: 20
    },

    questionCls: {
        paddingLeft: 15, fontSize: 22, paddingTop: 20, fontFamily: 'Helvetica Neue',
        color: '#333333',
    },

    btnArea: {
        width: '100%',
        height: 150,

    },

    blackArea: {
        width: '100%',
        height: 80,

    },

    questionRow: {
        width: '100%',
        height: 100,


    },

    headerCol11: {
        width: '8%',

    },

    headerCol21: {
        width: '56%',

    },

    headerCol31: {
        width: '12%',

    },

    headerCol41: {
        width: '8%',

    },

    headerCol1: {
        backgroundColor: '#05afee',
        width: '8%',
        borderWidth: 1,
        borderColor: 'white'
    },

    headerCol2: {
        backgroundColor: '#05afee',
        width: '56%',
        borderWidth: 1,
        borderColor: 'white'
    },

    headerCol3: {
        backgroundColor: '#05afee',
        width: '12%',
        borderWidth: 1,
        borderColor: 'white'
    },

    headerCol4: {
        backgroundColor: '#05afee',
        width: '8%',
        borderWidth: 1,
        borderColor: 'white'
    },

    questionHeader: {

        width: '100%',
        height: 60

    },

    questionsArea: {
        width: '100%',
        height: 600,
        borderWidth: 0.5,
        borderTopColor: 'white',
        borderRightColor: '#333',
        borderLeftColor: '#333',
        borderBottomColor: '#333',
        borderRadius: 10,
    },

    alertContainerStyle: {
        height: 200,
        width: 600,
        justifyContent: 'center'
    },

    logoBrowse: {
        height: 300,
        width: 450,
        backgroundColor: 'white',
    },


    userDetails: {
        height: 140,
        width: '100%',
        backgroundColor: '#549622',
        marginTop: 5,
        justifyContent: 'center'
    },


    userDetailsCol: {
        width: '32%',

    },

    input: {
        paddingRight: 10,
        paddingLeft: 10,

        lineHeight: 23,
        flex: 1,
        textAlignVertical: 'top',
        fontFamily: 'Helvetica Neue',
        fontSize: 22,
        color: '#333333',
        borderColor: '#05afee',
        borderWidth: 2,
        textAlignVertical: 'center',
    },

    inputBlur: {
        paddingRight: 10,
        paddingLeft: 10,
        lineHeight: 23,
        flex: 1,
        textAlignVertical: 'top',
        fontFamily: 'Helvetica Neue',
        fontSize: 22,
        color: '#333333',
        borderColor: '#ccc',
        borderWidth: 2,
        textAlignVertical: 'center',
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
        height: 150,
        borderTopColor: '#333',
        borderBottomColor: 'white',
        borderTopWidth: .5,
        borderRightWidth: .5,
        borderLeftWidth: .5,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,


    },

    descriptionRow: {
        height: '31%',

    },

    descriptionRow2: {
        height: '38%',


    },

    datesCol: {

        width: '2.25%'
    },

    datesCol1: {

        width: '15.30%',
        backgroundColor: '#daeef3'
    },

    datesCol1Special: {

        width: '14%',
        backgroundColor: '#C0504D'
    },

    datesCol2: {

        width: '1%'
    },

    buttonStyle: {
        justifyContent: 'center', height: 40,
        width: 120,
        backgroundColor: '#5B5B5B',
        borderRadius: 10
    },

    buttonStyle3: {
        justifyContent: 'center',
        height: 40,
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
        height: 300,
       

    },

    container2: {
        width: '100%',
        height: 999,
    },


    dateColor: {
        color: '#C0504D'
    },

    dateCol: {
        width: '40%',

    },

    unit1: {
        width: '60%',

    },

    firstRow: {
        height: '33%',

    },

    unitArea: {
        width: '100%',
        height: 150
    },





    profileText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        fontStyle: 'normal'
    },



    profileBtn: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        height: 40,
        width: '90%',
        marginLeft: 5,
        justifyContent: 'center',
        backgroundColor: 'transparent',
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
        textAlign: 'center',
        marginTop: 15,
        fontSize: 22
    },

    submit: {

        borderRadius: 5,
        height: 60,
        width: '100%',
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
