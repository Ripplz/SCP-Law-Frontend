import React from "react";
import "./team.css";
import TeamMember from "./team_member";

const Team = () => {
  return (
    <div id="wrapper_team">
      <div id="depictor_team" />
      <div id="team_title">Our Team</div>
      <div id="wrapper_team_cta">
        <span id="team_cta_text">Some of our Team Members</span>
        <span id="team_cta"><a href="/team">See More</a></span>
      </div>
      <div id="wrapper_team_members">
        <TeamMember
          img_name="babatunde_irukera"
          full_name="Mr Babatunde Irukera"
          role="Founding Partner"
          description="Currently Serving in the Public Service"
        />
        <TeamMember
          img_name="victoria_alonge"
          full_name="Mrs Victoria Alonge"
          role="Partner"
          description={`Public Sector Regulatory Law, Criminal\nLitigation`}
        />
        <TeamMember
          img_name="dapo_akinosun"
          full_name="Mr Dapo Akinosun"
          role="Partner"
          description={`Energy & Resources, Banking & Finance,\nForeign Investment`}
        />

      </div>
    </div>
  );
};

export default Team;
