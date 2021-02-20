import React, { Component, useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import Slider from '@react-native-community/slider';


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
        console.log(this.state.foodSlide);
        console.log(this.state.drinkSlide);
        console.log(this.state.serviceSlide);
        console.log(this.state.expensiveSlide);
        console.log(this.state.loudSlide);
        console.log(this.state.atmosphereSlide);

    }

    render() {
      return(
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
                thumbImage={require("../assets/Barpedia_icon.png")}
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
            <Text style={styles.title}>Expensiveness: {this.state.expensiveSlide}</Text>   
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