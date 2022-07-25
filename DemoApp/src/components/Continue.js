import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import SECTIONS from './Data';
//const deviceWidth = Math.round(Dimensions.get('window').width);
const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="center"
      />
      <Text style={styles.itemText}>{item.title}</Text>
      <Text style={styles.description}>{item.desc}</Text>
    </View>
  );
};

const Horiz = () => {
  return (
    <View style={styles.conBox}>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          horizontal
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={true}
          data={SECTIONS}
          renderItem={({ item }) => <ListItem item={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  conBox: {
    flex: 1,
    backgroundColor: '#19224D',
  },
  item: {
    width: 240,
    height: 145,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 4,
    shadowColor: '#AEB5D6', //8190D7
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 10,

    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  itemPhoto: {
    width: 220,
    height: 95,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  itemText: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 2,
  },
  description: {
    fontSize: 12,
  },
});

export default Horiz;
