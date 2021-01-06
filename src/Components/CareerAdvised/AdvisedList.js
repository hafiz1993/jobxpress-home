import React from 'react';

const AdvisedList = (props) => {
    const { title, description, author, created_at, thumbnail_image } = props.topic;
    console.log(props);
    return (
        <div className="row" style={{padding:'30px'}}>
            
            <div class="card text-left" style={{width: '20rem'}}>
                <img style={{height:'200px'}} src={thumbnail_image} class="card-img-top rounded-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{author}</p>
                    <p class="card-text">{description}</p>
                 
                </div>
            </div>
            </div>
      
    );
};

export default AdvisedList;