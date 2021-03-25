import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";

function SettingHeader(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftWrapper}>
        <TouchableOpacity style={styles.leftIconButton}>
          <IoniconsIcon
            name="ios-arrow-back"
            style={styles.leftIcon}
          ></IoniconsIcon>
          <Text style={styles.leftText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.setting}>
          Setting
        </Text>
      </View>
      <View style={styles.rightWrapper}>
        <TouchableOpacity style={styles.button}>
          <EntypoIcon
            name="dots-three-vertical"
            style={styles.rightIcon}
          ></EntypoIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(21,124,156,1)",
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
    color: "#FFFFFF",
    fontSize: 32
  },
  leftText: {
    alignSelf: "center",
    fontSize: 17,
    paddingLeft: 5,
    color: "#FFFFFF"
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  setting: {
    fontSize: 17,
    lineHeight: 17,
    color: "#000"
  },
  rightWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  button: {},
  rightIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 32
  }
});

export default SettingHeader;
