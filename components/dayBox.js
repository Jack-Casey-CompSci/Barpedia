import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native';
import Constants from 'expo-constants';



export default function DayBox({ day,
    drinkSpecial1Description,
    drinkSpecial1Time,
    drinkSpecial2Description,
    drinkSpecial2Time,
    foodSpecialDescription,
    foodSpecialTime,
    eventDescription,
    eventTime
}) {

    //Render one drink special or two
    if (drinkSpecial2Description == "") {
        return (
            <View style={styles.dayBox}>
                <View style={styles.dayTextBox}>
                    <Text style={styles.text}>{day}</Text>
                </View>
                <View style={styles.drinkTextBox}>
                    <View style={styles.specific}>
                        <Text style={styles.specificDescription}>{drinkSpecial1Description}</Text>
                        <Text style={styles.specificTime}>{drinkSpecial1Time}</Text>
                    </View>
                </View>
                <View style={styles.foodTextBox}>
                    <View style={styles.specific}>
                        <Text style={styles.specificDescription}>{foodSpecialDescription}</Text>
                        <Text style={styles.specificTime}>{foodSpecialTime}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.dayBox}>
            <View style={styles.dayTextBox}>
                <Text style={styles.text}>{day}</Text>
            </View>
            <View style={styles.drinkTextBox}>
                <View style={styles.specific}>
                    <Text style={styles.specificDescription}>{drinkSpecial1Description}</Text>
                    <Text style={styles.specificTime}>{drinkSpecial1Time}</Text>
                </View>
                <View style={styles.specific}>
                    <Text style={styles.specificDescription}>{drinkSpecial2Description}</Text>
                    <Text style={styles.specificTime}>{drinkSpecial2Time}</Text>
                </View>
            </View>
            <View style={styles.foodTextBox}>
                <View style={styles.specific}>
                    <Text style={styles.specificDescription}>{foodSpecialDescription}</Text>
                    <Text style={styles.specificTime}>{foodSpecialTime}</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 250
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 20
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
    dayBox: {
        flex: 1,
        width: 150
    },
    weekBox: {
        flexDirection: "row",
    },
    dayTextBox: {
        borderColor: "black",
        borderWidth: 2,
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    drinkTextBox: {
        borderColor: "black",
        borderWidth: 2,
        flex: 4
    },
    foodTextBox: {
        borderColor: "black",
        borderWidth: 2,
        flex: 2
    },
    specific: {
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "black",
        flex: 1
    },
    specificDescription: {
        textAlign: "center",
        fontSize: 16
    },
    specificTime: {
        textAlign: "center",
        fontWeight: "bold"
    }
});
