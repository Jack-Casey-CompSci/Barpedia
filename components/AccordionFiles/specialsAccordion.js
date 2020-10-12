import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import Constants from "expo-constants";

import DayBox from "../dayBox.js";
import barsList from "../../data/specials.json";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function EventsSpecials({ name }) {
  const barData = barsList.find((element) => {
    return element.name === name;
  });
  if (barData.available) {
    return barData.days.map((data, key) => {
      return (
        <View style={styles.container} key={key}>
          <View style={styles.day}>
            <Text style={styles.day}>{data.day}</Text>
            <View style={styles.event}>
              <Text style={styles.description}>
                {data.info.DrinkSpecials.Event1.Description}
              </Text>
              <Text style={styles.time}>
                {data.info.DrinkSpecials.Event1.Time}
              </Text>
            </View>
            <View style={styles.event}>
              <Text style={styles.description}>
                {data.info.DrinkSpecials.Event2.Description}
              </Text>
              <Text style={styles.time}>
                {data.info.DrinkSpecials.Event2.Time}
              </Text>
            </View>
            <View style={styles.event}>
              <Text style={styles.description}>
                {data.info.FoodSpecials.Description}
              </Text>
              <Text style={styles.time}>{data.info.FoodSpecials.Time}</Text>
            </View>
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
    marginLeft: 5,
  },
  day: {
    flexDirection: "column",
    fontSize: 20,
    fontWeight: "bold",
  },
  event: {
    flexDirection: "row",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginRight: 5,
    flex: 1,
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
});
