<script src="http://192.168.0.104:8097"></script>;
import React from "react";
import { useState } from "react";

import RegistrationScreen from "./screen/auth/RegistrationScreen.jsx";
import EntranceScreen from "./screen/auth/EntranceScreen.jsx";

import PostsScreen from "./screen/homeScreen/PostsScreen";
import CreatePostsScreen from "./screen/homeScreen/CreatePostsScreen";
import ProfileScreen from "./screen/homeScreen/ProfileScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Ronoto-Bold:": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

const AuthStack = createNativeStackNavigator();
const HomeTab = createBottomTabNavigator();

export default function App() {
  const [loadFonts, setLoadFonts] = useState(false);

  if (!loadFonts) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setLoadFonts(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      {/* <AuthStack.Navigator>
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
      </AuthStack.Navigator> */}

      <HomeTab.Navigator>
        <HomeTab.Screen
          options={{
            headerShown: false,
          }}
          name="Posts"
          component={PostsScreen}
        />
        <HomeTab.Screen
          options={{
            headerShown: false,
          }}
          name="Create"
          component={CreatePostsScreen}
        />
        <HomeTab.Screen
          options={{
            headerShown: false,
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </HomeTab.Navigator>
    </NavigationContainer>
  );
}
