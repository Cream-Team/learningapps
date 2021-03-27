import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import Logo1 from "../components/Logo1";
import MaterialButtonShare from "../components/MaterialButtonShare";

const { width, height } = Dimensions.get('window'); 

class SidemenuNotloggedin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <ImageBackground
          source={require("../assets/images/Splashbackground.png")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Logo1 style={styles.logo1}></Logo1>
          <View style={styles.rect2}>
            <TextInput
              placeholder="Tên đăng nhập"
              textBreakStrategy="highQuality"
              placeholderTextColor="rgba(230, 230, 230,1)"
              enablesReturnKeyAutomatically={true}
              defaultValue=""
              keyboardType="email-address"
              style={styles.textInput}
            ></TextInput>
          </View>
          <View style={styles.rect3}>
            <TextInput
              placeholder="Mật khẩu"
              placeholderTextColor="rgba(255,255,255,1)"
              secureTextEntry={true}
              enablesReturnKeyAutomatically={true}
              blurOnSubmit={true}
              style={styles.textInput2}
            ></TextInput>
          </View>
          <MaterialButtonShare
            iconName="share-variant"
            icon="login"
            style={styles.loginButton}
          ></MaterialButtonShare>
          <View style={styles.group}>
            <View style={styles.dangkybtnRow}>
              <TouchableOpacity style={styles.dangkybtn}>
                <Text style={styles.dangKy}>Đăng ký</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.forgotpwd}>
                <Text style={styles.quenMatKhau}>Quên mật khẩu?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  image: {
    width: width,
    height: height,
    marginTop: 34
  },
  image_imageStyle: {},
  logo1: {
    height: height/4,
    width: width/2,
    opacity: 0.76,
    marginTop: 70,
    marginLeft: width/4
  },
  rect2: {
    width: 264,
    height: 48,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 101,
    marginLeft: width/6
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    width: 92,
    height: 17
  },
  rect3: {
    width: 264,
    height: 48,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 33,
    marginLeft: width/6
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    width: 58,
    height: 17
  },
  loginButton: {
    height: 56,
    width: 56,
    marginTop: 53,
    marginLeft: width/2.5
  },
  group: {
    width: 50,
    height: 17,
    flexDirection: "row",
    marginTop: 74,
    marginLeft: 102
  },
  dangkybtn: {
    width: 181,
    height: 29,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  dangKy: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)"
  },
  forgotpwd: {
    width: 179,
    height: 29,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  quenMatKhau: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)"
  },
  dangkybtnRow: {
    height: 29,
    flexDirection: "row",
    flex: 1,
    marginRight: -208,
    marginLeft: -width/5,
    marginTop: 9
  }
});

export default SidemenuNotloggedin;
