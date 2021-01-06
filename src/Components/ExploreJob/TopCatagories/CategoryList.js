import React from 'react';
import './CatagoryList.css';

const CategoryList = (props) => {

    
    const {name, num_posts} = props.catagory;
    // console.log(props);
    return (
        <div >
            <p>{name}--{num_posts}</p>
        </div>
    );
};

export default CategoryList;