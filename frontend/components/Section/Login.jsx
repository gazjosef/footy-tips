import { useContext, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { AuthContext } from "@/context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const { loading, error, dispatch } = useContext(AuthContext);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axious.post("/auth/login", formData);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };

  // console.log("user", user);

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
          // value={email}
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
          // value={password}
          placeholder="Enter password"
          onChange={onChange}
          autoComplete="on"
        />
      </div>

      <div className="form__group">
        <p>Already a member? Login here</p>
      </div>

      <div className="form__group">
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
