import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb} from "@fortawesome/free-solid-svg-icons";
import { faPhoneFlip} from "@fortawesome/free-solid-svg-icons";
import { faHandshakeAngle} from "@fortawesome/free-solid-svg-icons";



const NavBar = () => {
	return (
	<div>
        <nav className="navbar navbar-expand-lg bg-opacity-75 bg-success" >
  <div className="container-fluid mt-2 mb-1">
    <a className="navbar-brand"> ReactSaurus 3000 </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    </button>
    <div className="collapse navbar-collapse position-absolute top-25 end-0 " id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <a className="nav-link active mx-5 " aria-current="page" href="http://desmotivaciones.es/" target="_blank">¿Quienes somos? <FontAwesomeIcon icon={faLightbulb} className="mx-2"/></a>
        <a className="nav-link mx-5 " href="https://github.com/Hedonista17" target="_blank">Contacto <FontAwesomeIcon icon={faPhoneFlip} className="mx-2"/></a>
        <a className="nav-link mx-5" href="https://sepe.es/HomeSepe" target="_blank">Servicios <FontAwesomeIcon icon={ faHandshakeAngle} className="mx-2"/></a>
      </div>
    </div>
  </div>
</nav>


 
     </div>
	
	);
};

export default NavBar;