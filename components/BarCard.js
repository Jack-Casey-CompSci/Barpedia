import { StatusBar, setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
  TouchableHighlight,
  Button,
} from "react-native";

import barImages from "../assets/bar_list.js";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function getBarLink(bar) {
  if (bar == "Champs") {
    return barImages.Champs;
  } else if (bar == "Phyrst") {
    return barImages.Phyrst;
  } else if (bar == "Bar_Bleu") {
    return barImages.Bar_Bleu;
  } else if (bar == "Basement") {
    return barImages.Basement;
  } else if (bar == "Cafe_210") {
    return barImages.Cafe_210;
  } else if (bar == "Chrome") {
    return barImages.Chrome;
  } else if (bar == "Doggies") {
    return barImages.Doggies;
  } else if (bar == "Lions_Den") {
    return barImages.Lions_Den;
  } else if (bar == "Mad_Mex") {
    return barImages.Mad_Mex;
  } else if (bar == "Pickles") {
    return barImages.Pickles;
  } else if (bar == "Primanti_Bros") {
    return barImages.Primanti_Bros;
  } else if (bar == "Shandygaff") {
    return barImages.Shandygaff;
  }
}

export default function BarCard({
  barName,
  barDescription,
  barPic,
  onPress = (f) => f,
}) {
  const bar_link = getBarLink(barPic);
  return (
    <TouchableHighlight
      style={styles.barTab}
      onPress={() => onPress()}
      underlayColor="white"
    >
      <ImageBackground style={styles.image} source={bar_link}>
        <Text style={styles.barName}>{barName}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  barTab: {
    flex: 1,
    width: windowWidth - 20,
    height: 150,
    backgroundColor: "grey",
    borderWidth: 2,
    marginLeft: 10,
    marginBottom: 10,
    borderColor: "black",
    flexDirection: "column",
  },
  barName: {
    fontSize: 32,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  barName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
});
