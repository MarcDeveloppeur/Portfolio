import React from 'react';
import {Link} from 'react-router-dom';
import './ComponentsStyle/NavigateurCss.css';

const Navigateur=()=>{
  return(
    <div className="NavContainer">
       <div className="LinkContainer">
          <Link className="NavItem" to="/"><i className="fa fa-home icones"></i><span className="NavText">Acceuil</span></Link>
          <Link className="NavItem" to="/Competence"><i className="fa fa-cogs icones"></i><span className="NavText">Compétences</span></Link>
          <Link className="NavItem" to="/portfolio"><i className="fa fa-briefcase icones"></i><span className="NavText">Réalisations</span></Link>
          <Link className="NavItem" to="/Contact"><i className="fa fa-address-book icones"></i><span className="NavText">Contact</span></Link>
       </div>
    </div>
  )
}

export default Navigateur;
