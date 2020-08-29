function returnFilename(name) {
  if (name == "Phyrst") {
    return [
      {
        props: {
          source: require("../assets/menuPictures/phyrstFood.png"),
        },
      },
    ];
  } else if (name == "Champs Downtown") {
    return [
      {
        props: {
          source: require("../assets/menuPictures/champsFood.png"),
        },
      },
    ];
  } else if (name == "Bar Bleu") {
    return [
      {
        props: {
          source: require("../assets/menuPictures/barBleuFood1.png"),
        },
      },
    ];
  } else if (name == "Lions Den") {
    return [
      {
        props: {
          source: require("../assets/menuPictures/noMenu.png"),
        },
      },
    ];
  } else if (name == "Primanti Brothers") {
    return [
      {
        props: {
          source: require("../assets/menuPictures/primantiFood1.png"),
        },
      },
      {
        props: {
          source: require("../assets/menuPictures/primantiFood2.png"),
        },
      },
    ];
  } else if (name == "Chrome") {
    return [
      {
        props: {
          source: require("../assets/menuPictures/noMenu.png"),
        },
      },
    ];
  } else if (name == "Basement") {
    return [
      {
        props: {
          source: require("../assets/menuPictures/noMenu.png"),
        },
      },
    ];
  } else if (name == "Cafe 210") {
    return [
      {
        props: {
          source: require("../assets/menuPictures/cafe210Food.png"),
        },
      },
    ];
  } else if (name == "Doggies") {
    return [
      {
        props: {
          source: require("../assets/menuPictures/noMenu.png"),
        },
      },
    ];
  } else if (name == "Mad Mex") {
    return [
      {
        props: {
          source: require("../assets/menuPictures/madMexFood1.png"),
        },
      },
      {
        props: {
          source: require("../assets/menuPictures/madMexFood2.png"),
        },
      },
    ];
  } else if (name == "Pickles") {
    return [
      {
        props: {
          source: require("../assets/menuPictures/picklesFood1.png"),
        },
      },
      {
        props: {
          source: require("../assets/menuPictures/picklesFood2.png"),
        },
      },
      {
        props: {
          source: require("../assets/menuPictures/picklesFood3.png"),
        },
      },
      {
        props: {
          source: require("../assets/menuPictures/picklesFood4.png"),
        },
      },
    ];
  } else if (name == "Shandygaff") {
    return [
      {
        props: {
          source: require("../assets/menuPictures/noMenu.png"),
        },
      },
    ];
  }
}

module.exports = { returnFilename };
