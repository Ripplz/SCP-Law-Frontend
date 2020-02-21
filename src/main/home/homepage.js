import React from "react";
import "./homepage.css";
import Description from "./description/description";
import Stats from "./stats/stats";
import Achievements from "./achievements/achievements";
import PracticeAreas from "./practice-areas/practice-areas";
import LawyerSearch from "./lawyer-search/lawyer-search";
import Team from "./team/team";
import Connect from "./connect/connect";
import Footer from "../footer/footer";

const HomePage = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("wrapper_menu_links");
    if (window.getComputedStyle(menu).display === "none") {
      menu.style.display = "flex";
    } else menu.style.display = "none";
  };

  return (
    <div id="wrapper_homepage">
      <div id="main_section_wrapper">
        <div id="navbar">
          <span id="img_main_logo" />
          <span id="nav_links_wrapper">
            <span className="nav_link">About Us</span>
            <span className="nav_link">Practice Areas</span>
            <span className="nav_link">
              <a href="/team">Team</a>
            </span>
            <span className="nav_link">Contact Us</span>
            <span id="nav_search_img" />
          </span>
          <span id="navbar_menu_controller" onClick={toggleMenu}/>
        </div>
        <div id="wrapper_menu_links">
          <span className="menu_link">About Us</span>
          <span className="menu_link">Practice Areas</span>
          <a href="/team">
            <span className="menu_link">Team</span>
          </a>
          <span className="menu_link">Contact Us</span>
          <span className="menu_link">Search</span>
        </div>
        <div id="main_section_title">
          S<small>immons</small>C<small>ooper</small>
          <br />P<small>artners</small>
        </div>
        <div id="main_section_subtitle">
          Superior Work Approach,Total Client Solution.
        </div>
        <div id="main_section_text">
          We have an industry reputation for providing superior strategy and
          representation in complex commercial
          <br />
          dispute resolution engagements.
        </div>
        <div id="main_section_actions_wrapper">
          <button id="btn_main_section_cta">Speak To A Lawyer</button>
          <span id="main_section_cta_secondary">Learn More</span>
        </div>
      </div>
      <Description />
      <Stats />
      <Achievements />
      <PracticeAreas />
      <LawyerSearch />
      <Team />
      <Connect />
      <Footer />
    </div>
  );
};

export default HomePage;
