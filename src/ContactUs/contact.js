import React from "react";
import "./contact.css";
const contact = () => {
  return (
    <div className="form">
      <div className="row">
        <div className="col-md-4">
          <h1>Office Location</h1>
          <br />
          <p className="large">
            MegaViz Technologies PVT LTD, #806, 8th Floor,
            <br />
            Manjeera trinity Corporate Besides manjeers
            <br />
            Cinepolis mall, Kukatpally Housing Board Colony,
            <br />
            Hyderabad, Telangana, India. Pincode 500072
          </p>
        </div>
        <div className="col-md-4">
          <h1>E-mail</h1>
          <br />
          <p>Info@megaviztech.com</p>
        </div>
        <div className="col-md-4">
          <h1>Phone</h1>
          <br />
          <p>+91-9876543210</p>
        </div>
      </div>
    </div>
  );
};

export default contact;
