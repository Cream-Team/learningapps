import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CupertinoHeaderWithActionButton from "../components/CupertinoHeaderWithActionButton";

function Videos(props) {
  return (
    <View style={styles.container}>
      <CupertinoHeaderWithActionButton
        style={styles.cupertinoHeaderWithActionButton}
      ></CupertinoHeaderWithActionButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoHeaderWithActionButton: {
    width: 375,
    height: 44,
    marginTop: 23,
    alignSelf: "center"
  }
});

export default Videos;
