/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
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


import { Picker } from '@react-native-picker/picker';
import { Row, Column as Col, Grid } from 'react-native-responsive-grid'
// import SearchBar from 'react-native-search-bar';
import SearchBar from 'react-native-dynamic-search-bar';
import { Actions } from 'react-native-router-flux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faFastBackward } from '@fortawesome/free-solid-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { faFastForward } from '@fortawesome/free-solid-svg-icons'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


import DropDownPicker from 'react-native-dropdown-picker';

// const Login: () => React$Node = () => {
export default class Students extends Component<{}> {
  
  constructor() {
    
    super();
    this.state = {
      search: 'please search here',
      qualification: 'Sort By Qualification',
      dropDownSize: '10',
      upIcon: false
    };
  }
  
  DATA = [
    {
      studentName: 'ABBOOD Bassam',
      client: 'Don KR',
    },
    {
      studentName: 'ABBOTT Kathleen',
      client: "D'Orsogna",
    },
    {
      studentName: 'ABBOTT Amanda',
      client: 'Riverside Meats',
    },

    {
      studentName: 'ABEGAZ Meron',
      client: 'Community Chef',
    },
    {
      studentName: 'ABBELLERA Almyrn',
      client: 'Meat Inspectors - Point Cook',
    },
    {
      studentName: 'ABERATHNA Sanjeewa',
      client: "D'Orsogna",
    },
    {
      studentName: 'ADAMS Matthew Student',
      client: 'Don KR',
    },

    {
      studentName: 'AFOA Dylan',
      client: "D'Orsogna",
    },
    {
      studentName: 'AFOAKWAH Michael',
      client: 'Holco',
    },
    {
      studentName: 'AGARWAL Peiush',
      client: 'Delica Meats',
    }
  ];


  // modalizeRef = useRef(null);

  handleClick = () => {
    //navigation.navigate('Login');
    Actions.Login();
  }

  changeStatusOfIcon = () => {
    
    if(this.state.upIcon === true) {
      this.setState({
        upIcon: false
      })
    } else {
      this.setState({
        upIcon: true
      })
    }
  }

  searchChange = () => {

  }
  cancelPress = () => {

  }
  searchPress = () => {

  }

