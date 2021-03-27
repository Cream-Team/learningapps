import React, { Component } from "react";
import { Dimensions ,StyleSheet, View } from "react-native";
import CupertinoHeaderWithActionButton from "../components/CupertinoHeaderWithActionButton";

const { width, height } = Dimensions.get('window'); 

class ExtendLink extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CupertinoHeaderWithActionButton
          style={styles.cupertinoHeaderWithActionButton}
        ></CupertinoHeaderWithActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoHeaderWithActionButton: {
    width: width,
    height: 44,
    marginTop: height*0.04,
    alignSelf: "center"
  }
});

export default ExtendLink;
