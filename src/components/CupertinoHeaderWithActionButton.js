import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import LsTitle from "./LsTitle";
import { Center } from "@builderx/utils";

function CupertinoHeaderWithActionButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftWrapper}>
        <TouchableOpacity style={styles.leftIconButton}>
          <EntypoIcon
            name="chevron-small-left"
            style={styles.leftIcon}
          ></EntypoIcon>
          <Text style={styles.leftText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textWrapper}>
        <LsTitle style={styles.lsTitle}></LsTitle>
      </View>
      <View style={styles.rightWrapper}>
        <TouchableOpacity style={styles.rightIconButton}>
          <Center vertical>
            <EntypoIcon
              name="chevron-small-right"
              style={styles.icon}
            ></EntypoIcon>
          </Center>
          <Text style={styles.rightText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#EFEFF4",
    paddingRight: 8,
    paddingLeft: 8
  },
  leftWrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "#007AFF",
    fontSize: 32
  },
  leftText: {
    fontSize: 17,
    color: "#007AFF",
    paddingLeft: 5,
    alignSelf: "center"
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  lsTitle: {
    height: 17,
    width: 40
  },
  rightWrapper: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  rightIconButton: {
    alignSelf: "stretch"
  },
  icon: {
    left: 88,
    position: "absolute",
    color: "#027bff",
    fontSize: 32,
    right: 0
  },
  rightText: {
    color: "#007AFF",
    fontSize: 17,
    alignSelf: "center",
    top: -11
  }
});

export default CupertinoHeaderWithActionButton;
