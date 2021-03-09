import React from "react";
import { View, Text, StyleSheet } from "react-native";

import EverydayValues from "../../data/everyday.json";

export default function everydayAccordion({ name }) {
  const barData = EverydayValues.find((element) => {
    return element.name === name;
  });
  if (barData.available) {
    return barData.everyday.map((data, key) => {
      if(key % 2 == 0){
        return (
          <View style={styles.container} key={key}>
            <View style={styles.box}>
              <Text style={styles.description}>{data.Drink}</Text>
              <Text style={styles.price}>{data.Price}</Text>
            </View>
          </View>
        );
      }
      else{
        return (
          <View style={styles.container2} key={key}>
            <View style={styles.box}>
              <Text style={styles.description}>{data.Drink}</Text>
              <Text style={styles.price}>{data.Price}</Text>
            </View>
          </View>
        );
      }
      
    });
  } else {
    return <Text>This is not offered at this bar</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    height: 35,
  },
  container2: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    backgroundColor: "#3FBCFF",
    height: 35,
  },
  row: {
    flexDirection: "row",
  },
  box: {
    paddingLeft: 5,
    flex: 3,
    flexDirection: "row",
    alignItems: "center"
  },
  description: {
    fontSize: 16,
    flex: 2,
  },
  price: {
    fontSize: 16,
    flex: 1,
    fontWeight: "bold",
  },
});
