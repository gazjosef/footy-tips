import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import { useContext, useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("click");
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };

  console.log("User", user);
  console.log("TEST");

  return (
    <form action="" className="form">
      <div>
        <div className="form__group">
          <h2 className="secondary-heading | u-mb-2 | u-uppercase">Login</h2>
        </div>
        <div className="form__group">
          <input
            type="text"
            placeholder="Enter your username"
            onChange={handleChange}
            id="username"
            className="form__control"
            autoComplete="on"
          />
        </div>

        <div className="form__group">
          <input
            type="password"
            placeholder="Enter password"
            onChange={handleChange}
            id="password"
            className="form__control"
            autoComplete="on"
          />
        </div>
      </div>

      <div>
        <div className="form__group">
          <p>
            Don&rsquo;t have an account?{" "}
            <a href="" className="u-clr-primary-300">
              Sign Up here.
            </a>
          </p>
        </div>
        <div className="form__group">
          <button
            type="submit"
            onClick={handleClick}
            className="btn btn-block | u-bg-primary-400 | u-clr-white-0"
          >
            Enter
          </button>
        </div>
        {error && <span>{error.message}</span>}
      </div>
    </form>
  );
};

export default Login;
