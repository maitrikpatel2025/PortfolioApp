import React, { Component } from 'react';

class Footer extends Component {
    state = {}
    render() {
        return (<div className="Footer">
            <footer class="ftco-footer ftco-section">
                <div class="container">
                    <div class="row mb-5">
                       
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2"> LET'S WORK TOGETHER</h2>

                                <p>
                                    If you are thinking about hiring me or would like to discuss a project, get in touch with me at
                                </p>
                                <div class="block-23 mb-3">
                                    <ul>
                                        <li><a href="#"><span class="icon icon-phone"></span><span class="text">+1 647 676 7730</span></a></li>
                                        <li><a href="#"><span class="icon icon-envelope"></span><span class="text"> maitrik.patel2025@gmail.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                            <div class="ftco-footer-widget mb-4 ml-md-4">
                                <h2 class="ftco-heading-2">Links</h2>
                                <ul class="list-unstyled">
                                    <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Home</a></li>
                                    <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>About</a></li>
                                    <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Services</a></li>
                                    <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Projects</a></li>
                                    <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <p>
                                Copyright ©<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script>document.write(new Date().getFullYear());</script>2021 All rights reserved | This template is made with <i class="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>);
    }
}

export default Footer;