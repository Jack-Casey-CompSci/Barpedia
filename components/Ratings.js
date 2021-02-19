import React, { useState, Component } from "react";
import {Text} from "react-native";
import ProgressCircle from "react-native-progress-circle";

export default class Ratings extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    
      render() {
        return (   
            <>
            <ProgressCircle
                percent={80}
                radius={50}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#ddd"
                bgColor="#fff"
            >
                <Text style={{ fontSize: 18 }}>{"4.0"}</Text>
            </ProgressCircle>
            <Text>Food Quality</Text>
            <ProgressCircle
                percent={80}
                radius={50}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#ddd"
                bgColor="#fff"
            >
                <Text style={{ fontSize: 18 }}>{"4.0"}</Text>
            </ProgressCircle>
            <Text>Drink Quality</Text>
            <ProgressCircle
                percent={80}
                radius={50}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#ddd"
                bgColor="#fff"
            >
                <Text style={{ fontSize: 18 }}>{"4.0"}</Text>
            </ProgressCircle>
            <Text>Service</Text>
            <ProgressCircle
                percent={80}
                radius={50}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#ddd"
                bgColor="#fff"
            >
                <Text style={{ fontSize: 18 }}>{"4.0"}</Text>
            </ProgressCircle>
            <Text>Expensiveness</Text>
            <ProgressCircle
                percent={80}
                radius={50}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#ddd"
                bgColor="#fff"
            >
                <Text style={{ fontSize: 18 }}>{"4.0"}</Text>
            </ProgressCircle>
            <Text>Loudness</Text>
            <ProgressCircle
                percent={80}
                radius={50}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#ddd"
                bgColor="#fff"
            >
                <Text style={{ fontSize: 18 }}>{"4.0"}</Text>
            </ProgressCircle>
            <Text>Atmosphere</Text>
            </>
        );          
    }
}
