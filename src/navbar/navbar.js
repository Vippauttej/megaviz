import React from "react";
import "./navbar.css";
const navbar = () => {
  return (
    <div className=" d-flex flex-sm-row-reverse">
      <div className="nav">
        <div className="Home">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/about ">
                      About Us
                    </a>
                  </li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/services">
                      Services
                    </a>
                  </li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/courses">
                      It Courses
                    </a>
                  </li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/careers">
                      Careers
                    </a>
                  </li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/contact">
                      Contact Us
                    </a>
                  </li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default navbar;
