import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

function Lessonicon(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="question" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    justifyContent: "center"
  },
  icon: {
    color: "rgba(7,7,7,1)",
    fontSize: 24,
    alignSelf: "center"
  }
});

export default Lessonicon;
