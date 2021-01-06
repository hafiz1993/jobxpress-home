import React, { useEffect, useState } from 'react';

import SkillList from './SkillList';



const TopSkills = () => {
    const [skill, setSkill] = useState([]);
    useEffect( () => {
        fetch('https://jobxprss.com/api/job/top-skills/?format=json ')
        .then(res => res.json())
        .then(data => setSkill(data))
    }, [])
    return (
        <div class="info text-left">
            {
                skill.map(skill =>(<SkillList skill={skill}/>))
                
            }
            
        </div>
    );
};

export default TopSkills;