import React, { useState, ChangeEvent, FormEvent } from "react";
// ** Import Icons
import { FaUser } from "react-icons/fa";

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
        <div>
          <label
            htmlFor="name"
            className="block text-gray-600 text-sm font-semibold"
          >
            Enter Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Enter your name"
            autoComplete="on"
            name="name"
            className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-0"
            onChange={onChange}
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-gray-600 text-sm font-semibold"
          >
            Enter Your Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
            autoComplete="on"
            name="email"
            className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-0"
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-gray-600 text-sm font-semibold"
          >
            Enter Your Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter password"
            onChange={onChange}
            autoComplete="on"
            name="password"
            className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-0"
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-gray-600 text-sm font-semibold"
          >
            Confirm Your Password
          </label>
          <input
            type="password"
            id="password2"
            value={password2}
            placeholder="Confirm password"
            onChange={onChange}
            autoComplete="on"
            name="password2"
            className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-0"
          />
        </div>

        <div>
          <p>Already a member? Login here.</p>
        </div>

        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Register;
