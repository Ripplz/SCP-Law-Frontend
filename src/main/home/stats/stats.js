import React from "react";
import "./stats.css";

const Stats = () => {
  return (
    <div id="wrapper_stats">
      <div className="wrapper_stat">
        <span className="stat_title">100+</span>
        <span className="depictor_stats" />
        <span className="stat_body">Defence Cases Served</span>
      </div>
      <div className="wrapper_stat">
        <span className="stat_title">20+</span>
        <span className="depictor_stats" />
        <span className="stat_body">Qualified Lawyers</span>
      </div>
      <div className="wrapper_stat">
        <span className="stat_title">3+</span>
        <span className="depictor_stats" />
        <span className="stat_body">Years Defence Experience</span>
      </div>
      <div className="wrapper_stat">
        <span className="stat_title">24/7</span>
        <span className="depictor_stats" />
        <span className="stat_body">Availability and Client Support</span>
      </div>
      <div className="wrapper_stat">
        <span className="stat_title">₦</span>
        <span className="depictor_stats" />
        <span className="stat_body">Flexible Payment Structures</span>
      </div>
    </div>
  );
};

export default Stats;
