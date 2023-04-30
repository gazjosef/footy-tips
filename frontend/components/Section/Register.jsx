import { useState } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__group">
        <h2 className="secondary-heading | u-flex u-items-center">
          <FaUser className="u-mr-1" /> Register
        </h2>
      </div>
      {/* ENTER YOUR NAME */}
      <div className="form__group">
        <input
          type="text"
          id="name"
          className="form__control"
          value={name}
          placeholder="Enter your name"
          onChange={onChange}
          autoComplete="on"
        />
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
      {/* ENTER YOUR PASSWORD2 */}
      <div className="form__group">
        <input
          type="text"
          id="password2"
          className="form__control"
          value={password2}
          placeholder="Confirm password"
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

export default Register;
