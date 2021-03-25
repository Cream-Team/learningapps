import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function MainAppFooter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.btnWrapper1}>
        <MaterialCommunityIconsIcon
          name="home"
          style={[
            styles.icon,
            {
              color: props.active ? "#007AFF" : "rgba(241,233,233,1)"
            }
          ]}
        ></MaterialCommunityIconsIcon>
        <Text
          style={[
            styles.homepage,
            {
              color: props.active ? "#007AFF" : "rgba(251,251,251,1)"
            }
          ]}
        >
          Homepage
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper2}>
        <IoniconsIcon name="ios-book" style={styles.icon1}></IoniconsIcon>
        <Text style={styles.baiHọc}>Bài học</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper4}>
        <MaterialCommunityIconsIcon
          name="book-open-variant"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.onTập}>Ôn tập</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper3}>
        <MaterialCommunityIconsIcon
          name="poll"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.thốngKe}>Thống kê</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%"
  },
  btnWrapper1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    backgroundColor: "transparent",
    fontSize: 24,
    opacity: 0.8
  },
  homepage: {
    fontSize: 12,
    backgroundColor: "transparent",
    paddingTop: 4
  },
  btnWrapper2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    color: "rgba(243,239,239,1)",
    fontSize: 24,
    opacity: 0.8
  },
  baiHọc: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    paddingTop: 4
  },
  btnWrapper4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon3: {
    backgroundColor: "transparent",
    color: "rgba(236,236,236,1)",
    fontSize: 24,
    opacity: 0.8,
    left: 34,
    width: 24,
    top: 3,
    height: 26
  },
  onTập: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    paddingTop: 4
  },
  btnWrapper3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon2: {
    backgroundColor: "transparent",
    color: "rgba(239,239,239,1)",
    fontSize: 24,
    opacity: 0.8
  },
  thốngKe: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    paddingTop: 4
  }
});

export default MainAppFooter;
