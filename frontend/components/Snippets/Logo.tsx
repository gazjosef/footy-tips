import { IconContext } from "react-icons";
import { FaFootballBall } from "react-icons/fa";

export default function Logo() {
  return (
    <div className="space-x-2 | flex items-center justify-between | text-white">
      <IconContext.Provider value={{ className: "text-2xl" }}>
        <FaFootballBall />
      </IconContext.Provider>
      <h2>Footy Tips</h2>
    </div>
  );
}
