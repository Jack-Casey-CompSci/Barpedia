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
          <View style={styles.row}>
            <View style={styles.box}>
              <Text style={styles.description}>{data.Drink}</Text>
              <Text style={styles.price}>{data.Price}</Text>
            </View>
          </View>
        </View>
      );
    });
    /*
      return (
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.box}>
              <Text style={styles.description}>
                {barData.everyday.Deal1.Drink}
              </Text>
              <Text style={styles.price}>{barData.everyday.Deal1.Price}</Text>
            </View>
          </View>
        </View>
      );
*/
    /*
      return (
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.box}>
              <Text style={styles.description}>
                {barData.everyday.Deal1.Drink}
              </Text>
              <Text style={styles.price}>{barData.everyday.Deal1.Price}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.description}>
                {barData.everyday.Deal2.Drink}
              </Text>
              <Text style={styles.price}>{barData.everyday.Deal2.Price}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.box}>
              <Text style={styles.description}>
                {barData.everyday.Deal3.Drink}
              </Text>
              <Text style={styles.price}>{barData.everyday.Deal3.Price}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.description}>
                {barData.everyday.Deal4.Drink}
              </Text>
              <Text style={styles.price}>{barData.everyday.Deal4.Price}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.box}>
              <Text style={styles.description}>
                {barData.everyday.Deal5.Drink}
              </Text>
              <Text style={styles.price}>{barData.everyday.Deal5.Price}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.description}>
                {barData.everyday.Deal6.Drink}
              </Text>
              <Text style={styles.price}>{barData.everyday.Deal6.Price}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.box}>
              <Text style={styles.description}>
                {barData.everyday.Deal7.Drink}
              </Text>
              <Text style={styles.price}>{barData.everyday.Deal7.Price}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.description}>
                {barData.everyday.Deal8.Drink}
              </Text>
              <Text style={styles.price}>{barData.everyday.Deal8.Price}</Text>
            </View>
          </View>
        </View>
      );
      */
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
