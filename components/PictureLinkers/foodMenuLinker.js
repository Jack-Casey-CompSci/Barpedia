function returnFilename(name) {
  if (name == "Phyrst") {
    return [
      {
        props: {
          source: require("../../assets/menuPictures/phyrst_food.png"),
        },
      },
      {
        props: {
          source: require("../../assets/menuPictures/phyrst_food_2.png"),
        },
      },
    ];
  } else if (name == "Champs Downtown") {
    return [
      {
        props: {
          source: require("../../assets/menuPictures/champs_food.png"),
        },
      },
      {
        props: {
          source: require("../../assets/menuPictures/champs_food_2.png"),
        },
      },
    ];
  } else if (name == "Bar Bleu") {
    return [
      {
        props: {
          source: require("../../assets/menuPictures/barBleuFood1.png"),
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
          source: require("../../assets/menuPictures/primanti_food.jpg"),
        },
      },
      {
        props: {
          source: require("../../assets/menuPictures/primanti_food2.jpg"),
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
          source: require("../../assets/menuPictures/cafe_food.png"),
        },
      },
      {
        props: {
          source: require("../../assets/menuPictures/cafe_food2.png"),
        },
      },
      {
        props: {
          source: require("../../assets/menuPictures/cafe_food3.png"),
        },
      },
      {
        props: {
          source: require("../../assets/menuPictures/cafe_food4.png"),
        },
      },
    ];
  } else if (name == "Doggies") {
    return [
      {
        props: {
          source: require("../../assets/menuPictures/doggies_food.png"),
        },
      },
    ];
  } else if (name == "Mad Mex") {
    return [
      {
        props: {
          source: require("../../assets/menuPictures/madmex_food.png"),
        },
      },
      {
        props: {
          source: require("../../assets/menuPictures/madmex_food_2.png"),
        },
      },
    ];
  } else if (name == "Pickles") {
    return [
      {
        props: {
          source: require("../../assets/menuPictures/pickles_food.png"),
        },
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
  } else if (name == "Jax") {
    return [
      {
        props: {
          source: require("../../assets/menuPictures/Jax_food.png"),
        },
      },
      {
        props: {
          source: require("../../assets/menuPictures/Jax_food_2.jpg"),
        },
      },
    ];
  } else if (name == "Stagewest") {
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
