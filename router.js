import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import RegistrationScreen from "./screen/auth/RegistrationScreen.jsx";
import EntranceScreen from "./screen/auth/EntranceScreen.jsx";

import PostsScreen from "./screen/homeScreen/PostsScreen";
import CreatePostsScreen from "./screen/homeScreen/CreatePostsScreen";
import ProfileScreen from "./screen/homeScreen/ProfileScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const AuthStack = createNativeStackNavigator();
const HomeTab = createBottomTabNavigator();

const iconSize = 28;
const iconColor = "#212121cc";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Entrance"
          component={EntranceScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  } else {
    return (
      <HomeTab.Navigator tabBarOptions={{ showLabel: false }}>
        <HomeTab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesome5 name="square" size={iconSize} color={iconColor} />
            ),
          }}
          name="Posts"
          component={PostsScreen}
        />
        <HomeTab.Screen
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
            tabBarIcon: ({ focused, color, size }) => (
              <View activeOpacity={0.8} style={styles.btn}>
                <Text style={[styles.btnTitle, styles.text]}>+</Text>
              </View>
            ),
          }}
          name="Create"
          component={CreatePostsScreen}
        />
        <HomeTab.Screen
          isAuth={isAuth}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesome5 name="user" size={iconSize} color={iconColor} />
            ),
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </HomeTab.Navigator>
    );
  }
};

const styles = StyleSheet.create({
  btn: {
    height: 40,
    width: 70,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 16,
  },

  text: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },

  btnTitle: {
    color: "#fff",
  },
});
