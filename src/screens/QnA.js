import React, { Component } from "react";
import { Dimensions ,StyleSheet, View } from "react-native";
import CupertinoHeaderWithActionButton from "../components/CupertinoHeaderWithActionButton";
import Navlesson from "../components/Navlesson";
import QnAcard from "../components/QnAcard";
import Answer from "../components/Answer";

const { width, height } = Dimensions.get('window'); 

class QnA extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cupertinoHeaderWithActionButtonStack}>
          <CupertinoHeaderWithActionButton
            style={styles.cupertinoHeaderWithActionButton}
          ></CupertinoHeaderWithActionButton>
          <Navlesson style={styles.navlesson}></Navlesson>
        </View>
        <View style={styles.materialCardWithoutImage1Stack}>
          <QnAcard style={styles.materialCardWithoutImage1}></QnAcard>
          <View style={styles.rect}>
            <Answer style={styles.answer}></Answer>
          </View>
          <Answer style={styles.answer2}></Answer>
          <Answer style={styles.answer3}></Answer>
          <Answer style={styles.answer4}></Answer>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoHeaderWithActionButton: {
    position: "absolute",
    top: 0,
    width: width,
    height: 0.05*height,
  },
  navlesson: {
    position: "absolute",
    left: 7,
    top: 41,
    width: width,
    height: 24
  },
  cupertinoHeaderWithActionButtonStack: {
    width: width,
    height: 65,
    marginTop: 0.04*height,
    marginLeft: -7
  },
  materialCardWithoutImage1: {
    height: 474,
    width: width,
    position: "absolute",
    left: 0,
    top: 0
  },
  rect: {
    top: 473,
    left: 0,
    width: width,
    height: 178,
    position: "absolute"
  },
  answer: {
    height: 44,
    width: width
  },
  answer2: {
    position: "absolute",
    left: 1,
    top: 518,
    width: width,
    height: 44
  },
  answer3: {
    position: "absolute",
    left: 1,
    top: 562,
    width: width,
    height: 44
  },
  answer4: {
    position: "absolute",
    left: 1,
    top: 607,
    width: width,
    height: 44
  },
  materialCardWithoutImage1Stack: {
    width: width,
    height: height
  }
});

export default QnA;
