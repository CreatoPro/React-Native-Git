/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useState, Fragment } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import SQlite from 'react-native-sqlite-storage';
import axios from 'axios';
import SearchableDropdown from 'react-native-searchable-dropdown';

var items = [];

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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Actions } from 'react-native-router-flux';
import DropDownPicker from 'react-native-dropdown-picker';

import { Row, Column as Col, Grid } from 'react-native-responsive-grid'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import AwesomeLoading from 'react-native-awesome-loading';
let db;


// const Login: () => React$Node = () => {
export default class Home extends Component<{}> {
  clientID;
  clientDetails;
  qualificationID;
  qualificationDetails;
  workAreaID;
  workAreaDetails;
  groupID;
  groupDetails;
  qualificationList = [];
  workAreaList = [];
  studentsList = [];
  groupList = [];

  constructor(props) {
    super(props);
    this.clientData = [];

    this.state = {
      getClient: this.props.getClient,
      showLoader: false,
      client: 0,
      qualification: null,
      workArea: 'Select Work Area',
      group: 'Select Group',
      form: 'Select TAR/WER/SA/AJC',
      color: 'normal',
      username: '',
      showAlert: false,
      message: '',
      title: '',
      selectedItems: [],
      isClientSelected: false,
      isQualificationSelected: false,
      isWorkAreaSelected: false,
      isStudentSelected: false,
      isGroupSelected: false,
      isFormSelected: false,
      selectedForm: '0'
    }

    db = SQlite.openDatabase(
      {
        name: 'tqms_local_db.db',
        createFromLocation: 1
      },
      // this.successToOpenDB,
      //  this.failToOpenDB,
    );
  }

  successToOpenDB() {

    //  'CREATE TABLE IF NOT EXISTS testTable(id INTEGER PRIMARY KEY AUTOINCREMENT, user_id VARCHAR(20),  user_name TEXT, user_type_name TEXT, first_name TEXT,last_name TEXT,email VARCHAR(30),phone VARCHAR(15),published BOOLEAN,user_type BOOLEAN,profile_image VARCHAR, profile_thumb VARCHAR,signature VARCHAR(20)student_phone INT(15), student_address VARCHAR)',

    console.log('called');
    db.transaction(tx => {
      //  tx.executeSql('SELECT * FROM client', [], (tx, results) => {
      // tx.executeSql('SELECT * FROM client WHERE ("28", trainer_id)', [], (tx, results) => {
      tx.executeSql('SELECT * FROM client WHERE ("," || trainer_id || ",") LIKE "%,28,%"', [], (tx, results) => {
        let dataLength = results.rows.length;
        if (dataLength > 0) {
          let helperArray = [];
          for (let i = 0; i < results.rows.length; i++) {
            helperArray.push(results.rows.item(i));
          }
          console.log('checking array : ', JSON.stringify(helperArray));
        } else {
        }
      });
    });

  }

  async componentDidMount() {
    // alert('getclient : ' + this.state.getClient);
    const value = await AsyncStorage.getItem('trainerDetails')
    let user_details = JSON.parse(value);
    // alert('this is value : ' + JSON.stringify(user_details.data));
    if (value !== null) {
      this.setState({
        username: user_details.data.content.profile.first_name + " " + user_details.data.content.profile.last_name,
      });
    }
    else {
    }

    if (this.state.getClient) {
      this.getClientList();
    } else {
      this.syncOnlyClientData();
    }
    // this.getClientList();
  }

  getClientList = () => {
    var data = new FormData();
    data.append('option', 'com_tqms');
    data.append('task', 'api.clientList');
    data.append('auth_key', 'cb199A13x57e46SBQI2Knovf3');
    var config = {
      method: 'post',
      url: 'https://thesmarter.website/tqmsonline/index.php',
      headers: {
        'Cookie': 'a82afbe4b4a8cd65774915e75d0eac3d=1',
      },
      data: data
    };
    axios(config)
      .then(res => {
        if (res.data.status == "200") {
          console.log('API worked', res.data.content.client.length);
          for (let i = 0; i < res.data.content.client.length; i++) {
            db.transaction(function (tx) {
              tx.executeSql(
                'INSERT INTO client(id, client_name, trainer_id) VALUES (?, ?, ?)',
                [res.data.content.client[i].id, res.data.content.client[i].client_name, res.data.content.client[i].trainer_id],
                (tx, results) => {
                  if (results.rowsAffected > 0) {
                    console.log('changes made');
                  } else {
                    console.log('no changes made');
                  }
                }
              )
            });
          }
          this.offlineClientData();
          //  this.getAllData();
        } else {
          alert('API didnt work');
        }
      })
      .catch(error => {
        alert('API did not call');
      });
  }

