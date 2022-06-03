import React from "react";

function Logic() {
  const compTable = {};
  const tips = {};

  tips.forEach((tip) => {
    let user = compTable.find((user) => user.user_id === tip.user_id);

    // user.correct +=
  });

  return <div>Logic</div>;
}

export default Logic;
