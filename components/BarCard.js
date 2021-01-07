import React from "react";
import {
  ImageBackground,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Icon } from "native-base";

import picture_linker from "./PictureLinkers/picture_linker";
import styles from "./StyleFiles/BarCardStyle.js";

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