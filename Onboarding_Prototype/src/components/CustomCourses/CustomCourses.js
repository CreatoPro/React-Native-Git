import React from "react";
import { StyleSheet, FlatList, Text, Image, View, ImageBackground, TouchableHighlight } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Row, Column as Col, Grid } from 'react-native-responsive-grid'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomCourses = () => {
    const names = [
        {
            index: "1",
            name: "Physics",
            image: require('../../../assets/physics.jpg')
        },
        {
            index: "2",
            name: "Chemistry",
            image: require('../../../assets/chemistry.png')

        },
        {
            index: "3",
            name: "Maths",
            image: require('../../../assets/maths.jpg')
        },
        {
            index: "4",
            name: "Biology",
            image: require('../../../assets/biology.jpg')
        }
    ];
    const navigation = useNavigation();
    const onVideoPlayerPressed = async (val) => {
        console.warn("Video", val);
        try { 
            await AsyncStorage.setItem('videoUrl', val);
            navigation.navigate('VideoPlayer',
            {
                URL: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
            })

        } catch (e) {
            console.log('error in catch block', e);
        }
    };
    return (
       
        <View style={styles.listStyle}>
        
        <FlatList
            
            keyExtractor={(key) => {
                return key.index;
            }}

            data={names}    
            renderItem={({ item }) => {
                return (
                    <View  style={styles.textStyle}>
                        <TouchableHighlight onPress={()=>onVideoPlayerPressed('http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4')}>
                            <Row>
                            <Col  style={{ width: '40%'}}>
                            <View style={styles.avatarContainer}>
                            <Image style={styles.avatar} source={item.image}S />
                            </View>
                            </Col>
                            <Text style={styles.textStyle}>
                            {item.name}
                        </Text>
                        </Row>
                        </TouchableHighlight>
                    </View>
                );
            }}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
      //  flex: 1,
     //   flexDirection: 'column',
        fontSize: 30,
        padding: 10,
        backgroundColor: "grey",
        margin: 10,
        color: "white",
        borderRadius: 15,
        borderColor: 'red',
        borderWidth: 0,
        textAlign: 'center',
        textAlignVertical: 'center'

    },
    listStyle: {
        textAlign: 'right',
        margin: 0,
        padding: 0,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
    },
    item: {
     //   flex: 1,
      //  flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: 13

    },
    avatarContainer: {
     //   flex: 1,
      //  flexDirection: 'column',
        width: '50%',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 90,
        width: 90,
        justifyContent: 'space-evenly',

    },
    avatar: {

        height: 90,
        width: 90,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        borderColor: 'yellow',
        borderWidth: 0
    }

});

export default CustomCourses;