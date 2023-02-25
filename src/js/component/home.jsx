import React from "react";
import NavBar from "./Navbar.jsx";
import JumBotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Fotter from "./footer.jsx";

//include images into your bundle
 let cartas = [{
  imagen: "",
  titulo:"¿Sabías que?",
  texto:"El traje de dinosaurio completo está formado por dos partes, un traje de cuerpo entero y la cabeza animatrónica por separado. La cabeza tiene motores que mueven la mandíbula, los labios, los ojos y las cejas. Para tomas de diálogo en primer plano y para la sincronización labial, las cabezas fueron separadas y operadas por un equipo de titiriteros.",
  link:"Mas informacion >>",
 },
   {
	imagen:"cffer",
	titulo:"few",
	texto:"frfer",
	link:"rfgerw",
   },
   {
	imagen:"cffer",
	titulo:"few",
	texto:"frfer",
	link:"rfgerw",
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
