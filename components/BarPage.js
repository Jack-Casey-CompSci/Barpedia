import React, { useState, Component } from "react";
import {
  Button,
  Image,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
  Text,
  View, 
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
import Timer from "./Timer.js";
import styles from "./StyleFiles/BarPageStyle.js";



var lineLength = [
  {
    0: "No Wait",
    1: "5-10 Minutes",
    2: "11-30 Minutes",
    3: "Longer than 30 Minutes",
  },
];

export default class BarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barName: this.props.route.params.name,
      coverCharge: this.props.route.params.coverCharge,
      dataSource: [],
      listener: this.props.route.params.listenerprop,
      loading: true,
    };
  }

  componentDidMount() {
    //fetch("http:/192.168.0.5:3000/linedata")
    fetch("https://barpedia.herokuapp.com/linedata/")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          loading: false,
          dataSource: responseData,
        });
      })
      .catch((error) => console.log(error)); //to catch the errors if any
  }

  componentDidUpdate() {
    if (this.state.loading) {
      fetch("https://barpedia.herokuapp.com/linedata/")
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            loading: false,
            dataSource: responseData,
          });
        })
        .catch((error) => console.log(error));
      }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.route.params.listenerprop !== prevState.listener) {
      return (
        (prevState.listener = nextProps.route.params.listenerprop),
        (prevState.loading = true)
      );
    } else return false;
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
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      );
    }
    const bar_hours = this.state.dataSource.find((element) => {
      return element.name === this.state.barName;
    });
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

    const canReportLine = true;
    var closed;
    var button;
    if (!bar_hours.closed) {
      closed = (
        <View style={styles.line_and_cover}>
          <Text style={styles.line_and_cover_text}>
            Approx wait is: {lineLength[0][bar_hours.line]}
          </Text>
          <Text style={styles.line_and_cover_text}>
            The cover charge is ${bar_hours.coverCharge}
          </Text>
        </View>
      )
    }
    if (bar_hours.closed) {
      closed = (
        <View style={styles.line_and_cover}>
          <Text style={styles.line_and_cover_text}>
            This bar is currently closed due to COVID
          </Text>
        </View>
      )
    }
    if (canReportLine) {
      button = (
        <Button
          title="Report Line/Cover Charge"
          onPress={() =>
            this.props.navigation.navigate("Line Reporting", {
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
            this.props.navigation.navigate("Line Reporting", {
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
        <ScrollView style={styles.scroll} scrollIndicatorInsets={{ right: 1 }}>
          <View style={styles.box}>
            <ImageBackground style={styles.pageImage} source={bar_link}>
              <Text style={styles.barTitle}>
                {this.props.route.params.name}
              </Text>
            </ImageBackground>
          </View>
          {/* {button} */} 
          <Timer
            barName={this.props.route.params.name}
            onPress={() =>
              this.props.navigation.navigate("Line Reporting", {
                name: this.props.route.params.name,
                id: this.props.route.params.id,
                listen: this.state.listener,
              })
            }
          ></Timer>
          {closed}
          <Accordion
            dataArray={dailyArray}
            style={styles.accordion}
            headerStyle={styles.accordionHeader}
            renderContent={this._renderDaily}
          ></Accordion>
          <Accordion
            dataArray={entertainArray}
            renderContent={this._renderEntertainment}
            style={styles.accordion}
            headerStyle={styles.accordionHeader}
          ></Accordion>
          <Accordion
            dataArray={everydayArray}
            style={styles.accordion}
            headerStyle={styles.accordionHeader}
            renderContent={this._renderEveryday}
          ></Accordion>
          <Accordion
            dataArray={happyArray}
            style={styles.accordion}
            headerStyle={styles.accordionHeader}
            renderContent={this._renderHappyHour}
          ></Accordion>
          <View style={styles.menuandDrinkTile}>
            <TouchableHighlight
              style={styles.menuTile}
              onPress={() =>
                this.props.navigation.navigate("Bar Food", {
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
                this.props.navigation.navigate("Bar Drinks", {
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
          <View style={styles.hours}>
            <Text style={styles.hours_title}> Bar Hours: </Text>
            <Text style={styles.hours_text}>
              Monday: {bar_hours.hours.Monday}
            </Text>
            <Text style={styles.hours_text}>
              Tuesday: {bar_hours.hours.Tuesday}
            </Text>
            <Text style={styles.hours_text}>
              Wednesday: {bar_hours.hours.Wednesday}
            </Text>
            <Text style={styles.hours_text}>
              Thursday: {bar_hours.hours.Thursday}
            </Text>
            <Text style={styles.hours_text}>
              Friday: {bar_hours.hours.Friday}
            </Text>
            <Text style={styles.hours_text}>
              Saturday: {bar_hours.hours.Saturday}
            </Text>
            <Text style={styles.hours_text}>
              Sunday: {bar_hours.hours.Sunday}
            </Text>
          </View>
          <Image style={styles.logo} source={logo}></Image>
        </ScrollView>
      </>
    );
  }
}

// const styles = StyleSheet.create({
//   scroll: {
//     flex: 1,
//   },
//   fit: {
//     flexGrow: 1,
//     backgroundColor: "green",
//     height: windowHeight,
//   },
//   container: {
//     flex: 1,
//     flexGrow: 1,
//     alignItems: "center",
//   },
//   pageImage: {
//     width: windowWidth - 12,
//     height: 200,
//   },
//   box: {
//     borderWidth: 2,
//     borderColor: "black",
//     margin: 4,
//   },
//   barTitle: {
//     fontSize: 32,
//     color: "white",
//     textAlign: "center",
//   },
//   title: {
//     fontSize: 16,
//     color: "white",
//     textAlign: "center",
//   },
//   line_and_cover: {
//     backgroundColor: "whitesmoke",
//     justifyContent: "center",
//     alignItems: "center",
//     height: 100,
//   },
//   line_and_cover_text: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   accordion: {
//     width: windowWidth,
//     flex: 1,
//   },
//   menuandDrinkTile: {
//     flex: 1,
//     flexDirection: "row",
//     margin: 5,
//     marginTop: 2.5,
//     width: windowWidth - 10,
//     height: 200,
//   },
//   menuTile: {
//     flex: 1,
//     borderWidth: 2,
//     borderRightWidth: 1,
//     borderColor: "black",
//   },
//   drinksTile: {
//     flex: 1,
//     borderWidth: 2,
//     borderLeftWidth: 1,
//     borderColor: "black",
//   },
//   logo: {
//     width: windowWidth - 40,
//     height: 200,
//     marginLeft: 20,
//   },
//   hours: {
//     backgroundColor: "whitesmoke",
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   hours_title: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   hours_text: {
//     fontSize: 16,
//   },
//   faketext: {
//     flex: 1,
//     fontSize: 32,
//   },
//   accordionHeader: {
//     backgroundColor: "#B2B8C6",
//     borderColor: "black",
//     borderWidth: 0.75,
//     marginHorizontal: 5
//   },
//   reportButton: {
//     marginHorizontal: 50
//   }
// });
