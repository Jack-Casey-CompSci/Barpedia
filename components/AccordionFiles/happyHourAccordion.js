import React from "react";
import { View, Text, StyleSheet } from "react-native";

import EverydayValues from "../../data/happyHour.json";

export default function HappyHourAccordion({ name }) {
  const barData = EverydayValues.find((element) => {
    return element.name === name;
  });

  console.log(barData)
  if (barData.available) {
    return barData.happyHour.map((data, key) => {
      console.log(data, key);
      return (
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.box}>
              <Text style={styles.description}>{data.description}</Text>
              <Text style={styles.price}>{data.price}</Text>
            </View>
          </View>
        </View>
      );
    });
  }
}
// return (
//   <View style={styles.container}>
//     <View style={styles.row}>
//       <View style={styles.box}>
//         <Text style={styles.description}>Vodka Redbull</Text>
//         <Text style={styles.price}>$4.25</Text>
//       </View>
//       <View style={styles.box}>
//         <Text style={styles.description}>Purple Gatorade</Text>
//         <Text style={styles.price}>$3.00</Text>
//       </View>
//     </View>
//     <View style={styles.row}>
//       <View style={styles.box}>
//         <Text style={styles.description}>Green Tea</Text>
//         <Text style={styles.price}>$2.50</Text>
//       </View>
//       <View style={styles.box}>
//         <Text style={styles.description}>Irish Car Bomb</Text>
//         <Text style={styles.price}>$2.75</Text>
//       </View>
//     </View>
//     <View style={styles.row}>
//       <View style={styles.box}>
//         <Text style={styles.description}>Vodka Redbull</Text>
//         <Text style={styles.price}>$4.25</Text>
//       </View>
//       <View style={styles.box}>
//         <Text style={styles.description}>Purple Gatorade</Text>
//         <Text style={styles.price}>$3.00</Text>
//       </View>
//     </View>
//     <View style={styles.row}>
//       <View style={styles.box}>
//         <Text style={styles.description}>Green Tea</Text>
//         <Text style={styles.price}>$2.50</Text>
//       </View>
//       <View style={styles.box}>
//         <Text style={styles.description}>Irish Car Bomb</Text>
//         <Text style={styles.price}>$2.75</Text>
//       </View>
//     </View>
//   </View>
//   );
// }

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
