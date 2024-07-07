import { Fixture } from "../Sections/Tips";

interface TipProps {
  fixture: Fixture; // Define Fixture type if available
  // selectTeam: (round: string, fixtureId: string, value: string) => void;
}

export default function Tip({ fixture }: TipProps) {
  console.log("fixture", fixture);
  return (
    <div className="h-20 w-[50vw] bg-white mb-8 mx-auto border-2 rounded-lg | flex items-center justify-between">
      <div className="flex">
        <div className="w-32 | grid place-content-center">
          <input
            type="radio"
            className="mx-2"
            name={fixture.home_team}
            value={fixture.home_team}
            // onChange={onChange}
          />
        </div>

        {/* <Image
            src={iconConverter[fixture.home_team]}
            alt={fixture.home_team}
            height={45}
            width={60} // Corrected typo in width
          /> */}

        <div className="w-32 | font-medium	">{fixture.home_team}</div>
      </div>

      <div className="tip__details | flex flex-col items-center | text-sm">
        <div>{fixture.day}</div>
        <div>{fixture.time}</div>
        <div>{fixture.stadium}</div>
      </div>

      <div className="flex">
        <div className="w-32 font-medium">{fixture.away_team}</div>

        {/* <Image
            src={iconConverter[fixture.away_team]}
            alt={fixture.away_team}
            height={45}
            width={60} // Corrected typo in width
          /> */}

        <div className="w-14">
          <input
            type="radio"
            className="mx-2"
            name={fixture.away_team}
            value={fixture.away_team}
            // onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}
