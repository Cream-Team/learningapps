import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

import Svg, { Ellipse } from "react-native-svg";
import MainAppFooter from "../components/MainAppFooter";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import SidemenuNotloggedin from "./SidemenuNotloggedin";

const { width, height } = Dimensions.get('window'); 

class Mainactivity extends Component {
  render (){
    const Drawer = createDrawerNavigator();
    return (
      <View style={styles.container}>
        <View style={styles.imageStack}>
          <ImageBackground
            source={require("../assets/images/Home-background-01.png")}
            resizeMode="cover"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <Text style={styles.chaoMung}>Chào mừng!</Text>
            <Text style={styles.userDaQuayTroLai}>User đã quay trở lại</Text>
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
            </View>
          </ImageBackground>

          {/* Footer */}
          <View style={[stylesFooter.container, styles.cupertinoFooter1]}>
            <TouchableOpacity
              style={stylesFooter.btnWrapper1}
              onPress={() => this.props.navigation.navigate('Mainactivity')}>
              <MaterialCommunityIconsIcon
                name="home">
              </MaterialCommunityIconsIcon>
              <Text>Homepage</Text>
              
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesFooter.btnWrapper2}
              onPress={() => this.props.navigation.navigate('Baihoc')}>
              <IoniconsIcon name="ios-book" style={stylesFooter.icon1}></IoniconsIcon>
              <Text style={stylesFooter.baiHọc}>Bài học</Text>
              
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesFooter.btnWrapper4}
              onPress={() => this.props.navigation.navigate('Ontap')}>
              <MaterialCommunityIconsIcon
                name="book-open-variant"
                style={stylesFooter.icon3}
              ></MaterialCommunityIconsIcon>
              <Text style={stylesFooter.onTap}>Ôn tập</Text>
              
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesFooter.btnWrapper3}
              onPress={() => this.props.navigation.navigate('Thongke')}>
              <MaterialCommunityIconsIcon
                name="poll"
                style={stylesFooter.icon2}
              ></MaterialCommunityIconsIcon>
              <Text style={stylesFooter.thongKe}>Thống kê</Text>
              
            </TouchableOpacity>
          </View>
          

          {/* Left side login button or menu */}
          <TouchableOpacity
            style={styles.button}
            onPress = {() => this.props.navigation.navigate('SidemenuNotloggedin')}>
            <ImageBackground
              source={require("../assets/images/button-012.png")}
              resizeMode="contain"
              style={styles.image2}
              imageStyle={styles.image2_imageStyle}
            >
              <FeatherIcon name="menu" style={styles.icon}></FeatherIcon>
            </ImageBackground>
          </TouchableOpacity>

          {/* Right side setting button */}
          <TouchableOpacity
            style={styles.button2}
            onPress = {() => this.props.navigation.navigate('SignUp')}>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: width,
    height: height,
    position: "absolute",
    left: 102,
    top: 28
  },
  image_imageStyle: {},
  chaoMung: {
    
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    marginTop: 138,
    marginLeft: 24
  },
  userDaQuayTroLai: {
    
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginLeft: 50
  },
  loremIpsum: {
    
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
    
    color: "#121212",
    opacity: 0,
    marginLeft: -142
  },
  cupertinoFooter1: {
    height: 55,
    width: width,
    position: "absolute",
    left: width/4,
    top: 0.95*height,
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
    left: 1.05*width,
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
    width: width,
    height: height,
    marginTop: -28,
    marginLeft: -102
  }
});

const stylesFooter = StyleSheet.create({
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
    width: 24,
    height: 26
  },
  onTap: {
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
  thongKe: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    paddingTop: 4
  }
});

export default Mainactivity;
