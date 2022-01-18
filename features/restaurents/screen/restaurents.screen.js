import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import SingleRestaurentCard from "../../../components/SingleRestaurentCard";

const RestaurentsScreen = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={{ padding: 16, backgroundColor: "green" }}>
          <Searchbar />
        </View>
        <View style={{ flex: 16, padding: 16, backgroundColor: "red" }}>
          <SingleRestaurentCard />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RestaurentsScreen;
