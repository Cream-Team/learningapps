import React, {useState} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import AppLoading from 'expo-app-loading';

import * as Font from 'expo-font';
import Mainactivity from './src/screens/Mainactivity';
import SidemenuNotloggedin from './src/screens/SidemenuNotloggedin';
import SidemenuLoggedin from './src/screens/SidemenuLoggedin';
import Ontap from './src/screens/Ontap';
import Baihoc from './src/screens/Baihoc';
import Thongke from './src/screens/Thongke';
import Setting from './src/screens/Setting';
import Chonbaihoc from './src/screens/Chonbaihoc';
import QnA from './src/screens/QnA';
import Info from './src/screens/Info';
import Videos from './src/screens/Videos';
import ExtendLink from './src/screens/ExtendLink';

const DrawerNavigation = createDrawerNavigator({
  SidemenuNotloggedin: SidemenuNotloggedin,
  SidemenuLoggedin: SidemenuLoggedin,
  Mainactivity: Mainactivity,
  Ontap: Ontap,
  Baihoc: Baihoc,
  Thongke: Thongke,
  Setting: Setting,
  Chonbaihoc: Chonbaihoc,
  QnA: QnA,
  Info: Info,
  Videos: Videos,
  ExtendLink: ExtendLink,
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation,
    }
  },
  {
    headerMode: 'none',
  },
);

const loadResourcesAsync = () => {
  return StackNavigation;
}

const AppContainer = createAppContainer(StackNavigation);

function App() { 
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={console.warn("error")}
        onFinish={() => setLoadingComplete(true)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}

export default App;
