import React from "react";
import { useState } from "react";
// import { useFonts } from "expo-font";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function Registration({ setRegisteredUser }) {
  const [hidePass, setHidePass] = useState(true);
  const [availablePhoto, setAvailablePhoto] = useState(false);

  const toggleHidePass = () => {
    setHidePass(!hidePass);
  };

  const toggleAvailablePhoto = () => {
    console.log("123");
    setAvailablePhoto(!availablePhoto);
  };

  const keyboardHide = () => {
    setHidePass(true);
    Keyboard.dismiss();
  };

  // const [fontsLoaded] = useFonts({
  //   IcoMoon: require("../icon/icomoon.ttf"),
  // });

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
      <View style={styles.registerForm}>
        <View style={styles.avatarDiv}>
          {/* <Image
            source={require("./avatars/avatar_my.jpg")}
            style={styles.avatar}
          /> */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnPlus}
            onPress={toggleAvailablePhoto}
          >
            <Text style={[styles.btnPlusTitel]}>+</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.imputTitel}>Реєстрація</Text>
          <TextInput
            placeholder="Логін"
            style={[styles.loginImput, styles.imput]}
          />
          <TextInput
            placeholder="Адреса електронної пошти"
            style={[styles.emailImput, styles.imput]}
          />

          <View style={styles.passwordDiv}>
            <TextInput
              placeholder="Пароль"
              style={[styles.passwordImput, styles.imput]}
              secureTextEntry={hidePass}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnShow}
              onPress={toggleHidePass}
            >
              <Text style={[styles.btnShowTitle, styles.text]}>
                {hidePass ? "Показати" : "Приховати"}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btn}
            onPress={keyboardHide}
          >
            <Text style={[styles.btnTitle, styles.text]}>Зареєструватися</Text>
          </TouchableOpacity>
          <Text
            style={[styles.accountAlready, styles.text]}
            onPress={() => setRegisteredUser()}
          >
            Вже є акаунт? Увійти
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  registerForm: {
    backgroundColor: "#fff",
    height: 549,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  avatarDiv: {
    width: 120,
    maxHeight: 120,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: -60,
    borderRadius: 18,
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    backgroundColor: "#F6F6F6",
  },

  avatar: {
    borderRadius: 18,
    width: 120,
    height: 120,
  },

  btnPlus: {
    width: 25,
    height: 25,
    position: "absolute",
    // borderRadius: "50%",
    padding: 0,
    borderWidth: 1,
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
    justifyContent: "center",
    transform: [{ translateX: 60 }, { translateY: -14 }],
  },

  btnPlusTitel: {
    color: "#FF6C00",
    fontSize: 16,
    textAlign: "center",
  },

  imputTitel: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginTop: 32,
  },

  imput: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    height: 50,
    borderRadius: 8,
    marginHorizontal: 16,
    color: "black",
    padding: 16,
    fontSize: 16,
  },

  loginImput: {
    marginTop: 33,
    height: 200,
  },

  emailImput: {
    marginTop: 16,
  },
  passwordImput: {
    marginTop: 16,
  },

  passwordDiv: {
    position: "relative",
  },

  btnShow: {
    width: 95,
    height: 40,
    justifyContent: "center",
    position: "absolute",
    transform: [{ translateX: 250 }, { translateY: 21 }],
  },

  btnShowTitle: {
    color: "#1B4371",
  },

  btn: {
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 43,
    justifyContent: "center",
    marginHorizontal: 16,
  },

  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    textAlign: "center",
    justifyContent: "center",
  },

  btnTitle: {
    color: "#fff",
  },

  accountAlready: {
    marginTop: 16,
    marginBottom: 78,
    color: "#1B4371",
  },
});
