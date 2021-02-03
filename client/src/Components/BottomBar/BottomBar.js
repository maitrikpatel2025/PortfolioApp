import React from "react";

import "./BottomBar.css";

const BottomBar = () => {
  return (
    <div className="BottomBar">
      <div className="Bottom_container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="Bottom_text">
                <div className="F1_text">
                  <h1 className="F1">Maitrik Patel</h1>
                  <div className="PF1">Software Engineer</div>
                  <div className="PF1">Gujarat • Ontario</div>
                </div>

                <div className="PF2">LET'S WORK TOGETHER</div>
                <div className="PF1">
                  If you are thinking about hiring me or would like to discuss a
                  project, get in touch with me at
                </div>
                <div className="PF2">
                <a className="PF2" href="mailto:someone@example.com">maitrik.patel2025@gmail.com</a>
                </div>
                <div className="PF2">(647) 676-7730</div>
                <div className="contact_F">
                <div className="contact">
                  <a href="https://www.linkedin.com/in/maitrik-patel-896562165">
                    <span className="PF2">LINKED IN</span>
                  </a>
                  <span className="PF1">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                  <a href="https://www.facebook.com/maitrik.patel2025/">
                    <span className="PF2">FACEBOOK</span>
                  </a>
                </div>
                <div className="contact">
                  <a href="https://twitter.com/mkpatel2025">
                    <span className="PF2">TWITTER</span>
                  </a>
                  <span className="PF1">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                  <a href="https://www.instagram.com/maitrik_patel2025/?hl=en">
                    <span className="PF2">INSTAGRAM</span>
                  </a>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 sm-text-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
