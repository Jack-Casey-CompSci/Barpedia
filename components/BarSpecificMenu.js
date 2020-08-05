import React from "react";
import ImageViewer from "react-native-image-zoom-viewer";

import foodLinker from "./foodMenuLinker.js";

export default function BarSpecificMenu({ route }) {
  const images = foodLinker.returnFilename(route.params.name);
  return <ImageViewer imageUrls={images} />;
}
