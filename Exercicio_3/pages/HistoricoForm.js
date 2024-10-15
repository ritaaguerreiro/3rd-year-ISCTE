import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../DadosForm.css';
import fairy from "../fada1.png";

function HistoricoForm() {
    const location = useLocation();
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

    // Função para voltar à página anterior
    const GoBack = () => { navigate('/'); };

    // Função para limpar o histórico
    const clearHistory = () => {
        localStorage.removeItem("historicoData");
        navigate('/'); // Navegar de volta para a página inicial
    };

    // Formatar as respostas
    const artistasFiltrados = formatResponses(artistas_escolhidos);
    const sugestoesFiltradas = formatResponses(sugestoes_dadas);
    const classificacoesFiltradas = formatResponses(classificacoes_dadas);
    const atividadesFiltradas = formatResponses(atividades_escolhidas);

    // Verificação se todas as listas estão vazias
    const allEmpty =
        artistas_escolhidos.length === 0 &&
        sugestoes_dadas.length === 0 &&
        classificacoes_dadas.length === 0 &&
        atividades_escolhidas.length === 0;

    return (
        <section className="Info">
            <h1>Aqui está todo o histórico de respostas ao formulário!</h1>
            <img src={fairy} alt="Fada" className="img" />
            <br />

            {allEmpty ? (
                <h2>Sem dados</h2>
            ) : (
                <ul className="historico">
                    <li><b>Histórico de Melhores Artistas/Bandas escolhidos: </b></li>
                    {artistasFiltrados.includes("Sem resposta") ? (
                        <ul><li>Sem dados</li></ul>
                    ) : (
                        <ul>
                            {artistasFiltrados.map((artista, index) => <li key={index}>{artista}</li>)}
                        </ul>
                    )}

                    <li><b>Histórico de Sugestões feitas: </b></li>
                    {sugestoesFiltradas.includes("Sem resposta") ? (
                        <ul><li>Sem dados</li></ul>
                    ) : (
                        <ul>
                            {sugestoesFiltradas.map((sugestao, index) => <li key={index}>{sugestao}</li>)}
                        </ul>
                    )}

                    <li><b>Histórico de Atividades escolhidas: </b></li>
                    {atividadesFiltradas.includes("Sem resposta") ? (
                        <ul><li>Sem dados</li></ul>
                    ) : (
                        <div>
                            {atividadesFiltradas.map((atividade, index) => (
                                <React.Fragment key={index}>
                                    {atividade}{index < atividadesFiltradas.length - 1 ? ', ' : ''}
                                </React.Fragment>
                            ))}
                        </div>
                    )}

                    <br />

                    <li><b>Histórico de Classificações dadas: </b></li>
                    {classificacoesFiltradas.includes("Sem resposta") ? (
                        <ul><li>Sem dados</li></ul>
                    ) : (
                        <div>
                            {classificacoesFiltradas.map((classificacao, index) => (
                                <React.Fragment key={index}>
                                    {classificacao}{index < classificacoesFiltradas.length - 1 ? ', ' : ''}
                                </React.Fragment>
                            ))}
                        </div>
                    )}
                </ul>
            )}

            <br />
            <button onClick={GoBack} className="botao">Volta à página anterior</button>
            <br />
            <button type="button" onClick={clearHistory} className="botao3">Limpar histórico</button>
            <br />
        </section>
    );
}

export default HistoricoForm;
