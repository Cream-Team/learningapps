import React, { Component } from "react";
import { Dimensions ,StyleSheet, View, Text } from "react-native";
import CupertinoHeaderWithActionButton from "../components/CupertinoHeaderWithActionButton";
import Navlesson from "../components/Navlesson";
import MaterialCardWithoutImage from "../components/MaterialCardWithoutImage";

const { width, height } = Dimensions.get('window'); 

class Info extends Component {
  render() {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subjectTitle: {
    height: 44,
    width: width,
    marginTop: 0.04*height,
    alignSelf: "center"
  },
  navlesson: {
    height: 24,
    width: width
  },
  loremIpsum: {
    top: 51,
    left: 124,
    position: "absolute",
    fontFamily: "Avenir",
    color: "#121212"
  },
  materialCardWithoutImage: {
    height: height,
    width: width,
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
