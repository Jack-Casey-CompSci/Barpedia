import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Entertainment from "../../data/entertainment.json";

export default function EntertainmentAccordion({ name }) {
  const barData = Entertainment.find((element) => {
    return element.name === name;
  });
  if (barData.available) {
    return barData.days.map((data, key) => {
      // Need to fix possible two events and add days of the week
      if (data.count > 1) {
        return (
          <View style={styles.container} key={key}>
            <View style={styles.box}>
              <Text style={styles.description}>{data.day}</Text>
              <Text style={styles.description}>{data.entertainment[0].Band}</Text>
              <Text style={styles.price}>{data.entertainment[0].Time}</Text>
              <Text style={styles.description}>{data.entertainment[1].Band}</Text>
              <Text style={styles.price}>{data.entertainment[1].Time}</Text>
            </View>
          </View>
        );
      }
      else {
        return (
          <View style={styles.container} key={key}>
            <View style={styles.box}>
              <Text style={styles.description}>{data.day}</Text>
              <Text style={styles.description}>{data.entertainment[0].Band}</Text>
              <Text style={styles.price}>{data.entertainment[0].Time}</Text>
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
