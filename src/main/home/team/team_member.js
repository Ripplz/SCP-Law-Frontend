import React from "react";
import "./team_member.css";

const TeamMember = props => {
  return (
    <div className="wrapper_team_member">
      <div
        className="img_team_member"
        id={`img_team_member_${props.img_name}`}
      />
      <div className="team_member_name">{props.full_name}</div>
      <div className="team_member_role">{props.role}</div>
      <div className="team_member_description">{props.description}</div>
    </div>
  );
};

export default TeamMember;
