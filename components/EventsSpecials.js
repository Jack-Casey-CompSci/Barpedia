import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, FlatList } from 'react-native';
import Constants from 'expo-constants';

import DayBox from "./dayBox.js"
import barsList from "../data/events_specials.json";

export default function EventsSpecials() {
    return (
        // <SafeAreaView style={styles.container} >
        //     <ScrollView style={styles.scrollView} horizontal={true}>
        //         <View style={styles.weekBox}>
        //             <DayBox day="Sunday"></DayBox>
        //             <DayBox day="Monday"></DayBox>
        //             <DayBox day="Tuesday"></DayBox>
        //             <DayBox day="Wednesday"></DayBox>
        //             <DayBox day="Thursday"></DayBox>
        //             <DayBox day="Friday"></DayBox>
        //             <DayBox day="Saturday"></DayBox>
        //         </View>
        //     </ScrollView>
        // </SafeAreaView>

        <View style={styles.box}>
            <View>
                <View style={styles.titleTop}>
                    <Text></Text>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Drink Specials</Text>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Food Specials</Text>
                </View>
            </View>
            <FlatList
                style={styles.container}
                data={barsList[0].days}
                horizontal={true}
                renderItem={({ item }) => {
                    return (
                        <>
                            <DayBox
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
    titleText: {
        transform: [{ rotate: "270deg" }],
        fontWeight: "bold",
        fontSize: 14
    }
});