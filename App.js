import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Dimensions,
  Text,
  View,
  Button,
  Image,
  FlatList,
  ImageBackgroundComponent,
} from "react-native";
import barsList from "./data/bars.json";
import BarCard from "./components/BarCard.js";
import BarMenu from "./components/BarMenu.js"
import BarPage from "./components/BarPage.js"
import EventsSpecials from "./components/EventsSpecials.js"


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={EventsSpecials}
        />
        {/* <Screen
          name="Home"
          component={BarMenu}
        /> */}
        <Screen name="Details" component={BarPage} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
