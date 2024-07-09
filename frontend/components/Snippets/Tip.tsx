import { Fixture } from "../Sections/Tips";

interface TipProps {
  fixture: Fixture; // Define Fixture type if available
  // selectTeam: (round: string, fixtureId: string, value: string) => void;
}

export default function Tip({ fixture }: TipProps) {
  console.log("fixture", fixture);
  return (
    <div className="h-20 bg-white mb-8 mx-auto border-2 rounded-lg | flex items-center justify-between">
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
        {/* <Image team={fixture.home_team} /> */}

        <h3 className="w-32 | font-medium	">{fixture.home_team}</h3>
      </div>

      <div className="tip__details | flex flex-col items-center | text-sm">
        <h3>{fixture.day}</h3>
        <h3>{fixture.time}</h3>
        <h3>{fixture.stadium}</h3>
      </div>

      <div className="flex">
        <h3 className="w-32 font-medium">{fixture.away_team}</h3>

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

// const iconConverter: { [key: string]: string } = {
//   Bulldogs: require("../../public/png/t8961_l_h15_aa.png"),
//   Broncos: require("../../public/png/t8960_l_h15_aa.png"),
//   Cowboys: require("../../public/png/t8969_l_h15_aa.png"),
//   Dragons: require("../../public/png/t8973_l_h15_aa.png"),
//   Eels: require("../../public/png/t8970_l_h15_aa.png"),
//   Knights: require("../../public/png/t8967_l_h15_aa.png"),
//   Panthers: require("../../public/png/t8971_l_h15_aa.png"),
//   Rabbitohs: require("../../public/png/t8972_l_h15_aa.png"),
//   Raiders: require("../../public/png/t8962_l_h15_aa.png"),
//   Roosters: require("../../public/png/t8974_l_h15_aa.png"),
//   "Sea Eagles": require("../../public/png/t8965_l_h15_aa.png"),
//   Sharks: require("../../public/png/t8963_l_h15_aa.png"),
//   Storm: require("../../public/png/t8966_l_h15_aa.png"),
//   Tigers: require("../../public/png/t8975_l_h15_aa.png"),
//   Titans: require("../../public/png/t8964_l_h15_aa.png"),
//   Warriors: require("../../public/png/t8968_l_h15_aa.png"),
// };

// interface ImageProps {
//   team: keyof typeof iconConverter;
// }

// function Image({ team }: ImageProps) {
//   return <img src={iconConverter[team]} alt={"team name"} />;
// }
