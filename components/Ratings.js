import { View } from "native-base";
import React, { Component } from "react";
import { createPortal } from "react-dom";
import {Text, StyleSheet, ActivityIndicator} from "react-native";
import ProgressCircle from "react-native-progress-circle";

export default class Ratings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewSource: [],
            loading: true,
        };
      }

    componentDidMount() {
        fetch("https://barpedia.herokuapp.com/api/reviews/")
          .then((response) => response.json())
          .then((responseData) => {
            this.setState({
              reviewSource: responseData,
              loading: false,
            });
          })
          .catch((error) => console.log(error)); //to catch the errors if any
      }
    
      render() {
        if (this.state.loading) {
            return (
              <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0c9" />
              </View>
            );
        }
        const reviews = JSON.parse(JSON.stringify(this.state.reviewSource));
        //Percent has to be 1-rating because the circle fills the opposite way
        const bar_reviews = reviews[this.props.barId]
        return (   
            <View style={styles.circles}>
                <View style={styles.individual}>    
                    <ProgressCircle
                        percent={bar_reviews.food}
                        radius={50}
                        borderWidth={8}
                        color="#dddddd"
                        shadowColor="#3399FF"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 18 }}>{"4.0"}</Text>
                    </ProgressCircle>
                    <Text>Food Quality</Text>
                </View>
                <View style={styles.individual}>    
                    <ProgressCircle
                        percent={bar_reviews.drink}
                        radius={50}
                        borderWidth={8}
                        color="#dddddd"
                        shadowColor="#3399FF"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 18 }}>{"4.0"}</Text>
                    </ProgressCircle>
                    <Text>Drink Quality</Text>
                </View>
                <View style={styles.individual}>    
                    <ProgressCircle
                        percent={bar_reviews.service}
                        radius={50}
                        borderWidth={8}
                        color="#dddddd"
                        shadowColor="#3399FF"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 18 }}>{"4.0"}</Text>
                    </ProgressCircle>
                    <Text>Service</Text>
                </View>
                <View style={styles.individual}>    
                    <ProgressCircle
                        percent={bar_reviews.price}
                        radius={50}
                        borderWidth={8}
                        color="#dddddd"
                        shadowColor="#3399FF"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 18 }}>{"4.0"}</Text>
                    </ProgressCircle>
                    <Text>Cost</Text>
                </View>
                <View style={styles.individual}>    
                    <ProgressCircle
                        percent={bar_reviews.noise}
                        radius={50}
                        borderWidth={8}
                        color="#dddddd"
                        shadowColor="#3399FF"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 18 }}>{"4.0"}</Text>
                    </ProgressCircle>
                    <Text>Loudness</Text>
                </View>
                <View style={styles.individual}>    
                    <ProgressCircle
                        percent={bar_reviews.atmosphere}
                        radius={50}
                        borderWidth={8}
                        color="#dddddd"
                        shadowColor="#3399FF"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 18 }}>{"4.0"}</Text>
                    </ProgressCircle>
                    <Text>Atmosphere</Text>
                </View>
            </View>
        );          
    }
}

const styles = StyleSheet.create({
    circles: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    individual: {
        flexDirection: "column",
        alignItems: "center",
        margin: 10,
    }
})
