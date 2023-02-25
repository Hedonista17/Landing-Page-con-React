import React from "react";

const Card = (variable) => {

    return (
   <div  className="carta ">
    <div className="card mt-5 mx-5" style={{width: "20rem"}}>
  <img className="card-img-top" src={variable.imagen}></img>
  <div className="card-body">
    <h5 className="card-title">{variable.titulo}</h5>
    <p className="card-text">{variable.texto}</p>
    <a href={variable.link} target="_blank" className="btn btn-dark"> Mas informacion 🔗 </a>
  </div>
</div>

   </div>

    );

};


export default Card;