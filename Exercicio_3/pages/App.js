import React, {useState, useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import DadosForm from './DadosForm';
import HistoricoForm from './HistoricoForm';
import EstatisticasForm from './EstatisticasForm';
import {useNavigate, useLocation} from "react-router-dom";
import mago from "../mago.jpg";
import capucho from "../capucho.jpg";
import elf from "../elf.jpg";
import fada from "../fada.jpg";
import rei from "../rei.jpg";
import viking from "../viking.jpg";
import dragao from "../dragon.gif";
import cogumelo from '../mushroom.gif';


function Cabecalho() {
return(<section id="head">
<h1>Festa Fantasia &#129498;</h1>
<div className="gif_dragao">
    <img src={dragao} alt="dragao"/>
</div>
<div className="gif_cogumelo">
    <img src={cogumelo} alt="cogumelo"/>
</div>
<div class="heading_images">
    <img src={mago} alt="mago"/>
    <img src={capucho} alt="capuchinho"/>
    <img src={rei} alt="rei"/>
    <img src={fada} alt="fada"/>
    <img src={elf} alt="elfa"/>
    <img src={viking} alt="viking"/>
</div>
</section>);
}


function ListaDasBandas(){
return(
<section id="bandas">
<h2><b>ARTISTAS</b> que não vais querer perder &#129311;</h2>
<br/>
<ul class="lista">
    <b><li>Shanin Blake</li>
    <li>Toy</li>
    <li>Aurora</li>
    <li>Rosinha</li>
    <li>Clairo</li>
    <li>D.A.M.A.</li>
    <li>Tunng</li>
    <li>Quim Barreiros</li>
    <li>Big Thief</li></b>
</ul>
</section>);
}

function FormFesta() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state || {}; // Captura o state se existir

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    // Submeter e guardar os dados
    const goToDados = () => {
        // Obter os dados armazenados no localStorage
        const storedData = JSON.parse(localStorage.getItem("historicoData")) || {
            artistas_escolhidos: [],
            sugestoes_dadas: [],
            classificacoes_dadas: [],
            atividades_escolhidas: [],
        };

        // Adicionar novos dados
        const novosArtistas = [...storedData.artistas_escolhidos, inputs.artista];
        const novasSugestoes = [...storedData.sugestoes_dadas, inputs.sugestao];
        const novasClassificacoes = [...storedData.classificacoes_dadas, inputs.rating];
        const novasAtividades = [...storedData.atividades_escolhidas, inputs.atividades];

        // Atualizar o localStorage
        localStorage.setItem("historicoData", JSON.stringify({
            artistas_escolhidos: novosArtistas,
            sugestoes_dadas: novasSugestoes,
            classificacoes_dadas: novasClassificacoes,
            atividades_escolhidas: novasAtividades,
        }));

        // Navegar para a página dados-form
        navigate('/dados-form', {
        state: {
            melhorartista: (inputs.artista),
            melhoratividade: (inputs.atividades),
            classificacao: (inputs.rating),
            sugestoes: (inputs.sugestao)
        }
    });
}

    // Carregar os dados do local storage ao iniciar
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("historicoData"));
        if (storedData) {
            setArtistas(storedData.artistas_escolhidos || []);
            setSugestoes(storedData.sugestoes_dadas || []);
            setClassificacoes(storedData.classificacoes_dadas || []);
            setAtividades(storedData.atividades_escolhidas || []);
        }
    }, []);

    const [artistas, setArtistas] = useState(state.artistas_escolhidos || []);
    const [sugestoes, setSugestoes] = useState(state.sugestoes_dadas || []);
    const [classificacoes, setClassificacoes] = useState(state.classificacoes_dadas || []);
    const [atividades, setAtividades] = useState(state.atividades_escolhidas || []);

    // Função para ver o histórico de respostas (sem acumular novos dados)
    const goToHistorico = () => {
    // Tentar carregar os dados do local storage
    const storedData = JSON.parse(localStorage.getItem("historicoData")) || {
        artistas_escolhidos: [],
        sugestoes_dadas: [],
        classificacoes_dadas: [],
        atividades_escolhidas: [],
    };

    // Navegar para a página do histórico com os dados já armazenados (ou vazios)
    navigate('/historico-form', {
        state: {
            artistas_escolhidos: storedData.artistas_escolhidos || [],
            sugestoes_dadas: storedData.sugestoes_dadas || [],
            classificacoes_dadas: storedData.classificacoes_dadas || [],
            atividades_escolhidas: storedData.atividades_escolhidas || []
        }
    });
};

    // Funções para adicionar os novos dados
    function addArtista(artista) {
        setArtistas([...artistas, artista]);
    }

    function addSugestoes(sugestao) {
        setSugestoes([...sugestoes, sugestao]);
    }

    function addClassificacoes(classificacao) {
        setClassificacoes([...classificacoes, classificacao]);
    }

    function addAtividades(atividade) {
        setAtividades([...atividades, atividade]);

    }
    const GotoEstatisticas = () => {
        navigate('/estatisticas-form'); // Navegar para a página de estatísticas
    };
