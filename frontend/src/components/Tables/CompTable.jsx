import React from "react";
import { FaCheck } from "react-icons/fa";
// import fixtureData from "../../data/data.json";
import { iconConverter } from "../Tips/Converter";

function CompTable() {
  let compTable = [];

  const createCompTable = () => {
    const teamNames2 = [
      {
        name: "Dan",
        team: "Knights",
        tips: {
          r1: null,
          r2: null,
          r3: null,
          r4: null,
          r5: null,
          r6: null,
          r7: null,
          r8: null,
          r9: null,
          r10: null,
          r11: null,
          r12: null,
          r13: null,
          r14: null,
          r15: null,
          r16: null,
          r17: null,
          r18: null,
          r19: null,
          r20: null,
          r21: null,
          r22: null,
          r23: null,
          r24: null,
          r25: null,
        },
      },
      {
        name: "Ron",
        team: "Roosters",
        tips: {
          r1: null,
          r2: null,
          r3: null,
          r4: null,
          r5: null,
          r6: null,
          r7: null,
          r8: null,
          r9: null,
          r10: null,
          r11: null,
          r12: null,
          r13: null,
          r14: null,
          r15: null,
          r16: null,
          r17: null,
          r18: null,
          r19: null,
          r20: null,
          r21: null,
          r22: null,
          r23: null,
          r24: null,
          r25: null,
        },
      },
      {
        name: "Sam",
        team: "Rabbitohs",
        tips: {
          r1: null,
          r2: null,
          r3: null,
          r4: null,
          r5: null,
          r6: null,
          r7: null,
          r8: null,
          r9: null,
          r10: null,
          r11: null,
          r12: null,
          r13: null,
          r14: null,
          r15: null,
          r16: null,
          r17: null,
          r18: null,
          r19: null,
          r20: null,
          r21: null,
          r22: null,
          r23: null,
          r24: null,
          r25: null,
        },
      },
      {
        name: "Tom",
        team: "Sea Eagles",
        tips: {
          r1: null,
          r2: null,
          r3: null,
          r4: null,
          r5: null,
          r6: null,
          r7: null,
          r8: null,
          r9: null,
          r10: null,
          r11: null,
          r12: null,
          r13: null,
          r14: null,
          r15: null,
          r16: null,
          r17: null,
          r18: null,
          r19: null,
          r20: null,
          r21: null,
          r22: null,
          r23: null,
          r24: null,
          r25: null,
        },
      },
      {
        name: "Suzie",
        team: "Eels",
        tips: {
          r1: null,
          r2: null,
          r3: null,
          r4: null,
          r5: null,
          r6: null,
          r7: null,
          r8: null,
          r9: null,
          r10: null,
          r11: null,
          r12: null,
          r13: null,
          r14: null,
          r15: null,
          r16: null,
          r17: null,
          r18: null,
          r19: null,
          r20: null,
          r21: null,
          r22: null,
          r23: null,
          r24: null,
          r25: null,
        },
      },
      {
        name: "Kain",
        team: "Knights",
        tips: {
          r1: null,
          r2: null,
          r3: null,
          r4: null,
          r5: null,
          r6: null,
          r7: null,
          r8: null,
          r9: null,
          r10: null,
          r11: null,
          r12: null,
          r13: null,
          r14: null,
          r15: null,
          r16: null,
          r17: null,
          r18: null,
          r19: null,
          r20: null,
          r21: null,
          r22: null,
          r23: null,
          r24: null,
          r25: null,
        },
      },
    ];

    teamNames2.forEach((user) => {
      let teamScore = {
        name: user.name,
        favTeam: user.team,
        R1: user.tips.r1,
        R2: user.tips.r2,
        R3: user.tips.r3,
        R4: user.tips.r4,
        R5: user.tips.r5,
        R6: user.tips.r6,
        R7: user.tips.r7,
        R8: user.tips.r8,
        R9: user.tips.r9,
        R10: user.tips.r10,
        R11: user.tips.r11,
        R12: user.tips.r12,
        R13: user.tips.r13,
        R14: user.tips.r14,
        R15: user.tips.r15,
        R16: user.tips.r16,
        R17: user.tips.r17,
        R18: user.tips.r18,
        R19: user.tips.r19,
        R20: user.tips.r20,
        R21: user.tips.r21,
        R22: user.tips.r22,
        R23: user.tips.r23,
        R24: user.tips.r24,
        R25: user.tips.r25,
        Correct: 9,
      };

      compTable.push(teamScore);
    });
  };
  createCompTable();

  // fixtureData.forEach((fixture) => {
  //   if (fixture.result_home !== null && fixture.result_away !== null) {
  //     console.log(fixture);
  //     // let user = compTable.find((user) => user.user_id === fixture.user_id);
  //     // let result = "";

  //     if (fixture.result_home > fixture.result_away) {
  //       console.log(fixture.home);
  //       // result = fixture.home;
  //       // console.log(user);
  //     }

  //     if (fixture.result_away > fixture.result_home) {
  //       console.log(fixture.away);
  //       // result = fixture.away;
  //     }

  //     if (fixture.result_away === fixture.result_home) {
  //       console.log("draw");
  //       // result = "draw";
  //     }

  //     //  resultTip(fixture, winner)
  //   }

  //   // tips.forEach((tip) => {
  //   //   if (tip.fixture_id === fixture.fixture_id) {
  //   //     let user = compTable.find((user) => user.user_id === tip.user_id);
  //   //     user.played++;

  //   //     if ((tip.tip === winner, addWinner)) {
  //   //       user.correct++;
  //   //     }
  //   //   }
  //   // });
  // });

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
