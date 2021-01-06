import React, { useEffect, useState } from 'react';
import RecentJobList from './RecentJobList';
import './RecentJobs.css';

const RecentJobs = () => {

    const [recentJob, setRecentJob] = useState([]);
    useEffect( () => {
        fetch('https://jobxprss.com/api/job/recent/?_=1609451845521&format=json')
        .then(res => res.json())
        .then(data => setRecentJob(data))
    }, [])

    return (
        <div class="recent-job mt-4">
            <div class="mt-4">
            <div class="section-header section-header-2">
            <h2 class="text-center mb-5">Recent Jobs</h2>
                <span class="m-auto recent-bottom-border">&nbsp;</span>
            </div>
            <div class="container" style={{marginBottom:'20px'}}>
                <div class="mt-5" >
                {
                  recentJob.map(recentJob =>(<RecentJobList recentJob={recentJob}></RecentJobList>))
              }
                </div>
            
            </div>
            
                
            </div>
        </div>
    );
};

export default RecentJobs;