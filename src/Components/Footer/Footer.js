import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{backgroundColor:'black'}} >
        <div class="footer-top border-bottom section-padding-top padding-bottom-40">
        <div class="container" >
            <div class="row">
                <div class="col-md-6">
                    <div class="footer-logo">
                        <a href="">
                            <img style={{width:'200px'}} src={'https://d73v8sr570q51.cloudfront.net/images/logo.png'} class="logo img-fluid" alt=""/>
                        </a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="footer-social">
                        <a class="facebook-url" style={{display: 'none'}} href="#" target="_blank"><i class="fab fa-3x fa-facebook-square text-yellow"></i></a>&nbsp;
                        <a class="linkedin-url" style={{display: 'none'}} href="#" target="_blank"><i class="fab fa-3x fa-linkedin text-yellow"></i></a>&nbsp;
                        <a class="twitter-url" style={{display: 'none'}} href="#" target="_blank"><i class="fab fa-3x fa-twitter-square text-yellow"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="border-yellow w-auto" />
    <div class="footer-widget-wrapper padding-top-80">
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div class="footer-widget footer-shortcut-link">
                        <h4 class="text-yellow">Information</h4>
                        <div class="widget-inner">
                            <ul>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Refund Policy</a></li>
                                <li><a href="">Terms of Use</a></li>
                                <li><a href="">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="footer-widget footer-shortcut-link">
                        <h4 class="text-yellow">Company</h4>
                        <div class="widget-inner">
                            <ul>
                                <li id="request_for_access"><a href="/request-for-access/">Request For Access</a></li>
                                <li id="company_sign"><a href="/company/sign-in/">Company Sign In</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="footer-widget footer-shortcut-link">
                        <h4 class="text-yellow">Job Seekers</h4>
                        <div class="widget-inner">
                            <ul>
                                <li><a href="/professional/signup/">Create Account</a></li>
                                <li><a href="/career-advice/">Career Advice</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="footer-widget footer-shortcut-link">
                        <div class="widget-inner" style={{pointerEvents: 'none'}}>
                            <h4 class="text-yellow">Address</h4>
                            <address>
                                House 76 (Level 4)<br />
                                Road 4, Block B<br />
                                Niketan, Gulshan 1<br />
                                Dhaka 1212, Bangladesh<br />
                            </address>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="footer-widget footer-newsletter">
                        <h4 class="text-yellow">Job Alert</h4>
                        <p id="alert-msg">Get email updates about our latest news.</p>
                        <h4>Subscribe Now...</h4>
                        <form action="" id="job-alert" class="newsletter-form form-inline" method="POST" data-callback="" autocomplete="off">
                            <div class="input-group job-alert-input mb-3">
                                <input type="text" name="email" id="email" regex='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$' class="form-control" required data-msg-required="Email is required" data-msg-regex="Please enter a valid email" placeholder="demo@email.com"/>
                                <div class="input-group-append">
                                    <button class="btn bg-yellow" type="submit"><i class="fas fa-paper-plane fa-2x text-dark"></i></button>
                                </div>
                            </div>
                            <p class="newsletter-error">0 - Please enter a value</p>
                            <p class="newsletter-success">Thank you for subscribing!</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="container">
        <hr class="border-yellow w-auto" style={{marginRight: '70px'}}/>
        <div class="row">
            <div class="col-md-1" style={{paddingTop: '8px'}}>
                <p class="m-0">Pay With</p>
            </div>
            <div class="col-md-8 text-center" style={{paddingTop:'3px'}}>
                <img src={'https://d73v8sr570q51.cloudfront.net/images/yellow/pay-with-logo.png'} style={{maxWidth:' 100%', textAlign:'center'}}/>
            </div>
            <div class="col-md-3">
                <div class="row">
                    <p style={{padding: '8px 10px 0px 10px'}}>Verified by</p>
                    <img src={'https://d73v8sr570q51.cloudfront.net/images/yellow/ssl-commerse.png'} style={{maxWidth: '40%'}} />
                </div>
            </div>
        </div>
        <hr class="border-yellow w-auto" style={{marginRight: '70px'}}/>
    </div>
    <div class="footer-bottom-area">
        <div class="container">
            <div class="row">
                <div class="col-md">
                    <div class="footer-bottom border-top">
                        <div class="row">
                            <div class="col-md-6">
                                <p class="powered-by"><span>Powered By </span> <a target="_blank" href="http://www.ishraak.com">
                                    <img src={'https://d73v8sr570q51.cloudfront.net/images/ishraak-solutions-logo.png'} alt="ISHRAAK" width="80px"/>
                                </a>
                                </p>
                            </div>
                            <div class="col-md-6">
                                <div class="back-to-top">
                                    <a href="#">Back to top<i class="fas fa-angle-up"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<p class="copyright-text">Copyright © 2020 JobXprss, All Right Reserved <span class="version">v1.1.140</span></p>
</div>

    );
};

export default Footer;