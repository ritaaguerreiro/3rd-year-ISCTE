import React from "react";
import '../DadosForm.css';
import { useNavigate } from "react-router-dom";
import fairy from "../fada1.png";

// Função para contar as ocorrências de cada opção
const contarOpcoes = (opcoes, respostaPadrao = "Sem resposta") => {
    const contagem = {};

    // Inicializa as contagens para todas as opções
    opcoes.forEach(opcao => {
        if (opcao) {
            contagem[opcao] = contagem[opcao] ? contagem[opcao] + 1 : 1;
        } else {
            contagem[respostaPadrao] = (contagem[respostaPadrao] || 0) + 1;
        }
    });

    return contagem;
};

// Função para obter as contagens para cada campo
const obterContagens = () => {
    const historicoData = JSON.parse(localStorage.getItem("historicoData")) || {};
    console.log("Dados do localStorage:", historicoData); // Log dos dados

    if (typeof historicoData !== "object" || Array.isArray(historicoData)) {
        console.error("Dados do localStorage não são um objeto");
        return {
            contagemArtistas: {},
            contagemAtividades: {},
            contagemClassificacoes: {},
        };
    }

    // Opções para contagem
    const artistas = historicoData.artistas_escolhidos || [];
    const atividades = historicoData.atividades_escolhidas || [];
    const classificacoes = historicoData.classificacoes_dadas || [];

    console.log("Artistas:", artistas);
    console.log("Atividades:", atividades);
    console.log("Classificações:", classificacoes);

    return {
        contagemArtistas: contarOpcoes(artistas),
        contagemAtividades: contarOpcoes(atividades),
        contagemClassificacoes: contarOpcoes(classificacoes),
    };
};

function EstatisticasForm() {
    const navigate = useNavigate();

    const {
        contagemArtistas,
        contagemAtividades,
        contagemClassificacoes,
    } = obterContagens();

    // Função para voltar à página anterior
    const GoBack = () => {
        navigate('/'); // Navegar de volta para a página inicial
    };

    // Função para ordenar as contagens em ordem decrescente
    const ordenarContagem = (contagem) => {
        return Object.entries(contagem).sort((a, b) => b[1] - a[1]);
    };

    const artistasOrdenados = ordenarContagem(contagemArtistas);
    const atividadesOrdenadas = ordenarContagem(contagemAtividades);
    const classificacoesOrdenadas = ordenarContagem(contagemClassificacoes);

    const todasAsOpcoesArtistas = ["Artista 1", "Artista 2", "Artista 3", "Sem resposta"]; // Adicione suas opções
    const todasAsOpcoesAtividades = ["Atividade 1", "Atividade 2", "Atividade 3", "Sem resposta"]; // Adicione suas opções
    const todasAsOpcoesClassificacoes = ["Classificação 1", "Classificação 2", "Classificação 3", "Sem resposta"]; // Adicione suas opções

    const garantirContagem = (contagem, todasAsOpcoes) => {
        const resultado = {};
        todasAsOpcoes.forEach(opcao => {
            resultado[opcao] = contagem[opcao] || 0;
        });
        return resultado;
    };

    const contagemArtistasComZeros = garantirContagem(contagemArtistas, todasAsOpcoesArtistas);
    const contagemAtividadesComZeros = garantirContagem(contagemAtividades, todasAsOpcoesAtividades);
    const contagemClassificacoesComZeros = garantirContagem(contagemClassificacoes, todasAsOpcoesClassificacoes);

    return (
        <section className="Info">
            <img src={fairy} alt="Fada" className="img" />
            <h1>Aqui estão as Estatísticas das Respostas!</h1>

            <li><b>Contagem de Melhores Artistas/Bandas escolhidos:</b></li>
            <ul>
                {Object.entries(contagemArtistasComZeros).length > 0 ? (
                    artistasOrdenados.map(([artista, contagem]) => (
                        <li key={artista}>{artista}: {contagem}</li>
                    ))
                ) : (
                    <li>Nenhuma resposta registada</li>
                )}
            </ul>

            <li><b>Contagem de Atividades escolhidas:</b></li>
            <ul>
                {Object.entries(contagemAtividadesComZeros).length > 0 ? (
                    atividadesOrdenadas.map(([atividade, contagem]) => (
                        <li key={atividade}>{atividade}: {contagem}</li>
                    ))
                ) : (
                    <li>Nenhuma resposta registada</li>
                )}
            </ul>

            <li><b>Contagem de Classificações dadas:</b></li>
            <ul>
                {Object.entries(contagemClassificacoesComZeros).length > 0 ? (
                    classificacoesOrdenadas.map(([classificacao, contagem]) => (
                        <li key={classificacao}>{classificacao}: {contagem}</li>
                    ))
                ) : (
                    <li>Nenhuma resposta registada</li>
                )}
            </ul>

            <br />
            <button onClick={GoBack} className="botao">Volta à página anterior</button>
            <br />
        </section>
    );
}

export default EstatisticasForm;





