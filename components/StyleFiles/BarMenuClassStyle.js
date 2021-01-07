import {StyleSheet, Dimensions} from "react-native";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    loader: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    list: {
      paddingVertical: 2,
      margin: 5,
      backgroundColor: "#fff",
    },
    logo: {
      width: windowWidth - 40,
      height: 200,
      marginLeft: 20,
    },
  });
  
  export default styles;