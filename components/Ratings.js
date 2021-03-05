import { View } from "native-base";
import React, { Component } from "react";
import {Text, StyleSheet} from "react-native";
import ProgressCircle from "react-native-progress-circle";

export default class Ratings extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    
      render() {
        //Percent has to be 1-rating because the circle fills the opposite way
        return (   
            <View style={styles.circles}>
                <View style={styles.individual}>    
                    <ProgressCircle
                        percent={30}
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
                        percent={80}
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
                        percent={80}
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
                        percent={80}
                        radius={50}
                        borderWidth={8}
                        color="#dddddd"
                        shadowColor="#3399FF"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 18 }}>{"4.0"}</Text>
                    </ProgressCircle>
                    <Text>Expensiveness</Text>
                </View>
                <View style={styles.individual}>    
                    <ProgressCircle
                        percent={80}
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
                        percent={80}
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
