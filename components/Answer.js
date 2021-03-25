import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialRadio1 from "./MaterialRadio1";

function Answer(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.materialRadio1Row}>
        <MaterialRadio1 style={styles.materialRadio1}></MaterialRadio1>
        <Text style={styles.dapAn1}>Đáp án 1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  materialRadio1: {
    height: 40,
    width: 40
  },
  dapAn1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 11,
    marginTop: 8
  },
  materialRadio1Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 216,
    marginLeft: 13,
    marginTop: 2
  }
});

export default Answer;
