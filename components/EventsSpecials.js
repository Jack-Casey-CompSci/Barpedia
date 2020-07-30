import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, FlatList } from 'react-native';
import Constants from 'expo-constants';

import DayBox from "./dayBox.js"
import barsList from "../data/events_specials.json";

export default function EventsSpecials() {
    return (
        <View style={styles.box}>
            <FlatList
                style={styles.container}
                data={barsList[0].days}
                horizontal={true}
                renderItem={({ item }) => {
                    return (
                        <>
                            <DayBox
                                key={item.id}
                                day={item.day}
                                drinkSpecial1Description={item.info.DrinkSpecials.Event1.Description}
                                drinkSpecial1Time={item.info.DrinkSpecials.Event1.Time}
                                drinkSpecial2Description={item.info.DrinkSpecials.Event2.Description}
                                drinkSpecial2Time={item.info.DrinkSpecials.Event2.Time}
                                foodSpecialDescription={item.info.FoodSpecials.Description}
                                foodSpecialTime={item.info.FoodSpecials.Time}
                                eventDescription={item.info.Events.Description}
                                eventTime={item.info.Events.Time}
                            ></DayBox>
                        </>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flexDirection: "row"
    },
    container: {
        marginTop: Constants.statusBarHeight,
        height: 250
    },
    title: {
        flex: 3,
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    titleTop: {
        flex: 1
    },
    titleView: {
        marginTop: 2,
        marginBottom: 17
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 14
    }
});