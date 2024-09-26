import React from "react";
import {useLocation} from "react-router-dom";

function DadosForm() {
const location = useLocation();
return (
<section className="DadosForm">
 <h3>Os dados inseridos no formulário surgirão aqui !</h3>
  <p> Melhor artista/banda escolhido {location.state.melhorart}</p>
   <p> Sugestões {location.state.sugestoes}</p>
</section>
);
}

export default DadosForm;
