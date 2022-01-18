import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {theme} from './infrustructures/theme'
import RestaurentsScreen from "./features/restaurents/screen/restaurents.screen";

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <RestaurentsScreen></RestaurentsScreen>

    </ThemeProvider>
    <ExpoStatusBar style="auto" />
     
    </>
  );
}
 