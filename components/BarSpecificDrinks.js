import React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Dimensions,
  Modal,
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const images = [
  {
    // Simplest usage.
    //    url:
    //      "http://www.dantesinc.com/wp-content/uploads/2011/07/barbleucocktail-8.13.pdf",

    // width: number
    // height: number
    // Optional, if you know the image size, you can set the optimization performance

    // You can pass props to <Image />.
    props: {
      source: require("../assets/barBleuDrinks.png"),
      // headers: ...
    },
  },
];

export default function BarSpecificMenu() {
  return <ImageViewer imageUrls={images} />;
}
