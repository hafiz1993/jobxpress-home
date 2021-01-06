import React from 'react';

const JobsList = (props) => {
    const { title, address, application_deadline, job_type, salary, job_id } = props.featured;
    const { name, profile_picture, city } = props.featured.company;

    console.log(props);

    return (
            <div className="col-4 text-left">
        <div class="card mb-3 mt-3 " >
  <div class="row no-gutters">
    <div class="col-md-3">
      <img src={profile_picture || 'https://d73v8sr570q51.cloudfront.net/images/company/company-logo.png'} class="card-img" alt="..."/>
    </div>
    <div class="col-md-9">
      <div class="card-body">
        <h6 class="card-title">{name}</h6>
        <p className="card-text">{city || 'Bangladesh'} </p>
        <button type="button" class="btn btn-warning">Jobs</button>
        
      </div>
    </div>
  </div>
</div>
</div>

        
       
      
       
    );
};

export default JobsList;