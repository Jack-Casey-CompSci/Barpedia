import React from "react";
import { View, Text, StyleSheet } from "react-native";

import EverydayValues from "../../data/everyday.json";

export default function everydayAccordion({ name }) {
  const barData = EverydayValues.find((element) => {
    return element.name === name;
  });
  if (barData.available) {
    return barData.everyday.map((data, key) => {
      console.log(data, key);
      return (
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.description}>{data.Drink}</Text>
            <Text style={styles.price}>{data.Price}</Text>
          </View>
        </View>
      );
    });
  } else {
    return <Text>This is not offered at this bar</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  row: {
    flexDirection: "row",
  },
  box: {
    flex: 3,
    flexDirection: "row",
  },
  description: {
    fontSize: 16,
    flex: 2,
  },
  price: {
    fontSize: 16,
    flex: 1,
  },
});
