import React, { useState, ChangeEvent, FormEvent } from "react";
// ** Import Icons
import { FaUser } from "react-icons/fa";
import InputField from "../Snippets/InputField";
import Button from "../Snippets/Button";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      // Dispatch userData or perform any other action with it
    }
  };

  return (
    <section className="min-h-[85vh] | grid place-items-center">
      <form
        className="max-w-md  w-1/3 mx-auto border-2 p-6 rounded-lg space-y-6"
        onSubmit={onSubmit}
      >
        <div className="space-x-2 mx-auto | flex items-center justify-center | text-2xl">
          <FaUser />
          <h2>Register</h2>
        </div>

        <InputField
          label={"Enter Your Name"}
          type={"email"}
          id={"name"}
          name={"name"}
          placeholder={"Enter your name"}
          autoComplete={"on"}
          // value={password}
          // onChange={onChange}
        />
        <InputField
          label={"Enter Your Email"}
          type={"email"}
          id={"email"}
          name={"email"}
          placeholder={"Enter your email"}
          autoComplete={"on"}
          // value={password}
          // onChange={onChange}
        />
        <InputField
          label={"Enter Your Password"}
          type={"password"}
          id={"password"}
          name={"password"}
          placeholder={"Enter password"}
          autoComplete={"on"}
          // value={password}
          // onChange={onChange}
        />
        <InputField
          label={"Confirm Your Password"}
          type={"password"}
          id={"password2"}
          name={"password2"}
          placeholder={"Confirm password"}
          autoComplete={"on"}
          // onChange={onChange}
        />

        <div>
          <p>Already a member? Login here.</p>
        </div>

        <Button title={"Submit"} />
      </form>
    </section>
  );
};

export default Register;
