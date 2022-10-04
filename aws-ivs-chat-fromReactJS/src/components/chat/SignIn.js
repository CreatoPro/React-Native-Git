import { View, Text, Button, TextInput, TouchableOpacity, } from 'react-native'
import PropTypes from "prop-types";
import React, { useState, useRef, useEffect } from "react";
import Avatars from "./Avatars";
import Form from 'react-native-form'
import FieldSet from 'react-native-fieldset';


const SignIn = ({ requestToken }) => {
    const [username, setUsername] = useState("");
    const [moderator, setModerator] = useState(false);
    const [avatar, setAvatar] = useState({});
    const [loaded, setLoaded] = useState(false);
    const inputRef = useRef();
  
    useEffect(() => {
      setLoaded(true);
      inputRef.current.focus();
    }, [loaded]); // eslint-disable-line
  const newLocal = <Avatars
    currentAvatar={avatar?.name}
    handleAvatarClick={(avatar) => {
      setAvatar(avatar);
    } } />;
  return (
    <View>
      <View >
        <Text>Join the chat room</Text>
        
        <Form  onTouchStart={(e) => {e.preventDefault()}}>
        <FieldSet >
            <Text>
              Username
            </Text>
            
            <TextInput
              name="name"
              id="name"
              ref={inputRef}
              // type="text"
              // className="radius"
              placeholder="Type here..."
              autoComplete="off"
              value={username}
              onChange={(e) => {
                e.preventDefault();
                setUsername(e.target.value);
              }}
            />
            
            <View >Select Avatar</View>
            <View >
              <View >
                {newLocal}
              </View>
            </View>
            
            <View >
              <TextInput
                type="checkbox"
                id="moderator"
                name="moderator"
                // className="mg-l-0 mg-r-1"
                checked={moderator}
                onChange={(e) => {
                  setModerator(e.target.checked);
                }}
              />
              <Text >Join as moderator</Text>
            </View>
            
            <TouchableOpacity 
              onPress={(e) => {
                requestToken(username, moderator, avatar);
              }}
              
            //   disabled={!username}
           >Button</TouchableOpacity>
              
          
          </FieldSet>
        </Form>
      </View>
    </View>
  )
}

SignIn.propTypes = {
    requestToken: PropTypes.func,
  };
export default SignIn


