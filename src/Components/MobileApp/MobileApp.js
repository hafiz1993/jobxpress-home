/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import mobile from '../../images/jobxprss_app.png';
import './MobileApp.css';

const MobileApp = () => {
    return (
        <div  style={{backgroundColor:'yellow', height:'400px'}}>
            <div className="container" >
                <div className="row d-flex align-items-center">
                <div className="col-md-6">
                <h3 style={{paddingBottom:'40px'}} >Get JobXprss App</h3>
                <span class="bottom-border-app-link"></span>
                <p class="text-center">To get the best JobXprss experience, use the mobile app.<br/>Available for both Android & iOS.</p>
                <div class="app-download-button">
                        <a href="/android" target="_blank" class="android-app"><img style={{width:'150px'}} src="https://d73v8sr570q51.cloudfront.net/images/badge-android.png" /></a>&nbsp;&nbsp;
                        <a href="/ios" target="_blank" class="apple-app"><img style={{width:'150px'}} src="https://d73v8sr570q51.cloudfront.net/images/badge-iphone.png" /></a>
                    </div>

                    <div className="text-center">
                        <p class="text-center" style={{paddingTop:'10px'}}>
                        To get the app download link to your mobile:
                        <br/>
                        Enter your mobile number (example: 01609500001)
                        </p>
                        <div>
                        <form action="" id="send-sms" class="send-sms-form form-inline" method="POST" data-callback="" autocomplete="off">
                        <div  class="d-flex align-items-center" style={{paddingLeft:'70px'}}>
                            <input  type="text" name="mobile" id="mobile" regex="^01[13-9]\d{8}$" class="form-control" required data-msg-required="Mobile number is required" data-msg-regex="Please enter a valid number" placeholder="Enter Mobile Number"/>&nbsp;&nbsp;&nbsp;&nbsp;
                            <div class="input-group-append">
                                <button style={{backgroundColor:'black', width:'150px', color:'white'}} class="btn" type="submit">Send Link</button>
                            </div>
                        </div>
                    </form>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6">
                    <img style={{height:'410px'}}  src= {mobile} alt=""/>
              
                </div>
                </div>
            </div>
        </div>

    );
};

export default MobileApp;