import React from 'react';

const SkillList = (props) => {
    const {name, skills_count} = props.skill;
    // console.log(props);
    return (
        <div>
            <p>{name}  :  {skills_count}</p>
        </div>
    );
};

export default SkillList;