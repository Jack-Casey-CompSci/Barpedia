import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import t from "tcomb-form-native"; // 0.6.9

const Form = t.form.Form;

var LineLengthVar = t.enums({
  0: "No Wait",
  1: "Short Wait: 5-10 Minutes",
  2: "Medium Wait: 11-30 Minutes",
  3: "Long Wait: More than 30 Minutes",
});

var value = {};

const Line = t.struct({
  LineLength: t.maybe(LineLengthVar),
  CoverCharge: t.maybe(t.Number),
});

export default class TestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.route.params.name,
      id: this.props.route.params.id,
    };
  }

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    var data;
    if (value.CoverCharge == null && value.LineLength == null) {
      data = {
        name: this.state.name,
        line: -1,
        coverCharge: 0,
      };
    } else if (value.CoverCharge && value.LineLength == null) {
      data = {
        name: this.state.name,
        line: -1,
        coverCharge: value.CoverCharge,
      };
    } else if (value.CoverCharge == null && value.LineLength) {
      data = {
        name: this.state.name,
        line: value.LineLength,
        coverCharge: 0,
      };
      //Possibly change sending a 0 for cover charge
    } else {
      data = {
        name: this.state.name,
        line: value.LineLength,
        coverCharge: value.CoverCharge,
      };
    }

    //HTTP Request
    //var requestString = "http:/192.168.0.5:3000/linedata/" + this.state.id;
    var requestString =
      "https://barpedia.herokuapp.com/linedata/" + this.state.id;
    fetch(requestString, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    const num = Date.now().toString();
    const saveData = async () => {
      try {
        await AsyncStorage.setItem(this.props.route.params.name, num);
        //setTime(num);
        alert("Data successfully saved");
      } catch (e) {
        console.log(e);
        alert("Failed to save the data to the storage");
      }
    };
    saveData();

    //console.log("IN TEST FORM ", Date().toLocaleUpperCase());
    this.props.navigation.navigate("Details", {
      listenerprop: Date().toLocaleUpperCase(),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref={(c) => (this._form = c)} // assign a ref
          type={Line}
          value={value}
        />
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff",
  },
});

export { LineLengthVar };
