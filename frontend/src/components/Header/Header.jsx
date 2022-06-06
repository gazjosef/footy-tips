import React from "react";
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaFootballBall,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <nav>
        <div className="header__logo">
          <Link to="/" className="align-items">
            <IconContext.Provider value={{ className: "align-items__icon" }}>
              <FaFootballBall />
            </IconContext.Provider>
            Footy Tips
          </Link>
        </div>
        <ul>
          {user ? (
            <>
              <li>
                <Link to="/tips">Tips</Link>
              </li>
              <li>
                <Link to="/comp">Comp</Link>
              </li>
              <li>
                <Link to="/league">League</Link>
              </li>
              <li>
                <button className="btn" onClick={onLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <FaSignInAlt /> Sign In
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <FaUser /> Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
