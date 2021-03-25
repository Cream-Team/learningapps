import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Lessonicon from "./Lessonicon";

function Navlesson(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Lessonicon style={styles.lessonicon}></Lessonicon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6"
  },
  lessonicon: {
    height: 24,
    width: 24,
    borderWidth: 1,
    borderColor: "rgba(147,147,147,1)",
    marginLeft: 168
  }
});

export default Navlesson;
