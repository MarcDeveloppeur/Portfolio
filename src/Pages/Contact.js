import React,{useState} from 'react';
import Navigateur from '../Components/Navigateur';
import Footer from '../Components/Footer';
import './PageStyle/contactCss.css';
import './PageStyle/globalCss.css';

const Contact=()=>{

   const [nom,setNom]=useState('');
   const [email,setEmail]=useState('');
   const [message,setMessage]=useState('');
   const [information,setInformation]=useState('');

  const InformationText=(type)=>{
    if(type==='ok'){
      const messageBox=document.querySelector('.messageBox');
          document.querySelector('#nom').classList.remove('error');
          document.querySelector('#email').classList.remove('error');
          document.querySelector('#message').classList.remove('error');

       messageBox.style.display="block";
       messageBox.style.backgroundColor="rgb(15,15,255,0.5)";

       setInformation('Merci d\'avoir envoyé ce message je vous répondrai le plus tôt possible');
       setTimeout(()=>{

         messageBox.style.display="none";
         setInformation('');

       },20000)
    }else if( type==='nameError'){
      const messageBox=document.querySelector('.messageBox');

       messageBox.style.display="block";
       messageBox.style.backgroundColor="rgb(255,128,128,0.7)";

       setInformation("Le nom ne doit pas être un nombre");
       setTimeout(()=>{
         messageBox.style.display="none";
         setInformation('');
       },20000)
    }else{
      const messageBox=document.querySelector('.messageBox');

       messageBox.style.display="block";
       messageBox.style.backgroundColor="rgb(255,128,128)";

       setInformation("Veillez remplir tous les champs obligatoires (*)");
       setTimeout(()=>{
         messageBox.style.display="none";
         setInformation('');
       },20000)
    }
  }

    const errorhandle=()=>{
      InformationText('bad');
      const Nom=document.querySelector('#nom');
      const Email=document.querySelector('#email');
      const Message=document.querySelector('#message');

      if(!nom){
        Nom.classList.add('error');
      }
      if(!email){
        Email.classList.add('error');
      }
      if(!message){
        Message.classList.add('error');
      }
    }

  //Envoyer le message
  const envoyer=(e)=>{
    e.preventDefault();

    //controlle de saisie
    if(nom && email && message){
      if(isNaN(nom)){
        console.log(nom+" "+email+" "+message);
        InformationText('ok');
      }else{
        InformationText('nameError');
      }
    }else{
      errorhandle();
    }

  }

  return(
    <div className="PageContainer">
       <Navigateur/>
       <div className="contactPageContent">
          <h1 className="socialTitle">
              Contacter moi
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
              Envoyer moi un message
          </h1>
          <div className="contactForm">
            <form onSubmit={envoyer}>
               <input type="text" id="nom"className="inputText" placeholder="Nom *" value={nom} onChange={(e)=>setNom(e.target.value)}/>
               <input type="email" id="email"className="inputText" placeholder="Email *" value={email} onChange={(e)=>setEmail(e.target.value)}/>
               <textarea id="message" className="message" placeholder="Message *" value={message} onChange={(e)=>setMessage(e.target.value)}>
               </textarea>
               <input type="submit" value="Envoyer le message" className="btnEnvoyer"/>
            </form>
            <div className="messageBox">
               {information}
            </div>
          </div>
       </div>
       <Footer/>
    </div>
  )
}

export default Contact;
