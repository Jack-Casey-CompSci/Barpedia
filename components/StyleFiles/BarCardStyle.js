import {StyleSheet, Dimensions} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    barTab: {
      flex: 1,
      width: windowWidth - 20,
      height: 150,
      backgroundColor: "grey",
      borderWidth: 2,
      marginLeft: 10,
      marginBottom: 10,
      borderColor: "black",
    },
    icon: {
      color: "white",
      marginLeft: 5,
    },
    iconBox: {
      flex: 1,
      flexDirection: "row",
    },
    nameBox: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-end",
    },
    barName: {
      fontSize: 32,
    },
    image: {
      flex: 1,
      flexDirection: "column",
    },
    barName: {
      color: "white",
      fontWeight: "bold",
      fontSize: 32,
    },
  });
  
export default styles;