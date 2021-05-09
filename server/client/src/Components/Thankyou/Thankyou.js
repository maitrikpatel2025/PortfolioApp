import React from 'react';
import Footer from '../Footer/Footer';

const Thankyou = () => {
    return (<div>
        <div className="container" >
            <div className="row justify-content-center box">
                <div className="header">
                    <div className="text_layout1">
                        <h1 className="tagline_layout1">Thank <span className="tagline2_layout1"> you</span></h1>
                    </div>
                    <p className="intro_layout1">Thank you for submitting your application. You will recived an email soon.</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>);
}

export default Thankyou;