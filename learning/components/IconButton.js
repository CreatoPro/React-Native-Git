import { View, Text,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'




const IconButton = ({constainerStyle , icon, iconStyle, onPress}) => {
  return (
    <TouchableOpacity style= {{
        ...constainerStyle
    }}
    onPress={onPress}>
        <Image 
        sources={icon}
        resizeMode="contain"
        style={{
            width: 30,
            height: 30,
            tintColor: COLORS.white,
            ...iconStyle

        }}
        />
    </TouchableOpacity>
  )
}

export default IconButton; 