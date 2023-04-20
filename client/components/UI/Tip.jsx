import Image from "next/image";
import { dateConverter, iconConverter } from "./Converter.js";

const Tip = ({ fixture, selectTeam }) => {
  const onChange = (event) => {
    selectTeam(fixture.round, fixture.fixture_id, event.target.value);
  };

  return (
    <div className="tip | u-bg-white-0 u-mb-1 u-mx-auto | u-flex u-items-center u-justify-between">
      <div className="tip__home">
        <div>
          <input
            type="radio"
            className="u-mx-2"
            name={fixture.fixture_id}
            value={fixture.home_team}
            onChange={onChange}
          />
        </div>

        <Image
          src={iconConverter[fixture.home_team]}
          alt={fixture.home_team}
          height={45}
          weight={60}
        />

        <div className="tip__team">{fixture.home_team}</div>
      </div>

      <div className="tip__details | u-flex u-flex-col u-items-center">
        <div className="">
          {fixture.day} {dateConverter(fixture.date)}
        </div>
        <div>{fixture.time}</div>
        <div>{fixture.stadium}</div>
      </div>

      <div className="tip__away">
        <div className="tip__team">{fixture.away_team}</div>

        <Image
          src={iconConverter[fixture.away_team]}
          alt={fixture.away_team}
          height={45}
          weight={60}
        />

        <div>
          <input
            type="radio"
            className="u-mx-2"
            name={fixture.fixture_id}
            value={fixture.away_team}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Tip;
