import React, { useEffect, useState } from 'react';
import CategoryList from './CategoryList';



const TopCatagories = () => {
    
    const [catagory, setCatagory] = useState([]);
    useEffect( () => {
        fetch('https://jobxprss.com/api/job/top-categories/?format=json')
        .then(res => res.json())
        .then(data => setCatagory(data))
    }, [])
    return (
        <div class="info text-left">
            {
                catagory.map(catagory =>(<CategoryList catagory={catagory}/>))
            }
        </div>
    );
};

export default TopCatagories;