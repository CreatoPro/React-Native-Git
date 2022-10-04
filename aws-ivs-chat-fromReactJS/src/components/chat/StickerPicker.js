import { View, Text, Button, Image } from 'react-native'
import React, { useState } from "react";
import { STICKERS } from "../../constants";
import PropTypes from "prop-types";


const StickerPicker = ({ handleStickerSend }) => {
    const [showStickers, setShowStickers] = useState(false);
  
  return (
    <View>
    
      <Button
        onPress={() => setShowStickers((prevState) => {return !prevState})}
      >
        {/* <Image
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          src="http://www.w3.org/2000/svg"
        >
        </Image> */}
      </Button>
      {/* <View className={`stickers-container ${!showStickers ? "hidden" : ""}`}> */}
      <View >
        {STICKERS.map((sticker) => {
          return (
            <Button
              className="sticker-btn"
              key={`${sticker.name}`}
              aria-label={`${sticker.name}`}
              onClick={() => {
                setShowStickers(false);
                handleStickerSend(sticker);
              }}
            >
              {/* <Image src={`${sticker.src}`} alt={`${sticker.name} sticker`} /> */}
            </Button>
          );
        })}
      </View>
    
    </View>
  )
}

StickerPicker.propTypes = {
    handleStickerSend: PropTypes.func,
  };

export default StickerPicker;