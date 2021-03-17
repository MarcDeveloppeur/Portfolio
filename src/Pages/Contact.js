import React from 'react';
import Navigateur from '../Components/Navigateur';
import Footer from '../Components/Footer';
import './PageStyle/contactCss.css';
import './PageStyle/globalCss.css';

const Contact=()=>{
  return(
    <div className="PageContainer">
       <Navigateur/>
       <div className="contactPageContent">
          <h1 className="socialTitle">
              Contacte moi
          </h1>
          <div className="socialContainer">
              <div className="contactSocialLink">
                  <i className="fa fa-phone fa-4x socialIcones contactIcones1"></i>
                  <p className="contact">034xxxxxxx</p>
              </div>
              <div className="contactSocialLink">
                 <i className="fa fa-envelope fa-4x socialIcones contactIcones2"></i>
                 <p className="contact">034xxxxxxx</p>
              </div>
              <div className="contactSocialLink">
                  <i className="fab fa-github fa-4x socialIcones contactIcones3"></i>
                  <p className="contact">034xxxxxxx</p>
              </div>
          </div>
          <h1 className="socialTitle">
              ou envoye moi un message
          </h1>
          <div className="contactForm">
            <form>
               <input type="text" className="inputText" placeholder="Nom *"/>
               <input type="email" className="inputText" placeholder="Email *"/>
               <textarea className="message" placeholder="Message *">
               </textarea>
               <input type="submit" value="Envoyer le message" className="btnEnvoyer"/>
            </form>
          </div>
       </div>
       <Footer/>
    </div>
  )
}

export default Contact;
