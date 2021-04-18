import React from "react";
import Button from "../Button/Button";

import Image from "../../Assets/LandingHello.png";
import Image2 from "../../Assets/LandingMobile.png";
import Icon1 from "../../Assets/Landingicon1.png";
import Icon2 from "../../Assets/Landingicon2.png";
import Icon3 from "../../Assets/Landingicon3.png";

import LandingAnimation from "../SvgAnimations/LandingAnimation";

import './Home.css'
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <section className="Home">
      <section className="layout1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 sm-text-center">
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
            <div className="col-lg-6 col-md-12">
              <div className="img_animat">
                <img src={Image} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout2">
        <div className="container" style={{ width: "100%" }}>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="img_animat1">
                <img src={Image2} className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 sm-text-center">
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
          <div className="row Box">
            <div className="col-lg-6 col-md-12 sm-text-center">
              <div className="layout3_text">
                <span className="layout3_text_header">MY EXPERTISE
                </span>
                <h1 className="layout3_tagline">What I do for my <span className="layout2_tagline2">Customers</span></h1>
              </div>
              <div className="layout3_header_intro">
                <p className="layout3_intro">In my experience, when I really focus on solving needs for customer and exceeding expectations for my brand</p>
              </div>
              <div className="row lbtn">
                <Button Color Text="Explore" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="layout3_card">
                <div className="layout3_card1">
                  <img src={Icon1} />
                  <h5 className="layout3_card_header">Product Design</h5>
                  <h5 className="layout3_card_header"> &amp; UI/UX</h5>
                  <p className="layout3_card_intro">Websites, application or design related tasks. I love tackling digital problems.</p>
                </div>
                <div className="layout3_card2">

                  <img src={Icon2} />
                  <h5 className="layout3_card_header">Strategy</h5>
                  <h5 className="layout3_card_header"> &amp; Direction</h5>
                  <p className="layout3_card_intro">Defining the problem, identifying the scope and finally, organising.</p>

                </div>
                <div className="layout3_card3">

                  <img src={Icon3} />
                  <h5 className="layout3_card_header">User Experince</h5>
                  <h5 className="layout3_card_header"> &amp; Development</h5>
                  <p className="layout3_card_intro">Every interaction you apply to your brand makes you stronger and more priority.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </section>
  );
};

export default Home;
