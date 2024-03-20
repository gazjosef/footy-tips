import React from "react";
// ** Import Shared Components
import Navbar from "../Layout/Navbar";
// ** Import Icons
import { FaFootballBall } from "react-icons/fa";
import { IconContext } from "react-icons";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-400 w-screen py-4 shadow-md | text-xl text-white  font-medium">
      <section className="container mx-auto | flex items-center justify-between">
        <div className="space-x-2 | flex items-center justify-between | text-white">
          <IconContext.Provider value={{ className: "text-2xl" }}>
            <FaFootballBall />
          </IconContext.Provider>
          <h2>Footy Tips</h2>
        </div>

        <Navbar />
      </section>
    </header>
  );
};

export default Header;
