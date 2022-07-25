import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const Icons = () => {
  return (
    <View style={styles.cont}>
      <Icon name="menu-outline" type="ionicon" color="#000" size={45} />
    </View>
  );
};
//const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
  },
});

export default Icons;
