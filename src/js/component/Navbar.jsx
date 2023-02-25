import React from "react";

const NavBar = () => {
	return (
	<div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-success">
  <div className="container-fluid">
    <a className="navbar-brand mx-5">ReactSaurus.3000</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav position-absolute top-0 end-50 mx-5 my-2">
        <a className="nav-link active mx-5" aria-current="page" href="http://desmotivaciones.es/" target="_blank">¿Quienes somos?</a>
        <a className="nav-link mx-5" href="https://github.com/Hedonista17" target="_blank">Contacto</a>
        <a className="nav-link mx-5" href="https://sepe.es/HomeSepe" target="_blank">Servicios</a>
      </div>
    </div>
  </div>
</nav>


 
     </div>
	
	);
};

export default NavBar;