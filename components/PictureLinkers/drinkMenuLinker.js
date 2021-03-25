function returnFilename(name) {
  if (name == "Phyrst") {
    return [
      {
        props: {
          source: require("../../assets/menuPictures/phyrstDrinks.png"),
        },
      },
    ];
  } else if (name == "Champs Downtown") {
    return [
      {
        props: {
          source: require("../../assets/menuPictures/champs_drinks.png"),
        },
      },
      {
        props: {
          source: require("../../assets/menuPictures/champs_drinks2.png"),
        },
      },
      {
        props: {
          source: require("../../assets/menuPictures/champs_drinks3.png"),
        },
      },
      {
        props: {
          source: require("../../assets/menuPictures/champs_drinks4.png"),
        },
      },
    ];
  } else if (name == "Bar Bleu") {
    return [
      {
        props: {
          source: require("../../assets/menuPictures/barBleuDrinks.png"),
        },
      },
    ];
  } else if (name == "Lions Den") {
    return [
      {
        props: {
          source: require("../../assets/menuPictures/noMenu.png"),
        },
      },
    ];
  } else if (name == "Primanti Brothers") {
    return [
      {
        props: {
          source: require("../../assets/menuPictures/primantiDrinks.png"),
        },
      },
    ];
  } else if (name == "Basement") {
    return [
      {
        props: {
          source: require("../../assets/menuPictures/noMenu.png"),
        },
      },
    ];
  } else if (name == "Cafe 210") {
    return [
      {
        props: {
          source: require("../../assets/menuPictures/cafe210Drinks.png"),
        },
      },
    ];
  } else if (name == "Doggies") {
    return [
      {
        props: {
          source: require("../../assets/menuPictures/DoggiesDrinks1.png"),
        },
      },
      {
        props: {
          source: require("../../assets/menuPictures/DoggiesDrinks2.png"),
        },
      },
      {
        props: {
          source: require("../../assets/menuPictures/DoggiesDrinks3.png"),
        },
      },
    ];
  } else if (name == "Mad Mex") {
    return [
      {
        props: {
          source: require("../../assets/menuPictures/madMexDrinks.png"),
        },
      },
    ];
  } else if (name == "Pickles") {
    return [
      {
        props: {
          source: require("../../assets/menuPictures/noMenu.png"),        },
      },
    ];
  } else if (name == "Shandygaff") {
    return [
      {
        props: {
          source: require("../../assets/menuPictures/noMenu.png"),
        },
      },
    ];
  }
}

module.exports = { returnFilename };
