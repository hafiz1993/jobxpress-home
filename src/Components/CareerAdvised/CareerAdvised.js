import React, { useEffect, useState } from 'react';
import AdvisedList from './AdvisedList';

const CareerAdvised = () => {
    const [topic, setTopic] = useState([]);
    useEffect( () => {
        fetch('https://jobxprss.com/api/career_advice_show/?_=1609861733591&format=json ')
        .then(res => res.json())
        .then(data => setTopic(data))
    }, [])
    return (
        <div>
            <div class="mb-3 mt-5">
            <h2 >Career Advice</h2>
                <span class="m-auto recent-bottom-border">&nbsp;</span>
            </div>
            <div className="container" style={{ flexWrap: "wrap", display:"flex", paddingTop:"40px"}}>
            {
                topic.map(topic =>(<AdvisedList topic={topic}></AdvisedList>))
            }
            </div>
        </div>
    );
};

export default CareerAdvised;