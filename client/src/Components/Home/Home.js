import React from "react";
import { Link } from "react-router-dom";
import imageman from "../../Image/man.svg";

import ScrollContact from "../ScrollContact/ScrollContact";
import "./Home.css";
import BottomBar from "../BottomBar/BottomBar";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 sm-text-center">
              <div className="banner-img">
                <h1 className="B1">Define</h1>
                <h1 className="B1">Design</h1>
                <h1 className="B1">Develop</h1>
                <h1 className="B1">Deploy</h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="header_text">
                <div className="H1_text">
                  <h1 className="H1">Hello,</h1>
                  <h1 className="H1">I'm Maitrik Patel</h1>
                </div>
                <p className="P">
                  Web Developer, Designer, Software Engineer and Hardware
                  Engineer, Cloud Engineer Currently based in Toronto, Ontario.
                </p>
                <p className="P">
                  I enjoy build everything from small business sites to rich
                  interactive web apps.
                </p>
                <Link to="/projects">
                  <button className="Explore">Explore My Project</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ScrollContact />
      </div>
      <div className="Intro_container">
        <div className="container">
          <div className="Box">
            <div className="row justify-content-center">
              <h1 className="B2">Engineer by Qualification, Designer by Choice!</h1>
              <div className="col-lg-6 col-md-12">
                <img className="img-fluid" src={imageman} alt="/" />
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="header_text">
                  <p className="P1">
                    Hello, I'm Maitrik - a self-taught engineer passionate about
                    developing experiences that leave a positive impact on
                    people, the environment, and society.
                  </p>
                  <p className="P1">
                    I was born and raised in Gujarat, India. Growing up, I had a
                    unique perspective of the world. I learned everyone has a
                    story to tell, and it's important to be open to change and
                    fresh ideas.
                  </p>
                  <p className="P1">
                    I found a love for engineering and developing applications
                    in my sophomore year of college. I became fascinated with
                    the way people think, feel, and behave - and how products
                    could help them live more fulfilling lives.
                  </p>
                  <p className="P1">
                    I'm currently persuading undergrad from the Seneca
                    College, in Computer engineering.
                  </p>
                  <Link to="/about">
                    <button className="Explore">About Me</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomBar/>
    </div>
  );
};
export default Home;
