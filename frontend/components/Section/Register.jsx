import Link from "next/link";
import { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import AuthContext from "../../context/AuthContext";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const { dispatch } = useContext(AuthContext);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
    }
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
        <p>
          Already a member? Login <Link href="/">here</Link>.
        </p>
      </div>

      <div className="form__group">
        <button
          type="submit"
          className="btn btn-block | u-bg-primary-400 u-clr-white-0"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Register;
