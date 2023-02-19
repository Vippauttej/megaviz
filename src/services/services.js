import React from "react";
import pic1 from "../images/IT.jpeg";
import pic2 from "../images/internship.jpeg";
import pic3 from "../images/workshop.jpeg";
import "./services.css";

const courses = () => {
  return (
    <div className="ser">
      <div className="row">
        <div className="col-md-4 p-4">
          <div className="card">
            <img src={pic1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h1>Software Training</h1>
              <p class="card-text">
                100% JOB ORIENTED TRAINING COURSES WE PROVIDE Online & Offline
                Available Sreeram Technologies one of best Software Training
                Institute in GUNTUR BEST CORPORATE TRAINING COMPANIES FOR C,
                C++, Java, Python, Data Science , ML, DL, Web Development, AAND
                MANY MORE IT COURSES
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-4">
          <div className="card">
            <img src={pic2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h1>Internship</h1>
              <p class="card-text">
                Online & Training Available Industrial Summer Internship &
                Training Program - Online & Offline available in Guntur. We will
                provide B.Tech Internships for CSE, IT,AI,DS,AI&ML,IOT,ML, ECE,
                EEE ,MECHANICAL and CIVIL, etc...***All DOMAINS *** and ***Any
                University ***. DIPLOMA INDUSTRIAL TRAININGS for *** ALL
                BRANCHES *** and *** ALL DOMAINS *
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 p-4">
          <div className="card">
            <img src={pic3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h1>workshops</h1>
              <p class="card-text">
                <h4>Why workshops?.</h4> On Course Workshops are ideal for all
                college faculty, student success instructors, counselors, Trio
                personnel, and administrators looking for a proven approach to
                dramatically improving student success, retention and
                graduation. Although geared for college faculty, the same
                concepts are easily applicable for middle
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default courses;
