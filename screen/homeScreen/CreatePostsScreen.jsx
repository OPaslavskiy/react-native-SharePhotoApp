import React, { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

import {
  AntDesign,
  MaterialIcons,
  EvilIcons,
  FontAwesome,
} from "@expo/vector-icons";

export default function CreatePostsScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

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
          <Camera style={styles.camera} type={type} ref={setCameraRef}>
            {picture && (
              <View style={styles.takePhotoContainer}>
                <Image
                  source={{ uri: picture }}
                  style={{ width: 80, height: 55 }}
                />
              </View>
            )}
            <TouchableOpacity
              style={styles.flipContainer}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text style={{ fontSize: 12, marginBottom: 5, color: "#fff" }}>
                Flip
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                if (cameraRef) {
                  const { uri } = await cameraRef.takePictureAsync();
                  await MediaLibrary.createAssetAsync(uri);
                  setPicture(uri);
                }
              }}
            >
              <View style={styles.cameraDiv}>
                <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
              </View>
            </TouchableOpacity>
          </Camera>
        </View>
        <View style={styles.photosInfo}>
          <Text style={styles.text}>Завантажте фото</Text>
          <View style={[styles.photosNameTxt, styles.line]}>
            <TextInput style={styles.text} placeholder="Назва фото..." />
          </View>
          <View style={[styles.locationPhotoTxt, styles.line]}>
            <View style={styles.iconLocation}>
              <EvilIcons name="location" size={24} color="#BDBDBD" />
            </View>
            <TextInput
              style={[styles.text, styles.textLocation]}
              placeholder="Локація..."
            />
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

  flipContainer: {
    position: "absolute",
    width: 40,
    height: 40,
    top: 5,
    right: 5,
    borderColor: "#ffffff60",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
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
  },

  camera: {
    height: 240,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  cameraDiv: {
    display: "flex",
    backgroundColor: "#ffffff30",
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
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },

  photosNameTxt: {
    marginTop: 48,
  },

  takePhotoContainer: {
    position: "absolute",
    top: 180,
    left: 5,
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
