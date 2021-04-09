import React from "react";
import Image from "../../Assets/Rectangle 73.svg";
import LandingAnimation from "../SvgAnimations/LandingAnimation";

import './Home.css'

const Home = () => {
  return (
    <div className="Home">
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 sm-text-center">
              <div className="header_text">
                <div className="H1_text">
                  <h1 className="H1">Hi, I am</h1>
                  <h1 className="H1">Maitrik Patel </h1>
                  <h3 className="H1">Mobile-Web Developer, UI Designer, Software Developer </h3>
                </div>
                <p className="P">
                  An innovative software developer having an experience of
                  building Web and Mobile applications with Python /JavaScript /
                  Reactjs / React Native and some frameworks.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="responsive">
                <LandingAnimation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
