import { useState } from "react";
import Tip from "../UI/Tip";
import nrlData from "../../public/data/nrl2022.json";

const Fixtures = () => {
  // GET ALL FIXTURES

  const fixtures = nrlData;

  const [currentRound, setCurrentRound] = useState("Round 1");
  const [text, setText] = useState([]);

  ////////////////////////////////////////
  // * Filter Fixtures By Round
  ////////////////////////////////////////

  const filterFixtures = () => {
    return fixtures.filter((fixture) => {
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

  return (
    <section>
      <div className="select-box | u-mb-2 u-mx-auto | u-flex">
        <h3 className="u-mr-1">Select Round:</h3>
        <select
          className="form__control"
          id="selectedRound"
          onChange={selectedRound}
        >
          {rounds.map((round, index) => (
            <option
              key={index}
              className={selectedRound === round ? "selected" : ""}
            >
              {round}
            </option>
          ))}
        </select>
      </div>

      {roundFixtures &&
        roundFixtures.map((fixture, index) => {
          return (
            <Tip
              fixture={fixture}
              key={index}
              // selectTeam={selectTeam}
            />
          );
        })}
      <div className="select-box | u-mx-auto">
        <button className="btn | u-bg-secondary-200 u-ml-auto | u-clr-white-0">
          Submit
        </button>
      </div>
    </section>
  );
};

export default Fixtures;
