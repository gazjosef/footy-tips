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
        favTeam: user.team,
        R1: null,
        R2: null,
        R3: null,
        R4: null,
        R5: null,
        R6: null,
        R7: null,
        R8: null,
        R9: null,
        R10: null,
        R11: null,
        R12: null,
        R13: null,
        R14: null,
        R15: null,
        R16: null,
        R17: null,
        R18: null,
        R19: null,
        R20: null,
        R21: null,
        R22: null,
        R23: null,
        R24: null,
        R25: null,
        Correct: 25,
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
          <th scope="col" />
          <th scope="col">R1</th>
          <th scope="col">R2</th>
          <th scope="col">R3</th>
          <th scope="col">R4</th>
          <th scope="col">R5</th>
          <th scope="col">R6</th>
          <th scope="col">R7</th>
          <th scope="col">R8</th>
          <th scope="col">R9</th>
          <th scope="col">R10</th>
          <th scope="col">R11</th>
          <th scope="col">R12</th>
          <th scope="col">R13</th>
          <th scope="col">R14</th>
          <th scope="col">R15</th>
          <th scope="col">R16</th>
          <th scope="col">R17</th>
          <th scope="col">R18</th>
          <th scope="col">R19</th>
          <th scope="col">R20</th>
          <th scope="col">R21</th>
          <th scope="col">R22</th>
          <th scope="col">R23</th>
          <th scope="col">R24</th>
          <th scope="col">R25</th>
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
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CompTable;
