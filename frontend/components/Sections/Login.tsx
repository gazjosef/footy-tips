import { FaUser } from "react-icons/fa";

const Login: React.FC = () => {
  return (
    <section className="min-h-[85vh] | grid place-items-center">
      <form className="max-w-md w-1/3 mx-auto border-2 p-4 rounded-lg space-y-6">
        <div className="space-x-2 mx-auto | flex items-center justify-center | text-2xl">
          <FaUser />
          <h2>Login</h2>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-semibold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@gmail.com"
            className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-0"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-semibold"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password123"
            className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-0"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
          >
            Sign In
          </button>
        </div>
      </form>
    </section>
  );
};
export default Login;
