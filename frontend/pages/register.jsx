import Register from "../components/Section/Register";
import Link from "next/link";

const register = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="hero | u-bg-white-0 u-mx-auto u-px-2 u-py-2 | u-flex u-items-center u-justify-between u-gap-2">
          <div className="hero__item hero__item--start |  | u-flex  u-justify-center">
            <Register />
          </div>
          <div className="hero__item hero__item--end | u-flex u-flex-col u-justify-center">
            <div className="form__group">
              <p>Enter with guest account</p>
            </div>
            <div className="form__group">
              <Link href="/tips">
                <button className="btn | u-bg-secondary-200 | u-clr-white-0">
                  Guest
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default register;
