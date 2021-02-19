import React from "react";

import BarMenu from "./components/BarMenuClass.js";
import BarPage from "./components/BarPage.js";
import BarFood from "./components/PictureLinkers/BarSpecificMenu.js";
import BarDrinks from "./components/PictureLinkers/BarSpecificDrinks.js";
import LineReporting from "./components/ReportForm.js";
import Reviews from "./components/Reviews.js";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import styles from "./components/StyleFiles/BarPageStyle.js";

const { Navigator, Screen } = createStackNavigator();

console.disableYellowBox = true;

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={BarMenu} options={{headerStyle: {backgroundColor: '#0696E9'}, headerTintColor: '#fff'}} />
        <Screen name="Details" component={BarPage} options={{headerStyle: {backgroundColor: '#0696E9'}, headerTintColor: '#fff'}}/>
        <Screen name="Bar Food" component={BarFood} options={{headerStyle: {backgroundColor: '#0696E9'}, headerTintColor: '#fff'}}/>
        <Screen name="Bar Drinks" component={BarDrinks} options={{headerStyle: {backgroundColor: '#0696E9'}, headerTintColor: '#fff'}}/>
        <Screen name="Line Reporting" component={LineReporting} options={{headerStyle: {backgroundColor: '#0696E9'}, headerTintColor: '#fff'}}/>
        <Screen name="Reviews" component={Reviews} options={{headerStyle: {backgroundColor: '#0696E9'}, headerTintColor: '#fff'}}/>
      </Navigator>
    </NavigationContainer>
  );
}
