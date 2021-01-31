import barImages from "../../assets/bar_list.js";

function getBarLink(bar) {
  if (bar == "Champs") {
    return barImages.Champs;
  } else if (bar == "Phyrst") {
    return barImages.Phyrst;
  } else if (bar == "Bar_Bleu") {
    return barImages.Bar_Bleu;
  } else if (bar == "Basement") {
    return barImages.Basement;
  } else if (bar == "Cafe_210") {
    return barImages.Cafe_210;
  } else if (bar == "Doggies") {
    return barImages.Doggies;
  } else if (bar == "Lions_Den") {
    return barImages.Lions_Den;
  } else if (bar == "Mad_Mex") {
    return barImages.Mad_Mex;
  } else if (bar == "Pickles") {
    return barImages.Pickles;
  } else if (bar == "Primanti_Bros") {
    return barImages.Primanti_Bros;
  } else if (bar == "Shandygaff") {
    return barImages.Shandygaff;
  }
}

module.exports = { getBarLink };
