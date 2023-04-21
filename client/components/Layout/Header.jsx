import Link from "next/link";
import { FaFootballBall, FaSignOutAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="header | u-bg-primary-400 u-clr-white-0">
      <div className="container | u-flex u-items-center u-justify-between">
        <Link href="/dashboard">
          <div className="header__logo | u-flex u-items-center u-justify-between | u-clr-white-0">
            <IconContext.Provider value={{ className: "" }}>
              <FaFootballBall />
            </IconContext.Provider>
            <h3 className="u-ml-1 u-uppercase">Footy Tips</h3>
          </div>
        </Link>
        {!user && (
          <ul role="list" className="u-flex u-items-center">
            <li>
              <Link href="/tips" className="u-mx-1 | u-clr-white-0">
                Tips
              </Link>
            </li>
            <li>
              <Link href="/comp" className="u-mx-1 | u-clr-white-0">
                Comp
              </Link>
            </li>
            <li>
              <Link href="/league" className="u-mx-1 | u-clr-white-0">
                League
              </Link>
            </li>
            <li>
              <Link href="/">
                <button className="btn | u-bg-white-0 | u-flex u-items-center u-justify-between | u-clr-primary-400">
                  <FaSignOutAlt />
                  <h3 className="u-ml-0-5">Logout</h3>
                </button>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
