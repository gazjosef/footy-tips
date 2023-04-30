import fixtureData from "../../public/data/nrl2019.json";
import { iconConverter } from "../UI/Converter";

const Stats = () => {
  function getTeamWithMostConsecutiveWins(data) {
    let maxConsecutiveWins = 0;
    let currentConsecutiveWins = 0;
    let currentTeam = null;
    let teamWithMaxWins = null;

    data.forEach(function (fixture) {
      if (fixture.result_home > fixture.result_away) {
        currentTeam = fixture.home;
      } else {
        currentTeam = fixture.away;
      }

      if (currentTeam === teamWithMaxWins) {
        currentConsecutiveWins++;
      } else {
        currentConsecutiveWins = 1;
        teamWithMaxWins = currentTeam;
      }

      if (currentConsecutiveWins > maxConsecutiveWins) {
        maxConsecutiveWins = currentConsecutiveWins;
      }
    });

    return teamWithMaxWins + " " + maxConsecutiveWins;
  }

  //   const findTeam = findTeamWithMostConsecutiveWins(fixtureData);
  console.log(
    "getTeamWithMostConsecutiveWins",
    getTeamWithMostConsecutiveWins(fixtureData)
  );

  return (
    <section className="u-mb-auto">
      <div className="u-bg-white-0 u-py-4 u-px-4">
        <div className="u-mb-3">
          <h3 className="heading-tertiary">Most consecutive wins:</h3>
          <p>Storm</p>
        </div>
        <div className="u-mb-3">
          <h3 className="heading-tertiary">Most consecutive losses:</h3>
          <p>Titans</p>
        </div>
        <div className="u-mb-3">
          <h3 className="heading-tertiary">Highest points scored in game:</h3>
          <p>Home Team Points v Away Team Points</p>
        </div>
        <div className="u-mb-3">
          <h3 className="heading-tertiary">Lowest points scored in game:</h3>
          <p>Home Team Points v Away Team Points</p>
        </div>
        <div className="u-mb-3">
          <h3 className="heading-tertiary">Biggest win:</h3>
          <p>Home Team Points v Away Team Points</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
