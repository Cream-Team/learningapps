import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function LsTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text numberOfLines={1} style={styles.title}>
        Title
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 24,
    lineHeight: 17,
    color: "#000"
  }
});

export default LsTitle;
