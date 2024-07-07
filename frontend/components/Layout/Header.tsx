import Navbar from "../Layout/Navbar";
import Logo from "../Snippets/Logo";

export default function Header() {
  return (
    <header className="bg-blue-400 w-screen py-4 shadow-md | text-xl text-white  font-medium">
      <section className="container mx-auto | flex items-center justify-between">
        <Logo />

        <Navbar />
      </section>
    </header>
  );
}
