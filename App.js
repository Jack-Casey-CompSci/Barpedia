import React from "react";

import BarMenu from "./components/BarMenu.js";
import BarPage from "./components/BarPage.js";
import BarFood from "./components/BarSpecificMenu";
import BarDrinks from "./components/BarSpecificDrinks";
import LineReporting from "./components/TestForm.js"

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

console.disableYellowBox = true;

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={BarMenu} />
        <Screen name="Details" component={BarPage} />
        <Screen name="BarFood" component={BarFood} />
        <Screen name="BarDrinks" component={BarDrinks} />
        <Screen name="LineReporting" component={LineReporting} />
      </Navigator>
    </NavigationContainer>
  );
}
