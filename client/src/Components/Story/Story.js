import React from "react";
import Photo from "../../Assets/Photo.jpeg"
import Quote from "../../Assets/Quote.png"
import Footer from "../Footer/Footer";
import { book_list } from "./booklist";

import "./Story.css";

const Story = () => {
    return (
        <section className="Story">
            <section className="layout1">
                <div className="container">
                    <div className="row justify-content-center box">
                        <div className="col-lg-8 col-md-12">
                            <div className="Heading">
                                <h1 className="story_tagline_layout1">Maitrik is a devloper who <span className="story_tagline2_layout1">loves</span> <br />to tell a
                                <span className="story_tagline3_layout1"> good story.</span></h1>
                            </div>
                            <div className="Para">
                                <p className="story_intro_layout1">
                                    &nbsp;&nbsp;&nbsp;&nbsp; Maitrik is a Toronto based Software
                                    engineer. While he is a proficient full-stack developer, his
                                    expertise is in building scalable applications.
                </p>
                                <p className="story_intro_layout1">
                                    &nbsp;&nbsp;&nbsp;&nbsp;Outside of his full-time commitments, He work with a select freelance client base to create amazing products and solutions

                </p>
                                <p className="story_intro_layout1">
                                    &nbsp;&nbsp;&nbsp;&nbsp; He loves building things. While hard
                                    engineering problem are often intrinsically fun to tackle. He
                                    has a unique talent at seeing the big picture potential in a
                                    product or brand and then bringing it to life.
                </p>
                                <p className="story_intro_layout1">
                                    &nbsp;&nbsp;&nbsp;&nbsp; Maitrik has worked for has carried a
                                    strong mission behind the work—ranging from sustainability and
                                    transportation to education. He tries to keep that same ethos
                                    for doing good in his personal life as well. He strongly
                                    believes that design and storytelling is a powerful medium to
                                    create change. Maitrik is comfortable working on a range of
                                    projects from developing apps to collaborating on set with a
                                    production crew.
                </p>
                                <p className="story_intro_layout1">
                                    &nbsp;&nbsp;&nbsp;&nbsp; He enjoy creating things that live on
                                    the internet, whether that be websites, applications, or
                                    anything in between. His goal is to always build products that
                                    provide pixel-perfect, performant experiences.
                </p>
                                <p className="story_intro_layout1">
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
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;–
                                Philip Pullman
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout2" >
                <div className="container">
                    <h1 className="A9">BOOKS I'M <span className="A92">READING</span></h1>
                    <p className="A10">
                        Learning is never complete. Here are some of the books
                      
                        that have inspired me and   <br/>helped me shape my thinking.
                </p>
                    <div className="row justify-content-center">
                        {book_list.map((book) => { return (<div key={book.id} className="column book_card"> <img width="250" height="150" className="img-fluid" alt={book.name} src={book.name_link}></img></div>) })}
                    </div>

                </div>
            </section >
            <section className="layout4" >
                <div className="container">
                    <h1 className="A9">Goals &amp; <span className="story_tagline2_layout1"> Ambition</span></h1>
                    <div className="row justify-content-center">
                        <div className="col-10">
                        <img className="response" src={Quote} alt="/"></img>
                        </div>
                        <p className="A10">
                            helping businesses about building &amp; designing delightful experiences with the combination of business analyist, marketing, UX/UI design and development to make customers and users satisfied when they’re using products and services online.
                     </p>
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    );
};

export default Story;