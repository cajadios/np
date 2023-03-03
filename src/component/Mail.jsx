import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from './NavBar';
import "./css/Home.css"
import { Link } from 'react-router-dom';
import linkedin from "../imagenes/linkedin.png"
import github from "../imagenes/github.png"

function Mail(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qs9j8zd', 'template_qwud7m9', form.current, 'ScUoGd5TPJdMFhrTy')
      .then((result) => {
          console.log(result.text);
          alert("mensaje enviado")
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
        <div className='App'>
            <div>
                <NavBar />

    <div >
    <form className='form' ref={form} onSubmit={sendEmail}>
      <label>Nombre</label>
      <input className='input' type="text" name="user_name" />
      <label>Email</label>
      <input className='input' type="email" name="user_email" />
      <label>Mensaje</label>
      <textarea className='caja-texto' name="message" />
      <input className='boton' type="submit" value="Enviar" />
    </form>

    <div>
     <div>
      <Link to="https://www.linkedin.com/in/santiago-venturini-215a99255/">
     <img className='iconos' src={linkedin} alt="linkedin" title='Linkedin' />
      </Link>
      <Link to="https://github.com/cajadios">
     <img className='iconos' src={github} alt="github" title='github' />
      </Link>
     </div>
     </div>
     
    </div>
            
            </div>
      

        </div>
    )
};

export default Mail;