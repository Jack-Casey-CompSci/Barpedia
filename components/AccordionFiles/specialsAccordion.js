import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Constants from "expo-constants";

import DayBox from "../dayBox.js";
import barsList from "../../data/specials.json";

export default function EventsSpecials({ name }) {
  const barData = barsList.find((element) => {
    return element.name === name;
  });
  if (barData.available) {
    return (
      <View style={styles.box}>
        <FlatList
          style={styles.container}
          data={barData.days}
          horizontal={true}
          renderItem={({ item }) => {
            return (
              <>
                <DayBox
                  key={item.id}
                  day={item.day}
                  drinkSpecial1Description={
                    item.info.DrinkSpecials.Event1.Description
                  }
                  drinkSpecial1Time={item.info.DrinkSpecials.Event1.Time}
                  drinkSpecial2Description={
                    item.info.DrinkSpecials.Event2.Description
                  }
                  drinkSpecial2Time={item.info.DrinkSpecials.Event2.Time}
                  foodSpecialDescription={item.info.FoodSpecials.Description}
                  foodSpecialTime={item.info.FoodSpecials.Time}
                ></DayBox>
              </>
            );
          }}
        />
      </View>
    );
  } else {
    return <Text>This is not offered at this bar</Text>;
  }
}

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
  },
  container: {
    height: 250,
  },
  title: {
    flex: 3,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
