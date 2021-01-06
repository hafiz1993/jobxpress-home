import React from 'react';

const RecentJobList = (props) => {
    const { title, address, application_deadline, job_type, salary, job_id } = props.recentJob;
    const { name, profile_picture, city} = props.recentJob.company;
    // nested

    // console.log(props)
    return (
        <div class="card mt-3">
        <div className="row ">
            <div className="col-md-4">
            <img src={profile_picture || 'https://d73v8sr570q51.cloudfront.net/images/company/company-logo.png'} class="img-fluid" style={{width:'150px', height:'150px'}} alt=""/>
            </div>
            <div className="col-md-8 text-left">
            <h5 class="card-title mt-3 text-left">  <b>{title}</b> </h5>
            <div className="d-flex flex-wrap container">
            <p className="text-left">{name}</p>
            <p className="ml-3">{job_type}</p>
            <p>{city}</p> 
            <button style={{borderRadius:'30px'}} type="button" class="btn btn-warning  ml-auto px-5">Apply</button>
            </div>

                <p> Salary: {salary || 'Negotiable'}</p>  
                

            </div>
        </div>
    
</div>
          
           

            
        
    );
};

export default RecentJobList;