  render() {

    // const column1Data = data.filter((item, i) => i%2 === 0);
    // const column2Data = data.filter((item, i) => i%2 === 1);

    Item = ({ client }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{client}</Text>
      </View>
    );

    renderItem = ({ item }) => (
      <Item client={item.client} />
    );

    Item2 = ({ studentName }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{studentName}</Text>
      </View>
    );

    renderItem2 = ({ item }) => (
      <Item client={item.studentName} />
    );

    ListHeader = () => {
      //View to set in Header
      return (
        <View style={styles.headerFooterStyle}>
          <Text style={styles.textStyle}>
            Student Name
            </Text>
        </View>
      );
    };

    ListFooter = () => {
      //View to set in Footer
      return (
        <View style={styles.headerFooterStyle}>
          <Text style={styles.textStyle}>
            This is Footer
            </Text>
        </View>
      );
    };

    ListHeader2 = () => {
      //View to set in Header
      return (
        <View style={styles.headerFooterStyle}>
          <Text style={styles.textStyle}>
            Client Name
            </Text>
        </View>
      );
    };


    return (
      // <View style={styles.wholeBody}>
      <SafeAreaView>
        <View style={styles.logoContainer}>
          <Image source={require('./../images/logo/TQMSlogo.png')}
            style={styles.logo} />
        </View>
        <View style={styles.userDetails}>
          <Row>
            <Col style={styles.userDetailsCol}>
              <View style={{ paddingTop: '1%', paddingLeft: '5%' }}>
                <Text style={{ fontSize: 20, fontWeight: "600", color: 'white' }}>
                  User Name : Hello, Greg Cotter
                </Text>
              </View>
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

        <View style={styles.search}>
          <Row>
            <Col style={styles.searchCol}>
              <SearchBar
                fontSize={22}
                fontColor='#444444'
                iconColor="333333"
                cancelIconColor="#c6c6c6"
                placeholder="Search.."
                placeholderTextColor="444444"
                
                onChangeText={text => {

                }}
                style={{ height: 60, fontSize: 20, borderWidth: 1, borderRadius: 40, borderColor: '#999999', shadowColor: 'white' }}
                onPressCancel={() => {
                }}
                onPress={() => { }}
              />


            </Col>
            <Col style={styles.searchCol2}>
              {/* nothing will be there, blank col to adjust the size  */}
            </Col>
            <Col style={styles.searchCol3}>
              <DropDownPicker
                items={[
                  { label: 'Sort By Qualification', value: 'Sort By Qualification', hidden: false },
                  { label: 'Don KR', value: 'Don KR' },
                  { label: 'Holco', value: 'Holco' },
                  { label: 'Koallah Farm', value: 'Koallah Farm' },
                  { label: 'Meat Inspectors', value: 'Meat Inspectors' },
                  { label: 'Meat Inspectors - Point Cook', value: 'Meat Inspectors - Point Cook' },


                ]}
                labelStyle={{ fontSize: 20, color: '#444444', fontWeight: '400' }}
                defaultValue={this.state.qualification}
                containerStyle={styles.containerStyleForDropdown}
                style={{
                  borderTopLeftRadius: 30, borderTopRightRadius: 30,
                  borderBottomLeftRadius: 30, borderBottomRightRadius: 30,
                  fontSize: 30,
                  borderWidth: 1,
                  borderColor: 'grey',
                  width: '90%',
                }}
                dropDownStyle={{
                  borderBottomLeftRadius: 20, borderBottomRightRadius: 20,
                  width: '90%',
                }} itemStyle={{
                  justifyContent: 'flex-start',

                }}
                // dropDownStyle={{ width: '100%', fontSize: 50, fontWeight: 'bold' }}
                onChangeItem={item => this.setState({
                  qualification: item.value
                })}
              />
            </Col>
          </Row>


          <Row style={{ width: '98%', paddingLeft: '2%' }}>
            <Col style={styles.flatListCol}>
              <View >
                <Row style={styles.listHeaderCls}>
                  <Col>
                  <View >
                  <Text onPress={() => this.changeStatusOfIcon()} style={{ fontSize: 22, paddingLeft: 30, color: '#05afee', paddingTop: 10, fontWeight: 'bold' }}>Student Name
            </Text>
            </View>
                  </Col>
                  <View style={styles.upArrow}>

            <FontAwesomeIcon onPress={() => this.changeStatusOfIcon()} icon={this.state.upIcon? faArrowUp : faArrowDown} style={{ color: '#05afee' }} />

            </View>
                  <Col>
                  </Col>
                </Row>
                {/* <View style={styles.listHeaderCls}>
                  <Text style={{ fontSize: 22, paddingLeft: 30, color: '#05afee', paddingTop: 10, fontWeight: 'bold' }}>Student Name
            </Text>
            <View style={styles.upArrow}>
            <FontAwesomeIcon icon={faArrowUp} />

            </View>

                </View> */}
                <FlatList
                  data={this.DATA}
                  renderItem={({ item, index }) => <View style={index % 2 == 0 ? styles.itemView2: styles.itemView}><Text style={styles.itemTextCls}>{item.studentName}</Text></View>}
                  keyExtractor={item => item.studentName}
                />
              </View>

            </Col>
            <Col style={styles.flatListCol}>
              <View >
                <View style={styles.listHeaderCls}>
                  <Text style={{ fontSize: 22, paddingLeft: 200, color: '#05afee', paddingTop: 10, fontWeight: 'bold' }}>Clients</Text>
                </View>
                <FlatList
                  data={this.DATA}
                  renderItem={({ item, index }) => <View style={index % 2 == 0 ? styles.itemView2: styles.itemView}><Text style={styles.itemTextCls2}>{item.client}</Text></View>}
                  keyExtractor={item => item.client}
                />
              </View>

            </Col>
          </Row>

        </View>
        <Row style={{ width: '98%' }}>
          <Col style={{ width: '62%', paddingLeft: '2%' }}>
            <View style={styles.footertest}>
              <Col style={styles.footerColCls1}>
                <View style={{ marginTop: 15, marginLeft: 20}}>
                  <FontAwesomeIcon icon={faFastBackward} style={{ color: 'grey' }} />
                </View>
              </Col>

              <Col style={styles.footerColCls}>
                <View style={{ marginTop: 15, marginLeft: 20 }}>
                  <FontAwesomeIcon icon={faBackward} style={{ color: 'grey' }} />
                </View>
              </Col>

              <Col style={styles.footerColClsSpecial}>
                <View style={{ marginTop: 12, marginLeft: 20, }}>
                  <Text style={{ fontSize: 18, color: '#999999' }}>1</Text>
                </View>

              </Col>

              <Col style={styles.footerColCls}>
                <View style={{ marginTop: 12, marginLeft: 20, }}>
                  <Text style={{ fontSize: 18, color: '#05afee' }}>2</Text>
                </View>

              </Col>

              <Col style={styles.footerColCls}>
                <View style={{ marginTop: 12, marginLeft: 20 }}>
                  <Text style={{ fontSize: 18, color: '#05afee' }}>3</Text>
                </View>

              </Col>
              <Col style={styles.footerColCls}>
                <View style={{ marginTop: 12, marginLeft: 20 }}>
                  <Text style={{ fontSize: 18, color: '#05afee' }}>4</Text>
                </View>

              </Col>
              <Col style={styles.footerColCls}>
                <View style={{ marginTop: 12, marginLeft: 20 }}>
                  <Text style={{ fontSize: 18, color: '#05afee' }}>...</Text>
                </View>

              </Col>
              <Col style={styles.footerColCls}>
                <View style={{ marginTop: 12, marginLeft: 20 }}>
                  <Text style={{ fontSize: 18, color: '#05afee' }}>5</Text>
                </View>

              </Col>
              <Col style={styles.footerColCls}>
                <View style={{ marginTop: 12, marginLeft: 20 }}>
                  <Text style={{ fontSize: 18, color: '#05afee' }}>6</Text>
                </View>

              </Col>
              <Col style={styles.footerColCls}>
                <View style={{ marginTop: 12, marginLeft: 20 }}>
                  <Text style={{ fontSize: 18, color: '#05afee' }}>7</Text>
                </View>

              </Col>
              <Col style={styles.footerColCls}>
                <View style={{ marginTop: 12, marginLeft: 20 }}>
                  <Text style={{ fontSize: 18, color: '#05afee' }}>8</Text>
                </View>

              </Col>
              <Col style={styles.footerColCls}>
                <View style={{ marginTop: 12, marginLeft: 20 }}>
                  <Text style={{ fontSize: 18, color: '#05afee' }}>9</Text>
                </View>

              </Col>

              <Col style={styles.footerColCls}>
                <View style={{ marginTop: 15, marginLeft: 20 }}>
                  <FontAwesomeIcon icon={faForward} style={{ color: '#05afee' }} />
                </View>
              </Col>

              <Col style={styles.footerColCls14}>
                <View style={{ marginTop: 15, marginLeft: 20 }}>
                  <FontAwesomeIcon icon={faFastForward} style={{ color: '#05afee' }} />
                </View>
              </Col>
            </View>
          </Col>
          <Col style={{ width: '28%' }}>
          </Col>
          <Col style={{ width: '10%' }}>
            <DropDownPicker
              items={[

                { label: '5', value: '5', hidden: false },
                { label: '10', value: '10' },
                { label: '15', value: '15' },
                { label: '20', value: '20' },
                { label: '25', value: '25' },
              ]}
              labelStyle={{ fontSize: 20, color: '#444444', fontWeight: '500' }}
              defaultValue={this.state.dropDownSize}
              containerStyle={styles.containerStyleForDropdown}
              style={{
                borderTopLeftRadius: 30, borderTopRightRadius: 30,
                borderBottomLeftRadius: 30, borderBottomRightRadius: 30,
                fontSize: 30,
                borderWidth: 1,
                borderColor: 'grey',
                width: '70%',
                height: 50
              }}
              dropDownStyle={{
                borderBottomLeftRadius: 20, borderBottomRightRadius: 20,
                width: '70%',
              }} itemStyle={{
                justifyContent: 'flex-start',

              }}
              onChangeItem={item => this.setState({
                dropDownSize: item.value
              })}
            />
          </Col>
        </Row>


      </SafeAreaView>


    );
  }
}

