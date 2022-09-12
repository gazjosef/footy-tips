import React from "react";
import { Link } from "react-router-dom";

import CompTable from "../components/Tables/CompTable";

function Comp() {
  return (
    <article className="article-comp">
      <aside className="panel panel__default">
        <CompTable />
      </aside>

      <section className="article-comp__button">
        <button className="btn btn--comp">
          <Link to="/">Tip Now</Link>
        </button>
      </section>
    </article>
  );
}

export default Comp;
