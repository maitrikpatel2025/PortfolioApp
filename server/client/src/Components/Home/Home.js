import React from "react";
import Button from "../Button/Button";

import Image from "../../Assets/LandingHello.png";
import Image2 from "../../Assets/LandingMobile.png";
import Icon1 from "../../Assets/Landingicon1.png";
import Icon2 from "../../Assets/Landingicon2.png";
import Icon3 from "../../Assets/Landingicon3.png";



import './Home.css'
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll'
import TestimonialCarousel from "../TestimonialCarousel/TestimonialCorousel";

const Home = () => {
  return (
    <section className="Home">
      <section className="layout1">
        <ScrollAnimation animateIn='fadeIn'
          animateOut='fadeOut'>
          <div className="container" >
            <div className="row justify-content-center box">
              <div className="col-lg-6 content-center">
                <div className="header_text">
                  <div className="text_layout1">
                    <h1 className="tagline_layout1">Say Hello to Your <span className="tagline2_layout1"> Future Product</span></h1>
                  </div>
                  <p className="intro_layout1">I’m Maitrik Patel, an experienced software Developer who constantly
                <br />
                seeks out innovative solutions to everyday problems.</p>
                  <div className="row btn_layout1">
                    <Link to="/works">
                      <Button Text="Take A Tour" />
                    </Link>
                    <Link to="/contact">
                      <Button Color Text="Connect With Me" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 vertcal-center">
                <span className="img_animat1">
                  <img alt="laginsd" src={Image} className="img-fluid" />
                </span>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>
      <section className="layout2">
        <div className="container">
          <div className="row justify-content-center box">
            <div className="col-lg-6 col-md-12">
              <div className="img_animat2">

                <img alt="ewrtoi" src={Image2} className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 sm-text-center">
              <div className="header_text2">
                <div className="text_layout2">
                  <span className="tagline_layout2">Who IS <span className="tagline2_layout2">Maitrik Patel</span></span>
                </div>
                <div className="intro_layout2">
                  <p className="intro1_layout2">An innovative software developer having an experience of building Web and Mobile applications with
Python /JavaScript / Reactjs / React Native and some frameworks.</p>
                  <p className="intro1_layout2">I specialize in UI/UX Design, Mobile-App Devlopment, and Software Devlopment.</p>
                </div>
                <div className="row btn_layout2">
                  <Link to="/story">
                    <Button Color Text="Learn More" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout3">
        <div className="container">
          <div className="row justify-content-center box">
            <div className="col-lg-6 col-md-12 sm-text-center">
              <div className="header_text3">
                <div className="text_layout3">
                  <span className="text_header_layout3">MY EXPERTISE
                </span>
                  <h1 className="tagline_layout3">What I do for my <span className="tagline2_layout3">Customers</span></h1>
                </div>

                <p className="intro_layout3">In my experience, when I really focus on solving needs for customer and exceeding expectations for my brand</p>

                <div className="row btn_layout2">
                  <Link to="/works">
                    <Button Color Text="Explore" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 m-6">
              <div className="row">
                <div className="col-md-5 col-md-offset-4 card1">

                  <img alt="rlkwt" src={Icon1} />
                  <h5 className="card_header">Product Design</h5>
                  <h5 className="card_header"> &amp; UI/UX</h5>
                  <p className="card_intro">Websites, application or design related tasks. I love tackling digital problems.</p>
                </div>
                <div className="col-md-5 col-md-offset-3 card2">


                  <img alt="dklgsd" src={Icon2} />
                  <h5 className="card_header">Strategy</h5>
                  <h5 className="card_header"> &amp; Direction</h5>
                  <p className="card_intro">Defining the problem, identifying the scope and finally, organising.</p>

                </div>
              </div>
              <div className="row">
                <div className="col-md-5 col-md-offset-4 card3">

                  <img alt="dsgkl" src={Icon3} />
                  <h5 className="card_header">User Experience</h5>
                  <h5 className="card_header"> &amp; Development</h5>
                  <p className="card_intro">Every interaction you apply to your brand makes you stronger and more priority.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="layout4">
          <div className="container">
            <TestimonialCarousel />
          </div>
        </section>
      </section>
      <Footer />
    </section>
  );
};

export default Home;
