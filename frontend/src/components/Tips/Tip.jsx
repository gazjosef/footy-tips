import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { IconContext } from "react-icons";
import { dateConverter, iconConverter } from "./Converter.js";

export default function Tip({ fixture, selectTeam }) {
  const [hasResult, setHasResult] = useState(false);

  useEffect(() => {
    const checkHasResult = (fixture) => {
      // console.log("fixture loading ", fixture);
      if (
        fixture !== undefined &&
        fixture.home_result !== null &&
        fixture.away_result !== null
      ) {
        console.log(fixture);
        setHasResult(true);
      }
    };
    checkHasResult();
  }, []);

  const onChange = (event) => {
    selectTeam(
      fixture.round,
      fixture.fixture_id,
      event.target.value
      // fixture.away_team
    );
  };

  return (
    <div className="tip">
      <div className="tip__home">
        {hasResult ? (
          <>
            <div className="tip__check">
              <IconContext.Provider value={{ className: "" }}>
                <FaCheck />
              </IconContext.Provider>
            </div>
            <div className="tip__result">{fixture.home_result}</div>
          </>
        ) : (
          <>
            <div className="tip__input">
              <label htmlFor="">
                <input
                  type="radio"
                  name={fixture.fixture_id}
                  value={fixture.home_team}
                  onChange={onChange}
                />
              </label>
            </div>
          </>
        )}
        <div className="tip__logo">
          <img src={iconConverter[fixture.home_team]} alt={fixture.home_team} />
        </div>
        <div className="tip__team">{fixture.home_team}</div>
      </div>

      <div className="tip__details">
        <div className="">
          {fixture.day}
          {"  "}
          {dateConverter(fixture.date)}
        </div>
        <div className="">{fixture.time}</div>
        <div className="">{fixture.stadium}</div>
      </div>

      <div className="tip__away">
        <div className="tip__team">{fixture.away_team}</div>
        <div className="tip__logo">
          <img src={iconConverter[fixture.away_team]} alt={fixture.away_team} />
        </div>
        {hasResult ? (
          <>
            <div className="tip__result">{fixture.away_result}</div>
            <div className="tip__check">
              <IconContext.Provider value={{ className: "" }}>
                <FaCheck />
              </IconContext.Provider>
            </div>
          </>
        ) : (
          <>
            <div className="tip__input">
              <label htmlFor="">
                <input
                  type="radio"
                  name={fixture.fixture_id}
                  onChange={onChange}
                  value={fixture.away_team}
                />
              </label>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
