import React from "react";
import { useState, useEffect } from "react";
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
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const registrationState = {
  login: "",
  email: "",
  password: "",
};

export default function Registration({ setRegisteredUser }) {
  const [state, setState] = useState(registrationState);
  const [hidePass, setHidePass] = useState(true);
  const [availablePhoto, setAvailablePhoto] = useState(false);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
  }, []);

  const toggleHidePass = () => {
    setHidePass(!hidePass);
  };

  const toggleAvailablePhoto = () => {
    setAvailablePhoto(!availablePhoto);
  };

  const submitForm = () => {
    setHidePass(true);
    Keyboard.dismiss();
    setState(registrationState);
  };

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
            style={styles.btnForAva}
            onPress={toggleAvailablePhoto}
          >
            <Text>
              {availablePhoto ? (
                <Feather name="x-circle" size={25} color="#E8E8E8" />
              ) : (
                <Feather name="plus-circle" size={25} color="#FF6C00" />
              )}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: dimensions }}>
          <Text style={styles.imputTitel}>Реєстрація</Text>
          <TextInput
            placeholder="Логін"
            style={[styles.loginImput, styles.imput]}
            value={state.login}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, login: value }))
            }
          />
          <TextInput
            placeholder="Адреса електронної пошти"
            style={[styles.emailImput, styles.imput]}
            value={state.email}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value }))
            }
          />

          <View style={styles.passwordDiv}>
            <TextInput
              placeholder="Пароль"
              style={[styles.passwordImput, styles.imput]}
              secureTextEntry={hidePass}
              value={state.password}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, password: value }))
              }
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                ...styles.btnShow,
                transform: [
                  { translateX: dimensions - 105 },
                  { translateY: 21 },
                ],
              }}
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
            onPress={submitForm}
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
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

  btnForAva: {
    position: "absolute",
    transform: [{ translateX: 59 }, { translateY: -17 }],
  },

  imputTitel: {
    fontFamily: "Roboto-Regular",
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
    color: "black",
    padding: 16,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
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
    fontFamily: "Roboto-Regular",
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
