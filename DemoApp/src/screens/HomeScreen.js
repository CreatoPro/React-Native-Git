import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import Header from "../components/Head";
import Horiz from "../components/Continue";
import VertList from "../components/RecomCourse";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Header label="Home" />
      </View>
      <View style={{ marginTop: 50 }}>
        <Text style={styles.heading}>Continue Courses</Text>
        <View style={styles.box}>
          <View style={styles.innerContainer}>
            <Horiz />
          </View>
        </View>
      </View>
      <Text style={styles.heading}>Recomended Courses</Text>
      <View>
        <VertList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
  },
  box: {
    marginTop: 10,
    marginHorizontal: 10,
    padding: 5,
    height: 200,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    backgroundColor: "#19224D",
  },
  heading: {
    marginTop: 15,
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 30,
  },
});

export { HomeScreen };
