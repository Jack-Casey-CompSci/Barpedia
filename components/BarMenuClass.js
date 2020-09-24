import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ImageBackground,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";

import DraggableFlatList from "react-native-draggable-flatlist";
import BarCard from "./BarCard.js";
import logo from "../assets/Barpedia_logo.png";
import picture_linker from "./PictureLinkers/picture_linker";
import { Icon } from "native-base";
import AsyncStorage from "@react-native-community/async-storage";

const windowWidth = Dimensions.get("window").width;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
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

  renderItem = ({ item, drag }) => {
    const bar_link = picture_linker.getBarLink(item.pic_name);
    if ((item.line == 0) & (item.coverCharge > 0)) {
      return (
        <TouchableOpacity
          style={styles.barTab}
          onLongPress={drag}
          onPress={() =>
            this.props.navigation.navigate("Details", {
              name: item.name,
              description: item.description,
              barPic: item.pic_name,
              coverCharge: item.coverCharge,
              line: item.line,
              id: item.id,
            })
          }
        >
          <ImageBackground style={styles.image} source={bar_link}>
            <View style={styles.iconBox}>
              <Icon name="person" style={styles.icon}></Icon>
              <Icon name="ios-cash" style={styles.icon}></Icon>
            </View>
            <View style={styles.nameBox}>
              <Text style={styles.barName}>{item.name}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      );
    } else if ((item.line == 1) & (item.coverCharge > 0)) {
      return (
        <TouchableOpacity
          style={styles.barTab}
          onLongPress={drag}
          onPress={() =>
            this.props.navigation.navigate("Details", {
              name: item.name,
              description: item.description,
              barPic: item.pic_name,
              coverCharge: item.coverCharge,
              line: item.line,
              id: item.id,
            })
          }
        >
          <ImageBackground style={styles.image} source={bar_link}>
            <View style={styles.iconBox}>
              <Icon name="person" style={styles.icon}></Icon>
              <Icon name="person" style={styles.icon}></Icon>
              <Icon name="ios-cash" style={styles.icon}></Icon>
            </View>
            <View style={styles.nameBox}>
              <Text style={styles.barName}>{item.name}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      );
    } else if ((item.line == 2) & (item.coverCharge > 0)) {
      return (
        <TouchableOpacity
          style={styles.barTab}
          onLongPress={drag}
          onPress={() =>
            this.props.navigation.navigate("Details", {
              name: item.name,
              description: item.description,
              barPic: item.pic_name,
              coverCharge: item.coverCharge,
              line: item.line,
              id: item.id,
            })
          }
        >
          <ImageBackground style={styles.image} source={bar_link}>
            <View style={styles.iconBox}>
              <Icon name="person" style={styles.icon}></Icon>
              <Icon name="person" style={styles.icon}></Icon>
              <Icon name="person" style={styles.icon}></Icon>
              <Icon name="ios-cash" style={styles.icon}></Icon>
            </View>
            <View style={styles.nameBox}>
              <Text style={styles.barName}>{item.name}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      );
    } else if ((item.line == 0) & (item.coverCharge == 0)) {
      return (
        <TouchableOpacity
          style={styles.barTab}
          onLongPress={drag}
          onPress={() =>
            this.props.navigation.navigate("Details", {
              name: item.name,
              description: item.description,
              barPic: item.pic_name,
              coverCharge: item.coverCharge,
              line: item.line,
              id: item.id,
            })
          }
        >
          <ImageBackground style={styles.image} source={bar_link}>
            <View style={styles.iconBox}>
              <Icon name="person" style={styles.icon}></Icon>
            </View>
            <View style={styles.nameBox}>
              <Text style={styles.barName}>{item.name}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      );
    } else if ((item.line == 1) & (item.coverCharge == 0)) {
      return (
        <TouchableOpacity
          style={styles.barTab}
          onLongPress={drag}
          onPress={() =>
            this.props.navigation.navigate("Details", {
              name: item.name,
              description: item.description,
              barPic: item.pic_name,
              coverCharge: item.coverCharge,
              line: item.line,
              id: item.id,
            })
          }
        >
          <ImageBackground style={styles.image} source={bar_link}>
            <View style={styles.iconBox}>
              <Icon name="person" style={styles.icon}></Icon>
              <Icon name="person" style={styles.icon}></Icon>
            </View>
            <View style={styles.nameBox}>
              <Text style={styles.barName}>{item.name}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      );
    } else if ((item.line == 2) & (item.coverCharge == 0)) {
      return (
        <TouchableOpacity
          style={styles.barTab}
          onLongPress={drag}
          onPress={() =>
            this.props.navigation.navigate("Details", {
              name: item.name,
              description: item.description,
              barPic: item.pic_name,
              coverCharge: item.coverCharge,
              line: item.line,
              id: item.id,
            })
          }
        >
          <ImageBackground style={styles.image} source={bar_link}>
            <View style={styles.iconBox}>
              <Icon name="person" style={styles.icon}></Icon>
              <Icon name="person" style={styles.icon}></Icon>
              <Icon name="person" style={styles.icon}></Icon>
            </View>
            <View style={styles.nameBox}>
              <Text style={styles.barName}>{item.name}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      );
    }
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
  barTab: {
    flex: 1,
    width: windowWidth - 20,
    height: 150,
    backgroundColor: "grey",
    borderWidth: 2,
    marginLeft: 10,
    marginBottom: 10,
    borderColor: "black",
  },
  icon: {
    color: "white",
    marginLeft: 5,
  },
  iconBox: {
    flex: 1,
    flexDirection: "row",
  },
  nameBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  barName: {
    fontSize: 32,
  },
  image: {
    flex: 1,
    flexDirection: "column",
  },
  barName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
});
