import React, { Component } from 'react';

class Footer extends Component {
    state = {}
    render() {
        return (<div className="Footer">
            <footer className="footer Box">
                <div className="container" style={{ width: "100%", backgroundColor: "#0F1221" }}>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="img_animat1">
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="footer2_text">
                                <span className="footer2_tagline">Lets Talk!</span>
                            </div>
                            <div className="footer2_header_intro">
                                <p className="footer2_intro">I am always open to discuss your project, improve your online presence or help with your UX/UI design and devlopment challenges.</p>
                            </div>
                            <div className="list">
                                <a href="https://www.linkedin.com/in/maitrik-patel-896562165">
                                    <i className="big inverted linkedin icon"></i>
                                </a>
                                <a href="https://github.com/maitrikpatel2025">
                                    <i className="big inverted github icon"></i>
                                </a>
                                <a href="https://medium.com/@maitrikpatel_72581">
                                    <i className="big inverted medium icon"></i>
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
                            <div className="row lbtn">
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>);
    }
}

export default Footer;