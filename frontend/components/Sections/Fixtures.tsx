import { useState } from "react";
import Tip from "../Snippets/Tip";
import nrlData from "../../public/data/nrl2022.json";

interface Fixture {
  round: string;
  // Define other properties of Fixture as per your JSON structure
}

const Fixtures: React.FC = () => {
  const fixtures: Fixture[] = nrlData;
  const [currentRound, setCurrentRound] = useState<string>("Round 1");
  //   const [text, setText] = useState<Array<[string, string]>>([]);
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
      <form className="mx-auto space-y-2">
        <div className="mx-auto | flex items-center space-x-1">
          <h3>Select Round:</h3>
          <select
            className="border rounded-lg px-2 py-1"
            id="selectedRound"
            onChange={selectedRound}
          >
            {rounds.map((round, index) => (
              <option
                key={index}
                className={currentRound === round ? "selected" : ""}
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
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Fixtures;