//};

const styles = StyleSheet.create({

  upArrow:{
  
   width: 20,
   height: 20,
   paddingTop: 15,
   paddingLeft: 3
   
  },

  footerColCls:
    { width: '7.14%', height: '100%', borderWidth: 0.5, borderColor: 'grey'
   },

  footerColClsSpecial:
  { width: '7.14%', height: '100%', borderWidth: 0.5, borderColor: 'grey', backgroundColor: '#f9f9f9'
 },


  footerColCls1:
    { width: '7.14%', height: '100%', 
    borderColor: 'grey' ,
    borderLeftWidth: 0.5,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6
  }
  ,

  footerColCls14:
    { width: '7.14%', height: '100%', 
    borderColor: 'grey' ,
    borderRightWidth: 0.5,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6
  }
  ,
  itemTextCls:
    { fontSize: 20, paddingLeft: 30, color: '#05afee', paddingTop: 10 },

  itemTextCls2:
    { fontSize: 20, paddingLeft: 200, color: '#333333', paddingTop: 10 },

  itemView: {
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  itemView2: {
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    backgroundColor: '#f9f9f9'
  },

  footertest: {
    // flex:0.1,
    // left: 0,
    // right: 0,
    // bottom: -10,
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 50,
  },
  bottomButtons: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  footerText: {
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 18,
  },

  listHeaderCls: {
    width: '100%',
    backgroundColor: 'white',
    borderTopColor: 'grey',
    borderBottomColor: 'grey',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    shadowOpacity: 1, shadowRadius: 2, shadowOffset: { width: 2, height: 2 ,
    },    height: 50,
    alignContent: 'center',
  },


  flatListView: {
    borderWidth: 1,
    borderColor: 'black',
  },

  pickerCls: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: 'grey',
    width: '90%',

  },

  searchBarView: {
    paddingTop: '5%',
    height: 200,
    width: '100%',
    paddingLeft: 10,
    borderColor: 'black',
    borderWidth: 1
  },

  containerStyleForDropdown: {
    height: 50, 
    borderTopLeftRadius: 20, borderTopRightRadius: 20,
    borderBottomLeftRadius: 20, borderBottomRightRadius: 20
  },

  pickerContainer: {
    paddingTop: '9%',
    paddingRight: 5,
    minHeight: 200,
    borderColor: 'black',
    borderWidth: 1

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
    width: '15%',

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


  headerFooterStyle: {
    width: '100%',
    height: 45,
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    padding: 7,
  },

  flatListCol: {
    width: '50%',
  },

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    marginLeft: 100
  },
  title: {
    fontSize: 50,
  },

  searchCol: {
    width: '40%',
    paddingTop: '3%'
  },

  searchCol2: {
    width: '25%'
  },

  searchCol3: {
    width: '35%',
    minHeight: 150,
    paddingTop: '4%'

  },

  searchBarzcls: {
    backgroundColor: '#000000',
    width: 100
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

  search: {
    height: '70%',
    width: '100%',
    backgroundColor: '#ffffff',

    borderTopRightRadius: 5,
  },

  submitText: {

    color: '#000000',
    textAlign: 'center',

  },
  submit: {
    // marginRight:40,
    // marginLeft:40,
    // marginTop:10,
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    width: 120,
    color: "#809fff",
    marginLeft: '80%',
    justifyContent: 'center',
    backgroundColor: "#809fff"
  },

  userName: {
    backgroundColor: "#fff",
    height: '100%',
    width: '80%',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 20,
    alignContent: 'center',
    marginLeft: 10,
    color: 'white'
  },

  sortQualification: {
    backgroundColor: "#fff",
    height: 50,
    width: '70%',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 20,
    alignContent: 'center',
    marginLeft: 10,
    color: 'white'
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
    flex: 1
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
