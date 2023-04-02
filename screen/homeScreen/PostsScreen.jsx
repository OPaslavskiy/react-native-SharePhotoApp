import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.heder}>
        <View style={styles.hederInfo}>
          <View style={styles.hederTitel}>
            <Text style={styles.titel}>Публікації</Text>
          </View>
          <View style={styles.hederIcon}>
            <Feather name="log-out" size={24} color="#BDBDBD" />
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
      <View style={styles.mainPhotoContainer}>
        <View style={styles.uploadedPhotoDiv}>
          <Image
            style={styles.uploadedPhoto}
            source={require("../../assets/images/mountain-g20a.jpg")}
          />
        </View>

        <Text style={styles.photosName}>Гора</Text>
        <View style={styles.statusLine}>
          <View style={styles.rating}>
            <View style={styles.comments}>
              <Text style={styles.commentsIcon}>
                <EvilIcons name="comment" size={28} color="#FF6C00" />
              </Text>
              <Text style={styles.commentsNumber}>8</Text>
            </View>
          </View>

          <View style={styles.location}>
            <Text style={styles.iconLocation}>
              <EvilIcons name="location" size={28} color="#BDBDBD" />
            </Text>
            <Text style={styles.textLocation}>Japan</Text>
          </View>
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
    fontFamily: "Roboto-Bold",
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
    fontFamily: "Roboto-Bold",
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

  mainPhotoContainer: {
    marginHorizontal: 16,
    marginTop: 33,
  },

  uploadedPhotoDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: 240,
    textAlign: "center",
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
  },

  uploadedPhoto: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },

  photosName: {
    fontFamily: "Roboto-Regular",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    marginTop: 8,
  },

  statusLine: {
    display: "flex",
    flexDirection: "row",
    marginTop: 11,
    alignItems: "center",
    justifyContent: "space-between",
  },

  rating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  likes: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  comments: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 32,
  },

  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
