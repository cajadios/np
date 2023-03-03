import React from "react";
import { GoFile,GoHome,GoCommentDiscussion,GoTools } from 'react-icons/go';
import "./css/NavBar.css"
import { Link } from "react-router-dom";


function NavBar(){
    return(
        <div className="nav">
           
            <Link  to="/np/">
            <GoHome className="nav-icon" title="Home" />{/*boton home */}
            </Link>

            <Link className="nav-icon"  to="/herramientas">
            <GoTools title="Herramientas"/>{/* boton lo que se, con titulito de Henry*/}
            </Link>
              
                <Link className="nav-icon"  to="/proyectos">
            <GoFile title="proyectos"/>
           </Link>
           
                <Link className="nav-icon"  to="/contacto">
            <GoCommentDiscussion title="Contactar"/>{/*boton contacto */}
            </Link> 
           
            
        </div>
    )
}

export default NavBar;