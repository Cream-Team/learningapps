import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Mainactivity from "./src/screens/Mainactivity";
import SidemenuNotloggedin from "./src/screens/SidemenuNotloggedin";
import SidemenuLoggedin from "./src/screens/SidemenuLoggedin";
import Ontap from "./src/screens/Ontap";
import Baihoc from "./src/screens/Baihoc";
import Thongke from "./src/screens/Thongke";
import Setting from "./src/screens/Setting";
import Chonbaihoc from "./src/screens/Chonbaihoc";
import QnA from "./src/screens/QnA";
import Info from "./src/screens/Info";
import Videos from "./src/screens/Videos";
import ExtendLink from "./src/screens/ExtendLink";

const DrawerNavigation = createDrawerNavigator({
  Mainactivity: Mainactivity,
  SidemenuNotloggedin: SidemenuNotloggedin,
  SidemenuLoggedin: SidemenuLoggedin,
  Ontap: Ontap,
  Baihoc: Baihoc,
  Thongke: Thongke,
  Setting: Setting,
  Chonbaihoc: Chonbaihoc,
  QnA: QnA,
  Info: Info,
  Videos: Videos,
  ExtendLink: ExtendLink
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Mainactivity: Mainactivity,
    SidemenuNotloggedin: SidemenuNotloggedin,
    SidemenuLoggedin: SidemenuLoggedin,
    Ontap: Ontap,
    Baihoc: Baihoc,
    Thongke: Thongke,
    Setting: Setting,
    Chonbaihoc: Chonbaihoc,
    QnA: QnA,
    Info: Info,
    Videos: Videos,
    ExtendLink: ExtendLink
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "amita-regular": require("./src/assets/fonts/amita-regular.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "courier-regular": require("./src/assets/fonts/courier-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
