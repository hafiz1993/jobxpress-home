import React from 'react';
import TopCatagories from './TopCatagories/TopCatagories';
import Topcompanies from './Topcompanies/Topcompanies';
import TopSkills from './TopSkills/TopSkills';
import './ExploreJob.css';

const ExploreJob = () => {
    return (
        <div class="section-padding-top bg-yellow explore-job-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="section-header">
                        <h2>Explore The Right Job</h2>
                        <p>Go for the top ones</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="explore-job">
                       <div class="explore-job-header">
                           <div className="explore-job-header">
                               <h5 style={{paddingTop:'20px'}} class="title">
                                   Top Catagories
                               </h5>
                             
                               <TopCatagories/>
                               
                           </div>
                       </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="explore-job">
                       <div class="explore-job-header">
                           <div className="explore-job-header">
                               <h5 style={{paddingTop:'20px'}} class="title">
                               TOP SKILLS

                               </h5>
                             
                               <TopSkills/>
                               
                           </div>
                       </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="explore-job">
                       <div class="explore-job-header">
                           <div className="explore-job-header">
                               <h5 style={{paddingTop:'20px'}} class="title">
                               TOP COMPANIES

                               </h5>
                             
                               <Topcompanies/>
                               
                           </div>
                       </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
          
        </div>
    );
};

export default ExploreJob;