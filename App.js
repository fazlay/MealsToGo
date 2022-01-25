import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./infrustructures/theme";
import RestaurentsScreen from "./features/restaurents/screen/restaurents.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./features/restaurents/screen/SettingsScreen";
import MapScreen from "./features/restaurents/screen/MapScreen";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurent: "md-restaurant",
  MapScreen: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurent" component={RestaurentsScreen} />
            <Tab.Screen name="MapScreen" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
