import React from 'react';
import {Link} from 'react-router-dom';
import './ComponentsStyle/NavigateurCss.css';

const Navigateur=()=>{
  return(
    <div className="NavContainer">
       <Link className="NavItem" to="/"><i className="fa fa-home icones"></i><span className="NavText">Acceuil</span></Link>
       <Link className="NavItem" to="/Competence"><i className="fa fa-cogs icones"></i><span className="NavText">Compétence</span></Link>
       <img className="profil_image" src="./Assets/Images/Ma photo.jpg" alt="Image de profile"/>
       <Link className="NavItem" to="/portfolio"><i className="fa fa-briefcase icones"></i><span className="NavText">Portfolio</span></Link>
       <Link className="NavItem" to="/Contact"><i className="fa fa-address-book icones"></i><span className="NavText">Contact</span></Link>
    </div>
  )
}

export default Navigateur;
