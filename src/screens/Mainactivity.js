import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MainAppFooter from "../components/MainAppFooter";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Dimensions } from 'react-native';

const wW= Dimensions.get('window').width;
const wH = Dimensions.get('window').height;

function Mainactivity(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/images/Home-background-01.png")}
          resizeMode="stretch"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Text style={styles.chaoMừng}>Chào mừng!</Text>
          <Text style={styles.userDaQuayTrởLại}>User đã quay trở lại</Text>
          <Text style={styles.loremIpsum}>Đây là dòng thông báo gì đó</Text>
          <View style={styles.lastLesson}>
            <Svg viewBox="0 0 90 90" style={styles.base}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={45}
                cy={45}
                rx={45}
                ry={45}
              ></Ellipse>
            </Svg>
            <Text style={styles.noteForDev}>
              https://www.npmjs.com/package/react-circular-progressbar
            </Text>
          </View>
        </ImageBackground>
        <MainAppFooter style={styles.cupertinoFooter1}></MainAppFooter>
        <TouchableOpacity style={styles.button}>
          <ImageBackground
            source={require("../assets/images/button-012.png")}
            resizeMode="contain"
            style={styles.image2}
            imageStyle={styles.image2_imageStyle}
          >
            <FeatherIcon name="menu" style={styles.icon}></FeatherIcon>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <ImageBackground
            source={require("../assets/images/button-013.png")}
            resizeMode="contain"
            style={styles.image3}
            imageStyle={styles.image3_imageStyle}
          >
            <FeatherIcon name="settings" style={styles.icon2}></FeatherIcon>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: wW,
    height: wH,
    position: "absolute",
    left: 102,
    top: 28
  },
  image_imageStyle: {},
  chaoMừng: {
    fontFamily: "amita-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    marginTop: 138,
    marginLeft: 6
  },
  userDaQuayTrởLại: {
    fontFamily: "courier-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginLeft: 30
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 135,
    marginLeft: 65
  },
  lastLesson: {
    width: 90,
    height: 90,
    marginTop: 170,
    marginLeft: 240
  },
  base: {
    width: 90,
    height: 90
  },
  noteForDev: {
    fontFamily: "roboto-regular",
    color: "#121212",
    opacity: 0,
    marginLeft: -142
  },
  cupertinoFooter1: {
    height: 55,
    width: wW,
    position: "absolute",
    left: 94,
    top: 713,
    borderWidth: 1,
    borderColor: "#000000",
    borderTopWidth: 1,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0,
    shadowRadius: 0
  },
  button: {
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    position: "absolute"
  },
  image2: {
    width: 170,
    height: 170,
    marginTop: 15,
    alignSelf: "center"
  },
  image2_imageStyle: {},
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 41,
    width: 40,
    marginTop: 65,
    marginLeft: 102
  },
  button2: {
    top: 15,
    left: 377,
    width: 170,
    height: 170,
    position: "absolute"
  },
  image3: {
    width: 170,
    height: 170
  },
  image3_imageStyle: {},
  icon2: {
    color: "rgba(23,23,23,1)",
    fontSize: 40,
    height: 41,
    width: 40,
    marginTop: 65,
    marginLeft: 28
  },
  imageStack: {
    width: 547,
    height: 768,
    marginTop: -28,
    marginLeft: -102
  }
});

export default Mainactivity;
