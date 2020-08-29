import React, { useState, Component } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { Slider } from "react-native-elements";

class CoverChargeSlider extends Component {
  state = { value: 0 };
  render() {
    return (
      <View style={styles.slider}>
        <View style={styles.switchBox}>
          <Text>Cover Charge?</Text>
          <Switch
            value={this.state.switchValue}
            onValueChange={(switchValue) => this.setState({ switchValue })}
          />
        </View>
        <Slider
          value={this.state.value}
          onValueChange={(value) => this.setState({ value })}
          minimumValue={0}
          maximumValue={15}
          step={1}
          disabled={!this.state.switchValue}
        />
        <Text>Price: ${this.state.value}.00</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slider: {
    flex: 1,
    alignItems: "stretch",
    marginLeft: 10,
    marginRight: 10,
  },
  switchBox: {
    alignItems: "center",
  },
});

export default CoverChargeSlider;
