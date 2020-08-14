import React, { useState } from "react";
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
import { Accordion, Item } from "native-base";
import EventsSpecials from "./EventsSpecials.js";
import picture_linker from "./picture_linker.js";
import menu_pic from "../assets/menuPictures/menu_pic.jpg";
import drink_pic from "../assets/menuPictures/drink_pic.png";
import { render } from "react-dom";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const dailyArray = [{ title: "Daily Specials", content: "" }];
const entertainArray = [{ title: "Entertainment", content: "" }];
const everydayArray = [{ title: "All Day Everyday", content: "" }];
const happyArray = [{ title: "Happy Hours", content: "" }];

function renderDaily(item) {
  return (
    <View>
      <EventsSpecials name={"Phyrst"} />
    </View>
  );
}
function renderEntertain(item) {
  return (
    <View>
      <Text>Entertainment Here</Text>
    </View>
  );
}
function renderEveryday(item) {
  return (
    <View>
      <Text>All Day Everyday Deals Here</Text>
    </View>
  );
}
function renderHappy(item) {
  return (
    <View>
      <Text>Happy Hours Here</Text>
    </View>
  );
}

export default function BarPage({ navigation, route }) {
  const bar_link = picture_linker.getBarLink(route.params.barPic);
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <ImageBackground style={styles.pageImage} source={bar_link}>
          <Text style={styles.barTitle}>{route.params.name}</Text>
        </ImageBackground>
        <Accordion
          dataArray={dailyArray}
          style={styles.accordion}
          renderContent={renderDaily}
        ></Accordion>
        <Accordion
          dataArray={entertainArray}
          renderContent={renderEntertain}
          style={styles.accordion}
        ></Accordion>
        <Accordion
          dataArray={everydayArray}
          style={styles.accordion}
          renderContent={renderEveryday}
        ></Accordion>
        <Accordion
          dataArray={happyArray}
          style={styles.accordion}
          renderContent={renderHappy}
        ></Accordion>
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
            <ImageBackground
              style={styles.drinksTile}
              source={drink_pic}
              resizeMode={"stretch"}
            >
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
    flex: 1,
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
  accordion: {
    width: windowWidth,
  },
  menuandDrinkTile: {
    flex: 1,
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
    borderWidth: 2,
    borderLeftWidth: 1,
    borderColor: "black",
  },
});
