import React from 'react';
import CountUp from 'react-countup';


const VitalState = () => {
    

    return (
        <div   style={{backgroundColor:'#212529', color:'yellow', height:'400px'}}>
            <div className="container">
            <div className="row mt-5 pt-5 mb-5">
                <div className="col-md-3 mt-5">
                    <h1 style={{fontSize: '80px'}}>
                    
                <CountUp style={{color:'white'}}  end={21241} duration={3} />
                <br/>
               <h2>Jobs</h2>
                    
                </h1>
                </div>
                <div className="col-md-3 mt-5">
                <h1 style={{fontSize: '80px'}}>
                    
                <CountUp style={{color:'white'}}  end={57199} duration={3} />
                <br/>
               <h2>Vacancies</h2>
                    
                </h1>
                </div>
                <div className="col-md-3 mt-5">
                <h1 style={{fontSize: '80px'}}>
                    
                    <CountUp style={{color:'white'}}  end={761} duration={3} />
                    <br/>
                   <h2>Skills</h2>
                        
                    </h1>
                </div>
                <div className="col-md-3 mt-5">
                <h1 style={{fontSize: '80px'}}>
                    
                <CountUp style={{color:'white'}} end={7176} duration={3} />
                <br/>
               <h2>Companies</h2>
                    
                </h1>
                </div>
            </div>
            </div>
        </div>
        
    );
};

export default VitalState;