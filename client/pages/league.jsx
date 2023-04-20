import useFetch from "../hooks/useFetch.js";
import TableLeague from "../components/UI/TableLeague";
import Stats from "../components/Section/Stats";

const league = () => {
  // GET ALL TIPS
  return (
    <section className="container | u-py-5 | u-grid u-even-columns">
      <div>{/* <Stats /> */}</div>
      <TableLeague />
    </section>
  );
};

export default league;
