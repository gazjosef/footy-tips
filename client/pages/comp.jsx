import Link from "next/link";
import TableComp from "../components/UI/TableComp";
import TableLeague from "../components/UI/TableLeague";
import useFetch from "../hooks/useFetch.js";

const dashboard = () => {
  // GET ALL TIPS
  return (
    <div>
      <div className="container | u-py-5 ">
        <div className="u-mb-auto">
          <TableComp />
          <Link href="/tips">
            <button className="btn | u-bg-secondary-200  u-ml-auto u-mt-5 | u-flex u-items-center u-justify-between | u-clr-white-0">
              <h3 className="u-ml-0-5">Tip Now!</h3>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
