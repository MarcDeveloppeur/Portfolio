import React from 'react';
import Navigateur from '../Components/Navigateur';
import './PageStyle/AcceuilCss.css';

const Acceuil=()=>{
  return(
    <div className="PageContainer">
        <Navigateur/>
        <div className="PageContent">
           <div className="descriptionContainer">
               <h1 className="questionTitle">
                  Qui suis-je?
               </h1>
               <p className="descriptionText">
                  Je suis un développeur web autodidacte, autonome et passioné par les nouvelles technologies.J'ai un diplôme de licence en génie logiciel et base de données
                  du CENTRE NATIONAL DE TELE-ENSEIGNEMENT DE MADAGASCAR.
               </p>
           </div>
           <div className="descriptionContainer">
              <h1 className="questionTitle">
                 Quel est mon expériance professionnelle?
              </h1>
              <p className="descriptionText">
                 J'ai éffectué un stage de 3 mois au sein de la Région Vakinankaratra en tant qu'intégrateur WordPress durant le mois de Août à Novembre 2020.
                 Mais j'ai pu montré mes compétences à travers plusieurs mini-projets dont ce site portfolio que j'ai réalisé avec ReactJS.
              </p>
           </div>
        </div>
    </div>
  )
}

export default Acceuil;
