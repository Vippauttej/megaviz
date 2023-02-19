import React from "react";
import "./courses.css";
import pic1 from "../images/c.jpeg";
import pic2 from "../images/c++.jpeg";
import pic3 from "../images/java.jpeg";
import pic4 from "../images/dl.jpeg";
import pic5 from "../images/ds.jpeg";
import pic6 from "../images/fsd.jpeg";
import pic7 from "../images/ml.jpeg";
import pic8 from "../images/py.jpeg";
import pic9 from "../images/.net.jpeg";

const services = () => {
  return (
    <div className="pad">
      <div className="row">
        <div className="col-md-4 p-4">
          <div className="card">
            <img src={pic1} className="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">C Programming</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-4">
          <div className="card">
            <img src={pic2} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">C++ Programming</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-4">
          <div className="card">
            <img src={pic3} class="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Java Programming</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 p-4">
          <div className="card">
            <img src={pic4} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">DEEP LEARNING</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-4">
          <div className="card">
            <img src={pic5} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">DATA SCIENCE</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-4">
          <div className="card">
            <img src={pic6} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">FULL STACK DEVELOPMENT</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 p-4">
          <div className="card">
            <img src={pic7} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">MACHINE LEARNING</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-4">
          <div className="card">
            <img src={pic8} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">PYTHON</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-4">
          <div className="card">
            <img src={pic9} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">.NET</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
