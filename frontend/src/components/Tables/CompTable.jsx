import React from "react";
import { FaCheck } from "react-icons/fa";
import fixtureData from "../../data/data.json";
import { iconConverter } from "../Tips/Converter";

function CompTable() {
  let compTable = [];

  const createCompTable = () => {
    // const teamNames = ["Dan", "Ron", "Sam", "Tom", "Suzie", "Kain"];
    const teamNames2 = [
      { name: "Dan", team: "Knights" },
      { name: "Ron", team: "Roosters" },
      { name: "Sam", team: "Rabbitohs" },
      { name: "Tom", team: "Sea Eagles" },
      { name: "Suzie", team: "Eels" },
      { name: "Kain", team: "Knights" },
    ];

    teamNames2.forEach((user) => {
      let teamScore = {
        name: user.name,
        played: 0,
        correct: 0,
        favTeam: user.team,
      };

      compTable.push(teamScore);
    });
  };
  createCompTable();

  fixtureData.forEach((fixture) => {
    if (fixture.result_home !== null && fixture.result_away !== null) {
      console.log(fixture);
      // let user = compTable.find((user) => user.user_id === fixture.user_id);
      // let result = "";

      if (fixture.result_home > fixture.result_away) {
        console.log(fixture.home);
        // result = fixture.home;
        // console.log(user);
      }

      if (fixture.result_away > fixture.result_home) {
        console.log(fixture.away);
        // result = fixture.away;
      }

      if (fixture.result_away === fixture.result_home) {
        console.log("draw");
        // result = "draw";
      }

      //  resultTip(fixture, winner)
    }

    // tips.forEach((tip) => {
    //   if (tip.fixture_id === fixture.fixture_id) {
    //     let user = compTable.find((user) => user.user_id === tip.user_id);
    //     user.played++;

    //     if ((tip.tip === winner, addWinner)) {
    //       user.correct++;
    //     }
    //   }
    // });
  });

  compTable.sort((a, b) => {
    return a.points < b.points ? 1 : -1;
  });

  return (
    <table className="table table__striped">
      <thead>
        <tr>
          <th scope="col">Table</th>
          <th scope="col" />
          <th scope="col"></th>
          <th scope="col">
            <FaCheck />
          </th>
        </tr>
      </thead>
      <tbody>
        {compTable.map((user, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td className="table__logo">
                <img src={iconConverter[user.favTeam]} alt={user.favTeam} />
              </td>
              <td>{user.name}</td>
              <td>{user.correct}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CompTable;
