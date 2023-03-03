import React from "react";
import "./css/Home.css"
import NavBar from "./NavBar";
import js from "../imagenes/iconos/js.png"
import react from "../imagenes/iconos/react.png"
import redux from "../imagenes/iconos/redux.png"
import node from "../imagenes/iconos/node.png"
import postgre from "../imagenes/iconos/postgre.png"
import css from "../imagenes/iconos/css.png"
import html from "../imagenes/iconos/html.png"
import sequelize from "../imagenes/iconos/sequelize.png"
import titulo from "../imagenes/tituloSanti.png"

function Tools(){
    return(
    <div className="App">
     <div>

     <NavBar />
    <div>

        <div>
            <h1 className="frase"> Herramientas de desarrollo Full Stack</h1>
        </div>
    <div className="caja-iconos">

    <div className="cont-iconos">
     <img className="iconos" src={js} title="JavaScript" alt="js"/>
    </div >
    <div className="cont-iconos">
     <img className="iconos" src={react} title="React" alt="React"/>
    </div>
    <div className="cont-iconos">
     <img className="iconos" src={redux} title="Redux" alt="Redux"/>
    </div>
    <div className="cont-iconos">
     <img className="iconos" src={node} title="Node JS" alt="Node JS"/>
    </div>
    <div className="cont-iconos">
     <img className="iconos" src={postgre} title="PostgreSQL" alt="postgreSQL"/>
    </div>
    <div className="cont-iconos">
     <img className="iconos" src={css} title="CSS" alt="CSS"/>
    </div>
    <div className="cont-iconos"> 
     <img className="iconos" src={html} title="HTML" alt="HTML"/>
    </div>
    <div className="cont-iconos">
     <img className="iconos" src={sequelize} title="Sequelize" alt="Sequelize"/>
    </div>

    </div>
    </div>

    <div>
  <img className="proyectos" src={titulo} alt="titulo"/>
</div>

  <div>
    <p className="frase">
        "Aprender es un proceso constante o no es nada" Frank Tyger
    </p>
  </div>
    </div>
    </div>    
    )
}

export default Tools;