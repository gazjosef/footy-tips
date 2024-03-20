import React from "react";
// ** Import Icons
import {
  FaSignInAlt,
  //   FaSignOutAlt,
  FaUser,
} from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="p-6 text-slate-700 shadow-[0_0_5px_0_rgba(0,0,0,0.5)]	">
      <div className="container mx-auto flex items-center justify-between font-semibold tracking-wide">
        <div className="head__logo | flex items-center gap-2">
          <img
            className="max-h-10"
            src="/logo/calendar.png"
            alt="Calendar Logo"
          />
          <h2 className="ml-2">Booking Calendar</h2>
        </div>
        <div className="flex items-center gap-2">
          <ul className="flex items-center justify-between">
            <li>
              <a className="m-1 flex items-center justify-between">
                <FaSignInAlt className="mr-1" /> Login
              </a>
            </li>
            <li>
              <a className="m-1 flex items-center justify-between">
                <FaUser className="mr-1" /> Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
