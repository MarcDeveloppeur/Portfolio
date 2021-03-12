import React from 'react';
import Navigateur from '../Components/Navigateur';
import './PageStyle/AcceuilCss.css';

const Acceuil=()=>{
  return(
    <div className="PageContainer">
        <Navigateur/>
        <div className="PageContent">
          <div className="block1">
             <h2 className="name">
                HUBERT RAMADISON Marc
             </h2>
             <h1 className="job">
                DEVELOPPEUR WEB FRONTEND JUNIOR
             </h1>
             <h3 className="title">
                MON PORTFOLIO
             </h3>
             <div className="LinkBlock">
               <i className="fab fa-github fa-4x socialLink"></i>
               <i className="fab fa-facebook fa-4x socialLink"></i>
             </div>
          </div>
          <div className="block2">
             <div className="descriptionHeader">
                 <div className="profil-block">
                    <img id="photo-profil" src="./Assets/Images/Ma photo.jpg" alt="Ma photo de profil"/>
                 </div>
                 <div className="descriptionName">
                     HUBERT RAMADISON Marc
                 </div>
             </div>
             <div className="descriptionText">
                     Il est un développeur web frontend ReactJS, capable
                 de développer des applications web modernes et résponsives.
                 Il est non seulement un développeur frontend mais aussi peut
                  développer des API avec NodeJS, Express, MongoDB ou MySQL.
             </div>
             <a href="" id="CvLink" target="_blank" rel="noopener noreferrer">Télécherger le CV en version PDF</a>
          </div>
        </div>
        <div className="MobileLinkBlock">
          <i className="fab fa-github fa-4x socialLink"></i>
          <i className="fab fa-facebook fa-4x socialLink"></i>
        </div>
    </div>
  )
}

export default Acceuil;
