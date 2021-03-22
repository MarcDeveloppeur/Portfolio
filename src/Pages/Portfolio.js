import React from 'react';
import Navigateur from '../Components/Navigateur';
import PortfolioBox from '../Components/PortfolioBox';
import Footer from '../Components/Footer';
import './PageStyle/globalCss.css';
import './PageStyle/PorfolioCss.css';

const projets=[
  {
    title:"Mon premier portfolio",
    BGLink:"./Assets/Images/porfolio/cv.jpg",
    github:"",
    tech:["Html","Css","Javascript","ReactJS","EmailJS"]
  },
  {
    title:"Mon second portfolio",
    BGLink:"./Assets/Images/porfolio/cv1.jpg",
    github:"https://github.com/MarcDeveloppeur/MonCV.git",
    tech:["Html","Css","Javascript","ReactJS"]
  },
  {
    title:"Gestionnaire de stock",
    BGLink:"./Assets/Images/porfolio/gestionaire.jpg",
    github:"https://github.com/MarcDeveloppeur/Gestion-de-stock.git",
    tech:["Html","Css","Javascript","ReactJS","NodeJS","ExpressJS","MongoDB"]
  }
]

const Portfolio=()=>{
  return(
    <div className="PageContainer">
        <Navigateur/>
        <div className="PortfolioContainer">
           <div className="PortfolioTitle">
               Mes réalisations
           </div>
           <div className="PortfolioContent">
           {
             projets.map((projet,i)=><PortfolioBox key={i} title={projet.title} BGLink={projet.BGLink} github={projet.github} tech={projet.tech}/>)
           }

           </div>
        </div>
        <Footer/>

    </div>
  )
}

export default Portfolio;
