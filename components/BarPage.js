import React from "react";
import {
  Image,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function BarPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.pageImage}>
          <Text style={styles.title}>Image goes here</Text>
        </View>
        <View style={styles.eventandSpecialTile}>
          <View style={styles.eventTile}>
            <Text style={styles.title}>Events here</Text>
          </View>
          <View style={styles.specialTile}>
            <Text style={styles.title}>Specials here</Text>
          </View>
        </View>
        <View style={styles.menuandDrinkTile}>
          <View style={styles.menuTile}>
            <Text style={styles.title}>Menu here</Text>
          </View>
          <View style={styles.drinksTile}>
            <Text style={styles.title}>Drinks here</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "white",
  },
  scroll: {
    flexGrow: 1,
    marginHorizontal: 5,
    backgroundColor: "grey",
  },
  pageImage: {
    flexGrow: 1,
    margin: 10,
    width: windowWidth - 20,
    height: 200,
    backgroundColor: "black",
  },
  title: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  eventandSpecialTile: {
    flexDirection: "row",
    margin: 10,
    width: windowWidth - 20,
    height: 400,
    backgroundColor: "purple",
  },
  eventTile: {
    flexGrow: 1,
    margin: 5,
    backgroundColor: "green",
  },
  specialTile: {
    flexGrow: 1,
    margin: 5,
    backgroundColor: "orange",
  },
  menuandDrinkTile: {
    flexDirection: "row",
    margin: 10,
    width: windowWidth - 20,
    height: 400,
    backgroundColor: "yellow",
  },
  menuTile: {
    flexGrow: 1,
    margin: 5,
    backgroundColor: "red",
  },
  drinksTile: {
    flexGrow: 1,
    margin: 5,
    backgroundColor: "blue",
  },
});
