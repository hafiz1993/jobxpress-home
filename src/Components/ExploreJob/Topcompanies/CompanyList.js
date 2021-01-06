import React from 'react';

const CompanyList = (props) => {
    // console.log(props);
    const {name, num_posts} = props.company;
    return (
        <div>
            <p>{name}--{num_posts}</p>
        </div>
    );
};

export default CompanyList;