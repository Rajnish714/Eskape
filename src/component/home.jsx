import React from "react";

import RecentlyUpcoming from "./recentlyAndUpcoming";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2">
          <RecentlyUpcoming />
        </div>
      </div>
    </div>
  );
};

export default Home;
