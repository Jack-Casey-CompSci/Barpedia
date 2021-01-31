import React from "react";

import BarMenu from "./components/BarMenuClass.js";
import BarPage from "./components/BarPage.js";
import BarFood from "./components/PictureLinkers/BarSpecificMenu.js";
import BarDrinks from "./components/PictureLinkers/BarSpecificDrinks.js";
import LineReporting from "./components/ReportForm.js";
import Map from "./components/Map.js"

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

console.disableYellowBox = true;

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Map} />
        <Screen name="Details" component={BarPage} />
        <Screen name="Bar Food" component={BarFood} />
        <Screen name="Bar Drinks" component={BarDrinks} />
        <Screen name="Line Reporting" component={LineReporting} />
      </Navigator>
    </NavigationContainer>
  );
}
