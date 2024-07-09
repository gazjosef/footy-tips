import { FaUser } from "react-icons/fa";
import InputField from "../Snippets/InputField";
import Button from "../Snippets/Button";

export default function Login() {
  return (
    <section className="min-h-[85vh] | grid place-items-center">
      <form className="max-w-md w-1/3 mx-auto border-2 p-4 rounded-lg space-y-6">
        <div className="space-x-2 mx-auto | flex items-center justify-center | text-2xl">
          <FaUser />
          <h2>Login</h2>
        </div>
        <InputField
          label={"Email"}
          type={"email"}
          id={"email"}
          name={"email"}
          placeholder={"john@gmail.com"}
          autoComplete={""}
        />
        <InputField
          label={"Password"}
          type={"password"}
          id={"password"}
          name={"password"}
          placeholder={"password123"}
          autoComplete={""}
        />
        <Button title={"Sign In"} />
      </form>
    </section>
  );
}
