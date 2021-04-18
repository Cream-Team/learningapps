import React, { Component } from "react";
import { Dimensions ,StyleSheet, View } from "react-native";
import SettingHeader from "../components/SettingHeader";

const { width, height } = Dimensions.get('window'); 

class Setting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SettingHeader
          style={styles.cupertinoHeaderWithBackground}
        ></SettingHeader>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoHeaderWithBackground: {
    height: 0.05*height,
    width: width,
    marginTop: 0.05*height
  }
});

export default Setting;
