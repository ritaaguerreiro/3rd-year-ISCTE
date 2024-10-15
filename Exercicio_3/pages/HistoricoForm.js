import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../DadosForm.css';
import fairy from "../fada1.png";

function HistoricoForm() {
  const location = useLocation();
  console.log(location.state);
  const navigate = useNavigate();

  // Captura a state ou define objeto vazio
  const {
    artistas_escolhidos = [],
    sugestoes_dadas = [],
    classificacoes_dadas = [],
    atividades_escolhidas = [],
    } = location.state || {}; // Mantém os valores padrão

  // Função para garantir que valores vazios sejam exibidos como "Sem resposta"
    const formatResponses = (responseArray) => {
    // Se o array está vazio, retornar ["Sem resposta"]
    if (responseArray.length === 0) return ["Sem resposta"];
    // Mapear as respostas e substituir entradas vazias por "Sem resposta"
    return responseArray.map(response =>
        (typeof response === 'string' && response.trim() === '') ? "Sem resposta" : response || "Sem resposta"
    );
};

//Função para voltar à página anterior
const GoBack = () => {navigate('/');} // Navegar de volta para a página inicial

 const artistasFiltrados = formatResponses(artistas_escolhidos);
    const sugestoesFiltradas = formatResponses(sugestoes_dadas);
    const classificacoesFiltradas = formatResponses(classificacoes_dadas);
    const atividadesFiltradas = formatResponses(atividades_escolhidas);

const clearHistory = () => {
    // Limpar os dados do localStorage
    localStorage.removeItem("historicoData");
    // Você pode também navegar de volta ou mostrar uma mensagem
    <p> Histórico limpo com sucesso :) </p>
    navigate('/'); // Navegar de volta para a página inicial
    }

  //console.log para depuração
console.log('Dados recebidos no HistoricoForm:', location.state);
console.log('Sugestões acumuladas:', sugestoes_dadas);
console.log('Artistas acumuladas:', artistas_escolhidos);


return (
    <section className="Info">
      <h1>Aqui está todo o histórico de respostas ao formulário!</h1>
      <img src={fairy} alt="Fada" className="img" />
      <br />
      <ul className="historico">
        <li><b>Histórico de Melhores Artistas/Bandas escolhidos: </b></li>
        {artistasFiltrados.length > 0 ? (
          <ul>
            {artistasFiltrados.map((artista, index) => <li key={index}>{artista}</li>)}
          </ul>
        ) : (
          <ul><li>Sem dados</li></ul>
        )}

        <li><b>Histórico de Sugestões feitas: </b></li>
        {sugestoesFiltradas.length > 0 ? (
          <ul>
            {sugestoesFiltradas.map((sugestao, index) => <li key={index}>{sugestao}</li>)}
          </ul>
        ) : (
          <ul><li>Sem dados</li></ul>
        )}

        <li><b>Histórico de Atividades escolhidas: </b></li>
        {atividadesFiltradas.length > 0 ? (
          <div>
            {atividadesFiltradas.map((atividade, index) => (
              <React.Fragment key={index}>
                {atividade}{index < atividadesFiltradas.length - 1 ? ', ' : ''}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <ul><li>Sem dados</li></ul>
        )}
            <br />
        <li><b>Histórico de Classificações dadas: </b></li>
        {classificacoesFiltradas.length > 0 ? (
          <div>
            {classificacoesFiltradas.map((classificacao, index) => (
              <React.Fragment key={index}>
                {classificacao}{index < classificacoesFiltradas.length - 1 ? ', ' : ''}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <ul><li>Sem dados</li></ul>
        )}
      </ul>
      <br />
      <button onClick={GoBack} className="botao">Volta à página anterior</button>
      <br />
      <button type="button" onClick={clearHistory} class="botao3">Limpar histórico</button>
      <br />
    </section>
  );
}

function estatisticas(){
return
}

export default HistoricoForm;