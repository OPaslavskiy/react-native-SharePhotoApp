import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

import {
  AntDesign,
  MaterialIcons,
  EvilIcons,
  FontAwesome,
} from "@expo/vector-icons";

export default function CommentsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
          <View style={styles.heder}>
            <View style={styles.hederInfo}>
              <View style={styles.hederIcon}>
                <AntDesign
                  name="arrowleft"
                  size={24}
                  color="#BDBDBD"
                  // onPress={() => navigation.navigate("Profile")}
                />
              </View>
              <View style={styles.hederTitel}>
                <Text style={styles.titel}>Коментарі</Text>
              </View>
            </View>
          </View>

          <View style={styles.mainContainer}>
            <View style={styles.mainPhotoContainer}>
              <View style={styles.uploadedPhotoDiv}>
                <Image
                  style={styles.uploadedPhoto}
                  source={require("../../assets/images/mountain-g20a.jpg")}
                />
              </View>
            </View>
            <View style={styles.mainCommentsContainer}>
              <View style={styles.commentContainer}>
                <View style={styles.icon}>
                  <Image
                    source={require("../../assets/avatars/avatar_my.jpg")}
                    style={styles.avatar}
                  />
                </View>
                <View>
                  <View style={styles.comment}>
                    <Text style={styles.commentText}>
                      !!!Дуже гарне, фото! Де знімав!??? Хочу туди якнайшвидше.
                      Це ранок, чи вечір? Напиши ще усі параметри на яких
                      знімав.Дякую!
                    </Text>
                  </View>
                  <View style={styles.date}>
                    <Text style={styles.dateText}>02 квітня 2023, 21:01</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
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
    // backgroundColor: "red",
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
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },

  mainCommentsContainer: {
    marginTop: 32,
  },

  commentContainer: {
    marginBottom: 24,

    display: "flex",
    flexDirection: "row",
  },

  icon: {
    width: 28,
    maxHeight: 28,
    marginRight: 16,
  },

  avatar: {
    borderRadius: 14,
    width: 28,
    height: 28,
  },

  comment: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },

  commentText: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 18,
  },

  date: {
    alignItems: "flex-end",
    marginRight: 16,
  },

  dateText: {
    fontFamily: "Roboto-Regular",
    fontFtyle: "normal",
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,

    color: "#BDBDBD",
  },
});
