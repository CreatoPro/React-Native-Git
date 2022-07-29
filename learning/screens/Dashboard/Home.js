import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { IconButton, TextButton, VerticalCourseCard } from "../../components";

import {
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
  dummyData,
} from "../../constants";

// import IconButton from "../../components/IconButton"

const Home = () => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          marginBottom: 20,
          padding: 0,
          pddingHorizontal: SIZES.body2,
          alignItems: "center",
        }}
      >
        {/* Greetings */}
        <View
          style={{
            flex: 1,
          }}
        >
          <Text style={{ ...FONTS.h2 }}>Hello, Students!</Text>
          <Text style={{ color: COLORS.gray50, ...FONTS.body3 }}>
            Wednesday, 4:30 PM
          </Text>
        </View>

        {/* Notifications */}
        <IconButton
          icon={icons.notification}
          iconStyle={{
            tintColor: COLORS.black,
          }}
        />
      </View>
    );
  }
  
  function renderStartLearning() {
    return (
      <ImageBackground 
        source={images.featured_bg_image}
        style={{
          alignContent: 'center',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          paddingTop: 15,
          paddingBottom: 10
        }}
        imageStyle={{
          borderRadius: SIZES.radius
        }}
      >
        {/* Info */}
        <View>
          <Text
          style={{color: COLORS.white,
          ...FONTS.body2}}>Subjects</Text>

          <Text
          style={{
            color: COLORS.white,
            ...FONTS.h2
          }}>
            Physics
          </Text>
          <Text style={{
            marginTop: SIZES.radius,
            color: COLORS.white,
            ...FONTS.body4,
            marginBottom: SIZES.radius
          }}> By H.C Verma</Text>
        </View>
        {/* Image */}
          <Image 
          source={images.start_learning}
          style={{
            width: '100%',
            height:110,
            marginTop: SIZES.padding
          }}
          />

        {/* Button */}
        <TextButton 
        label="Start Learning"
        contentContainerStyle={{
          height:40,
          paddingHorizontal: SIZES.padding,
          borderRadius: 20,
          backgroundColor: COLORS.white,
        }}  
        labelStyle={{
          color: COLORS.black
        }}
        />
      </ImageBackground>

    )
  }

  function renderCourses() {  
    return (
      <FlatList 
      horizontal
      data={dummyData.courses_list_1}
      listKey="Courses"
      keyExtractor={item => `Courses.${item.id}`}
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={{
        marginTop: SIZES.padding
      }}  
      renderItem={({ item,index}) => (
        <VerticalCourseCard
        containerStyle={{marginLeft:index==0 ? SIZES.padding:
        SIZES.radius,dummyData,
        marginRight: index == dummyData.
        courses_list_1.length - 1 ? SIZES.
        padding : 0,
      }}
        
        course={item} 
        >

        </VerticalCourseCard>
      )}
      />
    )
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}
      {/* Content */}
      <ScrollView
      contentContainerStyle={{
        paddingBottom:150,
      }}
      showsHorizontalScrollIndicator={false}
      >
        {/* Start Learning */}
        {renderStartLearning()}
        {/* Courses */}
        {renderCourses()}
      </ScrollView>
    </View>
  );
};

export default Home;
