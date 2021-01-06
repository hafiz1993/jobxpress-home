import React from 'react';

const TopHeader = () => {
    return (
      
        <div >
    <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#f5d91d'}}>
  

  <div class="collapse navbar-collapse container" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link admin-email" href="mailto:info@jobxprss.com">info@jobxpress.com <span class="sr-only"></span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link phone-number" href="tel:+:01609500001">01962796374</a>
      </li>
        </ul>
        <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="https://www.facebook.com/jobxprss/">facebook <span ></span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="https://www.linkedin.com/company/jobxprss/">LinkedIn</a>
      </li>
        </ul>
    
  </div>
</nav>
        </div>
        
    );
};

export default TopHeader;