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
var array = [
  {
    "id": 0,
    "name": "Phyrst",
    "description": "Subterranean Irish pub featuring daily live, local music & drink specials plus billiards & games.",
    "pic_name": "Phyrst",
    "hours": {
      "Sunday": "7:00 pm - 2:00 am",
      "Monday": "7:00 pm - 2:00 am",
      "Tuesday": "7:00 pm - 2:00 am",
      "Wednesday": "7:00 pm - 2:00 am",
      "Thursday": "5:00 pm - 2:00 am",
      "Friday": "5:00 pm - 2:00 am",
      "Saturday": "5:00 pm - 2:00 am"
    },
    "phone": "7178675309",
    "address": "111 East Beaver Street",
    "coverCharge": 5
  },
  {
    "id": 1,
    "name": "Champs Downtown",
    "description": "Sports bar in the heart of State College",
    "pic_name": "Champs",
    "hours": {
      "Sunday": "12:00 pm - 2:00 am",
      "Monday": "4:00 pm - 2:00 am",
      "Tuesday": "4:00 pm - 2:00 am",
      "Wednesday": "4:00 pm - 2:00 am",
      "Thursday": "4:00 pm - 2:00 am",
      "Friday": "4:00 pm - 2:00 am",
      "Saturday": "12:00 pm - 2:00 am"
    },
    "phone": "8142381110",
    "address": "139 S Allen St",
    "coverCharge": 0
  },
  {
    "id": 2,
    "name": "Bar Bleu",
    "description": "Craft beer, cocktails & Kansas City-style BBQ served in a bilevel sports bar with pool & live music.",
    "pic_name": "Bar_Bleu",
    "hours": {
      "Sunday": "Closed",
      "Monday": "5:30 pm - 2:00 am",
      "Tuesday": "5:30 pm - 2:00 am",
      "Wednesday": "5:30 pm - 2:00 am",
      "Thursday": "5:30 pm - 2:00 am",
      "Friday": "5:30 pm - 2:00 am",
      "Saturday": "3:00 pm - 2:00 am"
    },
    "phone": "8142370374",
    "address": "112 S Garner St",
    "coverCharge": 0
  },
  {
    "id": 3,
    "name": "Lions Den",
    "description": "",
    "pic_name": "Lions_Den",
    "hours": {
      "Sunday": "Closed",
      "Monday": "Closed",
      "Tuesday": "8:00 pm - 2:00 am",
      "Wednesday": "Closed",
      "Thursday": "8:00 pm - 2:00 am",
      "Friday": "8:00 pm - 2:00 am",
      "Saturday": "8:00 pm - 2:00 am"
    },
    "phone": "8142375081",
    "address": "118 S Garner St",
    "coverCharge": 0
  },
  {
    "id": 4,
    "name": "Primanti Brothers",
    "description": "Pittsburgh-born counter-serve chain known for its sandwiches.",
    "pic_name": "Primanti_Bros",
    "hours": {
      "Sunday": "11:00 am - 11:00 pm",
      "Monday": "11:00 am - 11:00 pm",
      "Tuesday": "11:00 am - 11:00 pm",
      "Wednesday": "11:00 am - 11:00 pm",
      "Thursday": "11:00 am - 11:00 pm",
      "Friday": "11:00 am - 12:00 am",
      "Saturday": "11:00 am - 12:00 am"
    },
    "phone": "8148629367",
    "address": "130 Heister St",
    "coverCharge": 0
  },
  {
    "id": 5,
    "name": "Chrome",
    "description": "",
    "pic_name": "Chrome",
    "hours": {
      "Sunday": "Closed",
      "Monday": "Closed",
      "Tuesday": "Closed",
      "Wednesday": "Closed",
      "Thursday": "9:00 pm - 2:00 am",
      "Friday": "9:00 pm - 2:00 am",
      "Saturday": "9:00 pm - 2:00 am"
    },
    "phone": "8142310808",
    "address": "222 W Beaver Street",
    "coverCharge": 0
  },
  {
    "id": 6,
    "name": "Basement",
    "description": "",
    "pic_name": "Basement",
    "hours": {
      "Sunday": "7:00 pm - 2:00 am",
      "Monday": "7:00 pm - 2:00 am",
      "Tuesday": "7:00 pm - 2:00 am",
      "Wednesday": "7:00 pm - 2:00 am",
      "Thursday": "5:00 pm - 2:00 am",
      "Friday": "5:00 pm - 2:00 am",
      "Saturday": "5:00 pm - 2:00 am"
    },
    "address": "111 East Beaver Street",
    "coverCharge": 0
  },
  {
    "id": 7,
    "name": "Cafe 210",
    "description": "",
    "pic_name": "Cafe_210",
    "hours": {
      "Sunday": "7:00 pm - 2:00 am",
      "Monday": "7:00 pm - 2:00 am",
      "Tuesday": "7:00 pm - 2:00 am",
      "Wednesday": "7:00 pm - 2:00 am",
      "Thursday": "5:00 pm - 2:00 am",
      "Friday": "5:00 pm - 2:00 am",
      "Saturday": "5:00 pm - 2:00 am"
    },
    "address": "111 East Beaver Street",
    "coverCharge": 0
  },
  {
    "id": 8,
    "name": "Doggies",
    "description": "",
    "pic_name": "Doggies",
    "hours": {
      "Sunday": "7:00 pm - 2:00 am",
      "Monday": "7:00 pm - 2:00 am",
      "Tuesday": "7:00 pm - 2:00 am",
      "Wednesday": "7:00 pm - 2:00 am",
      "Thursday": "5:00 pm - 2:00 am",
      "Friday": "5:00 pm - 2:00 am",
      "Saturday": "5:00 pm - 2:00 am"
    },
    "address": "111 East Beaver Street",
    "coverCharge": 0
  },
  {
    "id": 9,
    "name": "Mad Mex",
    "description": "",
    "pic_name": "Mad_Mex",
    "hours": {
      "Sunday": "7:00 pm - 2:00 am",
      "Monday": "7:00 pm - 2:00 am",
      "Tuesday": "7:00 pm - 2:00 am",
      "Wednesday": "7:00 pm - 2:00 am",
      "Thursday": "5:00 pm - 2:00 am",
      "Friday": "5:00 pm - 2:00 am",
      "Saturday": "5:00 pm - 2:00 am"
    },
    "address": "111 East Beaver Street",
    "coverCharge": 0
  },
  {
    "id": 10,
    "name": "Pickles",
    "description": "",
    "pic_name": "Pickles",
    "hours": {
      "Sunday": "7:00 pm - 2:00 am",
      "Monday": "7:00 pm - 2:00 am",
      "Tuesday": "7:00 pm - 2:00 am",
      "Wednesday": "7:00 pm - 2:00 am",
      "Thursday": "5:00 pm - 2:00 am",
      "Friday": "5:00 pm - 2:00 am",
      "Saturday": "5:00 pm - 2:00 am"
    },
    "address": "111 East Beaver Street",
    "coverCharge": 0
  },
  {
    "id": 11,
    "name": "Shandygaff",
    "description": "",
    "pic_name": "Shandygaff",
    "hours": {
      "Sunday": "7:00 pm - 2:00 am",
      "Monday": "7:00 pm - 2:00 am",
      "Tuesday": "7:00 pm - 2:00 am",
      "Wednesday": "7:00 pm - 2:00 am",
      "Thursday": "5:00 pm - 2:00 am",
      "Friday": "5:00 pm - 2:00 am",
      "Saturday": "5:00 pm - 2:00 am"
    },
    "address": "111 East Beaver Street",
    "coverCharge": 0
  }
]


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      getting_data: true,
      data: [],
      jsonValue: [],
      refresh: 0,
      STORAGE_KEY: "bar_favs"
    };
  }
  /*
  readData = async () => {
    try {
      this.setState({ getting_data: false });
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      const jsonreturn = JSON.parse(jsonValue);
      console.log(jsonValue);
      if (jsonValue !== null) {
        this.setState({ STORAGE_KEY: jsonreturn });
      }
    } catch (e) {
      alert("Failed to fetch the data from storage");
    }
  };
  saveData = async () => {
    try {
      this.setState({ STORAGE_KEY: "bar_favs" });
      const jsonValue = JSON.stringify(array);
      await AsyncStorage.setItem(this.state.STORAGE_KEY, jsonValue);
    } catch (e) {
      console.log(e);
      alert("Failed to save the data to the storage");
    }
  };
  */
  async componentDidMount() {
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

  }



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
