import React from "react";
import LeagueTable from "../components/Tables/LeagueTable";

function League() {
  return (
    <section>
      <aside className="panel panel__default">
        <div className="panel__heading">
          <h3 className="panel__title">League Table</h3>
        </div>
        <LeagueTable />
      </aside>
    </section>
  );
}

export default League;
