/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import SQlite from 'react-native-sqlite-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  ActivityIndicator
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { BASEURL } from '../routes/constants/Constants';
let db;


export default class Login extends Component<{}> {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      dataSource: [],
      showAlert: false,
      message: '',
      usersList: [],
      showLoader: false
    }

  //  db = SQlite.openDatabase(
  //     {
  //       name: 'tqms_local_db.db',
  //       createFromLocation: 1
  //     },
  //     this.successToOpenDB,
  //   //  this.failToOpenDB,
  //   );

  };

   getData = async () => {
   //  alert('function called');
    try {
      const value = await AsyncStorage.getItem('trainerDetails')
      if(value !== null) {
        alert('this is value : ' + value);
      }
      else {
        alert('else');
      }
    } catch(e) {
      alert('no data found');
      // error reading value
    }
  }

   storeData = async () => {
    try {
      await AsyncStorage.setItem('username', 'Zaheen')
      alert('save');
    } catch (e) {
      alert('could not save');
      // saving error
    }
  }

  insertData = async() => {

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
          let helperArrays = [];
         // helperArrays = res.data.content.client;
          console.log('API worked', res.data.content.client.length);
          for (let i = 0; i < res.data.content.client.length; i++) {
          //  helperArrays.push(res.data.content.client[i]);

          db.transaction(function (tx) {
            tx.executeSql(
              'INSERT INTO client(id, client_name, trainer_id) VALUES (?, ?, ?)',
              [res.data.content.client[i].id, res.data.content.client[i].client_name, res.data.content.client[i].trainer_id],
              (tx, results) => {
                if (results.rowsAffected > 0) {
                 // alert('changes made');
                 console.log('changes made');
                } else {
                 // alert('no changes made');
                 console.log('no changes made');
                }
              }
            )
          });

          }
          console.log('final array : ' , helperArrays);
         // console.log('returned data from API', JSON.stringify(res.data.client.length));
        } else {
         alert('API didnt work');
        }
      })
      .catch(error => {
      alert('API did not call');
      });
return
    alert('insert data');
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO client(id, client_name, trainer_id) VALUES (?, ?, ?)',
        ['10010001','bonnie', 'DON KR'],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            alert('changes made');
          } else {
            alert('no changes made');
          }
        }
      )
    });
  }

  createNewTableFunction() {
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS abccc (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id VARCHAR(20),  user_name TEXT, user_type_name TEXT, first_name TEXT,last_name TEXT)', [], (tx,results) => {
      //  alert('executed the select query');
      console.log('table created');
      })
    })
  }

  
//   successToOpenDB() {

//     //  'CREATE TABLE IF NOT EXISTS testTable(id INTEGER PRIMARY KEY AUTOINCREMENT, user_id VARCHAR(20),  user_name TEXT, user_type_name TEXT, first_name TEXT,last_name TEXT,email VARCHAR(30),phone VARCHAR(15),published BOOLEAN,user_type BOOLEAN,profile_image VARCHAR, profile_thumb VARCHAR,signature VARCHAR(20)student_phone INT(15), student_address VARCHAR)',




// console.log('called');
//   db.transaction(tx => {
//     //  tx.executeSql('SELECT * FROM client', [], (tx, results) => {
//      // tx.executeSql('SELECT * FROM client WHERE ("28", trainer_id)', [], (tx, results) => {
//         tx.executeSql('SELECT * FROM client WHERE ("," || trainer_id || ",") LIKE "%,28,%"', [], (tx, results) => {

//     //  console.log('this is tx', JSON.stringify(results.rows.item(2)));
//     //  alert(JSON.stringify(results.rows.item(1)));
//   // console.log('checking returned data from query : '+ JSON.stringify(results.rows.item(88)));
//        let dataLength = results.rows.length;
//        if (dataLength > 0) {
//          let helperArray = [];
//          for (let i = 0; i < results.rows.length; i++) {
//            helperArray.push(results.rows.item(i));
//          }
//         console.log('checking array : ', JSON.stringify(helperArray));
//        } else {
//        }
     
//      });
//    });



//   }

  

  failToOpenDB(err) {
    alert('failed : ' + err);
  }

  showAlert = () => {
    this.setState({
      showAlert: true
    });
   
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
    this.setState({
      showLoader: false
    });
  };


   login = async() => {
    //  this.insertData();
    //  return
     this.setState({
       showLoader: true
     });
    if (this.state.username == "") {
     this.setState({
       message: "Email ID can't be blank"
     });
     this.showAlert();
      return;
    }

    if (this.state.password == "") {
      this.setState({
        message: "Password can't be blank"
      });
      this.showAlert();
      return;
    }

        var data = new FormData();
        data.append('option', 'com_tqms');
        data.append('task', 'api.validateLogin');
        data.append('email', this.state.username)
        data.append('password', this.state.password);
        // data.append('email', 'greg.cotter@tqms.com.au');
        // data.append('password', '123456');
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
              try {
                 AsyncStorage.setItem('trainerDetails', JSON.stringify(res) )
                 let credentials = {
                   password: this.state.password
                 };
                 AsyncStorage.setItem('credentials', JSON.stringify(credentials) )
              } catch (e) {
              }
              this.setState({
                showLoader: !this.state.showLoader
              });
              Actions.Home({getClient: false});
            } else {
              this.setState({
                message: res.data.message
              });
              this.showAlert();
            }
          })
          .catch(error => {
            this.setState({
              showLoader: !this.state.showLoader
            });
          });
  }


 

  render() {

    const { showAlert } = this.state;


    return (
      <SafeAreaView>
      <View style={styles.wholeBody}>
                <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title="Error!"
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
          
          <View style={styles.logoContainer}>
            <Image source={require('./../images/logo/TQMSlogo.png')}
              style={styles.logo} />
          </View>
        
  
          <View style={styles.usernameContainer}>
            <TextInput
              style={styles.userName}
              placeholder="Email"
              placeholderTextColor="grey"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={text => this.setState({ username: text })}
            />
          </View >

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.password}
              placeholder="Password"
              placeholderTextColor="grey"
              autoCapitalize="none"
              autoCorrect={false}
               secureTextEntry={true}
              onChangeText={text => this.setState({ password: text })}
            />
          </View>

          <View style={styles.submitContainer}>
            <TouchableHighlight
              style={styles.submit}
              onPress={this.login}

            >
              <Text style={styles.submitText}>Log in</Text>
            </TouchableHighlight>
          </View>
          {/* <View style={styles.submitContainer}>
            <TouchableHighlight
              style={styles.submit}
              onPress={this.createNewTableFunction}

            >
              <Text style={styles.submitText}>Log in</Text>
            </TouchableHighlight>
          </View> */}
          <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#05afee" animating={this.state.showLoader}/>
      </View>
      </View>
        </SafeAreaView>
     

    );
  }
};

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

  wholeBody: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%'
  },

  logoContainer: {
    paddingTop: '15%',
    justifyContent: 'center',
    alignItems: 'center',

  },

  logo: {
    height: 100,
    width: 300,
  },

  usernameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },

  passwordContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },

  submitContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5
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
    borderRadius: 10,
    height: 50,
    width: '50%',
    backgroundColor: "#05afee",
    textAlign: 'center'
  },

  userName: {

    backgroundColor: "#fff",
    height: 50,
    width: '50%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold'


  },

  password: {
    backgroundColor: "#fff",
    height: 50,
    width: '50%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold'


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

