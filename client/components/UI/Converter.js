export const iconConverter = {
  Bulldogs: require("../../public/png/t8961_l_h15_aa.png"),
  Broncos: require("../../public/png/t8960_l_h15_aa.png"),
  Cowboys: require("../../public/png/t8969_l_h15_aa.png"),
  Dragons: require("../../public/png/t8973_l_h15_aa.png"),
  Eels: require("../../public/png/t8970_l_h15_aa.png"),
  Knights: require("../../public/png/t8967_l_h15_aa.png"),
  Panthers: require("../../public/png/t8971_l_h15_aa.png"),
  Rabbitohs: require("../../public/png/t8972_l_h15_aa.png"),
  Raiders: require("../../public/png/t8962_l_h15_aa.png"),
  Roosters: require("../../public/png/t8974_l_h15_aa.png"),
  "Sea Eagles": require("../../public/png/t8965_l_h15_aa.png"),
  Sharks: require("../../public/png/t8963_l_h15_aa.png"),
  Storm: require("../../public/png/t8966_l_h15_aa.png"),
  Tigers: require("../../public/png/t8975_l_h15_aa.png"),
  Titans: require("../../public/png/t8964_l_h15_aa.png"),
  Warriors: require("../../public/png/t8968_l_h15_aa.png"),
};

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

  let monthIndex = splitArr.slice(4).splice(-2);
  let month = months[monthIndex - 1];

  return `${day.join("")} ${month}`;
};
