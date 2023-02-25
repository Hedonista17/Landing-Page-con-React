import React from "react";

const Card = (variable) => {

    return (
   <div>
    <div class="card mt-5 mx-5" style={{width: "20rem"}}>
  <img class="card-img-top" src={variable.imagen}></img>
  <div class="card-body">
    <h5 class="card-title">{variable.titulo}</h5>
    <p class="card-text">{variable.texto}</p>
    <a href={variable.link} target="_blank" class="btn btn-dark"> Mas informacion 🔗 </a>
  </div>
</div>

   </div>

    );

};


export default Card;