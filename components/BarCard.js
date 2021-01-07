import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Icon } from "native-base";

import picture_linker from "./PictureLinkers/picture_linker";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function BarCard({
  barName,
  barDescription,
  barPic,
  barLine,
  barCoverCharge,
  onPress = (f) => f,
}) {
  const bar_link = picture_linker.getBarLink(barPic);
  var coverIcon;
  if(barCoverCharge > 0){
    coverIcon = <Icon name="dollar" type="FontAwesome" style={styles.icon}></Icon>
  }
  if (barLine == 1) {
    return (
      <TouchableHighlight
        style={styles.barTab}
        onPress={() => onPress()}
        underlayColor="white"
      >
        <ImageBackground style={styles.image} source={bar_link}>
          <View style={styles.iconBox}>
            <Icon name="person" style={styles.icon}></Icon>
            {coverIcon}
          </View>
          <View style={styles.nameBox}>
            <Text style={styles.barName}>{barName}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    );
  } else if (barLine == 2) {
    return (
      <TouchableHighlight
        style={styles.barTab}
        onPress={() => onPress()}
        underlayColor="white"
      >
        <ImageBackground style={styles.image} source={bar_link}>
          <View style={styles.iconBox}>
            <Icon name="person" style={styles.icon}></Icon>
            <Icon name="person" style={styles.icon}></Icon>
            {coverIcon}
          </View>
          <View style={styles.nameBox}>
            <Text style={styles.barName}>{barName}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    );
  } 
  else if (barLine == 0){
    return(
      <TouchableHighlight
        style={styles.barTab}
        onPress={() => onPress()}
        underlayColor="white"
      >
        <ImageBackground style={styles.image} source={bar_link}>
          <View style={styles.iconBox}>
            {coverIcon}
          </View>
          <View style={styles.nameBox}>
            <Text style={styles.barName}>{barName}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    );
  }
  else if (barLine == 3) {
    return (
      <TouchableHighlight
        style={styles.barTab}
        onPress={() => onPress()}
        underlayColor="white"
      >
        <ImageBackground style={styles.image} source={bar_link}>
          <View style={styles.iconBox}>
            <Icon name="person" style={styles.icon}></Icon>
            <Icon name="person" style={styles.icon}></Icon>
            <Icon name="person" style={styles.icon}></Icon> 
            {coverIcon}
          </View>
          <View style={styles.nameBox}>
            <Text style={styles.barName}>{barName}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    );
    
  } 
  else{
    return (
      <TouchableHighlight
        style={styles.barTab}
        onPress={() => onPress()}
        underlayColor="white"
      >
        <ImageBackground style={styles.image} source={bar_link}>
          <View style={styles.iconBox}>
            {coverIcon}
          </View>
          <View style={styles.nameBox}>
            <Text style={styles.barName}>{barName}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    );
  }
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
  },
  icon: {
    color: "white",
    marginLeft: 5,
  },
  iconBox: {
    flex: 1,
    flexDirection: "row",
  },
  nameBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  barName: {
    fontSize: 32,
  },
  image: {
    flex: 1,
    flexDirection: "column",
  },
  barName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
});
