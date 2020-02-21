import React from "react";
import "./lawyer-search.css";

const LawyerSearch = () => {
  return (
    <div id="wrapper_lawyer_search">
      <div id="wrapper_lawyer_search_main">
        <span id="depictor_lawyer_search" />
        <span id="lawyer_search_title">Find a Lawyer</span>
        <span id="lawyer_search_body">
          Simmons Cooper lawyers are recognized for their legal innovation and
          outstanding service to clients <br />
          Nationwide
        </span>
        <div id="wrapper_lawyer_search_box">
          <input type="text" name="lawyer-search" id="input_lawyer_search" />
          <button id="btn_lawyer_search_cta">Search</button>
        </div>
        <div id="lawyer_search_cta">Advanced Search</div>
      </div>
      <div id="img_lawyer_search" />
    </div>
  );
};

export default LawyerSearch;
