import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CupertinoHeaderWithActionButton from "../components/CupertinoHeaderWithActionButton";
import Navlesson from "../components/Navlesson";
import QnAcard from "../components/QnAcard";
import Answer from "../components/Answer";

function QnA(props) {
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoHeaderWithActionButton: {
    position: "absolute",
    top: 0,
    width: 375,
    height: 44,
    left: 0
  },
  navlesson: {
    position: "absolute",
    left: 7,
    top: 41,
    width: 360,
    height: 24
  },
  cupertinoHeaderWithActionButtonStack: {
    width: 375,
    height: 65,
    marginTop: 24,
    marginLeft: -7
  },
  materialCardWithoutImage1: {
    height: 474,
    width: 359,
    position: "absolute",
    left: 0,
    top: 0
  },
  rect: {
    top: 473,
    left: 0,
    width: 359,
    height: 178,
    position: "absolute"
  },
  answer: {
    height: 44,
    width: 359
  },
  answer2: {
    position: "absolute",
    left: 1,
    top: 518,
    width: 359,
    height: 44
  },
  answer3: {
    position: "absolute",
    left: 1,
    top: 562,
    width: 359,
    height: 44
  },
  answer4: {
    position: "absolute",
    left: 1,
    top: 607,
    width: 359,
    height: 44
  },
  materialCardWithoutImage1Stack: {
    width: 360,
    height: 651
  }
});

export default QnA;
