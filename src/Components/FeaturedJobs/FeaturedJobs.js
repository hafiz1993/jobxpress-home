import React, { useEffect, useState } from 'react';
import JobsList from './JobsList';



const FeaturedJobs = () => {
    const [featured, setFeatured] = useState([]);
    useEffect(() => {
        fetch('https://jobxprss.com/api/job/recent/?_=1609451845521&format=json')
            .then(res => res.json())
            .then(data => setFeatured(data))

    }, []);
    console.log(featured)
    return (
        <div >

            <div>

                <h2 class="mb-5">Featured Companies</h2>
                <span class="m-auto recent-bottom-border">&nbsp;</span>
            </div>

            <div style={{ flexWrap: "wrap", display:"flex", paddingLeft:"100px", paddingTop:"40px"}} >
               

                {
                    featured.map(featured => (<JobsList featured={featured}></JobsList>))

                }
                </div>
            </div>
     

    );
};

export default FeaturedJobs;