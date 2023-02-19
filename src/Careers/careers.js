import React from "react";
import "./careers.css";

const careers = () => {
  return (
    <div className="career">
      <form className="sid">
        <fieldset>
          <legend className="head">We're Hiring !</legend>

          <p className="para">Join Our Team</p>
          <p className="graph">
            If you're interested in one of our open positions, start by applying
            here and attaching your resume.
          </p>
          <h5 className="now">Apply Now</h5>

          <div className="mb-2">
            <input type="text" placeholder="Name"></input>
          </div>
          <br />
          <div className="mb-2">
            <input type="Number" placeholder="Phone"></input>
          </div>
          <br />
          <div className="mb-2">
            <input type="Email" placeholder="Email"></input>
          </div>
          <br />

          <textarea placeholder="Message"></textarea>
          <br />
        </fieldset>
      </form>
      <button>Submit Application</button>
    </div>
  );
};

export default careers;
