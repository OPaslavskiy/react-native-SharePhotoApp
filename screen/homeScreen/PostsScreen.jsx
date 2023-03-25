import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { Feather } from "@expo/vector-icons";

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.heder}>
        <View style={styles.hederInfo}>
          <View style={styles.hederTitel}>
            <Text style={styles.titel}>Публікації</Text>
          </View>
          <View style={styles.hederIcon}>
            <Feather name="log-out" size={20} color="#BDBDBD" />
          </View>
        </View>
      </View>
      <View style={styles.user}>
        <Image
          source={require("../../assets/avatars/avatar_my.jpg")}
          style={styles.avatar}
        />
        <View tyle={styles.aboutUser}>
          <Text style={styles.login}>Oleh Paslavskyi</Text>
          <Text style={styles.email}>ejlfkeifj@gmail.com</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  heder: {
    // backgroundColor: "grey",
    borderBottomWidth: 2,
    borderBottomColor: "#E8E8E8",
  },

  hederInfo: {
    position: "relative",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
    marginTop: 55,
    marginBottom: 11,
  },

  titel: {
    fontFamily: "Ronoto-Bold",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    letterSpacing: -0.408,
    color: "#212121",
  },

  hederIcon: {
    position: "absolute",
    transform: [{ translateX: 184 }, { translateY: 0 }],
    width: 25,
    height: 25,
  },

  user: {
    marginHorizontal: 16,
    marginTop: 32,
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  avatar: {
    borderRadius: 18,
    width: 60,
    height: 60,
    marginRight: 8,
  },

  login: {
    fontFamily: "Ronoto-Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 13,
  },

  email: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 13,
    color: "#212121cc",
  },
});
