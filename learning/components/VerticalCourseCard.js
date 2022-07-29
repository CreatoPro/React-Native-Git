import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import {SIZES, COLORS, FONTS, icons} from '../constants'

const VerticalCourseCard = ({containerStyle, course}) => {
  return (
    <TouchableOpacity
    style={{
        width:270,
        ...containerStyle
    }}
    ><View style={{flexDirection: 'row'}}>
      <Image 
        source={course.thumbnail}
        resizeMode="cover"
        style={{
            width:'100%',
            height:150,
            marginBottom:SIZES.radius,
            marginTop:SIZES.body1,
            borderRadius:SIZES.radius,
        }}
        />
    </View>
        

    </TouchableOpacity>
  )
}

export default VerticalCourseCard