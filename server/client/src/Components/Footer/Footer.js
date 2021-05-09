import React, { Component } from 'react';

import Logo from "../../Assets/Logowhite.png";
import './Footer.css'

class Footer extends Component {
    state = {}
    render() {
        return (<div className="Footer">
            <footer className="footer Box">
                <section className="footer_layout">
                    <div className="container">
                        <div className="row justify-content-center box">
                            <div className="col-lg-6 content-center">
                                <img alt="laginsdfgasd" src={Logo} className="img-fluid" />
                                <div className="header_footer">
                                    <div className="footer_layout1">
                                        <span className="footer_tagline_layout1">Maitrik Patel</span>
                                        <br />
                                        <span className="footer_intro_layout1">Mobile-Web Developer, UI Designer, Software Developer </span>
                                    </div>
                                    <div className="footer_layout1">
                                        <span className="footer_intro_layout1">Email me at</span>
                                        <br />
                                        <a href="mailto:maitrik.patel2025@gmail.com">
                                            <span className="footer_tagline_layout1">maitrik.patel2025@gmail.com</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 content-center">
                                <div className="header_footer">
                                    <div className="footer2_text">
                                        <h1 className="footer2_tagline">Lets Talk!</h1>
                                    </div>
                                    <div className="footer2_header_intro">
                                        <p className="footer_intro_layout1">I am always open to discuss your project, improve your online presence or help with your UX/UI design and devlopment challenges.</p>
                                    </div>
                                </div>
                                <div className="list">
                                    <a href="https://www.linkedin.com/in/maitrik-patel-896562165">
                                        <i className="big inverted linkedin icon"></i>
                                    </a>
                                    <a href="https://github.com/maitrikpatel2025">
                                        <i className="big inverted github icon"></i>
                                    </a>
                                    <a href="https://www.facebook.com/maitrik.patel2025/">
                                        <i className="big inverted facebook icon"></i>
                                    </a>
                                    <a href="https://twitter.com/mkpatel2025">
                                        <i className="big inverted twitter icon"></i>
                                    </a>
                                    <a href="https://www.instagram.com/maitrik_patel2025/?hl=en">
                                        <i className="big inverted instagram icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="row justify-content-center">
                            <div className="footer_intro_layout1">Copyright © 2021 Maitrik patel.</div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>);
    }
}

export default Footer;