  async offlineClientData() {
    console.log('offlineClientData called');
    const value = await AsyncStorage.getItem('trainerDetails')
    let user_details = JSON.parse(value);
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM client WHERE ("," || trainer_id || ",") LIKE "%,' + user_details.data.content.profile.id + ',%"', [], (tx, results) => {
        let dataLength = results.rows.length;
        if (dataLength > 0) {
          let helperArray = [];
          for (let i = 0; i < results.rows.length; i++) {
            helperArray.push(results.rows.item(i));
            let obj = {
              label: helperArray[i].client_name,
              value: helperArray[i].id
            }
            this.clientData.push(obj);
          }
          this.setState({
            clientList: helperArray
          });
          this.forceUpdate()
          // this.syncQualificationData();
        } else {
        }
      });
    });
  }

  async functionToFillClientData() {
    console.log('functionToFillClientData called');
    const value = await AsyncStorage.getItem('trainerDetails')
    let user_details = JSON.parse(value);
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM client WHERE ("," || trainer_id || ",") LIKE "%,' + user_details.data.content.profile.id + ',%"', [], (tx, results) => {
        let dataLength = results.rows.length;
        if (dataLength > 0) {
          let helperArray = [];
          for (let i = 0; i < results.rows.length; i++) {
            helperArray.push(results.rows.item(i));
            let obj = {
              label: helperArray[i].client_name,
              value: helperArray[i].id
            }
            this.clientData.push(obj);
          }
          this.setState({
            clientList: helperArray
          });
          this.syncQualificationData();
        } else {
        }
      });
    });
  }

  syncQualificationData = () => {
    console.log('syncQualificationData called');
    var data = new FormData();
    data.append('option', 'com_tqms');
    data.append('task', 'api.qualificationList');
    data.append('auth_key', 'cb199A13x57e46SBQI2Knovf3');
    var config = {
      method: 'post',
      url: 'https://thesmarter.website/tqmsonline/index.php',
      headers: {
        'Cookie': 'a82afbe4b4a8cd65774915e75d0eac3d=1',
      },
      data: data
    };
    axios(config)
      .then(res => {
        if (res.data.status == "200") {
          db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS qualification_table (id INTEGER PRIMARY KEY, qualification VARCHAR, trainer_client_list VARCHAR)', [], (tx, results) => {
              console.log('qualification_table table created');
            })
          })
          for (let i = 0; i < res.data.content.qualifications.length; i++) {
            db.transaction(function (tx) {
              tx.executeSql(
                'INSERT INTO qualification_table(id, qualification, trainer_client_list) VALUES (?, ?, ?)',
                [res.data.content.qualifications[i].id, res.data.content.qualifications[i].qualification, JSON.stringify(res.data.content.qualifications[i].trainer_client_list)],
                (tx, results) => {
                  if (results.rowsAffected > 0) {
                    console.log('changes made qualification table');
                  } else {
                    console.log('no changes made in qualification table');
                  }
                }
              )
            });
          }
          this.syncWorkAreaData();
        } else {
          console.log('API didnt work');
        }
      })
      .catch(error => {
        console.log('API did not call');
      });
  }

  syncWorkAreaData = () => {
    console.log('syncWorkAreaData called');
    var data = new FormData();
    data.append('option', 'com_tqms');
    data.append('task', 'api.workareaList');
    data.append('auth_key', 'cb199A13x57e46SBQI2Knovf3');
    var config = {
      method: 'post',
      url: 'https://thesmarter.website/tqmsonline/index.php',
      headers: {
        'Cookie': 'a82afbe4b4a8cd65774915e75d0eac3d=1',
      },
      data: data
    };
    axios(config)
      .then(res => {
        if (res.data.status == "200") {
          console.log('API worked', res.data.content.workarea.length);
          console.log('API RESponse', JSON.stringify(res.data.content.workarea));
          db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS work_area_table (id INTEGER PRIMARY KEY, workarea_name VARCHAR, trainer_client_list VARCHAR)', [], (tx, results) => {
              console.log('table created');
            })
          })

          for (let i = 0; i < res.data.content.workarea.length; i++) {
            db.transaction(function (tx) {
              tx.executeSql(
                'INSERT INTO work_area_table(id, workarea_name, trainer_client_list) VALUES (?, ?, ?)',
                [res.data.content.workarea[i].id, res.data.content.workarea[i].workarea_name, JSON.stringify(res.data.content.workarea[i].trainer_client_list)],
                (tx, results) => {
                  if (results.rowsAffected > 0) {
                    console.log('changes made in work_area table');
                  } else {
                    console.log('no changes made in work_area table');
                  }
                }
              )
            });
          }
          this.syncStudentData();
        } else {
          console.log('API didnt work');
        }
      })
      .catch(error => {
        console.log('API did not call');
      });
  }

  syncStudentData = () => {
    console.log('syncStudentData called');
    var data = new FormData();
    data.append('option', 'com_tqms');
    data.append('task', 'api.studentList');
    data.append('auth_key', 'cb199A13x57e46SBQI2Knovf3');
    var config = {
      method: 'post',
      url: 'https://thesmarter.website/tqmsonline/index.php',
      headers: {
        'Cookie': 'a82afbe4b4a8cd65774915e75d0eac3d=1',
      },
      data: data
    };
    axios(config)
      .then(res => {
        if (res.data.status == "200") {
          db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS students_table (id INTEGER PRIMARY KEY, student_name VARCHAR, trainer_client_list VARCHAR)', [], (tx, results) => {
              console.log('table created students');
            })
          })

          for (let i = 0; i < res.data.content.student.length; i++) {
            db.transaction(function (tx) {
              tx.executeSql(
                'INSERT INTO students_table(id, student_name, trainer_client_list) VALUES (?, ?, ?)',
                [res.data.content.student[i].id, res.data.content.student[i].student_name, JSON.stringify(res.data.content.student[i].trainer_client_list)],
                (tx, results) => {
                  if (results.rowsAffected > 0) {
                    console.log('changes made into students');
                  } else {
                    console.log('no changes made into students');
                  }
                }
              )
            });
          }
          this.syncGroupData();
        } else {
          alert('API didnt work');
        }
      })
      .catch(error => {
        alert('API did not call');
      });
  }

  syncGroupData = () => {
    console.log('syncGroupData called');
    var data = new FormData();
    data.append('option', 'com_tqms');
    data.append('task', 'api.groupList');
    data.append('auth_key', 'cb199A13x57e46SBQI2Knovf3');
    var config = {
      method: 'post',
      url: 'https://thesmarter.website/tqmsonline/index.php',
      headers: {
        'Cookie': 'a82afbe4b4a8cd65774915e75d0eac3d=1',
      },
      data: data
    };
    axios(config)
      .then(res => {
        if (res.data.status == "200") {
          db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS group_table (id INTEGER PRIMARY KEY, group_name VARCHAR, qualification_list VARCHAR)', [], (tx, results) => {
              console.log('table created group_table');
            })
          })

          for (let i = 0; i < res.data.content.group.length; i++) {
            db.transaction(function (tx) {
              tx.executeSql(
                'INSERT INTO group_table (id, group_name, qualification_list) VALUES (?, ?, ?)',
                [res.data.content.group[i].id, res.data.content.group[i].group_name, JSON.stringify(res.data.content.group[i].qualification_list)],
                (tx, results) => {
                  if (results.rowsAffected > 0) {
                    console.log('changes made in group table');
                  } else {
                    console.log('no changes made in group table');
                  }
                }
              )
            });
          }

          this.setState({
            showLoader: !this.state.showLoader,
            message: 'Database has been synced from server',
            title: 'Success!'
          })
          this.showAlert();
        } else {
          console.log('API didnt work');
        }
      })
      .catch(error => {
        console.log('API did not call');
      });
  }


  async callAnotherFunction() {
    const value = await AsyncStorage.getItem('trainerDetails')
    let user_details = JSON.parse(value);
    db.transaction(tx => {
      //  tx.executeSql('SELECT * FROM client', [], (tx, results) => {
      // tx.executeSql('SELECT * FROM client WHERE ("28", trainer_id)', [], (tx, results) => {
      tx.executeSql('SELECT * FROM client WHERE ("," || trainer_id || ",") LIKE "%,' + user_details.data.content.profile.id + ',%"', [], (tx, results) => {
        let dataLength = results.rows.length;
        if (dataLength > 0) {
          let helperArray = [];
          for (let i = 0; i < results.rows.length; i++) {
            helperArray.push(results.rows.item(i));
            let obj = {
              label: helperArray[i].client_name,
              value: helperArray[i].id
            }
            this.clientData.push(obj);
            console.log('checking client data ', this.clientData[i]);
          }
          console.log('checking array : ', JSON.stringify(helperArray));
          this.setState({
            clientList: helperArray
          });
          console.log('checking state value : ' + JSON.stringify(this.state.clientList));
        } else {
        }
      });
    });
  }

  handleClick = () => {
    Actions.Profile();
  };

  syncFromServer = () => {
    this.setState({
      showLoader: true
    });
    this.syncClientData();
  }

  syncOnlyClientData = () => {
    console.log('syncOnlyClientData function called');

    var data = new FormData();
    data.append('option', 'com_tqms');
    data.append('task', 'api.clientList');
    data.append('auth_key', 'cb199A13x57e46SBQI2Knovf3');
    var config = {
      method: 'post',
      url: 'https://thesmarter.website/tqmsonline/index.php',
      headers: {
        'Cookie': 'a82afbe4b4a8cd65774915e75d0eac3d=1',
      },
      data: data
    };
    axios(config)
      .then(res => {
        if (res.data.status == "200") {
          console.log('API worked', res.data.content.client.length);
          for (let i = 0; i < res.data.content.client.length; i++) {
            db.transaction(function (tx) {
              tx.executeSql(
                'INSERT INTO client(id, client_name, trainer_id) VALUES (?, ?, ?)',
                [res.data.content.client[i].id, res.data.content.client[i].client_name, res.data.content.client[i].trainer_id],
                (tx, results) => {
                  if (results.rowsAffected > 0) {
                    console.log('changes made in client table');
                  } else {
                    console.log('no changes made in client table');
                  }
                }
              )
            });
          }
          this.functionToFillOnlyClientData();
          //  this.getAllData();
        } else {
          alert('API didnt work');
        }
      })
      .catch(error => {
        alert('API did not call');
      });
  }

  async functionToFillOnlyClientData() {
    console.log('functionToFillOnlyClientData called');
    const value = await AsyncStorage.getItem('trainerDetails')
    let user_details = JSON.parse(value);
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM client WHERE ("," || trainer_id || ",") LIKE "%,' + user_details.data.content.profile.id + ',%"', [], (tx, results) => {
        let dataLength = results.rows.length;
        if (dataLength > 0) {
          let helperArray = [];
          for (let i = 0; i < results.rows.length; i++) {
            helperArray.push(results.rows.item(i));
            let obj = {
              label: helperArray[i].client_name,
              value: helperArray[i].id
            }
            this.clientData.push(obj);
          }
          this.setState({
            clientList: helperArray
          });
        } else {
        }
      });
    });
  }


  syncClientData = () => {
    console.log('syncClientData function called');

    var data = new FormData();
    data.append('option', 'com_tqms');
    data.append('task', 'api.clientList');
    data.append('auth_key', 'cb199A13x57e46SBQI2Knovf3');
    var config = {
      method: 'post',
      url: 'https://thesmarter.website/tqmsonline/index.php',
      headers: {
        'Cookie': 'a82afbe4b4a8cd65774915e75d0eac3d=1',
      },
      data: data
    };
    axios(config)
      .then(res => {
        if (res.data.status == "200") {
          console.log('API worked', res.data.content.client.length);
          for (let i = 0; i < res.data.content.client.length; i++) {
            db.transaction(function (tx) {
              tx.executeSql(
                'INSERT INTO client(id, client_name, trainer_id) VALUES (?, ?, ?)',
                [res.data.content.client[i].id, res.data.content.client[i].client_name, res.data.content.client[i].trainer_id],
                (tx, results) => {
                  if (results.rowsAffected > 0) {
                    console.log('changes made in client table');
                  } else {
                    console.log('no changes made in client table');
                  }
                }
              )
            });
          }
          this.functionToFillClientData();
          //  this.getAllData();
        } else {
          alert('API didnt work');
        }
      })
      .catch(error => {
        alert('API did not call');
      });
  }



  showAlert = () => {
    this.setState({
      showAlert: true
    });

  };
  syncToServer = () => {
    this.setState({
      message: 'Sync to server function will be implemented later, once forms are available',
      title: 'Message'
    });
    this.showAlert();
    // alert('Sync to server function will be implemented later, once forms are available');
  }

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  handleClick2 = () => {



    if (!this.state.isClientSelected) {
      this.setState({
        message: 'Please select client',
        title: 'Error!'
      });
      this.showAlert();
      return
    }
    if (!this.state.isQualificationSelected) {
      this.setState({
        message: 'Please select qualification',
        title: 'Error!'
      }); 
      this.showAlert();
      return
    }
    if (!this.state.isWorkAreaSelected) {
      this.setState({
        message: 'Please select work area',
        title: 'Error!'
      });
      this.showAlert();
      return
    }
    if (!this.state.isStudentSelected) {
      this.setState({
        message: 'Please select student',
        title: 'Error!'
      });
      this.showAlert();
      return
    }
    if (!this.state.isGroupSelected) {
      this.setState({
        message: 'Please select group',
        title: 'Error!'
      });
      this.showAlert();
      return
    }
    if (!this.state.isFormSelected) {
      this.setState({
        message: 'Please select a form',
        title: 'Error!'
      });
      this.showAlert();
      return
    }

    if (this.state.selectedForm == 1) {
      Actions.TarForm({
        client: this.clientDetails, qualification: this.qualificationDetails,
        workArea: this.workAreaDetails,
        student: this.state.selectedItems,
        group: this.groupDetails
      });
    }
    else if (this.state.selectedForm == 2) {
      Actions.WerForm();
    } else if (this.state.selectedForm == 3) {
      Actions.SaForm();
    } else if (this.state.selectedForm == 4) {
      Actions.AjcForm();
    }
    //  Actions.WerForm();
    // Actions.SaForm();
    // Actions.AjcForm();
  }

  changeForm = (item) => {

    this.setState({
      isFormSelected: true,
      selectedForm: item.value
    });

  }

  changeGroup = (item) => {
    this.setState({
      isGroupSelected: true,
      isFormSelected: false
    });
    this.groupID = item.value;
    this.groupDetails = item;
  }

  changeWorkArea = (item) => {

    this.setState({
      isWorkAreaSelected: true,
      isStudentSelected: false,
      isGroupSelected: false,
      isFormSelected: false,
      selectedItems: []
    });
    this.workAreaID = item.value;
    this.workAreaDetails = item;

    this.studentsList = [];
    this.setState({
      showLoader: true
    });
    this.getAllStudent();


    // var data = new FormData();
    // data.append('option', 'com_tqms');
    // data.append('task', 'api.studentList');
    // data.append('auth_key', 'cb199A13x57e46SBQI2Knovf3');
    // var config = {
    //   method: 'post',
    //   url: 'https://thesmarter.website/tqmsonline/index.php',
    //   headers: {
    //     'Cookie': 'a82afbe4b4a8cd65774915e75d0eac3d=1',
    //   },
    //   data: data
    // };
    // axios(config)
    //   .then(res => {
    //     if (res.data.status == "200") {

    //       db.transaction(tx => {
    //         tx.executeSql('CREATE TABLE IF NOT EXISTS students_table (id INTEGER PRIMARY KEY, student_name VARCHAR, trainer_client_list VARCHAR)', [], (tx, results) => {
    //           console.log('table created students');
    //         })
    //       })

    //       for (let i = 0; i < res.data.content.student.length; i++) {
    //         db.transaction(function (tx) {
    //           tx.executeSql(
    //             'INSERT INTO students_table(id, student_name, trainer_client_list) VALUES (?, ?, ?)',
    //             [res.data.content.student[i].id, res.data.content.student[i].student_name, JSON.stringify(res.data.content.student[i].trainer_client_list)],
    //             (tx, results) => {
    //               if (results.rowsAffected > 0) {
    //                 console.log('changes made into students');
    //               } else {
    //                 console.log('no changes made into students');
    //               }
    //             }
    //           )
    //         });
    //       }
    //       this.studentsList = [];
    //       this.setState({
    //         showLoader: true
    //       });
    //       this.getAllStudent();
    //     } else {
    //       alert('API didnt work');
    //     }
    //   })
    //   .catch(error => {
    //     alert('API did not call');
    //   });
  }


  changeQualification = (item) => {
    this.setState({
      showLoader: true
    });
    this.setState({
      isQualificationSelected: true,
      isWorkAreaSelected: false,
      isStudentSelected: false,
      isGroupSelected: false,
      isFormSelected: false,
      selectedItems: []
    });
    this.qualificationID = item.value;
    this.qualificationDetails = item;

    this.workAreaList = [];
    this.getAllWorkArea();


    // var data = new FormData();
    // data.append('option', 'com_tqms');
    // data.append('task', 'api.workareaList');
    // data.append('auth_key', 'cb199A13x57e46SBQI2Knovf3');
    // var config = {
    //   method: 'post',
    //   url: 'https://thesmarter.website/tqmsonline/index.php',
    //   headers: {
    //     'Cookie': 'a82afbe4b4a8cd65774915e75d0eac3d=1',
    //   },
    //   data: data
    // };
    // axios(config)
    //   .then(res => {
    //     if (res.data.status == "200") {
    //       console.log('API worked', res.data.content.workarea.length);
    //       console.log('API RESponse', JSON.stringify(res.data.content.workarea));
    //       db.transaction(tx => {
    //         tx.executeSql('CREATE TABLE IF NOT EXISTS work_area_table (id INTEGER PRIMARY KEY, workarea_name VARCHAR, trainer_client_list VARCHAR)', [], (tx, results) => {

    //           //  alert('executed the select query');
    //           console.log('table created');
    //         })
    //       })

    //       for (let i = 0; i < res.data.content.workarea.length; i++) {
    //         db.transaction(function (tx) {
    //           tx.executeSql(
    //             'INSERT INTO work_area_table(id, workarea_name, trainer_client_list) VALUES (?, ?, ?)',
    //             [res.data.content.workarea[i].id, res.data.content.workarea[i].workarea_name, JSON.stringify(res.data.content.workarea[i].trainer_client_list)],
    //             (tx, results) => {
    //               if (results.rowsAffected > 0) {
    //                 console.log('changes made');
    //               } else {
    //                 console.log('no changes made');
    //               }
    //             }
    //           )
    //         });
    //       }
    //       this.workAreaList = [];
    //       this.getAllWorkArea();
    //     } else {
    //       alert('API didnt work');
    //     }
    //   })
    //   .catch(error => {
    //     alert('API did not call');
    //   });
  }

  changeClient = (item) => {

    this.setState({
      showLoader: true
    });
    let qualification = null;
    this.setState({
      qualification: null
    })
    this.forceUpdate();
    this.setState({
      isClientSelected: true,
      isQualificationSelected: false,
      isWorkAreaSelected: false,
      isStudentSelected: false,
      isGroupSelected: false,
      isFormSelected: false,
      selectedItems: [],
    });
    this.qualificationList = [];
    this.workAreaList = [];
    this.studentsList = [];
    this.groupList = [];

    this.clientID = item.value;
    this.clientDetails = item;

    this.qualificationList = [];
    this.forceUpdate();
    this.getAllData();

    // var data = new FormData();
    // data.append('option', 'com_tqms');
    // data.append('task', 'api.qualificationList');
    // data.append('auth_key', 'cb199A13x57e46SBQI2Knovf3');
    // var config = {
    //   method: 'post',
    //   url: 'https://thesmarter.website/tqmsonline/index.php',
    //   headers: {
    //     'Cookie': 'a82afbe4b4a8cd65774915e75d0eac3d=1',
    //   },
    //   data: data
    // };
    // axios(config)
    //   .then(res => {
    //     if (res.data.status == "200") {

    //       db.transaction(tx => {
    //         tx.executeSql('CREATE TABLE IF NOT EXISTS qualification_table (id INTEGER PRIMARY KEY, qualification VARCHAR, trainer_client_list VARCHAR)', [], (tx, results) => {
    //           console.log('qualification_table table created');
    //         })
    //       })

    //       for (let i = 0; i < res.data.content.qualifications.length; i++) {
    //         db.transaction(function (tx) {
    //           tx.executeSql(
    //             'INSERT INTO qualification_table(id, qualification, trainer_client_list) VALUES (?, ?, ?)',
    //             [res.data.content.qualifications[i].id, res.data.content.qualifications[i].qualification, JSON.stringify(res.data.content.qualifications[i].trainer_client_list)],
    //             (tx, results) => {
    //               if (results.rowsAffected > 0) {
    //                 console.log('changes made');
    //               } else {
    //                 console.log('no changes made');
    //               }
    //             }
    //           )
    //         });
    //       }
    //       this.qualificationList = [];
    //       this.forceUpdate();
    //       this.getAllData();
    //     } else {
    //       console.log('API didnt work');
    //     }
    //   })
    //   .catch(error => {
    //     console.log('API did not call');
    //   });
  }

  async getAllStudent() {
    console.log('getAllStudent function called');
    const value = await AsyncStorage.getItem('trainerDetails')
    let user_details = JSON.parse(value);
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM students_table ', [], (tx, results) => {
        let dataLength = results.rows.length;
        if (dataLength > 0) {
          let helperArray = [];
          for (let i = 0; i < results.rows.length; i++) {
            let obj = {
              id: results.rows.item(i).id,
              student_name: results.rows.item(i).student_name,
              trainer_client_list: results.rows.item(i).trainer_client_list
            }
            helperArray.push(obj);
          }

          for (let j = 0; j < helperArray.length; j++) {
            let newObj = [];
            newObj = JSON.parse(helperArray[j].trainer_client_list);
            console.log('checking new jason parse val : ', newObj);
            for (let k = 0; k < newObj.length; k++) {

              if (newObj[k].client_id === (this.clientID.toString())) {

                console.log('matched matched matched');
                let createdObj = {
                  name: helperArray[j].student_name,
                  id: helperArray[j].id
                }
                this.studentsList.push(createdObj);
                // console.log('checking qualification data ', this.qualificationList[0]);
              }
            }
          }
          this.studentsList = this.studentsList;
          this.forceUpdate();
          this.fetchGroup();
        } else {
          console.log('nothing returned from SELECT Query student table');
        }
      });
    });
  }

  fetchGroup = () => {
    this.groupList = [];
    this.forceUpdate();
    this.getAllGroupData();

    // var data = new FormData();
    // data.append('option', 'com_tqms');
    // data.append('task', 'api.groupList');
    // data.append('auth_key', 'cb199A13x57e46SBQI2Knovf3');
    // var config = {
    //   method: 'post',
    //   url: 'https://thesmarter.website/tqmsonline/index.php',
    //   headers: {
    //     'Cookie': 'a82afbe4b4a8cd65774915e75d0eac3d=1',
    //   },
    //   data: data
    // };
    // axios(config)
    //   .then(res => {
    //     if (res.data.status == "200") {
    //       console.log('API worked', res.data.content.group.length);
    //       console.log('API RESponse', JSON.stringify(res.data.content.group));
    //       db.transaction(tx => {
    //         tx.executeSql('CREATE TABLE IF NOT EXISTS group_table (id INTEGER PRIMARY KEY, group_name VARCHAR, qualification_list VARCHAR)', [], (tx, results) => {

    //           //  alert('executed the select query');
    //           console.log('table created');
    //         })
    //       })

    //       for (let i = 0; i < res.data.content.group.length; i++) {
    //         db.transaction(function (tx) {
    //           tx.executeSql(
    //             'INSERT INTO group_table (id, group_name, qualification_list) VALUES (?, ?, ?)',
    //             [res.data.content.group[i].id, res.data.content.group[i].group_name, JSON.stringify(res.data.content.group[i].qualification_list)],
    //             (tx, results) => {
    //               if (results.rowsAffected > 0) {
    //                 console.log('changes made');
    //               } else {
    //                 console.log('no changes made');
    //               }
    //             }
    //           )
    //         });
    //       }
    //       this.groupList = [];
    //       this.forceUpdate();
    //       this.getAllGroupData();

    //     } else {
    //       alert('API didnt work');
    //     }
    //   })
    //   .catch(error => {
    //     alert('API did not call');
    //   });
  }


  async getAllGroupData() {

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM group_table ', [], (tx, results) => {
        let dataLength = results.rows.length;
        if (dataLength > 0) {
          let helperArray = [];
          for (let i = 0; i < results.rows.length; i++) {
            let obj = {
              id: results.rows.item(i).id,
              group_name: results.rows.item(i).group_name,
              qualification_list: results.rows.item(i).qualification_list
            }
            helperArray.push(obj);
          }

          for (let j = 0; j < helperArray.length; j++) {
            let newObj = [];
            newObj = JSON.parse(helperArray[j].qualification_list);
            for (let k = 0; k < newObj.length; k++) {
              if (newObj[k] === (this.qualificationID.toString())) {
                console.log('matched matched matched');
                let createdObj = {
                  label: helperArray[j].group_name,
                  value: helperArray[j].id
                }
                this.groupList.push(createdObj);
                // console.log('checking qualification data ', this.qualificationList[0]);
              }
            }
          }
          this.groupList = this.groupList;
          this.forceUpdate();
          this.setState({
            showLoader: !this.state.showLoader
          });
        } else {
          console.log('nothing returned from SELECT Query');
        }
      });
    });
  }

  async getAllWorkArea() {
    console.log('getAllWorkArea function called');
    const value = await AsyncStorage.getItem('trainerDetails')
    let user_details = JSON.parse(value);
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM work_area_table ', [], (tx, results) => {
        let dataLength = results.rows.length;
        if (dataLength > 0) {
          let helperArray = [];
          for (let i = 0; i < results.rows.length; i++) {
            let obj = {
              id: results.rows.item(i).id,
              workarea_name: results.rows.item(i).workarea_name,
              trainer_client_list: results.rows.item(i).trainer_client_list
            }
            helperArray.push(obj);
          }

          for (let j = 0; j < helperArray.length; j++) {
            let newObj = [];
            newObj = JSON.parse(helperArray[j].trainer_client_list);
            for (let k = 0; k < newObj.length; k++) {
              if (newObj[k].trainer_id === user_details.data.content.profile.id && newObj[k].client_id === (this.clientID.toString())) {
                console.log('matched matched matched');
                let createdObj = {
                  label: helperArray[j].workarea_name,
                  value: helperArray[j].id
                }
                this.workAreaList.push(createdObj);
              }
            }
          }
          this.workAreaList = this.workAreaList;
          this.forceUpdate();
          this.setState({
            showLoader: !this.state.showLoader
          })
        } else {
          console.log('nothing returned from SELECT Query');
        }
      });
    });
  }

  async getAllData() {
    console.log('getAllData function called');
    const value = await AsyncStorage.getItem('trainerDetails')
    let user_details = JSON.parse(value);
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM qualification_table ', [], (tx, results) => {
        let dataLength = results.rows.length;
        if (dataLength > 0) {
          let helperArray = [];
          for (let i = 0; i < results.rows.length; i++) {
            let obj = {
              id: results.rows.item(i).id,
              qualification: results.rows.item(i).qualification,
              trainer_client_list: results.rows.item(i).trainer_client_list
            }
            helperArray.push(obj);
          }
          // newObj = JSON.parse(helperArray.length);
          //  this.qualificationList = [];
          let tempArray = [];
          for (let j = 0; j < helperArray.length; j++) {
            let newObj = [];
            newObj = JSON.parse(helperArray[j].trainer_client_list);

            for (let k = 0; k < newObj.length; k++) {

              if (newObj[k].trainer_id === user_details.data.content.profile.id && newObj[k].client_id === (this.clientID.toString())) {

                console.log('matched matched matched');
                let createdObj = {
                  label: helperArray[j].qualification,
                  value: helperArray[j].id
                }
                this.qualificationList.push(createdObj);
                // console.log('checking qualification data ', this.qualificationList[0]);
              }
            }
          }
          this.qualificationList = this.qualificationList;
          this.forceUpdate();
          this.setState({
            showLoader: !this.state.showLoader
          })
          console.log('checking the output array : ', JSON.stringify(this.qualificationList));
          //  console.log('checking array : ', JSON.parse(helperArray[0].trainer_client_list));
        } else {
          console.log('nothing returned from SELECT Query');
        }
      });
    });
  }

  render() {
    const { showAlert } = this.state;

    return (
      <SafeAreaView>
        <ScrollView
          keyboardShouldPersistTaps='always'>

          <AwesomeLoading indicatorId={2} size={50} isActive={this.state.showLoader} text="Please wait.." style={{ backgroundColor: 'transparent' }} />
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
              style={styles.logo} />
          </View>
          <View style={styles.userDetails}>
            <Row>
              <Col style={styles.userDetailsCol}>
                <View style={{ paddingTop: '1%', paddingLeft: '5%' }}>
                  <Text style={{ fontSize: 20, fontWeight: "600", color: 'white' }}>
                    User Name : Hello, {this.state.username}
                  </Text>
                </View>
              </Col>

              <Col style={styles.userDetailsCol3}>
                <TouchableHighlight
                  style={styles.profileBtn}
                  onPress={this.syncFromServer}
                  underlayColor={'#809fff'}>
                  <Text style={styles.profileText}>Sync From Server
                  </Text>
                </TouchableHighlight>
              </Col>

              <Col style={styles.userDetailsCol4}>
                <TouchableHighlight
                  style={styles.profileBtn}
                  onPress={this.syncToServer}
                  underlayColor={'#809fff'}>
                  <Text style={styles.profileText}>Sync To Server
                    </Text>
                </TouchableHighlight>

              </Col>
              <Col style={styles.userDetailsCol1}>
                <TouchableHighlight
                  style={styles.profileBtn}
                  onPress={() => this.handleClick('save')}
                  underlayColor={'#809fff'}>
                  <Text style={styles.profileText}>Profile
                    <FontAwesomeIcon icon={faUser} style={{ color: 'white', marginLeft: 20 }} />
                  </Text>

                </TouchableHighlight>
              </Col>
            </Row>
          </View>
          {/* <Row style={styles.newcls}>
            
          </Row> */}
          <View style={styles.wholeBody}>

            <Row >
              <Col style={{ width: '25%' }}>
              </Col>

              <Col style={{ width: '50%', height: 800, justifyContent: 'center' }}>
                <View style={styles.pickerContainer}>
                  <DropDownPicker
                    items={this.clientData}

                    labelStyle={{ fontSize: 20, color: '#555555', fontWeight: '500' }}
                    defaultNull
                    placeholder="Select Client"
                    containerStyle={styles.containerStyleForDropdown}
                    style={styles.pickerCls}
                    itemStyle={{
                      justifyContent: 'flex-start',
                    }}
                    dropDownStyle={{ width: '100%', fontSize: 50, fontWeight: 'bold' }}
                    onChangeItem={item => this.changeClient(item)}
                  />
                  <View style={styles.nestedView}>
                    <DropDownPicker
                      items={this.qualificationList}
                      labelStyle={{ fontSize: 20, color: '#555555', fontWeight: '500' }}

                      placeholder="Select Qualification"
                      containerStyle={styles.containerStyleForDropdown}
                      style={styles.pickerCls}
                      itemStyle={{
                        justifyContent: 'flex-start'
                      }}
                      dropDownStyle={{ width: '100%' }}
                      onChangeItem={item => this.changeQualification(item)}
                    />

                    <View style={styles.nestedView}>
                      <DropDownPicker
                        items={this.workAreaList}
                        labelStyle={{ fontSize: 20, color: '#555555', fontWeight: '500' }}
                        defaultNull
                        placeholder="Select Work Area"
                        containerStyle={styles.containerStyleForDropdown}
                        style={styles.pickerCls}
                        itemStyle={{
                          justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ width: '100%' }}
                        onChangeItem={item => this.changeWorkArea(item)}

                      />

                      <View style={styles.nestedView}>

                        <Fragment>
                          <SearchableDropdown
                            multi={true}
                            selectedItems={this.state.selectedItems}
                            onItemSelect={(item) => {
                              const items = this.state.selectedItems;
                              items.push(item)
                              this.setState({
                                selectedItems: items,
                                isStudentSelected: true,
                                isGroupSelected: false,
                                isFormSelected: false
                              });
                            }}
                            containerStyle={{ padding: 0 }}
                            onRemoveItem={(item, index) => {
                              const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
                              this.setState({ selectedItems: items });
                            }}
                            itemStyle={{
                              padding: 10,
                              backgroundColor: 'white',
                              alignItems: 'center',
                              textAlign: 'center'
                            }}
                            itemTextStyle={{ fontSize: 18, color: '#555555', fontWeight: '500' }}
                            itemsContainerStyle={{ maxHeight: 120, borderColor: 'grey', borderWidth: 1 }}
                            items={this.studentsList}
                            defaultIndex={2}
                            chip={true}
                            resetValue={false}
                            textInputProps={
                              {
                                placeholder: "Select Student",
                                placeholderTextColor: '#555555',
                                fontWeight: '500',
                                fontSize: 20,
                                // underlineColorAndroid: "transparent",
                                style: {
                                  padding: 12,
                                  borderWidth: 1,
                                  borderColor: 'grey',
                                  borderRadius: 5,
                                },
                                // onTextChange: text => alert(text)
                              }
                            }
                            listProps={
                              {
                                nestedScrollEnabled: true,
                              }
                            }
                          />
                        </Fragment>

                        <View style={styles.nestedView}>
                          <DropDownPicker
                            items={this.groupList}
                            labelStyle={{ fontSize: 20, color: '#555555', fontWeight: '500' }}
                            defaultNull
                            placeholder="Select Group"
                            containerStyle={styles.containerStyleForDropdown}
                            style={styles.pickerCls}
                            itemStyle={{
                              justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ width: '100%' }}
                            onChangeItem={item => this.changeGroup(item)}

                          />
                          <View style={styles.nestedView}>
                            <DropDownPicker
                              items={[
                                { label: 'Select TAR/WER/SA/AJC', value: 'Select TAR/WER/SA/AJC', hidden: true },
                                { label: 'TAR (Training Attendance Record)', value: '1' },
                                { label: 'WER (Workplace Evidence Report)', value: '2' },
                                { label: 'SA (Supervisor Appraisal)', value: '3' },
                                { label: 'AJC (Assesor Judgement Coversheet)', value: '4' },
                              ]}
                              labelStyle={{ fontSize: 20, color: '#555555', fontWeight: '500' }}
                              defaultValue={this.state.form}
                              containerStyle={styles.containerStyleForDropdown}
                              style={styles.pickerCls}
                              itemStyle={{
                                justifyContent: 'flex-start'
                              }}
                              dropDownStyle={{ width: '100%' }}
                              onChangeItem={item => this.changeForm(item)}

                            />

                            <View style={styles.submitContainer}>
                              <TouchableHighlight
                                style={styles.submit}
                                onPress={this.handleClick2}
                              >
                                <Text style={styles.submitText}>Submit</Text>
                              </TouchableHighlight>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>

                  </View>



                </View>
              </Col>

              <Col style={{ width: '25%' }}>
                {/* <Row style={{ width: '100%', height: '30%'}}>
                <Col style={{ width: '10%'}}>
                </Col>
                <Col style={{ width: '90%'}}>
                  <Row style={{ width: '100%', height: '20%'}}>
                    <View style={{ justifyContent: 'center', alignContent: 'center', alignContent: 'center' }}>
                      <Text style={{ paddingLeft: '30%' }}>Sync Data</Text>
                    </View>

                  </Row>
                  <Row>
                    <View>
                      <TouchableHighlight
                        style={styles.profileBtn111}
                        onPress={this.syncFromServer}
                        underlayColor={'#809fff'}>
                        <Text style={styles.profileText}>Sync from Server
                        </Text>

                      </TouchableHighlight>
                    </View>
                  </Row>
                  <Row style={{paddingTop: 2}}>
                    <View>
                      <TouchableHighlight
                        style={styles.profileBtn111}
                        onPress={this.syncToServer}
                        underlayColor={'#809fff'}>
                        <Text style={styles.profileText}>Sync to Server
                        </Text>

                      </TouchableHighlight>
                    </View>
                  </Row>
                </Col>
              </Row> */}
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
  newcls: {
    width: '10%',
  },

  userDetailsCol: {
    width: '44%',

  },
  userDetailsCol1: {
    width: '15%',

  },
  userDetailsCol3: {
    width: '18%',

  },

  userDetailsCol4: {
    width: '18%',

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
  profileBtn111: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    height: 50,
    width: 200,
    marginLeft: '10%',
    justifyContent: 'center',
    backgroundColor: '#549622',
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
    paddingTop: '2%',
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
    paddingTop: 30
  },

  wholeBody: {
    backgroundColor: '#ffffff',
    height: 1000,
    width: '100%',

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
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20
  },

  submit: {

    marginTop: 10,
    borderRadius: 5,
    height: 50,
    width: '50%',
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
