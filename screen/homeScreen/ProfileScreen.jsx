import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useRoute } from "../../";

export default function CreatePostsScreen() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require("../../assets/images/background.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
            <View style={styles.registerForm}>
              <View style={styles.avatarDiv}>
                <Image
                  source={require("../../assets/avatars/avatar_my.jpg")}
                  style={styles.avatar}
                />
                <TouchableOpacity activeOpacity={0.8} style={styles.btnForAva}>
                  <Text>
                    <Feather name="x-circle" size={25} color="#BDBDBD" />
                  </Text>
                </TouchableOpacity>
                <View style={styles.logOutIcon}>
                  <Feather
                    name="log-out"
                    size={24}
                    color="#BDBDBD"
                    onPress={() => {
                      useRoute(false);
                    }}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.login}>Oleh Paslavskiy</Text>
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
                    <View style={styles.likes}>
                      <Text style={styles.likesIcon}>
                        <EvilIcons name="like" size={28} color="#FF6C00" />
                      </Text>
                      <Text style={styles.likesNumber}>100</Text>
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
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
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
    // justifyContent: "flex-end",
  },
  registerForm: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    marginTop: 147,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    width: "100%",
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
    backgroundColor: "#fff",
    borderRadius: 13,
    transform: [{ translateX: 59 }, { translateY: -17 }],
  },

  logOutIcon: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 13,
    transform: [{ translateX: 165 }, { translateY: -17 }],
  },

  login: {
    fontFamily: "Roboto-Regular",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    marginTop: 32,
  },

  mainPhotoContainer: {
    marginHorizontal: 16,
    marginTop: 33,
    width: "100%",
  },

  uploadedPhotoDiv: {
    marginHorizontal: 16,
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
    flex: 1,
  },

  photosName: {
    marginHorizontal: 16,
    fontFamily: "Roboto-Regular",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    marginTop: 8,
  },

  statusLine: {
    marginHorizontal: 16,
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
