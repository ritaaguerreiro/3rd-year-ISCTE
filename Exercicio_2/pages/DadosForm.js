import React from "react";
import { useLocation } from "react-router-dom";
import '../DadosForm.css';

function DadosForm() {
  const location = useLocation();

  return (
    <section className="DadosForm">
      <h1>Os dados inseridos no formulário estão aqui!</h1>
      <br/>
      <p><b>Melhor artista/banda escolhido: </b> {location.state?.melhorartista || "Sem resposta"}</p>
      <p><b>Atividade escolhida: </b> {location.state?.melhoratividade || "Sem resposta"}</p>
      <p><b>Classificação dada: </b> {location.state?.classificacao || "Sem resposta"}</p>
      <p><b>Sugestões feitas: </b> {location.state?.sugestoes || "Sem resposta"}</p>
      <br/>
      <h3>Obrigado! O teu feedback é importante para nós :)</h3>
    </section>
  );
}

export default DadosForm;
