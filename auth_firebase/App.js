import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import { authentication } from './firebase/firebase-config';
//import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
//import { getAuth } from 'firebase/auth';
import { auth } from './firebase/firebase-config';
import 'firebase/auth';

export default function App() {

  const[isSignedIn,setIsSignedIn] = useState(false);
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const RegisterUser = () =>{
  auth
  .createUserWithEmailAndPassword( email,password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log('register', user.email);
    })
    .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='Email' value={email} onChangeText={text=>setEmail(text)}/>
      <TextInput placeholder='Password' value={password} secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
      <Button title='Register'
      onPress={()=> RegisterUser()}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


