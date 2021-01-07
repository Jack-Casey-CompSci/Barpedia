import {StyleSheet, Dimensions} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const styles = StyleSheet.create({
    scroll: {
      flex: 1,
    },
    fit: {
      flexGrow: 1,
      backgroundColor: "green",
      height: windowHeight,
    },
    container: {
      flex: 1,
      flexGrow: 1,
      alignItems: "center",
    },
    pageImage: {
      width: windowWidth - 12,
      height: 200,
    },
    box: {
      borderWidth: 2,
      borderColor: "black",
      margin: 4,
    },
    barTitle: {
      fontSize: 32,
      color: "white",
      textAlign: "center",
    },
    title: {
      fontSize: 16,
      color: "white",
      textAlign: "center",
    },
    line_and_cover: {
      backgroundColor: "whitesmoke",
      justifyContent: "center",
      alignItems: "center",
      height: 100,
    },
    line_and_cover_text: {
      fontSize: 16,
      fontWeight: "bold",
    },
    accordion: {
      width: windowWidth,
      flex: 1,
    },
    menuandDrinkTile: {
      flex: 1,
      flexDirection: "row",
      margin: 5,
      marginTop: 2.5,
      width: windowWidth - 10,
      height: 200,
    },
    menuTile: {
      flex: 1,
      borderWidth: 2,
      borderRightWidth: 1,
      borderColor: "black",
    },
    drinksTile: {
      flex: 1,
      borderWidth: 2,
      borderLeftWidth: 1,
      borderColor: "black",
    },
    logo: {
      width: windowWidth - 40,
      height: 200,
      marginLeft: 20,
    },
    hours: {
      backgroundColor: "whitesmoke",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    hours_title: {
      fontSize: 18,
      fontWeight: "bold",
    },
    hours_text: {
      fontSize: 16,
    },
    faketext: {
      flex: 1,
      fontSize: 32,
    },
    accordionHeader: {
      backgroundColor: "#B2B8C6",
      borderColor: "black",
      borderWidth: 0.75,
      marginHorizontal: 5
    },
    reportButton: {
      marginHorizontal: 50
    }
  });

export default styles;