import React from 'react'
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";

import Mainactivity from './src/screens/Mainactivity'
import SidemenuNotloggedin from './src/screens/SidemenuNotloggedin';
import Baihoc from './src/screens/Baihoc';
import Ontap from './src/screens/Ontap';
import Thongke from './src/screens/Thongke';
import Setting from './src/screens/Setting';

const HomeNavigator = createStackNavigator({
    Mainactivity: {
        screen: Mainactivity,
        navigationOptions: {
            headerShown: false
        }
    }
});
HomeNavigator.navigationOptions = {
    headerShown: false
};

const BaiHocNavigator = createStackNavigator({
    Baihoc: Baihoc
});
BaiHocNavigator.navigationOptions = {
    headerShown: false
};

const OntapNavigator = createStackNavigator({
    Ontap: Ontap
});
OntapNavigator.navigationOptions = {
    headerShown: false
};

const ThongkeNavigator = createStackNavigator({
    Thongke: Thongke
});
ThongkeNavigator.navigationOptions = {
    headerShown: false
};

const LoginNavigator = createStackNavigator({
    SidemenuNotloggedin: {
        screen: SidemenuNotloggedin,
        navigationOptions: {
            headerShown: false
        }
    }
    
});

const SettingNavigator = createStackNavigator({
    Setting: {
        screen: Setting,
        navigationOptions: {
            headerShown: false
        }
    }
});

const AppNavigator = createStackNavigator({
    HomeNavigator,
    BaiHocNavigator,
    OntapNavigator,
    ThongkeNavigator,
    LoginNavigator,
    SettingNavigator
});

/* BottomTabNavigator require React Native 5 but App is 4 */
// const AppNavigator = createBottomTabNavigator({
//     HomeNavigator,
//     Login
// });

export default AppNavigator;