import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import SettingHeader from "../components/SettingHeader";

function Setting(props) {
  return (
    <View style={styles.container}>
      <SettingHeader
        style={styles.cupertinoHeaderWithBackground}
      ></SettingHeader>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoHeaderWithBackground: {
    height: 44,
    width: 360,
    marginTop: 22
  }
});

export default Setting;
