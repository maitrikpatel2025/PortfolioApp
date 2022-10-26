import React from 'react';
import { Link } from 'react-router-dom';

import hangoutImage from "../../Assets/Hangout.svg";
import './HangOut.css'

const HangOut = () => {
    return (<div>
        <section className="Home" >
            <section className="layout1">
            <div className="container" >
            <div className="row justify-content-center box">
                <div className="header">
                <div className="row justify-content-center box">
                        <h1 className="project_tagline">Can We Please  Hangout ?? </h1>
                    </div>
                    <span className="img_animat1">
                  <img alt="laginsd" src={hangoutImage} className="img-fluid" width="350px"/>
                </span>
                    <br/>
                    <br/>
                    <div className="row justify-space-between btn_layout1">
                    <Link to="/hangoutthankyou">
                    <div className='btn_yes'>Yes</div>
                    </Link>
                    <Link to="/contact">
                    <div className='hangout_no_btn'>
                    <div className='btn_no'>No</div>
                    </div>
                    </Link>
                    </div>
                </div>
                </div>
                </div>
            </section>
        </section>
    </div>);
}

export default HangOut;