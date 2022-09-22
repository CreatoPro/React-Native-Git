import { View, Text } from 'react-native'
import React, { useEffect } from "react";
import Video from 'react-native-video';

const VideoPlayer = ({ playbackUrl }) => {
    useEffect(() => {
      const MediaPlayerPackage = window.IVSPlayer;
  
      // First, check if the browser supports the Amazon IVS player.
      if (!MediaPlayerPackage.isPlayerSupported) {
        console.warn(
          "The current browser does not support the Amazon IVS player."
        );
        return;
      }
  
      const PlayerState = MediaPlayerPackage.PlayerState;
      const PlayerEventType = MediaPlayerPackage.PlayerEventType;
  
      // Initialize player
      const player = MediaPlayerPackage.create();
      player.attachHTMLVideoElement(document.getElementById("video-player"));
  
      // Attach event listeners
      player.addEventListener(PlayerState.PLAYING, () => {
        console.info("Player State - PLAYING");
      });
      player.addEventListener(PlayerState.ENDED, () => {
        console.info("Player State - ENDED");
      });
      player.addEventListener(PlayerState.READY, () => {
        console.info("Player State - READY");
      });
      player.addEventListener(PlayerEventType.ERROR, (err) => {
        console.warn("Player Event - ERROR:", err);
      });
  
      // Setup stream and play
      player.setAutoplay(true);
      player.load(playbackUrl);
      player.setVolume(0.5);
    }, []);
  return (
    <View>
      <Video></Video>
    </View>
  )
}



export default VideoPlayer