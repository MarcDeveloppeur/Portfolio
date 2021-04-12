import React from 'react';
import './ComponentsStyle/serviceBoxCss.css';

const ServiceBox=(props)=>{
  return(
    <div className="ServiceBoxContainer">
        <img className="serviceImage" alt="image du service" src={props.serviceImage} />
        <div className="serviceDescriptionBlock">
           <h1 className="serviceTitle">
              {props.serviceTitle}
           </h1>
           <p className="serviceDescript">
              {props.serviceDescription}
           </p>
        </div>
    </div>
  )
}

export default ServiceBox;
