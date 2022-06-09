export const iconConverter = {
  Bulldogs: require("../../png/t8961_l_h15_aa.png"),
  Broncos: require("../../png/t8960_l_h15_aa.png"),
  Cowboys: require("../../png/t8969_l_h15_aa.png"),
  Dragons: require("../../png/t8973_l_h15_aa.png"),
  Eels: require("../../png/t8970_l_h15_aa.png"),
  Knights: require("../../png/t8967_l_h15_aa.png"),
  Panthers: require("../../png/t8971_l_h15_aa.png"),
  Rabbitohs: require("../../png/t8972_l_h15_aa.png"),
  Raiders: require("../../png/t8962_l_h15_aa.png"),
  Roosters: require("../../png/t8974_l_h15_aa.png"),
  "Sea Eagles": require("../../png/t8965_l_h15_aa.png"),
  Sharks: require("../../png/t8963_l_h15_aa.png"),
  Storm: require("../../png/t8966_l_h15_aa.png"),
  Tigers: require("../../png/t8975_l_h15_aa.png"),
  Titans: require("../../png/t8964_l_h15_aa.png"),
  Warriors: require("../../png/t8968_l_h15_aa.png"),
};

let test = 2022807;

export const dateConverter = (date) => {
  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let splitArr = date.toString().split("");

  let day = splitArr.splice(-2);

  // if (day[1] === "1") {
  //   day.push("st");
  // } else if (day[1] === "2") {
  //   day.push("nd");
  // } else if (day[1] === "3") {
  //   day.push("rd");
  // } else if (day[0] === "1" && day[1] === "1") {
  //   day.push("th");
  // } else if (day[0] === "1" && day[1] === "2") {
  //   day.push("th");
  // } else if (day[0] === "1" && day[1] === "3") {
  //   day.push("th");
  // } else {
  //   day.push("th");
  // }

  day = day.join("");

  let monthIndex = splitArr.slice(4).splice(-2);
  let month = months[monthIndex - 1];

  return `${day} ${month}`;
};

dateConverter(test);
