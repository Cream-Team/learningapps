import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/Ionicons";

function SidemenuLoggedin(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.image2Stack}>
        <Image
          source={require("../assets/images/Splashbackground2.png")}
          resizeMode="cover"
          style={styles.image2}
        ></Image>
        <Image
          source={require("../assets/images/artworks-000342067074-v8r2ax-t500x500-min-min1.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <View style={styles.lououtbtn}>
          <View style={styles.ellipseStack}>
            <Svg viewBox="0 0 46.58 46.58" style={styles.ellipse}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={23}
                cy={23}
                rx={23}
                ry={23}
              ></Ellipse>
            </Svg>
            <Icon name="ios-log-out" style={styles.icon}></Icon>
          </View>
        </View>
        <View style={styles.group}>
          <View style={styles.image3Stack}>
            <Image
              source={require("../assets/images/button-011.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
            <Image
              source={require("../assets/images/button-011.png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(130,211,196,1)"
  },
  image2: {
    top: 25,
    width: 360,
    height: 740,
    position: "absolute",
    left: 0
  },
  image: {
    top: 0,
    left: 45,
    width: 169,
    height: 180,
    position: "absolute"
  },
  lououtbtn: {
    top: 669,
    left: 299,
    width: 66,
    height: 66,
    position: "absolute"
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 47,
    height: 47,
    position: "absolute"
  },
  icon: {
    top: 5,
    left: 9,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 34
  },
  ellipseStack: {
    width: 47,
    height: 47,
    marginTop: 15,
    marginLeft: 49
  },
  group: {
    top: 203,
    left: 180,
    width: 274,
    height: 192,
    position: "absolute"
  },
  image3: {
    top: 0,
    left: 0,
    width: 274,
    height: 102,
    position: "absolute"
  },
  image4: {
    top: 51,
    left: 0,
    width: 274,
    height: 200,
    position: "absolute"
  },
  image3Stack: {
    width: 274,
    height: 251,
    marginTop: 49
  },
  image2Stack: {
    width: 454,
    height: 765,
    marginLeft: -45
  }
});

export default SidemenuLoggedin;
