import React, { Component, useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import Slider from '@react-native-community/slider';
import AsyncStorage from "@react-native-community/async-storage";



export default class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.route.params.name,
            id: this.props.route.params.id,
            foodSlide: 1,
            drinkSlide: 1,
            serviceSlide: 1,
            expensiveSlide: 1,
            loudSlide: 1,
            atmosphereSlide: 1
        };
    }

    submitToServer = () => {
        //var requestString = "http:/192.168.0.5:3000/linedata/" + this.state.id;
        var data = {
            food: this.state.foodSlide,
            drink: this.state.drinkSlide,
            service: this.state.serviceSlide,
            price: this.state.expensiveSlide,
            noise: this.state.loudSlide,
            atmosphere: this.state.atmosphereSlide
        }
        var requestString =
            "https://barpedia.herokuapp.com/api/reviews/" + this.state.id;
        fetch(requestString, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data }),
        })
            .then((response) => response.json())
            .then((data) => {
            })
            .catch((error) => {
                console.error("Error:", error);
            });


        const num = Date.now().toString();
        const saveData = async () => {
            try {
                await AsyncStorage.setItem(this.props.route.params.name, num);
                //setTime(num);
            } catch (e) {
                console.log(e);
                alert("Failed to save the data to the storage");
            }
        };
        saveData();

        this.props.navigation.navigate("Details", {
            listenerprop: Date().toLocaleUpperCase(),
        });
    };



    render() {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>Food Quality: {this.state.foodSlide}</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={5}
                    step={1}
                    onValueChange={value =>
                        this.setState({
                            foodSlide: value,
                        })}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                />
                <Text style={styles.title}>Drink Quality: {this.state.drinkSlide}</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={5}
                    step={1}
                    onValueChange={value =>
                        this.setState({
                            drinkSlide: value,
                        })}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                />
                <Text style={styles.title}>Service: {this.state.serviceSlide}</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={5}
                    step={1}
                    onValueChange={value =>
                        this.setState({
                            serviceSlide: value,
                        })}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                />
                <Text style={styles.title}>Cost: {this.state.expensiveSlide}</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={5}
                    step={1}
                    onValueChange={value =>
                        this.setState({
                            expensiveSlide: value,
                        })}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                />
                <Text style={styles.title}>Loudness: {this.state.loudSlide}</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={5}
                    step={1}
                    onValueChange={value =>
                        this.setState({
                            loudSlide: value,
                        })}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                />
                <Text style={styles.title}>Atmosphere: {this.state.atmosphereSlide}</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={5}
                    step={1}
                    onValueChange={value =>
                        this.setState({
                            atmosphereSlide: value,
                        })}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                />
                <View style={styles.button}>
                    <Button title="Submit" color="#0696E9" onPress={this.submitToServer} />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        margin: 10,
    },
    title: {
        fontSize: 20,
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 5,
    },
    slider: {
        width: 300,
        alignContent: "center",
        alignSelf: "center"
    },
    button: {
        marginHorizontal: 10,
        marginTop: 20,
    }
})