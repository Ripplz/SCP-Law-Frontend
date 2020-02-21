import React from "react";
import "./team.css";
import Connect from "../home/connect/connect";
import Footer from "../footer/footer";
import TeamMember from "../home/team/team_member";

const Team = () => {
  return (
    <div id="twrapper_team">
      <div id="tmain_section_wrapper">
        <div id="tnavbar">
          <span id="timg_main_logo" />
          <span id="tnav_links_wrapper">
            <ul id="tnav_links">
              <li className="tnav_link">About Us</li>
              <li className="tnav_link">Practice Areas</li>
              <li className="tnav_link">Team</li>
              <li className="tnav_link">Contact Us</li>
            </ul>
            <span id="tnav_search_img" />
          </span>
        </div>
        <div id="tmain_section">
          <div id="tmain_section_team_one">
            <div id="tmain_section_team_one_text_wrapper">
              <div id="tmain_section_team_one_texts">
                <div id="tmain_section_team_one_title">
                  M<small>eet</small> T<small>he</small> <small>team</small>
                </div>
                <div id="tmain_section_team_one_body">
                  All Partners and Lawyers at Simmons Cooper
                </div>
              </div>
              <div id="tmain_section_team_one_placeholder" />
            </div>
            <div id="tmain_section_team_one_img" />
          </div>
          <div id="tmain_section_team_two">
            <div id="tmain_section_team_two_img" />
            <div id="tmain_section_team_two_placeholder" />
          </div>
        </div>
      </div>

      <div id="wrapper_team">
        <div id="depictor_team" />
        <div id="team_title">Our Partners</div>

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

      <div className="team_divider" />

      <div id="wrapper_team">
        <div id="depictor_team" />
        <div id="team_title">Our Senior Associates</div>

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

      <div className="team_divider" />

      <div id="wrapper_team">
        <div id="depictor_team" />
        <div id="team_title">Our Associates</div>

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

      <Connect />
      <Footer />
    </div>
  );
};

export default Team;
