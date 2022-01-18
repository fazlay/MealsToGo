import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import SingleRestaurentCard from "../../../components/SingleRestaurentCard";
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

const SafeArea = styled(SafeAreaView)`
flex:1;
margin-top: ${StatusBar.currentHeight}
`
const SearchContainer = styled.View`
padding: ${(props)=> props.theme.space[3]}`

const RestaurentListContainer = styled.View`
flex:1;
padding: ${(props)=>props.theme.space[3]}
`

const RestaurentsScreen = () => {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded||!latoLoaded) {
    return null
  }
  return (
    <>
      <SafeArea style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <SearchContainer >
          <Searchbar />
        </SearchContainer>
        <RestaurentListContainer >
          <SingleRestaurentCard />
        </RestaurentListContainer>
      </SafeArea>
    </>
  );
};



export default RestaurentsScreen;
