import React, { useState } from "react";
import BarChart from "./BarChart";
// import LineChart from "./LineChart";
import UserData from "../../data/userData.json";

function Chart() {
  const dataRound = UserData[0][1];
  const addData = dataRound.map((data) => data.CorrectTips);

  // eslint - disable - next - line;
  const [userData, setUserData] = useState({
    labels: roundLabel(18),
    datasets: [
      {
        label: "2022 Tipping Comp",
        data: addData,
        backgroundColor: ["blue"],
      },
    ],
  });

  function roundLabel(round) {
    const rounds = [];
    for (let i = 0; i < round; i++) {
      rounds.push(`R${i + 1}`);
    }

    return rounds;
  }

  return (
    <div style={{ width: 700 }}>
      {/* <LineChart chartData={userData} /> */}

      <BarChart chartData={userData} />
    </div>
  );
}

export default Chart;
