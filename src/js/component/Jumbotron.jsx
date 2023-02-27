import React from "react";


const JumBotron = () => {   
	return (
		<div className="container container-fluid mt-5"> 
            <div id="carouselExample" className="carousel carousel-dark slide">
  <div className="carousel-inner">
  <div className="carousel-item active">
      <img src="https://peru21.pe/resizer/fevodrXiyEKeBjNRsMZlstuuvYU=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6BIRAPBYMVHBDB7K2C4FDY5BSE.jpg"className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src="https://caracoltv.brightspotcdn.com/dims4/default/9fa6e2d/2147483647/strip/true/crop/1200x675+0+13/resize/1200x675!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2Fa2%2F1a%2F95f470014cd28abfaaf22e83a48b%2Fdinosaurios-serie-disney.jpg" className="d-block w-100 "/>
    </div>
    <div className="carousel-item">
      <img src="https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/08/10/5fa4322e739b0.jpeg" className="d-block w-100"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Anterior</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Siguiente</span>
  </button>
</div>


 </div>
   
	)
		
}

export default JumBotron;
