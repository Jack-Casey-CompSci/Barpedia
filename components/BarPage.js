import React from "react";
import {
  Image,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import EventsSpecials from "./EventsSpecials.js";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function BarPage({ navigation, route }) {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.pageImage}>
          <Text style={styles.title}>{route.params.name}</Text>
        </View>
        <View style={styles.eventandSpecialTile}>
          <EventsSpecials name="Phyrst" />
          <Text style={styles.title}> Events and Specials </Text>
        </View>
        <View style={styles.menuandDrinkTile}>
          <TouchableHighlight
            style={styles.menuTile}
            onPress={() => navigation.navigate("BarFood", {})}
          >
            <View style={styles.menuTile}>
              <Text style={styles.title}>Test</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.menuTile}
            onPress={() => navigation.navigate("BarDrinks", {})}
          >
            <View style={styles.drinksTile}>
              <Text style={styles.title}>Test</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
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
    justifyContent: "center",
    margin: 5,
    marginTop: 2.5,
    width: windowWidth - 10,
    height: 200,
    backgroundColor: "yellow",
  },
  menuTile: {
    flexGrow: 1,
    backgroundColor: "red",
    borderWidth: 2,
    borderRightWidth: 1,
    borderColor: "black",
  },
  drinksTile: {
    flexGrow: 1,
    backgroundColor: "blue",
    borderWidth: 2,
    borderLeftWidth: 1,
    borderColor: "black",
  },
});
