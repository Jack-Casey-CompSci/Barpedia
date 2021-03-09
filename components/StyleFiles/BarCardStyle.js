import {StyleSheet, Dimensions} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    barTab: {
      width: windowWidth - 20,
      height: 150,
      borderWidth: 2,
      borderRadius: 15,
      marginLeft: 10,
      marginBottom: 5,
      marginTop: 5,
      borderColor: "black",
      justifyContent: "flex-start",
    },
    icon: {
      flexDirection: "row",
      color: "white",
      marginLeft: 3,
      marginTop: 2,
      alignSelf: "flex-start",
      
    },
    nameBox: {
      width: windowWidth - 22,
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: 'argba(10, 10, 10, 0.6)',
    },
    image: {
      flex: 1,
      justifyContent: "flex-end",
    },
    barName: {
      color: "white",
      fontWeight: "bold",
      fontSize: 26,
      marginRight: 5,
    },
  });
  
export default styles;