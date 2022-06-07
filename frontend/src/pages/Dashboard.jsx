import React from "react";
// import {
//   FaFootballBall,
//   FaSignInAlt,
//   FaKey,
// } from "react-icons/fa";
// import { IconContext } from "react-icons";

function Dashboard() {
  return (
    <article className="article-dashboard">
      <section className="article-dashboard__box">
        <section className="article-dashboard__login">
          <section className="heading">
            <h1>Login</h1>
          </section>

          <section className="form">
            <form
            // onSubmit={onSubmit}
            >
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  // value={email}
                  placeholder="Enter your email"
                  // onChange={onChange}
                  autoComplete="on"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  // value={password}
                  placeholder="Enter password"
                  // onChange={onChange}
                  autoComplete="on"
                />
              </div>

              <div className="form-group">
                <p className="section-login__register">
                  {/* <a href="">Need to Sign Up?</a> */}
                  Need to Sign Up?
                </p>
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-block">
                  Submit
                </button>
              </div>
            </form>
          </section>
        </section>
        <section className="article-dashboard__demo">
          <section className="form">
            <div className="form-group">
              <p>Login as existing user?</p>
            </div>

            <form
            // onSubmit={onSubmit}
            >
              <div className="form-group">
                <button type="submit" className="btn btn-block">
                  Demo
                </button>
              </div>
            </form>
          </section>
        </section>
      </section>
    </article>
  );
}

export default Dashboard;
