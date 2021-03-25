import React from "react";
import { View, Text, StyleSheet } from "react-native";

import HappyHour from "../../data/happyHour.json";

export default function HappyHourAccordion({ name }) {
  const barData = HappyHour.find((element) => {
    return element.name === name;
  });
  if (barData.available) {
      return barData.happyHour.map((data, key) => {
        if (data.Day) {
          return (
            <View style={styles.container} key={key}>
              <Text style={styles.day}>{data.Day}</Text>
            </View>
          );
        }
        if(key % 2 == 0){
          return(
            <View style={styles.container} key={key}>
              <View style={styles.box}>
                <Text style={styles.description}>{data.Drink}</Text>
                <Text style={styles.price}>{data.Price}</Text>
              </View>
            </View>
            );
        }
        return (
          <View style={styles.container2} key={key}>
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
  day: {
    alignItems: "center",
    height: 35,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    fontSize: 16,
  },
  container: {
    alignItems: "center",
    height: 35,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  container2: {
    alignItems: "center",
    height: 35,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#3FBCFF"
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
