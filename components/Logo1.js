import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function Logo1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/artworks-000342067074-v8r2ax-t500x500-min-min.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 200,
    height: 200
  }
});

export default Logo1;
