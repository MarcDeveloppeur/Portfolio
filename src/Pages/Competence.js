import React from 'react';
import Navigateur from '../Components/Navigateur';
import CompetenceCard from '../Components/CompetenceCard';
import Footer from '../Components/Footer';
import './PageStyle/CompetenceCss.css';
import './PageStyle/globalCss.css';

const competences=[
  {
    imageLink:"./Assets/Images/htmlCss.jpg",
    descTitle:"html5 / css3"
  },
  {
    imageLink:"./Assets/Images/javascript.png",
    descTitle:"javascript ES6+"
  },
  {
    imageLink:"./Assets/Images/node.jpg",
    descTitle:"nodejs"
  },
  {
    imageLink:"./Assets/Images/reactjs.jpg",
    descTitle:"reactjs"
  },
  {
    imageLink:"./Assets/Images/express.png",
    descTitle:"expressjs"
  },
  {
    imageLink:"./Assets/Images/mongodb.jpg",
    descTitle:"mongodb"
  },
  {
    imageLink:"./Assets/Images/sql.png",
    descTitle:"sql"
  },
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
       <Footer/>
    </div>
  )
}

export default Competence;
