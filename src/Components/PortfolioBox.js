import React from 'react';
import './ComponentsStyle/PortfolioBoxCss.css';

const PortfolioBox=(props)=>{
  return(
    <div className="PortfolioBoxContainer">
       <div className="PortfolioImage" style={{backgroundImage:"url("+props.BGLink+")",backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'}}>
           <div className="hoverCard">
               <a href="" className="linkName">Voir sur GITHUB</a>
           </div>
       </div>
       <p className="PortfolioBoxTitle">
           Portfolio
       </p>

       <a href="" className="MobileLinkName">Voir sur GITHUB</a>
    </div>
  )
}

export default PortfolioBox;
