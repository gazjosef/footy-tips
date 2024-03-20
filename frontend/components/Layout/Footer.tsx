import React from "react";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-black py-4 |  text-white">
      <section className="container mx-auto">
        <p className="w-max mx-auto">
          Copyright <span className="text-yellow-300">&copy;</span> Gareth Hind{" "}
          {currentYear}
        </p>
      </section>
    </footer>
  );
};

export default Footer;
