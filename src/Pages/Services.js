import React from 'react';
import Navigateur from '../Components/Navigateur';
import CompetenceCard from '../Components/CompetenceCard';
import Footer from '../Components/Footer';
import './PageStyle/CompetenceCss.css';
import './PageStyle/globalCss.css';

const services=[
  {
    serviceImage:'',
    serviceTitle:'',
    serviceDescr:''
  }
]

const Services=()=>{
  return(
    <div className="PageContainer">
       <Navigateur/>
       <div className="CompetenceContent">
            <div className="competenceTitle">
               Mes services
            </div>
            <div className="serviceContent">

            </div>
       </div>
       <Footer/>
    </div>
  )
}

export default Services;
