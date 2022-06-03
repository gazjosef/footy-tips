import React from "react";

function Settings() {
  const onChange = () => {};

  return (
    <>
      <section className="heading">
        <h1>
          {/* <FaUser />  */}
          Settings
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form
        // onSubmit={onSubmit}
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              //   value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              //   value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              //   value={password}
              placeholder="Enter password"
              onChange={onChange}
              autoComplete="on"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              //   value={password2}
              placeholder="Confirm password"
              onChange={onChange}
              autoComplete="on"
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Settings;
