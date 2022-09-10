import React from "react";
import map from "../assest/map.png";
import RecentlyUpcoming from "./recentlyAndUpcoming";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg ">
            <RecentlyUpcoming />
          </div>
          <div className="row">
            <div className="col">Post</div>
            <div className="col">Post</div>
            <div className="col">Post</div>
            <div className="col">Post</div>
          </div>
        </div>
        <div className="row m-4 ">
          <div className="col-lg-5">
            <img src={map} />
          </div>
          <div className="col-3 m-auto">
            <div>
              <h1>Your itinerary and your map in one view</h1>
              <p1>
                No more switching between different apps, tabs, and tools to
                keep track of your travel plans.
              </p1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
