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
    TouchableHighlight
} from 'react-native';
import SignatureCapture from 'react-native-signature-capture';
import Unorderedlist from 'react-native-unordered-list';

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

export default class SaForm3 extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            client: 'Select Client',
            qualification: 'Select Qualification',
            workArea: 'Select Work Area',
            group: 'Select Group',
            form: 'Select TAR/WER/SA/AJC',
            color: 'normal',
            showTextArea: true,
            showSignatureArea: false,
            showAlert: false,
            showSignatureAreas: true
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

    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };

    handleClick = () => {
        Actions.Login();
    }

    handleClick2 = () => {
        Actions.SaForm2();
    }

    handleClick3 = () => {

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
                        message="SA (Supervisor Appraisal) has been successfully completed."
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
                                            <Row style={{ height: '100%' }}>


                                            <Col style={{ width: '17%', height: '100%' }}>
                                                    <Text style={{ fontSize: 20, color: 'white', paddingTop: 8 }}>
                                                        Student Name:
                                                </Text>
                                                </Col>
                                                <Col style={{ borderColor: '#ffffff', borderWidth: 1, width: '30%', height: '85%' }}>
                                                    <Text style={{ fontSize: 20, color: 'white', paddingLeft: 15, paddingTop: 8, fontWeight: '500' }}>
                                                        1. ARMSTRONG Donald
                                                        </Text>
                                                </Col>
                                            </Row>

                                        </View>
                                    </Col>


                                </Row>

                                <Row style={styles.rowCol11}>
                                    <Col style={styles.userDetailsCol}>
                                        <View style={{ paddingLeft: '5%' }}>
                                            <Text style={{ fontSize: 20, color: 'white' }}>
                                                Client:                   Don KR
                </Text>
                                        </View>
                                    </Col>
                                </Row>

                                <Row style={styles.rowCol11}>
                                    <Col style={styles.userDetailsCol}>
                                        <View style={{ paddingLeft: '5%' }}>
                                            <Text style={{ fontSize: 20, color: 'white' }}>
                                                Qualification:       AMP31016DN-Ham Production
                </Text>
                                        </View>
                                    </Col>
                                </Row>

                                <Row style={styles.rowCol11}>
                                    <Col style={styles.userDetailsCol}>
                                        <View style={{ paddingLeft: '5%' }}>
                                            <Text style={{ fontSize: 20, color: 'white' }}>
                                                Workarea:            Ham Production
                </Text>
                                        </View>
                                    </Col>
                                </Row>
                                <Row style={styles.rowCol11}>
                                    <Col style={styles.userDetailsCol}>
                                        <View style={{ paddingLeft: '5%' }}>
                                            <Text style={{ fontSize: 20, color: 'white' }}>
                                                Group:                  Group 3 - AMP31016DN
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
                                            onPress={() => this.handleClick('save')}
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


                    <View style={styles.unitArea}>

                        <Row style={styles.firstRow}>
                            {/* 1st row will contain nothing */}
                        </Row>

                        <Row style={styles.firstRow}>
                            <Col style={styles.dateCol}>
                                <Text style={{ color: '#C0504D', fontSize: 22, paddingLeft: 45, fontWeight: 'bold' }}>Date : <Text style={{ color: '#333333', fontSize: 22, }}>2021-03-04</Text></Text>
                            </Col>

                        </Row>

                        <Row style={styles.firstRow}>


                            <Col style={styles.unit1}>
                                <Text style={{ color: '#333333', fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>SUPERVISOR APPRAISAL FORM</Text>

                            </Col>

                        </Row>



                        <Row style={styles.firstRow}>

                        </Row>

                    </View>



                    <View style={{ height: 100 }}>

                    </View>
                    <View style={styles.descriptionView111}>


                        <Row style={{ height: '100%' }}>
                            <Col style={styles.signaturePadCol1}>
                            </Col>

                            <View style={styles.tableCls}>

                                <Row style={{ width: '100%', height: 50 }}>
                                    <Col style={{ width: '27%', borderRightWidth: 1, borderRightColor: '#919090' }}>
                                        <Text style={{ fontSize: 20, paddingTop: 10, paddingLeft: 10, fontWeight: '600' }}>
                                            UNIT OF COMPETENCE
                                        </Text>
                                    </Col>

                                    <Col style={{ width: '73%' }}>
                                        <Text style={{ fontSize: 20, paddingTop: 10, paddingLeft: 10, fontWeight: '600' }}>
                                            AMPCOR205 Communicate in the workplace
                                        </Text>
                                    </Col>
                                </Row>

                                <Row style={{ width: '100%', height: 50, borderWidth: 1, borderColor: '#919090', backgroundColor: '#549622' }}>
                                    <Text style={{ width: '100%', textAlign: 'center', fontSize: 20, paddingTop: 10, fontWeight: '600', color: '#ffffff' }}>
                                        APPRAISAL
                                       </Text>
                                </Row>

                                <Row style={{ width: '100%', height: 100, borderBottomWidth: 1, borderBottomColor: '#919090' }}>
                                    <Text style={styles.tableDescription}>
                                        I am the supervisor of the student and regularly oversee their performance in the workplace. I make the judgement that the student can:
                               </Text>


                                </Row>

                                <View>

                                    <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 30, paddingTop: 20, paddingLeft: 100 }}><Text style={{ fontSize: 18, paddingTop: 28, paddingLeft: 5 }}>demonstrate a basic understanding of sustainability </Text>
                                    </Unorderedlist>
                                    <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 30, paddingTop: 0, paddingLeft: 100 }}><Text style={{ fontSize: 18, paddingTop: 8, paddingLeft: 5 }}> interpret workplace information </Text>
                                    </Unorderedlist>
                                    <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 30, paddingTop: 0, paddingLeft: 100 }}><Text style={{ fontSize: 18, paddingTop: 8, paddingLeft: 5 }}> report non-conformances </Text>
                                    </Unorderedlist>
                                    <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 30, paddingTop: 0, paddingLeft: 100 }}><Text style={{ fontSize: 18, paddingTop: 8, paddingLeft: 5 }}>recognise and follow procedures, follow instructions and respond to change</Text>
                                    </Unorderedlist>
                                    <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 30, paddingTop: 0, paddingLeft: 100 }}><Text style={{ fontSize: 18, paddingTop: 8, paddingLeft: 5 }}>relate to people from a range of social, cultural, ethnic backgrounds, and physical and mental abilities</Text>
                                    </Unorderedlist>
                                    <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 30, paddingTop: 0, paddingLeft: 100 }}><Text style={{ fontSize: 18, paddingTop: 8, paddingLeft: 5 }}>apply relevant communication and mathematical skills </Text>
                                    </Unorderedlist>
                                    <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 30, paddingTop: 0, paddingLeft: 100 }}><Text style={{ fontSize: 18, paddingTop: 8, paddingLeft: 5 }}>ask questions and clarify work requirements </Text>
                                    </Unorderedlist>
                                    <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 30, paddingTop: 0, paddingLeft: 100 }}><Text style={{ fontSize: 18, paddingTop: 8, paddingLeft: 5 }}>follow good housekeeping procedures and practices</Text>
                                    </Unorderedlist>
                                    <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 30, paddingTop: 0, paddingLeft: 100 }}><Text style={{ fontSize: 18, paddingTop: 8, paddingLeft: 5 }}>apply relevant workplace health and safety, regulatory and workplace requirements </Text>
                                    </Unorderedlist>
                                    <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 30, paddingTop: 0, paddingLeft: 100 }}><Text style={{ fontSize: 18, paddingTop: 8, paddingLeft: 5 }}>take corrective action according to workplace requirements</Text>
                                    </Unorderedlist>
                                    <Unorderedlist bulletUnicode={0x2022} style={{ fontSize: 30, paddingTop: 0, paddingLeft: 100 }}><Text style={{ fontSize: 18, paddingTop: 8, paddingLeft: 5 }}>work with others to solve problems relating to environmental performance </Text>
                                    </Unorderedlist>

                                </View>


                            </View>
                            <Col style={styles.signaturePadCol11}>
                            </Col>
                        </Row>
                    </View>

                    <View style={styles.supervisorArea}>
                        <Row style={{ width: '100%', height: '15%',  }}>

                        </Row>
                        <Row style={{ width: '100%', height: '85%', }}>
                            <Col style={styles.signaturePadCol1}>
                            </Col>
                            <Col style={styles.actualSignatureArea}>
                                <Row style={{ height: 50, }}>
                                    <Text style={{ color: '#333333', fontSize: 22, fontWeight: '700', fontFamily: 'Helvetica Neue', }}>
                                        Supervisor Name:
                        </Text>
                                </Row>
                                <Row style={{ height: 50 }}>
                                    <TextInput
                                        placeholder="Supervisor Name"
                                        placeholderTextColor='white'
                                        style={styles.userName}>

                                    </TextInput>
                                </Row>

                                <Row style={{ height: 100, }}>
                                    <Text style={{ color: '#333333', fontSize: 22, fontWeight: '700', fontFamily: 'Helvetica Neue', paddingTop: 40 }}>
                                        Supervisor Signature:
                                  </Text>
                                </Row>

                                <Row style={{ height: 250, width: '100%', borderColor: '#919090', borderWidth: 1 }}>


                            <SignatureCapture
                                        style={styles.signature}
                                        ref={sign}
                                        onSaveEvent={_onSaveEvent}
                                        onDragEvent={_onDragEvent}
                                        showNativeButtons={false}
                                        showTitleLabel={false}
                                        viewMode={'portrait'}
                                    />
                                  
                                </Row>
                            </Col>
                            <Col style={styles.signaturePadCol1}>
                            </Col>
                        </Row>


                    </View>

                    <Row style={{ height: '6%'}}>
                        <View style={styles.toggleView2}>
                            <Row >

                                <Col style={styles.toggleCol5}>

                                </Col>
                                <Col style={{ width: '24%',  }}>
                                </Col>
                                <Col style={{ width: '10%',  }}>
                                    <View style={{ paddingTop: 2, paddingLeft: 5 }}>
                                        <TouchableHighlight
                                            style={styles.buttonStyle3}
                                            onPress={() => {
                                                resetSign();
                                            }}>
                                            <Text style={{ color: 'white', fontWeight: '500', fontSize: 20, textAlign: 'center' }}>Clear</Text>
                                        </TouchableHighlight>
                                    </View>

                                </Col>

                            </Row>
                        </View>
                    </Row>

                    <View style={{ width: '100%', height: 150 }}>
                        <Row style={{ width: '100%', height: '16%' }}>

                        </Row>
                        <Row style={{ width: '100%', height: '46%' }}>
                            <Col style={{ width: '8.8%' }}>
                            </Col>
                            <Col style={{ width: '12%' }}>
                                <View style={styles.submitContainer}>
                                    <TouchableHighlight
                                        style={styles.submit}
                                        onPress={() => {
                                            this.handleClick2();
                                        }}
                                    >
                                        <Text style={styles.submitText}>Back</Text>
                                    </TouchableHighlight>
                                </View>
                            </Col>
                            <Col style={{ width: '44.2%',}}>

                            </Col>
                            <Col style={{ width: '12%',  }}>
                            <View style={styles.submitContainer}>
                                    <TouchableHighlight
                                        style={styles.submit111}
                                        onPress={() => {
                                            this.showAlert();
                                        }}
                                    >
                                        <Text style={styles.submitText}>Save</Text>
                                    </TouchableHighlight>
                                </View>
                            </Col>
                            <Col style={{ width: '2%', }}>

