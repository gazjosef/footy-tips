import React from "react";
import TipsContainer from "../components/Tips/TipsContainer";

function Tips() {
  return (
    <article className="article-tips">
      <section>
        <div className="panel panel__default">
          <div className="panel__heading main-color-bg">
            <h3 className="panel__title">Latest Tips</h3>
          </div>

          <div className="panel__body">
            <TipsContainer />
          </div>
        </div>
      </section>
    </article>
  );
}

export default Tips;
