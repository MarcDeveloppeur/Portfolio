import React from 'react';
import Navigateur from '../Components/Navigateur';
import PortfolioBox from '../Components/PortfolioBox';
import Footer from '../Components/Footer';
import './PageStyle/globalCss.css';
import './PageStyle/PorfolioCss.css';

const Portfolio=()=>{
  return(
    <div className="PageContainer">
        <Navigateur/>
        <div className="PortfolioContainer">
           <div className="PortfolioTitle">
               Mes réalisations
           </div>
           <div className="PortfolioContent">
              <PortfolioBox BGLink="./Assets/Images/htmlCss.jpg"/>
           </div>
        </div>
        <Footer/>

    </div>
  )
}

export default Portfolio;
