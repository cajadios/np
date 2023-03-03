import React from "react";
import foto from "../imagenes/foto.png"
import NavBar from "./NavBar";
import "./css/Home.css"

function Home(){
    return(
        <div className="App">
        <div >
        <NavBar />
       <div>
        <h1 className='titulo1'>Hola, soy :</h1>
        <h1 className='titulo2'>Santiago Venturini</h1>
       </div>
       <div>
        <div  >
          <img className='foto' alt="fotoCV" src={foto}/> 
        </div>
       </div>
       <div className="titulo3">
        <p >Sobre Mi:</p>
        <p >Desarrollador Full Stack que siempre sigue aprendiendo , busco mejorar mis conocimientos a través del trabajo y en mi tiempo libre trato de probar nuevas tecnologías en proyectos personales.</p>
       </div>
        </div>
      </div>
    )
};

export default Home;