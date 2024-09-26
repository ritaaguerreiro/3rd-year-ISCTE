import React, {useState} from 'react';
import logo from '../logo.svg';
import '../App.css';
import festaImage from '../fantasy.jpg';
import DadosForm from './DadosForm';
import {useNavigate} from "react-router-dom";

function Cabecalho() {
return(<section id="head">
<h1>Festa Fantasia &#129498;</h1>
<img src={festaImage} alt="Imagem Tema da Festa"/>
</section>);
}

function ListaDasBandas(){
return(
<section id="bandas">
<br/>
<h2><b>ARTISTAS</b> que não vais querer perder &#129311;</h2>
<br/>
<ul class="lista">
<li>Shanin Blake</li>
<li>Toy</li>
<li>Aurora</li>
<li>Rosinha</li>
<li>Clairo</li>
<li>D.A.M.A.</li>
<li>Tunng</li>
<li>Quim Barreiros</li>
<li>Big Thief</li>
</ul>
</section>);
}

function FormFesta(){
     const navigate = useNavigate();

  const goToReceiver = () => {
    navigate('/dados-form', {
      state: {
        melhorartista: document.getElementById("melhora").value,
        melhoratividade: document.getElementById("atividades").value,
        classificacao: document.getElementById("rating").value,
        sugestoes: document.getElementById("sugestao").value
      }
    });
  };

return(


<section id="feedback">
<br/> <br/>
<h2>Dá-nos o teu feedback sobre a festa  &#128523;</h2>


<form>
    <h3>Qual o artista/banda que mais gostaste de ouvir?</h3>

<select id="melhora" name="artist">
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

   <select id="atividades" name="atividades" multiple size="5">
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

    <label htmlFor="rating" style={{ fontFamily: "Georgia, sans-serif", fontSize: "20px" }}>Escolhe uma classificação: </label>
    <select id="rating" name="rating">
     <option value="1 estrela">★☆☆☆☆ (1 estrela)</option>
     <option value="2 estrelas">★★☆☆☆ (2 estrelas)</option>
     <option value="3 estrelas">★★★☆☆ (3 estrelas)</option>
     <option value="4 estrelas">★★★★☆ (4 estrelas)</option>
     <option value="5 estrelas">★★★★★ (5 estrelas)</option>


    </select>
    <br /><br />     <br />

                 <label id="sugestao" htmlFor="sugestoes" > </label>
                 <textarea type="textarea" id="sugestao" name="sugestao" rows="5" cols="50">Deixa aqui a tua sugestão de artistas e bandas, e de como podemos melhorar para o próximo ano! </textarea>
                 <br /><br />

 <br />
    <button onClick={goToReceiver} class="botao">Clica aqui para verificares a tua resposta</button>
 <br /><br />  <br /><br />
</form>
</section>
);
}

function App() {
 return (
 <div className="App">
    <Cabecalho />
    <ListaDasBandas />
    <FormFesta />
 </div>
 );
}
export default App;


