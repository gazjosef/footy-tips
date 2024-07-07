interface TipsRoundDropDownProps {
  rounds: string[];
  currentRound: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
export default function TipsRoundDropDown({
  rounds,
  currentRound,
  onChange,
}: TipsRoundDropDownProps) {
  return (
    <select
      className="border rounded-lg px-2 py-1"
      id="selectedRound"
      onChange={onChange}
    >
      {rounds.map((round, index) => (
        // console.log(round)
        <option
          key={index}
          className={currentRound === round ? "selected" : ""}
        >
          {round}
        </option>
      ))}
    </select>
  );
}
