import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div id="wrapper_footer">
      <div id="wrapper_footer_links">
        <div className="wrapper_footer_group">
          <div id="img_home_logo" />
          <div className="footer_group_title">
            Superior Work Approach,Total Client Solution.
          </div>
          <div className="footer_link">info@scp-law.com</div>
          <div className="footer_link">abuja@scp-law.com</div>
        </div>
        <div className="wrapper_footer_group">
          <div className="footer_group_title">Address</div>
          <div className="footer_link">
            Lagos Office
            <br />
            9th Floor, Fortune Towers,
            <br /> 27/29, Adeyemo Alakija Street,
            <br /> Victoria Island, Lagos.
            <br /> +234-701-1404-511
          </div>
          <div className="footer_link">
            Abuja Office <br />
            9, Rima Street, Maitama,
            <br /> Abuja FCT
            <br /> +234-903-071-0071
          </div>
        </div>
        <div className="wrapper_footer_group">
          <div className="footer_group_title">Quick Links</div>
          <div className="footer_link">About Us</div>
          <div className="footer_link">Practice Areas</div>
          <div className="footer_link">Team</div>
          <div className="footer_link">Contact Us</div>
          <div className="footer_link">Career</div>
          <div className="footer_link">Blogs</div>
        </div>
        <div className="wrapper_footer_group">
          <div className="footer_group_title">Social Media</div>
          <div id="wrapper_img_footer_links">
            <span className="img_footer_link" id="img_footer_link_linkedin" />
            <span className="img_footer_link" id="img_footer_link_facebook" />
            <span className="img_footer_link" id="img_footer_link_twitter" />
            <span className="img_footer_link" id="img_footer_link_instagram" />
          </div>
        </div>
      </div>
      <div id="footer_copyright">
        2020 © Simmonscooper Partners. All Rights Reserved
      </div>
      <span id="btn_return_top" />
    </div>
  );
};

export default Footer;
