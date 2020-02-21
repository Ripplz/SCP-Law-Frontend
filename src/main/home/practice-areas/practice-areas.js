import React from "react";
import "./practice-areas.css";

const PracticeAreas = () => {
  return (
    <div id="wrapper_practice_areas">
      <div id="wrapper_practice_areas_header">
        <span id="depictor_practice_areas" />
        <span id="practice_areas_title">Our Practice Areas</span>
        <div id="wrapper_practice_areas_cta">
          <span id="practice_areas_cta_text">Some of our Practice Areas</span>
          <span id="practice_areas_cta">See More</span>
        </div>
      </div>
      <div id="wrapper_practice_areas_main">
        <span id="border_left" />
        <div id="wrapper_practice_areas_body">
          <div className="wrapper_practice_area" id="wrapper_practice_area_one">
            <span className="img_practice_area" id="img_practice_area_one" />
            <span className="practice_area_title">Business</span>
          </div>
          <div className="wrapper_practice_area" id="wrapper_practice_area_two">
            <span className="img_practice_area" id="img_practice_area_two" />
            <span className="practice_area_title">Dispute Resolution</span>
          </div>
          <div className="wrapper_practice_area" id="wrapper_practice_area_three">
            <span className="img_practice_area" id="img_practice_area_three" />
            <span className="practice_area_title">Personal</span>
          </div>
          <div className="wrapper_practice_area" id="wrapper_practice_area_four">
            <span className="img_practice_area" id="img_practice_area_four" />
            <span className="practice_area_title">Regulatory Compliance</span>
          </div>
        </div>
        <span id="border_right" />
      </div>
    </div>
  );
};

export default PracticeAreas;
