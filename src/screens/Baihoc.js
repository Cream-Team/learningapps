import React, { Component } from "react";
import { Dimensions, StyleSheet, View, ScrollView, Text, TextInput } from "react-native";
import MainAppFooter from "../components/MainAppFooter";
import Subject from "../components/Subject";

const { width, height } = Dimensions.get('window'); 

class Baihoc extends Component {
  render () {
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
              <TextInput 
                placeholder="  Search..."
                style={ styles.searchText }
              />
              <View style={{flex:1, flexDirection: 'row'}}>
                <Subject style={styles.subject}></Subject>
              </View>
             
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainAppFooter: {
    position: "absolute",
    top: 0.95*height,
    width: width,
    height: 49,
    left: width/4,
  },
  scrollArea: {
    top: 0.05*height,
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
    fontFamily: "Avenir",
    color: "#121212",
    fontSize: 30,
    marginTop: 32,
    alignSelf: "center"
  },
  subject: {
    height: 150,
    width: 119,
    marginTop: 18,
    marginLeft: 18,
  },
  mainAppFooterStack: {
    width: width,
    height: height,
    marginLeft: -7
  },
  searchText: {
    marginTop: 10,
    marginLeft: 30,
    backgroundColor: "#fff",
    height: 40,
    borderColor: "#4b4949",
    borderRadius: 25
  }
});

export default Baihoc;
