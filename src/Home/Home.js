import React from "react";
import pic1 from "../images/Megaviz.jpg";
import pic2 from "../images/IT.jpeg";
import pic3 from "../images/internship.jpeg";
import pic4 from "../images/workshop.jpeg";
import "./Home.css";
const Home = () => {
  return (
    <div className="hm">
      <div className="d-flex flex-row ">
        <div className="col-md-6">
          <div className="text ms-5">
            <h1>
              WELCOME TO,
              <br /> <span>MegaViz</span>
            </h1>

            <p className="large">
              We provide quality of services to its Clients like Web
              Application,
              <br /> Digital Marketing (SEO, SMO, SEM, SMM, Email Marketing),
              Mobile App
              <br /> Development, Graphic Designing Services, UI/UX, Research &
              <br />
              Development & Management Products in Hyderabad
            </p>
            <br />
            <br />
            <button className="btn">CONTACT US</button>
          </div>
        </div>

        <div className="col-md-6">
          <img className="logo" src={pic1} alt="..." />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 p-4">
          <div className="card">
            <img src={pic2} class="card-img-top" alt="..." />
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
            <img src={pic3} class="card-img-top" alt="..." />
            <div className="card-body">
              <h1>Internship</h1>
              <p className="card-text">
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
            <img src={pic4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h1>workshops</h1>
              <p class="card-text">
                <h2>Why workshops?.</h2> On Course Workshops are ideal for all
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

export default Home;
