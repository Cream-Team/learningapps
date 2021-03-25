import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MainAppFooter from "../components/MainAppFooter";

function Thongke(props) {
  return (
    <View style={styles.container}>
      <MainAppFooter style={styles.mainAppFooter}></MainAppFooter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainAppFooter: {
    width: 375,
    height: 49,
    marginTop: 691,
    alignSelf: "center"
  }
});

export default Thongke;
