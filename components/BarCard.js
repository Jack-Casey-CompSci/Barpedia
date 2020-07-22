import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Dimensions, Text, View, Button, Image, FlatList, ImageBackgroundComponent } from 'react-native';

import barImages from "../assets/bar_list.js";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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

export default function BarCard({ barName, barDescription, barPic }) {
  const bar_link = getBarLink(barPic);
  return (
    <View style={styles.container}>
      <View style={styles.barTab}>
        <ImageBackground style={styles.image} source={bar_link}>
          <Text style={styles.barName}>{barName}</Text>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  barTab: {
    width: windowWidth - 20,
    height: 150,
    backgroundColor: "grey",
    marginLeft: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "black",
    flexDirection: "column"
  },
  barName: {
    fontSize: 32
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  barName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32
  }
});