import Image from "next/image";
import fixtureData from "../../public/data/nrl2019.json";
import { iconConverter } from "./Converter";

const TableLeague = () => {
  // GET ALL FIXTURES

  let leagueTable = [];

  const createLeagueTable = () => {
    const teamNames = [
      "Broncos",
      "Knights",
      "Sharks",
      "Storm",
      "Roosters",
      "Rabbitohs",
      "Warriors",
      "Bulldogs",
      "Tigers",
      "Sea Eagles",
      "Cowboys",
      "Dragons",
      "Panthers",
      "Eels",
      "Titans",
      "Raiders",
    ];

    teamNames.forEach((name) => {
      let teamScore = {
        name: name,
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        homePointsScored: 0,
        homePointsConceded: 0,
        awayPointsScored: 0,
        awayPointsConceded: 0,
        diff: 0,
        points: 0,
      };

      leagueTable.push(teamScore);
    });

    fixtureData.forEach((fixture) => {
      let homeTeam = leagueTable.find((team) => team.name === fixture.home);
      let awayTeam = leagueTable.find((team) => team.name === fixture.away);

      if (fixture.result_home !== null || fixture.result_away !== null) {
        homeTeam.homePointsScored += fixture.result_home;
        awayTeam.awayPointsConceded += fixture.result_home;
        homeTeam.homePointsConceded += fixture.result_away;
        awayTeam.awayPointsScored += fixture.result_away;

        homeTeam.played++;
        awayTeam.played++;

        homeTeam.diff += fixture.result_home;
        awayTeam.diff += fixture.result_away;
        homeTeam.diff -= fixture.result_away;
        awayTeam.diff -= fixture.result_home;

        if (fixture.result_home > fixture.result_away) {
          homeTeam.wins += 1;
          homeTeam.points += 2;
          awayTeam.losses += 1;
        }

        if (fixture.result_away > fixture.result_home) {
          awayTeam.wins += 1;
          awayTeam.points += 2;
          homeTeam.losses += 1;
        }

        if (fixture.result_away === fixture.result_home) {
          homeTeam.draws += 1;
          homeTeam.points += 2;
          awayTeam.draws += 1;
          awayTeam.points += 2;
        }
      }
    });

    leagueTable.sort((a, b) => {
      return a.points < b.points ? 1 : -1;
    });
  };

  createLeagueTable();

  return (
    <section>
      <table className="table table__striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col" />
            <th scope="col">Team</th>
            <th scope="col">P</th>
            <th scope="col">W</th>
            <th scope="col">L</th>
            <th scope="col">D</th>
            <th scope="col">Pts</th>
            <th scope="col">+/-</th>
          </tr>
        </thead>
        <tbody>
          {leagueTable.map((team, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <Image
                    src={iconConverter[team.name]}
                    alt={team.name}
                    height={24}
                    width={32}
                  />
                </td>
                <td>{team.name}</td>
                <td>{team.played}</td>
                <td>{team.wins}</td>
                <td>{team.losses}</td>
                <td>{team.draws}</td>
                <td>{team.points}</td>
                <td>{team.diff}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default TableLeague;
