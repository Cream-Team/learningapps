import React, { Component } from "react";
import { Dimensions, StyleSheet, View, StatusBar, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get('window'); 

class SidemenuLoggedin extends Component {

  render() {
    
    return (
      <View style={styles.container}>
        <StatusBar  />
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
              >
                Text
              </Image>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(130,211,196,1)"
  },
  image2: {
    width: width,
    height: height,
    position: "absolute",
    left: 0
  },
  image: {
    top: height/10,
    left: width/4,
    width: width/2,
    height: height/5,
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
    top: height/8,
    left: 0,
    width: 47,
    height: 47,
    position: "absolute"
  },
  icon: {
    top: height/8+4,
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
    top: height/10,
    left: -width/4,
    width: 274,
    height: 102,
    position: "absolute"
  },
  image4: {
    top: height/6,
    left: -width/4,
    width: 274,
    height: 200,
    position: "absolute"
  },
  image3Stack: {
    width: 274,
    height: 251,
    marginTop: 49,
  },
  image2Stack: {
    width: width,
    height: height,
  }
});

export default SidemenuLoggedin;