</Col>
                            <Col style={{ width: '12%' }}>
                                <View style={styles.submitContainer}>
                                    <TouchableHighlight
                                        style={styles.submit}
                                        onPress={() => {
                                            this.showAlert();
                                        }}
                                    >
                                        <Text style={styles.submitText}>Submit</Text>
                                    </TouchableHighlight>
                                </View>
                            </Col>
                            <Col style={{ width: '6%' }}>
                            </Col>
                        </Row>
                        <Row style={{ width: '100%', height: '33%' }}>

                        </Row>
                    </View>


                </ScrollView>
            </SafeAreaView>
        );
    }
}

//};

const styles = StyleSheet.create({

    actualSignatureArea: {
        width: '33%',
        height: '100%',
        // borderWidth: 1,
        // borderColor: 'black'
    },


    supervisorArea: {
        width: '100%',
        height: 530,
        // borderWidth: 1,
        // borderColor: 'black'
    },

    listStyle: {
        fontSize: 22
    },

    tableCls: {
        borderWidth: 1,
        borderColor: '#919090',
        width: '82.3%',
        height: '100%'
    },

    alertContainerStyle: {
        height: 200,
        width: 600,
        justifyContent: 'center'
    },

    logoBrowse: {
        height: 250,
        width: 250,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
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
        width: '10%',
        height: 60,

    },

    toggleCol4: {
        width: '72%',

    },

    toggleCol3: {
        width: '15%',
        height: 29
    },

    toggleCol5: {
        width: '10%',
        height: 70,
        // borderColor: 'black',
        // borderWidth: 1
    },

    signaturePadCol1: {
        width: 120,
        height: 100,
        // borderColor: 'black',
        // borderWidth: 1
    },

    signaturePadCol11: {
        width: 120,
        height: 100,
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
        paddingTop: 15,
        lineHeight: 23,
        flex: 1,
        textAlignVertical: 'top',
        fontFamily: 'Helvetica Neue',
        fontSize: 20,
        color: '#333333'
    },

    tableDescription: {
        paddingRight: 30,
        paddingLeft: 15,
        paddingTop: 25,
        lineHeight: 23,
        flex: 1,
        textAlignVertical: 'top',
        fontFamily: 'Helvetica Neue',
        fontStyle: 'italic',
        fontSize: 19,
        fontWeight: '700',
        color: '#333333'
    },

    inputDescription11: {
        paddingRight: 10,
        paddingTop: 15,
        lineHeight: 23,
        flex: 1,
        textAlignVertical: 'top',
        fontFamily: 'Helvetica Neue',
        fontSize: 20,
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
        // borderColor: 'black',
        // borderWidth: 1
    },

    descriptionView: {
        width: '100%',
        height: 280,
        paddingTop: 40,
    },

    descriptionView11: {
        width: '100%',
        height: 160,

    },


    descriptionView111: {
        width: '100%',
        height: 650,

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
        height: 45,
        width: 100,
        backgroundColor: '#5B5B5B',
        borderRadius: 5
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
        height: '100%',

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
        width: '40%',

    },

    unit1: {
        width: '100%',
        justifyContent: 'center'

    },

    firstRow: {

        height: '25%'
    },

    unitArea: {
        backgroundColor: '#DAEEF3',
        width: '100%',
        height: 150,

    },

    userDetails: {
        height: 240,
        width: '100%',

        backgroundColor: '#549622',
        marginTop: 5,
    },

    rowCol1: {

        height: '21%',
        justifyContent: 'center'

    },


    rowCol11: {

        height: '14%',
        justifyContent: 'center'

    },
    rowCol2: {

        height: '12%',
        justifyContent: 'center'

    },

    userDetailsCol: {
        width: '80%',

    },

    profileText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '600',
        fontStyle: 'normal'
    },

    userDetailsCol1: {
        width: '100%',
        paddingLeft: 80

    },

    profileBtn: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        height: 42,
        width: '65%',
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
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20
    },

    submit: {

        borderRadius: 5,
        height: 50,
        width: '100%',
        color: "#05afee",
        backgroundColor: "#05afee",
        textAlign: 'center',
    },

    submit111:{
        borderRadius: 5,
        height: 50,
        width: '100%',
        color: "#549622",
        backgroundColor: "#549622",
        textAlign: 'center',
    },



    userName: {
        borderColor: '#919090',
        borderWidth: 1,
        width: '100%',
        borderRadius: 4,
        paddingLeft: 10,
        fontFamily: 'Helvetica Neue',
    fontSize: 22,
    color: '#333333',

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
