import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";

import DraggableFlatList from "react-native-draggable-flatlist";
import Animated from "react-native-reanimated";
import BarCard from "./BarCard.js";
import logo from "../assets/Barpedia_logo.png";

const windowWidth = Dimensions.get("window").width;
const exampleData = [...Array(20)].map((d, index) => ({
  key: `item-${index}`, // For example only -- don't use index as your key!
  label: index,
  backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${
    index * 5
  }, ${132})`,
}));
console.log({ exampleData });

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: exampleData,
      refresh: 0,
    };
  }

  componentDidMount() {
    //fetch("http:/192.168.0.5:3000/linedata")
    fetch("https://barpedia.herokuapp.com/linedata/")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          loading: false,
          data: responseData,
        });
      })
      .catch((error) => console.log(error)); //to catch the errors if any

    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      console.log("HELLO");
      this.state.refresh = !this.state.refresh;
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  renderItem = ({ item, drag }) => {
    return (
      <TouchableOpacity
        style={{
          height: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
        onLongPress={drag}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 32,
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      );
    }
    const testdata = this.state.data;
    console.log({ testdata });
    return (
      <View style={{ flex: 1 }}>
        <DraggableFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.id}`}
          onDragEnd={({ data }) => this.setState({ data })}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  list: {
    paddingVertical: 2,
    margin: 5,
    backgroundColor: "#fff",
  },
  logo: {
    width: windowWidth - 40,
    height: 200,
    marginLeft: 20,
  },
});
