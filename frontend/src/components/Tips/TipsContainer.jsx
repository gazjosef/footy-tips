import React from "react";
import { useState, useEffect } from "react";
import Tip from "./Tip";

function TipsContainer() {
  const [fixtures, setFixtures] = useState([]);
  const [currentRound, setCurrentRound] = useState("Round 1");

  useEffect(() => {
    async function getFixtures() {
      const response = await fetch(
        "https://tipping-app-api.herokuapp.com/fixtures",
        {
          method: "get",
          headers: { "Content-Type": "application/json" },
        }
      );

      response.json().then((fixtures) => {
        setFixtures(fixtures);
        // console.table(fixtures);
      });
    }
    getFixtures();
  }, []);

  // console.log("fixtures", fixtures);

  ////////////////////////////////////////
  // * Filter Fixtures
  ////////////////////////////////////////

  const filterFixtures = () => {
    return fixtures.filter((fixture, index) => {
      return fixture.round === currentRound;
    });
  };

  const roundFixtures = filterFixtures();

  ////////////////////////////////////////
  // * Find Total Rounds & Remove Duplicates
  ////////////////////////////////////////

  let rounds = [];

  const allRounds = fixtures.map((fixture) => {
    return fixture.round;
  });

  allRounds.forEach((round) => {
    if (rounds.indexOf(round) === -1) {
      rounds.push(round);
    }
  });

  ////////////////////////////////////////
  // * Select Rounds || Teams
  ////////////////////////////////////////

  const selectedRound = (event) => {
    console.log("round selected", event.target.value);
    setCurrentRound(event.target.value);
  };

  const selectTeam = (index, round, fixtureId, team) => {
    console.log("TipId", round, fixtureId, team);
  };

  return (
    <div className="tipping-container">
      <div className="form__group">
        <label htmlFor="selectedRound">Select Round: </label>

        <select
          className="form__control"
          id="selectedRound"
          onChange={selectedRound}
        >
          {rounds.map((round, index) => (
            <option
              key={index}
              // className={selectedRound === round ? "selected" : ""}
            >
              {round}
            </option>
          ))}
        </select>
      </div>

      {roundFixtures &&
        roundFixtures.map((fixture, index) => {
          return <Tip fixture={fixture} selectTeam={selectTeam} key={index} />;
        })}

      <div className="form__submit">
        <button
          // onClick={onSubmitTip}
          type="submit"
          className="btn"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default TipsContainer;
