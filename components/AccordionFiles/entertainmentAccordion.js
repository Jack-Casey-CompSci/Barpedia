import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Entertainment from "../../data/entertainment.json";

export default function EntertainmentAccordion({ name }) {
  const barData = Entertainment.find((element) => {
    return element.name === name;
  });
  if (barData.available) {
    return barData.days.map((data, key) => {
      if (data.count > 1) {
        if(key % 2 == 0){
          return (
            <View style={styles.container} key={key}>
              <View style={styles.day}>
                <Text style={styles.day}>{data.day}</Text>
                <View style={styles.event}>
                  <Text style={styles.description}>
                    {data.entertainment[0].Band}
                  </Text>
                  <Text style={styles.price}>{data.entertainment[0].Time}</Text>
                </View>
                <View style={styles.event}>
                  <Text style={styles.description}>
                    {data.entertainment[1].Band}
                  </Text>
                  <Text style={styles.price}>{data.entertainment[1].Time}</Text>
                </View>
              </View>
            </View>
          );
        }
        else{
          return (
            <View style={styles.container2} key={key}>
              <View style={styles.day}>
                <Text style={styles.day}>{data.day}</Text>
                <View style={styles.event}>
                  <Text style={styles.description}>
                    {data.entertainment[0].Band}
                  </Text>
                  <Text style={styles.price}>{data.entertainment[0].Time}</Text>
                </View>
                <View style={styles.event}>
                  <Text style={styles.description}>
                    {data.entertainment[1].Band}
                  </Text>
                  <Text style={styles.price}>{data.entertainment[1].Time}</Text>
                </View>
              </View>
            </View>
          );
        }
        
      } else {
        if(key % 2 == 0){
          return (
            <View style={styles.container} key={key}>
              <View style={styles.day}>
                <Text style={styles.day}>{data.day}</Text>
                <View style={styles.event}>
                  <Text style={styles.description}>
                    {data.entertainment[0].Band}
                  </Text>
                  <Text style={styles.price}>{data.entertainment[0].Time}</Text>
                </View>
              </View>
            </View>
          );
        }
        
        else{
          return(
            <View style={styles.container2} key={key}>
              <View style={styles.day}>
                <Text style={styles.day}>{data.day}</Text>
                <View style={styles.event}>
                  <Text style={styles.description}>
                    {data.entertainment[0].Band}
                  </Text>
                  <Text style={styles.price}>{data.entertainment[0].Time}</Text>
                </View>
              </View>
            </View>
          );
        }
      }
    });
  } else {
    return <Text>This is not offered at this bar</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginHorizontal: 10,
    paddingHorizontal: 5,
  },
  container2: {
    flex: 1,
    margin: 5,
    backgroundColor: "#CAD5E9",
    marginHorizontal: 10,
    paddingHorizontal: 5,
  },
  day: {
    flexDirection: "column",
    fontSize: 20,
    fontWeight: "bold",
  },
  event: {
    flexDirection: "row",
  },
  description: {
    fontSize: 16,
    flex: 1,
  },
  price: {
    fontSize: 16,
    flex: 1,
  },
});
