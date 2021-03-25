import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

function MaterialCardWithoutImage(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <Text style={styles.titleStyle}>Title goes here</Text>
        <Text style={styles.subtitleStyle}>Subtitle here</Text>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <Text style={styles.bodyText}>
            BuilderX is a screen design tool which codes React Native for you
            which design without boundaries, the code is generated
            simultaneously. Save your designed components as symbol and then
            simply add it to your design next time.Live preview works on real
            device. Shout out to the Expo team to make it happen.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center"
  },
  titleStyle: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  scrollArea: {},
  scrollArea_contentContainerStyle: {
    height: 28,
    padding: 16,
    paddingTop: 8
  },
  bodyText: {
    lineHeight: 20,
    fontSize: 14,
    color: "#424242",
    flexWrap: "wrap",
    alignSelf: "flex-start"
  }
});

export default MaterialCardWithoutImage;
