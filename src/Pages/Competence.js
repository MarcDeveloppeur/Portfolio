import React from 'react';
import Navigateur from '../Components/Navigateur';
import CompetenceCard from '../Components/CompetenceCard';
import './PageStyle/CompetenceCss.css';

const competences=[
  {
    imageLink:"./Assets/Images/htmlCss.jpg",
    descTitle:"html/css"
  },
  {
    imageLink:"./Assets/Images/SQL.png",
    descTitle:"SQL"
  },
  {
    imageLink:"./Assets/Images/htmlCss.jpg",
    descTitle:"html/css"
  },
  {
    imageLink:"./Assets/Images/htmlCss.jpg",
    descTitle:"html/css"
  }
]

const Competence=()=>{
  return(
    <div className="PageContainer">
       <Navigateur/>
       <div className="CompetenceContent">
            <div className="competenceTitle">
               Mes compétences
            </div>
            <div className="CompetenceBlock">
               {
                 competences.map((competence,id)=><CompetenceCard key={id} descTitle={competence.descTitle} imageLink={competence.imageLink}/>)
               }
            </div>
       </div>
    </div>
  )
}

export default Competence;
