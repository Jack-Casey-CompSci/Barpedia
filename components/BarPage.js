import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import EventsSpecials from "./EventsSpecials.js";
import picture_linker from "./picture_linker.js";
import menu_pic from "../assets/menuPictures/menu_pic.jpg";
import drink_pic from "../assets/menuPictures/drink_pic.jpg";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function BarPage({ navigation, route }) {
  const bar_link = picture_linker.getBarLink(route.params.barPic);
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <ImageBackground style={styles.pageImage} source={bar_link}>
          <Text style={styles.barTitle}>{route.params.name}</Text>
        </ImageBackground>
        <EventsSpecials name={route.params.name} />
        <View style={styles.menuandDrinkTile}>
          <TouchableHighlight
            style={styles.menuTile}
            onPress={() =>
              navigation.navigate("BarFood", {
                name: route.params.name,
              })
            }
          >
            <ImageBackground style={styles.menuTile} source={menu_pic}>
              <Text style={styles.title}>Menu</Text>
            </ImageBackground>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.drinksTile}
            onPress={() =>
              navigation.navigate("BarDrinks", {
                name: route.params.name,
              })
            }
          >
            <ImageBackground style={styles.drinksTile} source={drink_pic}>
              <Text style={styles.title}>Drinks</Text>
            </ImageBackground>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "grey",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "orange",
  },
  pageImage: {
    flexGrow: 1,
    margin: 5,
    marginBottom: 2.5,
    width: windowWidth - 10,
    height: 200,
    backgroundColor: "green",
    borderWidth: 2,
    borderColor: "black",
  },
  barTitle: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
  },
  title: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  eventandSpecialTile: {
    margin: 5,
    marginBottom: 2.5,
    marginTop: 2.5,
    width: windowWidth - 10,
    height: 200,
    backgroundColor: "purple",
    borderWidth: 2,
    borderColor: "black",
  },
  menuandDrinkTile: {
    flexDirection: "row",
    margin: 5,
    marginTop: 2.5,
    width: windowWidth - 10,
    height: 200,
    backgroundColor: "yellow",
  },
  menuTile: {
    flex: 1,
    backgroundColor: "red",
    borderWidth: 2,
    borderRightWidth: 1,
    borderColor: "black",
  },
  drinksTile: {
    flex: 1,
    backgroundColor: "blue",
    borderWidth: 2,
    borderLeftWidth: 1,
    borderColor: "black",
  },
});