return(

<section id="feedback">
    <br /> <br />
    <h2>Dá-nos o teu feedback sobre a festa  &#128523;</h2>

    <form>
        <h3>Qual o artista/banda que mais gostaste de ouvir?</h3>

        <select id="melhora" name="artista" onChange={handleChange}>
        <option value="" disabled selected hidden>Escolhe um artista/banda</option>
            <option value="Shanin Blake">Shanin Blake (dia 27)</option>
            <option value="Toy">Toy (dia 27)</option>
            <option value="Aurora">Aurora (dia 28)</option>
            <option value="Rosinha">Rosinha (dia 29)</option>
            <option value="Clairo">Clairo (dia 27)</option>
            <option value="D.A.M.A.">D.A.M.A. (dia 28)</option>
            <option value="Tunng">Tunng (dia 29)</option>
            <option value="Quim Barreiros">Quim Barreiros (dia 29)</option>
            <option value="Big Thief">Big Thief (dia 29)</option>
            <option value="Nenhum :(">Não gostei de nenhum :(</option>
        </select>

    <br /> <br />


    <h3>Diz-nos a atividade que mais adoraste!</h3>

   <select id="atividades" name="atividades" multiple size="5" onChange={handleChange}>
    <option value="Roda Gigante">Roda Gigante</option>
    <option value="Pinturas Faciais">Pinturas Faciais</option>
    <option value="Oficina de Poções">Oficina de Poções</option>
    <option value="Lançamento de Machados">Lançamento de Machados</option>
    <option value="Touro Mecânico">Touro Mecânico</option>
    <option value="Desfile de Fantasias">Desfile de Fantasias</option>
    <option value="Nenhuma :(">Não gostei de nenhuma :(</option>
</select>

    <br /><br />

<h3>Classifica a tua satisfação neste festival! (de 1 a 5 estrelas)</h3>

    <label htmlFor="rating" style={{ fontFamily: "Georgia, sans-serif", fontSize: "20px" }}> </label>
    <select id="rating" name="rating" onChange={handleChange}>
     <option value="" disabled selected hidden>Dá uma classificação</option>
     <option value="1 estrela">★☆☆☆☆ (1 estrela)</option>
     <option value="2 estrelas">★★☆☆☆ (2 estrelas)</option>
     <option value="3 estrelas">★★★☆☆ (3 estrelas)</option>
     <option value="4 estrelas">★★★★☆ (4 estrelas)</option>
     <option value="5 estrelas">★★★★★ (5 estrelas)</option>


    </select>
    <br /><br />     <br />

                 <textarea type="textarea" id="sugestao" name="sugestao" rows="5" cols="50" placeholder="Deixa aqui a tua sugestão de artistas e bandas, e de como podemos melhorar para o próximo ano!" onChange={handleChange}>
                 </textarea>
                 <br /><br />

    <button type="button" onClick={goToDados} class="botao1">Submete e vê a tua resposta!</button>
 <br /><br /> <br />
    <button type="button" onClick={goToHistorico} class="botao2">Histórico de respostas</button>
     <br /><br />
    <button type="button" onClick={GotoEstatisticas} class="botao2">Estatísticas</button>

 <br /><br />  <br /><br />
</form>
</section>
);
}

function Footer(){
return(
<footer class="footer">
<center>
  <p><b><i>Website</i> criado por:</b><br/>
      <ul>
          Rita | nº112018<br/>
          Ana | nº111658<br/>
          Miguel | nº111590<br/>
      </ul></p>
  </center>
</footer>
)}


function App() {
    return (
        <div className="App">
            <Cabecalho />
            <ListaDasBandas />
            <FormFesta />
            <Footer />
        </div>
    );
}


export default App;

