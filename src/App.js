import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Nav from "./navbar/navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Courses from "./courses/courses";
import Services from "./services/services";
import Contact from "./ContactUs/contact";

import Careers from "./Careers/careers";
function App() {
  return (
    <>
      <div className="w-100">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
