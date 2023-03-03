import React from "react";
import { GoFile,GoHome,GoCommentDiscussion,GoTools } from 'react-icons/go';
import "./css/NavBar.css"
import { Link } from "react-router-dom";


function NavBar(){
    return(
        <div className="nav">
            <Link to="/np/">
            <GoHome title="Home" />{/*boton home */}
            </Link>

            <Link to="/herramientas">
            <GoTools title="Herramientas"/>{/* boton lo que se, con titulito de Henry*/}
            </Link>
            
           <Link to="/proyectos">
            <GoFile title="proyectos"/>
           </Link>
           
            <Link to="/contacto">
            <GoCommentDiscussion title="Contactar"/>{/*boton contacto */}
            </Link>
        </div>
    )
}

export default NavBar;