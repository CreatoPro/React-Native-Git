import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Icons from './Icons';

const Header = ({ label }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icons />
      </View>
      <Text style={styles.heading}>{label}</Text>
    </View>
  );
};
const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: deviceWidth,
    height: 60,
    backgroundColor: '#E49B0F',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 30,
    fontWeight: '500',
    marginHorizontal: 20,
    marginBottom: 4,
    alignSelf: 'center',
  },
  icon: {
    position: 'relative',
    left: 5,
  },
});

export default Header;
