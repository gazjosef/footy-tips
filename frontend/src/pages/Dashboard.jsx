import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TipsContainer from "../components/Tips/TipsContainer";

// import {
//   FaFootballBall,
//   FaSignInAlt,
//   FaKey,
// } from "react-icons/fa";
// import { IconContext } from "react-icons";

function Dashboard() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      {/* <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section> */}

      <TipsContainer />
    </>
  );
}

export default Dashboard;
