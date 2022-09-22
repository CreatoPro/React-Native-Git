import { View, Text, Button } from 'react-native'
import React from 'react'
import { AVATARS } from "../../constants";
import PropTypes from "prop-types";

const Avatars = ({ handleAvatarClick, currentAvatar }) => {
    return (
      <>
        {AVATARS.map((avatar) => {
          const selected = avatar.name === currentAvatar ? " selected" : "";
          return (
            <Button
              onPress={(e) => {
                e.preventDefault();
                handleAvatarClick(avatar);
              }}
              
              key={avatar.name}
            >
              <Image
                src={avatar.src}
                alt={avatar.name}
                onClick={(e) => {
                  e.preventDefault();
                  handleAvatarClick(avatar);
                }}
              />
              {selected && (
                <View>
                  {/* <svg
                    className="icon icon--selected"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.67L4.83 12.5L3.41 13.91L9 19.5L21 7.49997L19.59 6.08997L9 16.67Z" />
                  </svg> */}
                </View>
              )}
            </Button>
          );
        })}
      </>
    );
  };
  
  Avatars.propTypes = {
    currentAvatar: PropTypes.string,
    handleAvatarClick: PropTypes.func,
  };
  
  export default Avatars;