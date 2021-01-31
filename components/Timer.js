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
    button = <Button title={activeText} onPress={() => onPress()}></Button>;
  } else {
    button = <Button disabled  title="Already Submitted"></Button>;
  }

  return <View style={styles.button}>{button}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    backgroundColor: "#dcdcdc",
    padding: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: "#333",
    fontWeight: "bold",
  },
  panel: {
    paddingTop: 40,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    padding: 10,
    backgroundColor: "#dcdcdc",
  },
  input: {
    padding: 15,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    margin: 10,
  },
  button: {
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#444",
  },
});
