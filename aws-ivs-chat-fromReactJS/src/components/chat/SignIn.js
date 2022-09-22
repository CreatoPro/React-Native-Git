import { View, Text, Button, TextInput } from 'react-native'
import PropTypes from "prop-types";
import React, { useState, createRef, useEffect } from "react";
import Avatars from "./Avatars";
import Form from 'react-native-form'
import FieldSet from 'react-native-fieldset';


const SignIn = ({ requestToken }) => {
    const [username, setUsername] = useState("");
    const [moderator, setModerator] = useState(false);
    const [avatar, setAvatar] = useState({});
    const [loaded, setLoaded] = useState(false);
    const inputRef = createRef();
  
    useEffect(() => {
      setLoaded(true);
      inputRef.current.focus();
    }, [loaded]); // eslint-disable-line
  return (
    <View>
      <View >
        <Text className="mg-b-2">Join the chat room</Text>
        <Form ref="form" onTouchStart={(e) => {e.preventDefault()}}>
        <FieldSet label="Fieldset label">
            <Text>
              Username
            </Text>
            <TextInput
              name="name"
              id="name"
              ref={inputRef}
              type="text"
              className="radius"
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
                <Avatars
                  currentAvatar={avatar?.name}
                  handleAvatarClick={(avatar) => {
                    setAvatar(avatar);
                  }}
                />
              </View>
            </View>
            
            <View >
              <TextInput
                type="checkbox"
                id="moderator"
                name="moderator"
                className="mg-l-0 mg-r-1"
                checked={moderator}
                onChange={(e) => {
                  setModerator(e.target.checked);
                }}
              />
              <Text htmlFor="moderator">Join as moderator</Text>
            </View>
            
            <Button
              onPress={(e) => {
                requestToken(username, moderator, avatar);
              }}
              
            //   disabled={!username}
            >
              Start chatting
            </Button>
          </FieldSet>
        </Form>
      </View>
      <View ></View>
    </View>
  )
}

SignIn.propTypes = {
    requestToken: PropTypes.func,
  };
export default SignIn


