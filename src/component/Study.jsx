import React from "react";
import "./css/Home.css"
import pdf from "../imagenes/VenturiniCV.pdf"
import NavBar from "./NavBar";
import nova from "../imagenes/nova.jpg"

function Study(){
    return(
        <div className="App">
            <div>
            <NavBar />
          <div>
          <a href={pdf} download="VenturiniCV">
           <button className="boton" title="descargar CV">Descargar CV</button> {/* boton descarga CV*/}
           </a>
          </div>
          <div>
            <p className="frase">Proyecto grupal final bootcamp Henry.</p>
            <a href="https://henrytech.vercel.app/home">
            <img className="proyectos" src={nova} title="nova tech" alt="nova"/>
            </a>
            
          </div>
        </div>
        </div>
    )
}

export default Study;