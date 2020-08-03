import React from "react";
import { StyleSheet, FlatList, Button } from "react-native";
import BarCard from "./BarCard.js";
import barsList from "../data/bars.json";

export default function BarMenu({ navigation }) {
  return (
    <FlatList
      style={styles.container}
      data={barsList}
      renderItem={({ item }) => {
        return (
          <>
            <BarCard
              key={item.id}
              barName={item.name}
              barDescription={item.description}
              barPic={item.pic_name}
              onPress={() =>
                navigation.navigate("Details", {
                  name: item.name,
                  description: item.description,
                  barPic: item.barPic,
                })
              }
            />
          </>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
