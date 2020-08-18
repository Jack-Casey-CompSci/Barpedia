import React, { useState, Component } from "react";
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
import { Accordion } from "native-base";
import EventsSpecials from "./AccordionFiles/specialsAccordion.js";
import picture_linker from "./picture_linker.js";
import HappyHour from "./AccordionFiles/happyHourAccordion.js";
import Everyday from "./AccordionFiles/everydayAccordion.js";
import Entertainment from "./AccordionFiles/entertainmentAccordion";
import menu_pic from "../assets/menuPictures/menu_pic.jpg";
import drink_pic from "../assets/menuPictures/drink_pic.png";
import { render } from "react-dom";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const dailyArray = [{ title: "Daily Specials", content: "" }];
const entertainArray = [{ title: "Entertainment", content: "" }];
const everydayArray = [{ title: "All Day Everyday", content: "" }];
const happyArray = [{ title: "Happy Hours", content: "" }];

export default class BarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barName: this.props.route.params.name,
    };
  }

  _renderDaily = (item) => {
    return <EventsSpecials name={this.state.barName}></EventsSpecials>;
  };

  _renderEveryday = (item) => {
    return <Everyday name={this.state.barName}></Everyday>;
  };

  _renderHappyHour = (item) => {
    return <HappyHour name={this.state.barName}></HappyHour>;
  };

  _renderEntertainment = (item) => {
    return <Entertainment name={this.state.barName}></Entertainment>;
  };

  render() {
    const barpic = this.props.route.params.barPic;
    const bar_link = picture_linker.getBarLink(barpic);
    return (
      <View style={styles.scroll}>
        <View style={styles.container}>
          <ImageBackground style={styles.pageImage} source={bar_link}>
            <Text style={styles.barTitle}>{this.props.route.params.name}</Text>
          </ImageBackground>
          <Accordion
            dataArray={dailyArray}
            style={styles.accordion}
            renderContent={this._renderDaily}
          ></Accordion>
          <Accordion
            dataArray={entertainArray}
            renderContent={this._renderEntertainment}
            style={styles.accordion}
          ></Accordion>
          <Accordion
            dataArray={everydayArray}
            style={styles.accordion}
            renderContent={this._renderEveryday}
          ></Accordion>
          <Accordion
            dataArray={happyArray}
            style={styles.accordion}
            renderContent={this._renderHappyHour}
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
      </View>
    );
  }
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
