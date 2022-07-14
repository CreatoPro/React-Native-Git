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
import CheckBox from 'react-native-check-box'


export default class AjcForm2 extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            client: 'Select Client',
            qualification: 'Select Qualification',
            workArea: 'Select Work Area',
            group: 'Select Group',
            form: 'Competent',
            color: 'normal',
            showTextArea: true,
            showSignatureArea: false,
            showAlert: false,
            showSignatureAreas: true,
            isChecked1: false,
            isChecked2: false,
            isChecked3: false,
            isChecked4: false,
            isChecked5: false
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
        Actions.AjcForm3();
    }

    handleClick3 = () => {
        Actions.AjcForm();
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
                        message="TAR (Training Attendance Record) has been successfully completed."
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
                                                Qualification:      AMP31016DN-Ham Production
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
                            {/* <Col style={styles.dateCol}>
                                <Text style={{ color: '#C0504D', fontSize: 22, paddingLeft: 45, fontWeight: 'bold' }}>Date : <Text style={{ color: '#333333', fontSize: 22, }}>2021-03-04</Text></Text>
                            </Col> */}

                        </Row>

                        <Row style={styles.firstRow}>


                            <Col style={styles.unit1}>
                                <Text style={{ color: '#333333', fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>
                                    UNIT : AMPCOR205 Overview the meat industry
                                </Text>

                            </Col>

                        </Row>

                        <Row style={styles.firstRow}>

                        </Row>
                    </View>

                    <View style={styles.descriptionView}>
                        <Row style={{ width: '100%', height: '100%' }}>
                            <Col style={{ width: '8%', height: '100%' }}>
                            </Col>
                            <Col style={{ width: '84%' }}>
                                <Row style={{ width: '100%', height: '33.4%', backgroundColor: '#549622' }}>
                                    <Text style={styles.inputDescriptionNew}>
                                        Additional supporting assessment evidence (If Applicable)
                        </Text>


                                </Row>
                                <Row style={{ width: '100%', height: '33.3%', }}>
                                    <Col style={{ width: '90%', height: '100%', borderColor: '#919090', borderWidth: 1 }}>
                                        <Text style={styles.inputDescriptionNew1}>
                                            Workplace Documentation
                        </Text>
                                    </Col>
                                    <Col style={{ width: '10%', height: '100%', borderTopWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: '#919090' }}>
                                        <CheckBox
                                            style={{ flex: 1, padding: 20, alignSelf: 'center', }}
                                            onClick={() => {
                                                this.setState({
                                                    isChecked1: !this.state.isChecked1,

                                                })
                                            }}
                                            isChecked={this.state.isChecked1}
                                        />
                                    </Col>
                                </Row>
                                <Row style={{ width: '100%', height: '33.3%' }}>
                                    <Col style={{ width: '90%', height: '100%', borderColor: '#919090', borderLeftWidth: 1, borderBottomWidth: 1, borderRightWidth: 1 }}>
                                        <Text style={styles.inputDescriptionNew1}>
                                            Assignment/Project
                        </Text>
                                    </Col>
                                    <Col style={{ width: '10%', height: '100%', borderRightWidth: 1, borderBottomWidth: 1, borderColor: '#919090' }}>
                                        <CheckBox
                                            style={{ flex: 1, padding: 20, alignSelf: 'center', }}
                                            onClick={() => {
                                                this.setState({
                                                    isChecked2: !this.state.isChecked2,

                                                })
                                            }}
                                            isChecked={this.state.isChecked2}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col style={{ width: '8%', height: '100%' }}>
                            </Col>
                        </Row>
                    </View>

                    {/* other col before checking right */}
                    <View >

                        {!this.state.isChecked3 && (
                            <Row style={{ width: '100%', height: 70 }}>
                                <Col style={{ width: '8%', height: '100%' }}>
                                </Col>
                                <Col style={{ width: '84%', height: '100%' }}>
                                    <Row style={{ width: '100%', height: '100%' }}>
                                        <Col style={{ width: '90%', height: '100%', borderColor: '#919090', borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1 }}>
                                            <Text style={styles.inputDescriptionNew1}>
                                                Other (please specify)
                                </Text>
                                        </Col>
                                        <Col style={{ width: '10%', height: '100%', borderRightWidth: 1, borderBottomWidth: 1, borderColor: '#919090' }}>
                                            <CheckBox
                                                style={{ flex: 1, padding: 20, alignSelf: 'center', }}
                                                onClick={() => {
                                                    this.setState({
                                                        isChecked3: !this.state.isChecked3,

                                                    })
                                                }}
                                                isChecked={this.state.isChecked3}
                                            />
                                        </Col>
                                    </Row>

                                </Col>
                                <Col style={{ width: '8%', height: '100%' }}>
                                </Col>
                            </Row>
                        )}

                        {this.state.isChecked3 && (
                            <Row style={{ width: '100%', height: 220 }}>
                                <Col style={{ width: '8%', height: '100%' }}>
                                </Col>
                                <Col style={{ width: '84%', height: '100%' }}>
                                    <Row style={{ width: '100%', height: '100%' }}>
                                        <Col style={{ width: '90%', height: '100%', borderColor: '#919090', borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1 }}>
                                            <View style={{ width: '100%', height: '25%' }}>
                                                <Text style={styles.inputDescriptionNew1}>
                                                    Other (please specify)
                                </Text>
                                            </View>
                                            <View style={{ width: '100%', height: '100%' }}>
                                                <Row style={{ height: '100%', width: '100%' }}>
                                                    <Col style={{ width: '1.5%', height: '100%' }}>

                                                    </Col>
                                                    <Col style={{ width: '97%', height: '100%' }}>
                                                        <View style={{ height: 140 }}>
                                                            <TextInput
                                                                style={styles.input}
                                                                multiline={true}
                                                                placeholder="Enter your description here."
                                                            />
                                                        </View>
                                                    </Col>
                                                    <Col style={{ width: '1.5%', height: '100%' }}>

                                                    </Col>
                                                </Row>
                                            </View>
                                        </Col>
                                        <Col style={{ width: '10%', height: '100%', borderRightWidth: 1, borderBottomWidth: 1, borderColor: '#919090' }}>
                                            <CheckBox
                                                style={{ flex: 1, padding: 20, alignSelf: 'center' }}
                                                onClick={() => {
                                                    this.setState({
                                                        isChecked3: !this.state.isChecked3,
                                                    })
                                                }}
                                                isChecked={this.state.isChecked3}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col style={{ width: '8%', height: '100%' }}>
                                </Col>
                            </Row>
                        )}
                    </View>

                    <View style={{ height: '2.5%', width: '100%' }}>

                    </View>
                    <View style={styles.descriptionViewNew}>
                        <Row style={{ width: '100%', height: '100%' }}>
                            <Col style={{ width: '8%', height: '100%' }}>
                            </Col>
                            <Col style={{ width: '84%', height: '100%', borderColor: '#919090', borderWidth: 1 }}>
                                <Row style={{ width: '100%', height: '25%', backgroundColor: '#CFD0CD' }}>
                                    <Text style={styles.boldText}>
                                        Evidence of Participation (EOP) Check
                                               </Text>


                                </Row>
                                <Row style={{ width: '100%', height: '25%', borderColor: '#919090', borderTopWidth: 2, borderBottomWidth: 1 }}>
                                    <Col style={{ width: '25%', height: '100%', borderColor: '#919090', borderRightWidth: 1 }}>
                                        <Text style={styles.tableText}>
                                            Unit Start Date
                        </Text>
                                    </Col>
                                    <Col style={{ width: '25%', height: '100%', borderColor: '#919090', borderRightWidth: 1 }}>
                                        <Text style={styles.tableText}>
                                            2021-03-04
                        </Text>
                                    </Col>
                                    <Col style={{ width: '25%', height: '100%', borderColor: '#919090', borderRightWidth: 1 }}>
                                        <Text style={styles.tableText}>
                                            Unit End Date
                        </Text>
                                    </Col>
                                    <Col style={{ width: '25%', height: '100%' }}>
                                        <Text style={styles.tableText}>
                                            2021-03-25
                        </Text>
                                    </Col>

                                </Row>
                                <Row style={{ width: '100%', height: '50%', borderColor: '#919090', borderTopWidth: 1, borderBottomWidth: 1 }}>
                                    <Col style={{ width: '84%', height: '100%', borderColor: '#919090', borderRightWidth: 1 }}>
                                        <Text style={styles.textDescription}>
                                            Does all Evidence of Participation (EOP) fall within reported start date and end date from this unit?
                                               </Text>
                                    </Col>
                                    <Col style={{ width: '8%', height: '100%', borderColor: '#919090', borderRightWidth: 1 }}>
                                        <Row style={{ width: '100%', height: '20%' }}>

                                        </Row>
                                        <Row style={{ width: '100%', height: '30%', }}>
                                            <Text style={styles.yes}> Yes</Text>
                                        </Row>
                                        <Row style={{ width: '100%', height: '30%' }}>
                                            <CheckBox
                                                style={{ paddingLeft: 35, alignSelf: 'center', }}
                                                onClick={() => {
                                                    this.setState({
                                                        isChecked4: !this.state.isChecked4,

                                                    })
                                                }}
                                                isChecked={this.state.isChecked4}
                                            />
                                        </Row>
                                        <Row style={{ width: '100%', height: '20%' }}>

                                        </Row>

                                    </Col>

                                    <Col style={{ width: '8%', height: '100%', }}>
                                        <Row style={{ width: '100%', height: '20%', }}>

                                        </Row>
                                        <Row style={{ width: '100%', height: '30%', }}>
                                            <Text style={styles.yes}> No</Text>
                                        </Row>
                                        <Row style={{ width: '100%', height: '30%' }}>
                                            <CheckBox
                                                style={{ paddingLeft: 33, alignSelf: 'center', }}
                                                onClick={() => {
                                                    this.setState({
                                                        isChecked5: !this.state.isChecked5,

                                                    })
                                                }}
                                                isChecked={this.state.isChecked5}
                                            />
                                        </Row>
                                        <Row style={{ width: '100%', height: '20%', }}>

                                        </Row>

                                    </Col>
                                </Row>
                            </Col>
                            <Col style={{ width: '8%', height: '100%' }}>
                            </Col>
                        </Row>

                    </View>




                    <View style={{ height: '2%', width: '100%' }}>
                    </View>

                    <View style={styles.descriptionViewRed}>
                        <Row style={{ width: '100%', height: '100%' }}>
                            <Col style={{ width: '8%', height: '100%' }}>
                            </Col>
                            <Col style={{ width: '84%', height: '100%' }}>
                                <Row style={{ width: '100%', height: '100%' }}>
                                    <Text style={styles.inputDescriptionRed}>
                                        * If any EOP is dated either before the start date or after the end date, it must be separated from the student file and the Project Administration Manager notified so that the data reporting issue can be investigated
                        </Text>
                                </Row>
                            </Col>
                            <Col style={{ width: '8%', height: '100%' }}>
                            </Col>
                        </Row>
                    </View>

                    <View style={styles.descriptionViewOutcome}>
                        <Row style={{ width: '100%', height: '100%' }}>
                            <Col style={{ width: '8%', height: '100%' }}>
                            </Col>
                            <Col style={{ width: '84%', height: '100%', borderColor: '#919090', borderWidth: 1 }}>
                                <Row style={{ width: '100%', height: '12%', backgroundColor: '#549622', borderColor: '#919090', borderWidth: 1 }}>
                                    <Text style={styles.outcomeText}>
                                        ASSESSMENT OUTCOME
                                    </Text>
                                </Row>
                                <Row style={{ width: '100%', height: '4%', borderColor: '#919090', borderTopWidth: 1, }}>
                                </Row>
                                <Row style={{ width: '100%', height: '19%' }}>
                                    <Text style={styles.declarationText}>
                                        I declare that there is valid, sufficient, current and authentic assessment evidence on file to substantiate the assessment outcome below.
                        </Text>
                                </Row>
                                <Row style={{ width: '100%', height: '7%', borderColor: '#919090', borderBottomWidth: 2, }}>
                                </Row>
                                <Row style={{ width: '100%', height: '22%', borderColor: '#919090', borderTopWidth: 1, }}>
                                    <Col style={{ width: '10%', height: '100%', borderColor: '#919090', borderRightWidth: 1, }}>
                                        <Text style={styles.dateText}>
                                            Date
                        </Text>
                                    </Col>

                                    <Col style={{ width: '20%', height: '100%', borderColor: '#919090', borderRightWidth: 1, }}>
                                        <Text style={styles.dateText}>
                                            2021-03-23
                        </Text>
                                    </Col>

                                    <Col style={{ width: '45%', height: '100%', borderColor: '#919090', borderRightWidth: 1, }}>
                                        <Text style={styles.dateText}>
                                            COMPETENT (C) or NOT YET COMPETENT (NYC)
                        </Text>
                                    </Col>

                                    <Col style={{ width: '25%', height: '100%' }}>
                                        <DropDownPicker
                                            items={[
                                                { label: 'Competent', value: 'Competent', hidden: true },
                                                { label: 'Not Yet Competent', value: 'Not Yet Competent' },
                                            ]}
                                            labelStyle={{ fontSize: 23, color: '#000000', fontWeight: 'bold' }}
                                            defaultValue={this.state.form}
                                            containerStyle={styles.containerStyleForDropdown}
                                            style={styles.pickerCls}
                                            itemStyle={{
                                                justifyContent: 'flex-start'
                                            }}
                                            dropDownStyle={{ width: '100%' }}
                                            onChangeItem={item => this.setState({
                                                form: item.value
                                            })}
                                        />
                                    </Col>
                                </Row>
                                <Row style={{ width: '100%', height: '7%', borderColor: '#919090', borderTopWidth: 2 }}>
                                </Row>
                                <Row style={{ width: '100%', height: '16%' }}>
                                    <Text style={styles.declarationText}>
                                        I, the student, have reviewed and discussed my performance with the assessor and I believe that I have the skills and knowledge to satisfy the performance criteria for this unit.
                        </Text>
                                </Row>
                                <Row style={{ width: '100%', height: '7%' }}>
                                </Row>

                            </Col>
                            <Col style={{ width: '8%', height: '100%' }}>
                            </Col>
                        </Row>
                    </View>



                    <View style={{ width: '100%', height: 400 }}>
                        <Row style={{ width: '100%', height: '5%'}}>

                        </Row>
                        <Row style={{ width: '100%', height: '46%'}}>
                            <Col style={{ width: '8%'}}>
                            </Col>
                            <Col style={{ width: '12%' }}>
                                <View style={styles.submitContainer}>
                                    <TouchableHighlight
                                        style={styles.submit}
                                        onPress={() => {
                                            this.handleClick3();
                                        }}
                                    >
                                        <Text style={styles.submitText}>Back</Text>
                                    </TouchableHighlight>
                                </View>
                            </Col>
                            <Col style={{ width: '19%', }}>
                            </Col>
                            <Col style={{ width: '41%' }}>

                            </Col>
                            <Col style={{ width: '12%' }}>
                                <View style={styles.submitContainer}>
                                    <TouchableHighlight
                                        style={styles.submit}
                                        onPress={() => {
                                            this.handleClick2();
                                        }}
                                    >
                                        <Text style={styles.submitText}>Next</Text>
                                    </TouchableHighlight>
                                </View>
                            </Col>
                            <Col style={{ width: '6%'}}>
                            </Col>
                        </Row>
                        <Row style={{ width: '100%', height: '33%' }}>

                        </Row>
                    </View>

                    <View style={{ height: '10%', width: '100%' }}>

                    </View>


                </ScrollView>
            </SafeAreaView>
        );
    }
}

