import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import LsTitle from "./LsTitle";

function LessonTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <LsTitle style={styles.lsTitle}></LsTitle>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  lsTitle: {
    width: 82,
    height: 46,
    marginTop: 12,
    marginLeft: 21
  }
});

export default LessonTitle;
