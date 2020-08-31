import React from "react";
import { StyleSheet, FlatList, Image, Dimensions } from "react-native";
import BarCard from "./BarCard.js";
import barsList from "../data/bars.json";
import logo from "../assets/Barpedia_logo.png";
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;

export default function BarMenu({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        style={styles.container}
        data={barsList}
        renderItem={({ item }) => {
          return (
            <BarCard
              key={item.id}
              barName={item.name}
              barDescription={item.description}
              barPic={item.pic_name}
              onPress={() =>
                navigation.navigate("Details", {
                  name: item.name,
                  description: item.description,
                  barPic: item.pic_name,
                  coverCharge: item.coverCharge,
                })
              }
            />
          );
        }}
      />
      <Image style={styles.logo} source={logo}></Image>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: windowWidth - 40,
    height: 200,
    marginLeft: 20,
  },
});