//};

const styles = StyleSheet.create({

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

    },

    signaturePadCol1: {
        width: 120,
        height: 100,

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
        paddingLeft: 15,
        lineHeight: 30,
        flex: 1,
        textAlignVertical: 'top',
        fontFamily: 'Helvetica Neue',
        fontSize: 22,
        color: '#555',
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

    dateText: {
        paddingRight: 10,
        paddingTop: 15,
        lineHeight: 23,
        flex: 1,
        textAlignVertical: 'top',
        fontFamily: 'Helvetica Neue',
        fontSize: 23,
        color: '#000000',
        paddingLeft: 15,
        fontWeight: '700'
    },

    tableDescription: {
        paddingRight: 30,
        paddingLeft: 15,
        paddingTop: 15,
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

    outcomeText: {
        paddingRight: 10,
        paddingTop: 15,
        lineHeight: 23,
        flex: 1,
        textAlignVertical: 'top',
        fontFamily: 'Helvetica Neue',
        fontSize: 22,
        color: '#333333',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },


    inputDescriptionRed: {
        paddingRight: 10,
        lineHeight: 23,
        flex: 1,
        textAlignVertical: 'top',
        fontFamily: 'Helvetica Neue',
        fontSize: 22,
        color: '#333333',
        fontWeight: '600',
        color: '#ff0000'
    },


    inputDescriptionNew: {
        paddingTop: 18,
        lineHeight: 23,
        flex: 1,
        textAlignVertical: 'top',
        fontFamily: 'Helvetica Neue',
        fontSize: 22,
        color: '#FFFFFF',
        paddingLeft: 15,
        fontWeight: '700'
    },

    inputDescriptionNew1: {
        paddingTop: 15,
        lineHeight: 23,
        flex: 1,
        textAlignVertical: 'top',
        fontFamily: 'Helvetica Neue',
        fontSize: 22,
        color: '#333333',
        paddingLeft: 15,
    },

    inputDescription11New: {
        paddingTop: 15,
        lineHeight: 23,
        flex: 1,
        textAlignVertical: 'top',
        fontFamily: 'Helvetica Neue',
        fontSize: 20,
        color: '#333333',
        textAlign: 'center'
    },

    declarationText: {
        paddingTop: 15,
        textAlignVertical: 'top',
        fontFamily: 'Helvetica Neue',
        fontSize: 22,
        color: '#333333',
        fontStyle: 'italic',
        paddingLeft: 10
    },

    boldText: {
        paddingTop: 15,
        lineHeight: 23,
        flex: 1,
        textAlignVertical: 'top',
        fontFamily: 'Helvetica Neue',
        fontSize: 23,
        color: '#000000',
        textAlign: 'center',
        fontWeight: '600'
    },

    tableText: {
        paddingTop: 12,
        lineHeight: 23,
        flex: 1,
        textAlignVertical: 'top',
        fontFamily: 'Helvetica Neue',
        fontSize: 23,
        color: '#000000',
        paddingLeft: 15,
        fontWeight: '600'
    },

    textDescription: {
        paddingTop: 20,
        paddingLeft: 15,
        // lineHeight: 23,
        // flex: 1,
        textAlignVertical: 'top',
        fontFamily: 'Helvetica Neue',
        fontSize: 23,
        color: '#333333',
        // textAlign: 'center'
    },

    yes: {

        lineHeight: 23,
        flex: 1,
        textAlignVertical: 'top',
        fontFamily: 'Helvetica Neue',
        fontSize: 22,
        color: '#333333',
        textAlign: 'center',
        fontWeight: 'bold'
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
        height: 180,

    },

    descriptionViewOutcome: {
        width: '100%',
        height: 430,

    },

    descriptionViewRed: {
        width: '100%',
        height: 80,
    },

    descriptionViewNew: {
        width: '100%',
        height: 200,


    },

    descriptionView11: {
        width: '100%',
        height: 160,

    },


    descriptionView111: {
        width: '100%',
        height: 740,

    },
    // descriptionRow: {
    //     height: '26%',
    //     borderColor: 'black',
    //     borderWidth: 1

    // },

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
        width: '100%',
        height: 160,

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
        height: 50,
        fontSize: 10
        // height: 50, shadowOpacity: .5, shadowRadius: 2, shadowOffset: {
        //     width: 2, height: 1,
        // }
    },

    pickerCls: {
        fontSize: 20,


    },

    nestedView: {
        paddingTop: '3%',
        minHeight: 200
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
