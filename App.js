<script src="http://192.168.0.104:8097"></script>;
import React from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./router";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import CommentsScreen from "./screen/homeScreen/CommentsScreen";

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [loadFonts, setLoadFonts] = useState(false);
  const routing = useRoute(true);

  if (!loadFonts) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setLoadFonts(true)}
        onError={console.warn}
      />
    );
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
  // for view comments
  // return <CommentsScreen />;
}
