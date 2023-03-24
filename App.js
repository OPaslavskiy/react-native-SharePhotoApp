import React from "react";
import { useState } from "react";
import Registration from "./assets/components/Registration.jsx";
import Entrance from "./assets/components/Entrance.jsx";
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  TurboModuleRegistry,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function App() {
  const [registered, setRegistered] = useState(false);

  function setRegisteredUser() {
    setRegistered(!registered);
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
