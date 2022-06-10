import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Tip from "./Tip";
import { createTip } from "../../features/tips/tipSlice";
import nrlData from "../../data/nrl2022.json";

function TipsContainer() {
  const [fixtures, setFixtures] = useState(nrlData);
  const [currentRound, setCurrentRound] = useState("Round 1");

  const [text, setText] = useState([]);

  const dispatch = useDispatch();

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

  const selectTeam = (round, fixtureId, tip) => {
    console.log(round, fixtureId, tip);

    setText([...text, [fixtureId, tip]]);
    // setFixture(fixtureId);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("text", text);

    dispatch(createTip({ text }));
    setText("");
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

      <div className="form-group">
        <section className="form">
          <form onSubmit={onSubmit}>
            <button className="btn btn-block" type="submit">
              Add Tip
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default TipsContainer;
