import React, { Component } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import MainAppFooter from "../components/MainAppFooter";

class Thongke extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>
          Username: 
        </Text>

        <Text>
          Password: 
        </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainAppFooter: {
    width: 375,
    height: 49,
    marginTop: 691,
    alignSelf: "center"
  }
});

export default Thongke;
