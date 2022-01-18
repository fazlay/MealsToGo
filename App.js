import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import RestaurentsScreen from "./features/restaurents/screen/restaurents.screen";

export default function App() {
  return (
    <>
      <RestaurentsScreen></RestaurentsScreen>
      <ExpoStatusBar style="auto" />
    </>
  );
}
