import React from 'react';
import './ComponentsStyle/CompetenceCardCss.css';

const CompetenceCard=(props)=>{
  return(
    <div className="CardContent">
      <img id="image" src={props.imageLink} alt="Technologie image"/>
      <div className="competenceDesc">
        <div className="descriptionTitle">
            {props.descTitle}
        </div>
      </div>
    </div>
  );
}

export default CompetenceCard;
