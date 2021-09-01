import React, { Component } from "react";
import {
    SafeAreaView,
    TextInput,
    Button,
    StyleSheet,
    StatusBar,
    ImageBackground,
    Dimensions,
    Text
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { ScreenContainer } from "react-native-screens";

const { width, height } = Dimensions.get('window');

class SignUp extends Component {
    render() {
        return(
            <ImageBackground
                source={require("../assets/images/Splashbackground.png")}
                resizeMode="cover"
                style={styles.image}
                imageStyle={styles.image_imageStyle}
            >
                <StatusBar hidden />
                <TextInput
                    style = { styles.input }
                    placeholder = "username"
                />

                <TextInput
                    style = { styles.input }
                    textContentType = "password"
                    placeholder = "password"
                />

                <TouchableOpacity
                    style = { styles.loginButton }
                    onPress = {() => this.props.navigation.navigate("Mainactivity")}
                >
                    <Text style = {styles.input}>Đăng ký</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

export default SignUp;

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    image: {
        width: width,
        height: height,
        marginTop: 34
    },
    loginButton: {
        height: 56,
        width: width/2,
        marginTop: 53,
        marginLeft: width/2.5,
        alignItems: "center"
    },
});