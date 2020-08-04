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
    url: "",

    // width: number
    // height: number
    // Optional, if you know the image size, you can set the optimization performance

    // You can pass props to <Image />.
    props: {
      source: require("../assets/barBleuMenu.png"),
      // headers: ...
    },
  },
];

export default function BarSpecificMenu() {
  return <ImageViewer imageUrls={images} />;
}
