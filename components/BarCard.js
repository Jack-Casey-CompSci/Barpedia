import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
  TouchableHighlight,
} from "react-native";

import picture_linker from "./picture_linker";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function BarCard({
  barName,
  barDescription,
  barPic,
  onPress = (f) => f,
}) {
  const bar_link = picture_linker.getBarLink(barPic);
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
