import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import {
  AntDesign,
  MaterialIcons,
  EvilIcons,
  FontAwesome,
} from "@expo/vector-icons";

export default function CreatePostsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.heder}>
        <View style={styles.hederInfo}>
          <View style={styles.hederIcon}>
            <AntDesign
              name="arrowleft"
              size={24}
              color="#BDBDBD"
              onPress={() => navigation.navigate("Posts")}
            />
          </View>
          <View style={styles.hederTitel}>
            <Text style={styles.titel}>Створити публікацію...</Text>
          </View>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.uploadPhoto}>
          <View style={styles.camera}>
            <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
          </View>
        </View>
        <View style={styles.photosInfo}>
          <Text style={styles.text}>Завантажте фото</Text>
          <View style={[styles.photosNameTxt, styles.line]}>
            <Text style={styles.text}>Назва...</Text>
          </View>
          <View style={[styles.locationPhotoTxt, styles.line]}>
            <View style={styles.iconLocation}>
              <EvilIcons name="location" size={24} color="#BDBDBD" />
            </View>
            <Text style={[styles.text, styles.textLocation]}>Локація...</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
        <Text style={[styles.btnTitle, styles.text]}>Опублікувати</Text>
      </TouchableOpacity>
      <View style={styles.iconTrash}>
        <TouchableOpacity activeOpacity={0.8} style={styles.btnTrash}>
          <FontAwesome name="trash-o" size={24} color="#BDBDBD" />
        </TouchableOpacity>
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
    width: "100%",
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
    transform: [{ translateX: -184 }, { translateY: 0 }],
    width: 25,
    height: 25,
  },

  mainContainer: {
    marginHorizontal: 16,
    marginTop: 32,
  },

  uploadPhoto: {
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "#E8E8E8",
    height: 240,
    alignItems: "center",
    justifyContent: "center",
  },

  camera: {
    display: "flex",
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },

  text: {
    fontFamily: "Roboto-Bold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },

  line: {
    // backgroundColor: "grey",
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },

  photosNameTxt: {
    marginTop: 48,
  },

  locationPhotoTxt: {
    marginTop: 32,
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "center",
  },

  textLocation: {
    width: 100,
    marginLeft: 8,
  },

  iconLocation: { width: 25 },

  btn: {
    height: 51,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },

  btnTitle: {
    color: "#fff",
  },

  iconTrash: {
    marginTop: 120,
    alignItems: "center",
  },

  btnTrash: {
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
