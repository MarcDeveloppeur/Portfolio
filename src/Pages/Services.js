import React from 'react';
import Navigateur from '../Components/Navigateur';
import ServiceBox from '../Components/ServiceBox';
import Footer from '../Components/Footer';
import './PageStyle/servicesCss.css';
import './PageStyle/globalCss.css';

const services=[
  {
    serviceImage:'./Assets/Images/services/integrateur.jpg',
    serviceTitle:'Intégrateur web',
    serviceDescr:'Connaissance parfaite de l\'HTML et du CSS'
  },
  {
    serviceImage:'./Assets/Images/services/frontend.jpg',
    serviceTitle:'Développement frontend',
    serviceDescr:'Développer une application frontend avec reactjs'
  },
  {
    serviceImage:'./Assets/Images/services/backend.jpg',
    serviceTitle:'Développement backend',
    serviceDescr:'Développer une application backend avec nodejs'
  },
  {
    serviceImage:'./Assets/Images/services/mern.jpg',
    serviceTitle:'Développement mern stack',
    serviceDescr:'Développer une application frontend avec reactjs'
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
               {
                 services.map((service,i)=><ServiceBox key={i} serviceTitle={service.serviceTitle} serviceImage={service.serviceImage} serviceDescription={service.serviceDescr}/>)
               }
            </div>
       </div>
       <Footer/>
    </div>
  )
}

export default Services;
