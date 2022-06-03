import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { IconContext } from "react-icons";
import { iconConverter } from "./Converter.js";

export default function Tip({ fixture, selectTeam }) {
  const [hasResult, setHasResult] = useState(false);

  useEffect(() => {
    const checkHasResult = (fixture) => {
      console.log("fixture loading ", fixture);
      if (
        fixture !== undefined &&
        fixture.result_home !== null &&
        fixture.result_away !== null
      ) {
        console.log(fixture);
        setHasResult(true);
      }
    };
    checkHasResult();
  }, []);

  const onChange = (event) => {
    selectTeam(
      event.target.value,
      fixture.round,
      fixture.fixture_id,
      fixture.away
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
            <div className="tip__result">{fixture.result_home}</div>
          </>
        ) : (
          <>
            <div className="tip__input">
              <label htmlFor="">
                <input
                  type="radio"
                  name={fixture.fixture_id}
                  onChange={onChange}
                />
              </label>
            </div>
          </>
        )}
        <div className="tip__logo">
          <img src={iconConverter[fixture.home]} alt={fixture.home} />
        </div>
        <div className="tip__team">{fixture.home}</div>
      </div>

      <div className="tip__details">
        <div className="">
          {fixture.day}
          {"  "}
          {fixture.date}
        </div>
        <div className="">{fixture.time}</div>
        <div className="">{fixture.stadium}</div>
      </div>

      <div className="tip__away">
        <div className="tip__team">{fixture.away}</div>
        <div className="tip__logo">
          <img src={iconConverter[fixture.away]} alt={fixture.away} />
        </div>
        {hasResult ? (
          <>
            <div className="tip__result">{fixture.result_away}</div>
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
                />
              </label>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
