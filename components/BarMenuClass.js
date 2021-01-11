import React from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
} from "react-native";

import styles from "./StyleFiles/BarMenuClassStyle"
import BarCard from "./BarCard.js";
import logo from "../assets/Barpedia_logo.png";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [],
      refresh: 0,
    };
  }

  refreshData() {
    fetch("https://barpedia.herokuapp.com/api/bars/")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          loading: false,
          dataSource: responseData,
        });
      })
      .catch((error) => console.log(error)); //to catch the errors if any
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.refreshData();
    });
    //fetch("http:/192.168.0.5:3000/linedata")
    }
  
  componentWillUnmount() {
    this._unsubscribe();
  }

  renderItem = (data) => (
    <BarCard
      key={data.item.id}
      barName={data.item.name}
      barCoverCharge={data.item.coverCharge}
      barPic={data.item.pic_name}
      barLine={data.item.line}
      onPress={() =>
        this.props.navigation.navigate("Details", {
          name: data.item.name,
          description: data.item.description,
          barPic: data.item.pic_name,
          coverCharge: data.item.coverCharge,
          line: data.item.line,
          id: data.item.id,
          listenerprop: Date().toLocaleUpperCase(),
        })
      }
    />
  );
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      );
    }
    return (
      <ScrollView>
        <View style={styles.container}>
          <FlatList
            data={this.state.dataSource}
            renderItem={(item) => this.renderItem(item)}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <Image style={styles.logo} source={logo}></Image>
      </ScrollView>
    );
  }
}

