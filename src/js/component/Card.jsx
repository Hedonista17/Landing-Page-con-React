import React from "react";

const Card = (variable) => {

    return (
   <div>
    <div class="card mt-5 mx-3 " style={{width: "20rem"}}>
  <img src="{variable.imagen}" class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">{variable.titulo}</h5>
    <p class="card-text">{variable.texto}</p>
    <a href="https://www.youtube.com/watch?v=_jzqsWM3zCQ" target="_blank" class="btn btn-dark">{variable.link}</a>
  </div>
</div>

   </div>

    );

};


export default Card;