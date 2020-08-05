import React from "react";
import ImageViewer from "react-native-image-zoom-viewer";

import drinkLinker from "./drinkMenuLinker.js";

export default function BarSpecificMenu({ route }) {
  const images = drinkLinker.returnFilename(route.params.name);
  return <ImageViewer imageUrls={images} />;
}
