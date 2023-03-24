import React from "react";
import { useState, useEffect } from "react";
import Registration from "./assets/components/Registration.jsx";
import Entrance from "./assets/components/Entrance.jsx";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
};

export default function App() {
  const [registered, setRegistered] = useState(false);
  const [loadFonts, setLoadFonts] = useState(false);

  function setRegisteredUser() {
    setRegistered(!registered);
  }

  if (!loadFonts) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setLoadFonts(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/images/background.jpg")}
          style={styles.image}
        >
          {registered ? (
            <Entrance setRegisteredUser={setRegisteredUser} />
          ) : (
            <Registration setRegisteredUser={setRegisteredUser} />
          )}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
