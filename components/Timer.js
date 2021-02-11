import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export default function Timer({ barName, lineLeap, onPress = (f) => f }) {
  const [time, setTime] = useState("");
  const STORAGE_KEY = barName;

  useEffect(() => {
    readData();
  }, []);

  // read data
  const readData = async () => {
    try {
      const time = await AsyncStorage.getItem(STORAGE_KEY);

      if (time !== null) {
        setTime(time);
      }
    } catch (e) {
      alert("Failed to fetch the data from storage");
    }
  };

  // save data
  const num = Date.now().toString();
  const diff = num - time;

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, num);
      setTime(num);
    } catch (e) {
      alert("Failed to save the data to the storage");
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      alert("Storage successfully cleared!");
    } catch (e) {
      alert("Failed to clear the async storage.");
    }
  };

  var button;
  var activeText = "Report Line/Cover Charge for " + barName;
  if(lineLeap){
    button = <Button disabled  title="Cannot Report for Line Leap"></Button>;
  }
  else if (diff > 60000) {
    button = <Button title={activeText} onPress={() => onPress()} color='#E50000'></Button>;
  } else {
    button = <Button disabled  title="Already Submitted"></Button>;
  }

  return <View style={styles.button}>{button}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginHorizontal: 5,
  },
});
