import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../DadosForm.css';
import fairy from "../fada1.png";

function DadosForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const GoBack = () => {navigate('/');} // Navegar de volta para a página inicial

  return (
    <section className="Info">
      <h1>Os dados inseridos no formulário estão aqui!</h1>
      <img src={fairy} alt="Fada" class="img" />
      <br/>
      <ul class="dados">
      <li><b>Melhor artista/banda escolhido: </b> {location.state?.melhorartista || "Sem resposta"}</li>
      <li><b>Atividade escolhida: </b> {location.state?.melhoratividade || "Sem resposta"}</li>
      <li><b>Classificação dada: </b> {location.state?.classificacao || "Sem resposta"}</li>
      <li><b>Sugestões feitas: </b> {location.state?.sugestoes || "Sem resposta"}</li>
      </ul><br/>
      <h3>Obrigado! O teu feedback é importante para nós :)</h3>
      <br/><br/>
       <button onClick={GoBack} className='botao'>Volta à página anterior</button>
    </section>
  );
}

export default DadosForm;