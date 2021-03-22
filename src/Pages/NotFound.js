import React from 'react';
import {Link} from 'react-router-dom';
import './PageStyle/NotFoundCss.css';

const NotFound=()=>{
  return(
      <div className="conteneur">
        <p className="errorText"> Désolé! Cette page n'existe pas</p>
         <Link className="btn-Return" to="/">Page d'acceuil</Link>
      </div>
  )
}

export default NotFound;
