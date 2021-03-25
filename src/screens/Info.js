import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CupertinoHeaderWithActionButton from "../components/CupertinoHeaderWithActionButton";
import Navlesson from "../components/Navlesson";
import MaterialCardWithoutImage from "../components/MaterialCardWithoutImage";

function Info(props) {
  return (
    <View style={styles.container}>
      <CupertinoHeaderWithActionButton
        style={styles.subjectTitle}
      ></CupertinoHeaderWithActionButton>
      <Navlesson style={styles.navlesson}></Navlesson>
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}></Text>
        <MaterialCardWithoutImage
          style={styles.materialCardWithoutImage}
        ></MaterialCardWithoutImage>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subjectTitle: {
    height: 44,
    width: 360,
    marginTop: 25,
    alignSelf: "center"
  },
  navlesson: {
    height: 24,
    width: 360
  },
  loremIpsum: {
    top: 51,
    left: 124,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  materialCardWithoutImage: {
    height: 647,
    width: 359,
    position: "absolute",
    left: 0,
    top: 0
  },
  loremIpsumStack: {
    width: 359,
    height: 647
  }
});

export default Info;
