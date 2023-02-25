import React from "react";
import NavBar from "./Navbar.jsx";
import JumBotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Fotter from "./footer.jsx";

//include images into your bundle
 let cartas = [{
  imagen: "https://i2.wp.com/cinicosdesinope.com/wp-content/uploads/2015/09/earl-sneed-sinclair-papa-dinosaurios-serie.gif?resize=600%2C497",
  titulo:"¿Sabías que?",
  texto:"El traje de dinosaurio completo está formado por dos partes, un traje de cuerpo entero y la cabeza animatrónica por separado. La cabeza tiene motores que mueven la mandíbula, los labios, los ojos y las cejas. Para tomas de diálogo en primer plano y para la sincronización labial, las cabezas fueron separadas y operadas por un equipo de titiriteros.",
  link:"https://www.youtube.com/watch?v=_jzqsWM3zCQ&t=8s",
 },
   {
	imagen:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F3D0C75D0523218C9441A8E76ABC5FC0DDBE9F175533177ADABAB0327271E22E/scale?width=506&aspectRatio=2.00&format=jpeg",
	titulo:"Más que una serie",
	texto:"En 1993, se llegó a negociar un videojuego de 'Dinosaurios' para Super Nintendo. En aquella época se desarrollaron varios juegos basados en series, pero no tuvieron buena acogida al no tener nada que ver con la serie y solo usaban el nombre durante la moda. Cuando se estaba negociando un acuerdo para 'Dinosaurios', la moda ya había pasado.",
	link:"https://www.youtube.com/watch?v=0kmqcc70QA0",
   },
   {
	imagen:"https://m.media-amazon.com/images/I/71LFrI+d-BL._SL1400_.jpg",
	titulo:"Otras curiosidades",
	texto:"En varios episodios, se puede ver en la televisión a una banda de rock llamada Lizzard Skizzard. El nombre es una evidente referencia a la clásica banda de rock Lynyrd Skynyrd, pero la banda real tiene mucho más en común con varias de las bandas de los 80-90.",
	link:"https://www.youtube.com/watch?v=V6kf0vwFj5U",
   }]
   

//create your first component
const Home = () => {
	return (
		<div >
			 <NavBar/>
		 <div className="container">
		     <JumBotron/>
			
			<div className = "card-group">
			 
			 { cartas.map ((propiedad)=> {
				return <Card  imagen = {propiedad.imagen} titulo ={propiedad.titulo} texto = {propiedad.texto} link ={propiedad.link} />
			 })}

			</div>
			
		</div>
		
          <Fotter/>
		

			
			
		</div>
	)
		
}

export default Home;
