import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";

function Subject(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.rectStack}>
        <Image
          source={require("../assets/images/artworks-000342067074-v8r2ax-t500x500-min-min2.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
          <Text style={styles.tenMonHoc}>Tên môn học</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    top: 0,
    left: 0,
    width: 119,
    height: 150,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  tenMonHoc: {
    fontFamily: "Avenir",
    color: "#121212",
    marginTop: 113,
    marginLeft: 19
  },
  image: {
    top: 6,
    left: 13,
    width: 94,
    height: 94,
    position: "absolute"
  },
  rectStack: {
    width: 119,
    height: 150
  }
});

export default Subject;
