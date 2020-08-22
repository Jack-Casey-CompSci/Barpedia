import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HappyHourAccordion({ name }) {
  const barData = EverydayValues.find((element) => {
    return element.name === name;
  });
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.description}>Vodka Redbull</Text>
          <Text style={styles.price}>$4.25</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.description}>Purple Gatorade</Text>
          <Text style={styles.price}>$3.00</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.description}>Green Tea</Text>
          <Text style={styles.price}>$2.50</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.description}>Irish Car Bomb</Text>
          <Text style={styles.price}>$2.75</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.description}>Vodka Redbull</Text>
          <Text style={styles.price}>$4.25</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.description}>Purple Gatorade</Text>
          <Text style={styles.price}>$3.00</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.description}>Green Tea</Text>
          <Text style={styles.price}>$2.50</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.description}>Irish Car Bomb</Text>
          <Text style={styles.price}>$2.75</Text>
        </View>
      </View>
    </View>
  );
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
