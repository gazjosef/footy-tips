import Link from "next/link";
import axios from "axios";
import { useContext, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { AuthContext } from "@/context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/tips", formData);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };

  console.log("user", user);

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__group">
        <h2 className="secondary-heading | u-flex u-items-center">
          <FaSignInAlt className="u-mr-1" /> Login
        </h2>
      </div>
      {/* ENTER YOUR EMAIL */}
      <div className="form__group">
        <input
          type="email"
          id="email"
          className="form__control"
          value={email}
          placeholder="Enter your email"
          onChange={onChange}
          autoComplete="on"
        />
      </div>
      {/* ENTER YOUR PASSWORD */}
      <div className="form__group">
        <input
          type="text"
          id="password"
          className="form__control"
          value={password}
          placeholder="Enter password"
          onChange={onChange}
          autoComplete="on"
        />
      </div>

      <div className="form__group">
        <p>
          Not a member? Register <Link href="/register">here</Link>.
        </p>
      </div>

      <div className="form__group">
        <button
          type="submit"
          className="btn btn-block | u-bg-primary-400 u-clr-white-0"
        >
          Login
        </button>
      </div>
      {error && <span>{error.message}</span>}
    </form>
  );
};

export default Login;
