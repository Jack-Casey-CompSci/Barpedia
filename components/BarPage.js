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
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.pageImage}>
          <Text style={styles.title}>Test</Text>
        </View>
        <View style={styles.eventandSpecialTile}>
<<<<<<< Updated upstream
          <View style={styles.eventTile}>
            <Text style={styles.title}>Test</Text>
          </View>
          <View style={styles.specialTile}>
            <Text style={styles.title}>Test</Text>
          </View>
=======
          <Text style={styles.title}> Events and Specials </Text>
>>>>>>> Stashed changes
        </View>
        <View style={styles.menuandDrinkTile}>
          <View style={styles.menuTile}>
            <Text style={styles.title}>Test</Text>
          </View>
          <View style={styles.drinksTile}>
            <Text style={styles.title}>Test</Text>
          </View>
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
<<<<<<< Updated upstream
=======
    margin: 5,
    marginBottom: 2.5,
    width: windowWidth - 10,
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
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
