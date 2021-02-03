import React from "react";

import Photo from "../../Image/Photo.jpeg";
import BottomBar from "./../BottomBar/BottomBar";
import Skills from "../Skills/Skills";
import BookReading from "../BookReading/BookReading";
import { Education_details } from "./Education_details";
import { Certification_details } from "./Certification_details";

import "./About.css";

const About = () => {

  const renderEducation = () =>{
    return (Education_details.map((Edu_detail) => {
      return (
        <div className="row">
          <div className="col">
            <div className="Name">
              <a className="A7" href={Edu_detail.name_link} key={Edu_detail}>
                {Edu_detail.name}
              </a>
              &nbsp;&nbsp; - &nbsp;&nbsp;
              <a className="A8" href={Edu_detail.course} key={Edu_detail}>
                {Edu_detail.course}
              </a>
              <div className="Course">
                <p className="A5" key={Edu_detail} >{Edu_detail.date}</p>
              </div>
            </div>
            <div className="course_detail">
              {Edu_detail.details.map((detaillist) => {
                return (
                  <li className="A5" key={detaillist}>
                    {detaillist}
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      );
    }))
  }
 
  const renderCertification = () =>{
    return(Certification_details.map((Cert_detail) => {
      return (
        <div className="row">
          <div className="col">
            <ul>
              <li className="Name">
                <a className="A7" href={Cert_detail.name_link} key={Cert_detail}>
                  {Cert_detail.name}
                </a>
                &nbsp;&nbsp; - &nbsp;&nbsp;
                <a className="A8" href={Cert_detail.institute_link}  key={Cert_detail}>
                  {Cert_detail.institute}
                </a>
              </li>
              <div className="Course">
                <p className="A6"  key={Cert_detail} >{Cert_detail.date}</p>
              </div>
            </ul>
          </div>
        </div>
      );
    }))
  }


  return (
    <div className="About">
      <div className="About_container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="Heading">
                <h1 className="A1">Maitrik is a devloper</h1>
                <h1 className="A1"> who loves to tell a good story.</h1>
              </div>
              <div className="Para">
                <p className="A2">
                  &nbsp;&nbsp;&nbsp;&nbsp; Maitrik is a Toronto based Software
                  engineer. While he is a proficient full-stack developer, his
                  expertise is in building scalable applications.
                </p>
                <p className="A2">
                  &nbsp;&nbsp;&nbsp;&nbsp; He loves building things. While hard
                  engineering problem are often intrinsically fun to tackle. He
                  has a unique talent at seeing the big picture potential in a
                  product or brand and then bringing it to life.
                </p>
                <p className="A2">
                  &nbsp;&nbsp;&nbsp;&nbsp; Maitrik has worked for has carried a
                  strong mission behind the work—ranging from sustainability and
                  transportation to education. He tries to keep that same ethos
                  for doing good in his personal life as well. He strongly
                  believes that design and storytelling is a powerful medium to
                  create change. Maitrik is comfortable working on a range of
                  projects from developing apps to collaborating on set with a
                  production crew.
                </p>
                <p className="A2">
                  &nbsp;&nbsp;&nbsp;&nbsp; He enjoy creating things that live on
                  the internet, whether that be websites, applications, or
                  anything in between. His goal is to always build products that
                  provide pixel-perfect, performant experiences.
                </p>
                <p className="A2">
                  &nbsp;&nbsp;&nbsp;&nbsp; Outside of work maitrik finds
                  inspiration through tutoring, surfing at dawn, and traveling.
                  His hunger and curiosity for life drive him to experience
                  everything and document all that it has to offer. This thirst
                  for life is evident in all of his work. Maitrik doesn’t find a
                  the strong line between creativity, work and play.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="photo_image">
                <img className="img-fluid" src={Photo} alt="/"></img>
              </div>
              <p className="Q1">
                “You cannot change what you are, only what you do.”
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;–
                Philip Pullman
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Edu_container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="Heading">
                <h1 className="A1">Education</h1>
              </div>
              <div className="Educ_group">
                {renderEducation()}
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="Heading">
                <h1 className="A1">Certification</h1>
              </div>
              <div className="Cert_group">
              {renderCertification()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Skill_container">
        <h1 className="A9">skills</h1>
        <Skills />
        <p className="A4">* Indicates technologies familiar with/currently learning</p>
      </div>
      <div className="Books_container">
        <h1 className="A9">BOOKS I'M READING</h1>
        <p className="A10">
          Learning is never complete. Here are some of the books
          that have inspired me and helped me shape my thinking.
        </p>
        <BookReading />
      </div>
      <BottomBar />
    </div>
  );
};

export default About;
