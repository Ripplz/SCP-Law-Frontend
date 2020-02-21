import React from "react";
import "./achievements.css";

const Achievements = () => {
  return (
    <div id="wrapper_achievements">
      <span id="depictor_achievements" />
      <span id="achievements_title">Achievements</span>
      <div id="wrapper_achievements_cta">
        <span id="achievements_cta_text">
          Through the years we have achived a few things
        </span>
        <span id="achievements_cta">See More</span>
      </div>
      <div id="wrapper_achievements_main">
        <div className="wrapper_achievement">
          <span className="achievement_icon" id="achievement_icon_one" />
          <span className="achievement_title">Who's who legal 2019:</span>
          <span className="achievement_body">
            The main partner of the Firm is presented as the leading expert in
            Nigeria in four sections of the magazine: banks and finance,
            corporate taxes, international investments and disputes resolution.
          </span>
        </div>
        <div className="empty_view_achievements" />
        <div className="wrapper_achievement">
          <span className="achievement_icon" id="achievement_icon_two" />
          <span className="achievement_title">2017:</span>
          <span className="achievement_body">
            Drafting of documents regulating activity of Economic Court of the
            Commonwealths of Independent States, in particular Conventions on
            the status of judges of Economic Court of the Commonwealths of
            Independent States, Regulations on Court of the Commonwealth of
            Independent States.
          </span>
        </div>
        <div className="empty_view_achievements" />
        <div className="wrapper_achievement">
          <span className="achievement_icon" id="achievement_icon_three" />
          <span className="achievement_title">2018:</span>
          <span className="achievement_body">
            Expert assessment and conclusion preparation according to projects
            of participation of the firm Philips Electronics N.V. in
            privatization in the territory of the Federal Republic of Nigeria.
          </span>
        </div>
        <div className="empty_view_achievements" />
        <div className="wrapper_achievement">
          <span className="achievement_icon" id="achievement_icon_four" />
          <span className="achievement_title">Chambers Global 2015-2018:</span>
          <span className="achievement_body">
            The Firm among the best law firms on the corporate and commercial
            law in Nigeria;
          </span>
        </div>
        <div className="empty_view_achievements" />
      </div>
    </div>
  );
};

export default Achievements;
