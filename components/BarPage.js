import React, { useState, Component } from "react";
import {
  Button,
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
import specials from "../data/specials.json";
import everyday from "../data/everyday.json";
import entertainment from "../data/entertainment.json";
import happyhour from "../data/happyHour.json";
import EventsSpecials from "./AccordionFiles/specialsAccordion.js";
import picture_linker from "./PictureLinkers/picture_linker.js";
import HappyHour from "./AccordionFiles/happyHourAccordion.js";
import Everyday from "./AccordionFiles/everydayAccordion.js";
import Entertainment from "./AccordionFiles/entertainmentAccordion";
import menu_pic from "../assets/menuPictures/menu_pic.jpg";
import drink_pic from "../assets/menuPictures/drink_pic.png";
import logo from "../assets/Barpedia_logo.png";
import { render } from "react-dom";
import CoverChargeModal from "./CoverChargeModal.js";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class BarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barName: this.props.route.params.name,
      coverCharge: this.props.route.params.coverCharge,
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
    const barspec = specials.find((element) => {
      return element.name === this.state.barName;
    });
    const barenter = entertainment.find((element) => {
      return element.name === this.state.barName;
    });
    const barevery = everyday.find((element) => {
      return element.name === this.state.barName;
    });
    const barhappy = happyhour.find((element) => {
      return element.name === this.state.barName;
    });
    const barpic = this.props.route.params.barPic;
    const bar_link = picture_linker.getBarLink(barpic);
    var dailyArray = [{ title: "Daily Specials", content: "" }];
    var entertainArray = [{ title: "Entertainment", content: "" }];
    var everydayArray = [{ title: "All Day Everyday", content: "" }];
    var happyArray = [{ title: "Happy Hours", content: "" }];
    if (barspec.available == false) {
      dailyArray = [
        { title: "Daily Specials (not available at this bar)", content: "" },
      ];
    }
    if (barenter.available == false) {
      entertainArray = [
        { title: "Entertainment (not available at this bar)", content: "" },
      ];
    }
    if (barevery.available == false) {
      everydayArray = [
        { title: "All Day Everyday (not available at this bar)", content: "" },
      ];
    }
    if (barhappy.available == false) {
      happyArray = [
        { title: "Happy Hours (not available at this bar)", content: "" },
      ];
    }

    const canReportLine = false;
    var button;
    if (canReportLine) {
      button = (
        <Button
          title="Report Line/Cover Charge"
          onPress={() =>
            this.props.navigation.navigate("LineReporting", {
              name: this.props.route.params.name,
              id: this.props.route.params.id,
            })
          }
        ></Button>
      );
    } else {
      button = (
        <Button
          title="Already Submitted"
          disabled
          onPress={() =>
            this.props.navigation.navigate("LineReporting", {
              name: this.props.route.params.name,
              id: this.props.route.params.id,
            })
          }
        ></Button>
      );
    }

    return (
      <>
        <CoverChargeModal
          coverCharge={this.props.route.params.coverCharge}
        ></CoverChargeModal>
        <ScrollView style={styles.scroll}>
          <View style={styles.box}>
            <ImageBackground style={styles.pageImage} source={bar_link}>
              <Text style={styles.barTitle}>
                {this.props.route.params.name}
              </Text>
            </ImageBackground>
          </View>
          {button}
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
                this.props.navigation.navigate("BarFood", {
                  name: this.props.route.params.name,
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
                this.props.navigation.navigate("BarDrinks", {
                  name: this.props.route.params.name,
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
          <Image style={styles.logo} source={logo}></Image>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  fit: {
    flexGrow: 1,
    backgroundColor: "green",
    height: windowHeight,
  },
  container: {
    flex: 1,
    flexGrow: 1,
    alignItems: "center",
  },
  pageImage: {
    width: windowWidth - 12,
    height: 200,
  },
  box: {
    borderWidth: 2,
    borderColor: "black",
    margin: 4,
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
    flex: 1,
  },
  menuandDrinkTile: {
    flex: 1,
    flexDirection: "row",
    margin: 5,
    marginTop: 2.5,
    width: windowWidth - 10,
    height: 200,
  },
  menuTile: {
    flex: 1,
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
  logo: {
    width: windowWidth - 40,
    height: 200,
    marginLeft: 20,
  },
});
