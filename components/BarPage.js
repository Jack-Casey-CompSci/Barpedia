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
          <Text style={styles.title}>Test</Text>
        </View>
        <View style={styles.eventandSpecialTile}>
          <View style={styles.eventTile}>
            <Text style={styles.title}>Test</Text>
          </View>
          <View style={styles.specialTile}>
            <Text style={styles.title}>Test</Text>
          </View>
        </View>
        <View style={styles.menuandDrinkTile}>
          <View style={styles.menuTile}>
            <Text style={styles.title}>Test</Text>
          </View>
          <View style={styles.drinksTile}>
            <Text style={styles.title}>Test</Text>
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
    height: 250,
    backgroundColor: "purple",
  },
  eventTile: {
    flexGrow: 1,
    backgroundColor: "green",
  },
  specialTile: {
    flexGrow: 1,
    backgroundColor: "orange",
  },
  menuandDrinkTile: {
    flexDirection: "row",
    height: 250,
    backgroundColor: "yellow",
  },
  menuTile: {
    flexGrow: 1,
    backgroundColor: "red",
  },
  drinksTile: {
    flexGrow: 1,
    backgroundColor: "blue",
  },
});
