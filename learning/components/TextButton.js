import { View, Text, TouchableOpacity, Touchable } from 'react-native'
import React from 'react'

import {FONTS, COLORS} from '../constants'

const TextButton = ({
    contentContainerStyle,
    disabled,
    label,
    labelStyle,
    onPress,
}) => {
  return (
    <TouchableOpacity 
    style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        paddingBottom: 10,
        ...contentContainerStyle
    }}
    disabled={disabled}
    onPress={onPress}>
    <Text
    style={{
        color: COLORS.white,
        ...FONTS.h3,
        ...labelStyle,
    }}>
        {label}
    </Text>

    </TouchableOpacity>
  )
}

export default TextButton