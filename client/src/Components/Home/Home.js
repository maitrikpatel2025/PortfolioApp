import React from "react";
import Image from "../../Assets/LandingHello.png";
import Image2 from "../../Assets/LandingMobile.png";
import Button from "../Button/Button";

import LandingAnimation from "../SvgAnimations/LandingAnimation";

import './Home.css'

const Home = () => {
  return (
    <div className="Home">
      <section className="layout1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="header_text">
                <span className="header_tagline">Say Hello to the Your <span className="tagline">Future Product</span></span>
              </div>
              <div className="header_intro">
                <p className="intro">I’m Maitrik Patel, an experienced software Developer who constantly
                <br />
                seeks out innovative solutions to everyday problems.</p>
              </div>
              <div className="row lbtn">
                <Button Text="Take A Tour" />
                <Button Color Text="Connect With Me" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img_animat">
                <img src={Image} className="responsive" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout2">
        <div className="container" style={{ width: "100%" }}>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="img_animat1">
                <img src={Image2} className="responsive" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="layout2_text">
                <span className="layout2_tagline">Who IS <span className="layout2_tagline2">Maitrik Patel</span></span>
              </div>
              <div className="layout2_header_intro">
                <p className="layout2_intro">An innovative software developer having an experience of building Web and Mobile applications with
Python /JavaScript / Reactjs / React Native and some frameworks.</p>
                <p className="layout2_intro">I specialize in UI/UX Design, Mobile-App Devlopment, and Software Devlopment.</p>
              </div>
              <div className="row lbtn">
                <Button Color Text="Learn More" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="layout2_text">
                <span className="tagline">MY EXPERTISE
                </span>
                <h1 className="header_tagline">What I do for my <span className="layout2_tagline2">Customers</span></h1>
              </div>
              <div className="layout2_header_intro">
                <p className="layout2_intro">In my experience, when I really focus on solving needs for customer and exceeding expectations for my brand</p>
              </div>
              <div className="row lbtn">
                <Button Color Text="Learn More" />
              </div>
            </div>
            <div className="col">
              <div className="layout3_card">
                <div className="layout3_card1">
                  <span className="layout3_card1_header">Who IS</span>
                </div>
                <div className="layout3_card2"></div>
                <div className="layout3_card3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
