import React from "react";
import "./About.css";
import pic1 from "../images/about.png";
const About = () => {
  return (
    <div className="about">
      <div className="d-flex flex-sm-row">
        <div className="col-md-6">
          <div className="abt">
            <h1>About US</h1>
            <p className="mega">
              Megaviz is the main supplier in IT Development, Software
              Development, creative Mobile applications Development, web index
              showcasing and advancement administrations. Our essential subject
              matters incorporate site improvement (SEO), on page streamlining,
              search-accommodating web advancement, informal communication and
              third party referencing. We separate ourselves in our steady
              capacity to stay up with the changing requests of the business.
              Megaviz have gone from little new businesses to huge organizations
              making significant degrees of progress with every customer.
            </p>
          </div>
        </div>
        <div className="pc">
          <div className="col-md-6">
            <img src={pic1} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
