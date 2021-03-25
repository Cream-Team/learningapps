import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import MainAppFooter from "../components/MainAppFooter";
import Subject from "../components/Subject";

function Baihoc(props) {
  return (
    <View style={styles.container}>
      <View style={styles.mainAppFooterStack}>
        <MainAppFooter style={styles.mainAppFooter}></MainAppFooter>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <Text style={styles.danhSachMonHọc}>Danh sách môn học</Text>
            <Subject style={styles.subject}></Subject>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainAppFooter: {
    position: "absolute",
    top: 691,
    width: 375,
    height: 49,
    left: 0
  },
  scrollArea: {
    top: 0,
    left: 7,
    width: 360,
    height: 740,
    position: "absolute"
  },
  scrollArea_contentContainerStyle: {
    height: 740,
    width: 360
  },
  danhSachMonHọc: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 30,
    marginTop: 32,
    alignSelf: "center"
  },
  subject: {
    height: 150,
    width: 119,
    marginTop: 18,
    marginLeft: 18
  },
  mainAppFooterStack: {
    width: 375,
    height: 740,
    marginLeft: -7
  }
});

export default Baihoc;
