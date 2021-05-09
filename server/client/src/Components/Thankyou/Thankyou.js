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
                    <p className="intro_layout1">Thank you for submitting your application. We have begun our review. Please look for an email in the next 72 hours.
You should recived a conformation email soon.</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>);
}

export default Thankyou;