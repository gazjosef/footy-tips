import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Tip from "./Tip";
import { createTip } from "../../features/tips/tipSlice";

function TipsContainer() {
  const [fixtures, setFixtures] = useState([]);
  const [currentRound, setCurrentRound] = useState("Round 1");

  const [text, setText] = useState("");

  const dispatch = useDispatch();

  ////////////////////////////////
  // * Get Tips
  ////////////////////////////////

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

  const selectTeam = (round, fixtureId, tip) => {
    console.log("TipId", round, fixtureId, tip);
    setText(tip);
  };

  // const onSubmitTip = (e) => {
  //   e.preventDefault();

  //   dispatch(createTip({ text }));
  //   setText("");
  // };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("text", text);
    // console.log("createTip", createTip());
    // console.log("dispatch", dispatch);
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

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="text">Tip</label>
            <input
              type="text"
              name="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Add Goal
            </button>
          </div>
        </form>
      </section>

      {/* Bottom submit */}
      {/* <div className="form__submit">
        <button
          // onClick={onSubmitTip}
          type="submit"
          className="btn"
        >
          Add Tips
        </button>
      </div> */}
    </div>
  );
}

export default TipsContainer;
