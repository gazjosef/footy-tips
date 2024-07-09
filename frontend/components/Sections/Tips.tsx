import { useState } from "react";
import Tip from "../Snippets/Tip";
import nrlData from "../../public/data/nrl2022.json";
import TipsRoundDropDown from "../Snippets/TipsRoundDropDown";
import Button from "../Snippets/Button";

export interface Fixture {
  fixture_id: number;
  round: string;
  day: string;
  date: number;
  time: string;
  home_team: string;
  home_result: string;
  away_team: string;
  away_result: string;
  stadium: string;
}

export default function Tips() {
  const fixtures: Fixture[] = nrlData;
  const [currentRound, setCurrentRound] = useState<string>("Round 1");

  const filterFixtures = () => {
    return fixtures.filter((fixture) => {
      return fixture.round === currentRound;
    });
  };
  const roundFixtures = filterFixtures();
  const rounds: string[] = [];
  const allRounds = fixtures.map((fixture) => {
    return fixture.round;
  });

  allRounds.forEach((round) => {
    if (rounds.indexOf(round) === -1) {
      rounds.push(round);
    }
  });

  const selectedRound = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentRound(event.target.value);
  };

  //   const selectTeam = (round: string, fixtureId: string, tip: string) => {
  //     setText([...text, [fixtureId, tip]]);
  //   };
  return (
    <section className="min-h-[85vh] p-5 | grid place-items-center">
      <form className="w-1/2 mx-auto space-y-2">
        <div className="mx-auto | flex items-center space-x-1">
          <h3>Select Round:</h3>
          <TipsRoundDropDown
            rounds={rounds}
            currentRound={currentRound}
            onChange={selectedRound}
          />
        </div>

        {roundFixtures &&
          roundFixtures.map((fixture, index) => {
            return (
              <Tip
                fixture={fixture}
                key={index}
                // selectedRound={selectedRound}
              />
            );
          })}

        <Button title={"Submit"} />
      </form>
    </section>
  );
}
