import React, { useEffect, useState } from 'react';
import CompanyList from './CompanyList';

const Topcompanies = () => {
    const [company, setCompany] = useState([]);
    useEffect( () => {
        fetch('https://jobxprss.com/api/job/top-companies/?format=json')
        .then(res => res.json())
        .then(data => setCompany(data))
    }, [])
    return (
        <div class="info text-left">
            {
            company.map(company =>(<CompanyList company={company}></CompanyList>))
            }
         
        </div>
    );
};

export default Topcompanies;