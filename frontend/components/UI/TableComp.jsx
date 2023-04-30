import Image from "next/image";
import React from "react";
import { iconConverter } from "./Converter";
import useFetch from "../../hooks/useFetch";

const TableComp = () => {
  // GET ALL TIPS

  // FIND BY USER

  // IF CORRECT TIP === PLAYER TIP ? +1 : 0

  const compMembers = [
    {
      team: "Knights",
      name: "Michael Jones",
      wins: 131,
      perfect: 2,
    },
    {
      team: "Sea Eagles",
      name: "John Smith",
      wins: 128,
      perfect: 1,
    },

    {
      team: "Rabbitohs",
      name: "Tom Williams",
      wins: 114,
      perfect: 0,
    },
    {
      team: "Sharks",
      name: "Peter Wilson",
      wins: 114,
      perfect: 0,
    },
    {
      team: "Panthers",
      name: "Emma Brown",
      wins: 91,
      perfect: 0,
    },
    {
      team: "Tigers",
      name: "David Johnson",
      wins: 84,
      perfect: 0,
    },
    {
      team: "Roosters",
      name: "Jane Doe",
      wins: 75,
      perfect: 0,
    },
  ];

  function getFirstName(fullName) {
    const nameArr = fullName.split(" ");

    return nameArr[0];
  }

  return (
    <section style={{ overflowX: "auto" }}>
      <table className="table table__striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Team</th>
            <th scope="col">1</th>
            <th scope="col">2</th>
            <th scope="col">3</th>
            <th scope="col">4</th>
            <th scope="col">5</th>
            <th scope="col">6</th>
            <th scope="col">7</th>
            <th scope="col">8</th>
            <th scope="col">9</th>
            <th scope="col">10</th>
            <th scope="col">11</th>
            <th scope="col">12</th>
            <th scope="col">13</th>
            <th scope="col">14</th>
            <th scope="col">15</th>
            <th scope="col">16</th>
            <th scope="col">17</th>
            <th scope="col">18</th>
            <th scope="col">19</th>
            <th scope="col">20</th>
            <th scope="col">21</th>
            <th scope="col">22</th>
            <th scope="col">23</th>
            <th scope="col">24</th>
            <th scope="col">Pts</th>
          </tr>
        </thead>
        <tbody>
          {compMembers.map((member, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{getFirstName(member.name)}</td>
                <td>
                  <Image
                    src={iconConverter[member.team]}
                    alt={member.team}
                    height={24}
                    width={32}
                  />
                </td>
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

                <td>{member.wins + member.perfect}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default TableComp;
