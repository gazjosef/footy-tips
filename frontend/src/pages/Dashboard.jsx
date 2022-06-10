import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TipsContainer from "../components/Tips/TipsContainer";
import Spinner from "../components/Spinner/Spinner";
import { getTips, reset } from "../features/tips/tipSlice";

// import {
//   FaFootballBall,
//   FaSignInAlt,
//   FaKey,
// } from "react-icons/fa";
// import { IconContext } from "react-icons";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { tips, isLoading, isError, message } = useSelector(
    (state) => state.tips
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getTips());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {/* <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section> */}

      <TipsContainer />
      {/* 
      <section className="content">
        {tips.length > 0 ? (
          <div className="goals">
            {tips.map((tip) => {
              return console.log("tip", tip);
            })}
          </div>
        ) : (
          <h3>You have not set any tips</h3>
        )}
      </section> */}
    </>
  );
}

export default Dashboard;
