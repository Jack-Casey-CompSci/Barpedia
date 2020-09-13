import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";

import t from "tcomb-form-native"; // 0.6.9

const Form = t.form.Form;

var LineLengthVar = t.enums({
  0: "Short Wait: 0-10 Minutes",
  1: "Medium Wait: 10-30 Minutes",
  2: "Long Wait: More than 30 Minutes",
});

var value = {
  CoverCharge: 0,
};

const Line = t.struct({
  LineLength: LineLengthVar,
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
    console.log(this.state.name);
    if (!value) {
      data = {
        name: this.state.name,
        line: -1,
        coverCharge: 0,
      };
    } else if (value.CoverCharge && !value.LineLength) {
      data = {
        name: this.state.name,
        line: -1,
        coverCharge: value.CoverCharge,
      };
    } else if (!value.CoverCharge && value.LineLength) {
      data = {
        name: this.state.name,
        line: value.LineLength,
        coverCharge: 0,
      };
    } else {
      data = {
        name: this.state.name,
        line: value.LineLength,
        coverCharge: value.CoverCharge,
      };
    }

    //HTTP Request
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
    this.props.navigation.goBack();
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
