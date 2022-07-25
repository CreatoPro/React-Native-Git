import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import DATA from "./Subject";
import { useNavigation } from "@react-navigation/native";

const VertList = () => {
  const navigation = useNavigation();

  const PlayVideo = () => {
    navigation.navigate("Videos");
  };

  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <View style={styles.item}>
            <Image style={styles.pic} source={{ uri: item.image }} />
            <View style={styles.cont}>
              <TouchableOpacity onPress={PlayVideo}>
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
              <Text style={styles.description}>{item.desc}</Text>
            </View>
          </View>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "#eee",
    borderRadius: 12,
    padding: 10,
    alignContent: "center",
    marginVertical: 10,
    marginHorizontal: 16,
    width: "90%",
  },
  cont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
    marginHorizontal: 10,
    padding: 10,
  },
  title: {
    fontSize: 30,
  },
  description: {
    margin: 5,
    fontSize: 15,
  },
  pic: {
    width: 240,
    height: 150,
    margin: 1,
  },
  button: {
    width: "6%",
  },
});

export default VertList;
