import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import festaImage from '../fantasy.jpg';
import DadosForm from './DadosForm';
import {useNavigate} from "react-router-dom";

function Cabecalho() {
return(<section id="head">
<h1>Festa Fantasia</h1>
<img src={festaImage} alt="Imagem Tema da Festa"/>
</section>);
}

function ListaDasBandas(){
return(
<section id="bandas">
<br/>
<h2><b>ARTISTAS</b> que não vais querer perder:</h2>
<br/>
<ul>
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
    navigate('/DadosForm', {
      state: {
        melhorart: document.getElementById("melhorart").value,
        sugestoes: document.getElementById("sugestao").value
      }
    });
  };

return(

<section id="feedback">
<h2>Dá-nos o teu feedback sobre a festa...</h2>
<p>O teu feedback é importante para nós :)</p>
<form>

<input type="checkbox" id="dia27" name="dia27" value="dia27" />
    <label htmlFor="dia27">Dia 27</label>
    <br /><br />

    <input type="checkbox" id="dia28" name="dia28" value="dia28" />
    <label htmlFor="dia28">Dia 28</label>
    <br /><br />

    <input type="checkbox" id="dia29" name="dia29" value="dia29" />
    <label htmlFor="dia29">Dia 29</label>
    <br /><br />

    <h3>Qual o artista/banda que mais gostaste de ouvir?</h3>

<select id="melhorart" name="artist">
  <option value="1">Shanin Blake (dia 27)</option>
  <option value="2">Toy (dia 27)</option>
  <option value="5">Aurora (dia 28)</option>
  <option value="7">Rosinha (dia 29)</option>
  <option value="3">Clairo (dia 27)</option>
  <option value="6">D.A.M.A. (dia 28)</option>
  <option value="8">Tunng (dia 29)</option>
  <option value="8">Quim Barreiros (dia 29)</option>
  <option value="8">Big Thief (dia 29)</option>
  <option value="10">Não gostei de nenhum :(</option>
</select>

    <br /><br />

    <h3>Diz-nos a(s) atividade(s) que mais adoraste!</h3>

    <input type="checkbox" id="SMR" name="option1" value="1" />
    <label htmlFor="SMR">Roda Gigante </label>
    <br /><br />

    <input type="checkbox" id="RG" name="option2" value="2" />
    <label htmlFor="RG">Pinturas Faciais</label>
    <br /><br />

    <input type="checkbox" id="SS" name="option3" value="3" />
    <label htmlFor="SS">Oficina de Poções </label>
    <br /><br />

    <input type="checkbox" id="LM" name="option4" value="4" />
    <label htmlFor="LM">Lançamento de Machados</label>
    <br /><br />

    <input type="checkbox" id="TM" name="option5" value="5" />
    <label htmlFor="TM">Touro Mecânico</label>
    <br /><br />

    <input type="checkbox" id="TM" name="option5" value="5" />
    <label htmlFor="TM">Desfile de Fantasias </label>
    <br /><br />

    <input type="checkbox" id="NoneActivities" name="option6" value="6" />
    <label htmlFor="NoneActivities">Não gostei de nenhuma :(</label>
    <br /><br />

    <h3>Classifica a tua satisfação neste festival! (de 1 a 5 estrelas)</h3>

    <div className="rating" style={{ marginRight: '600px' }}>
        <input type="radio" id="star5" name="rating" value="5" />
        <label htmlFor="star5" title="5 estrelas">★</label>

        <input type="radio" id="star4" name="rating" value="4" />
        <label htmlFor="star4" title="4 estrelas">★</label>

        <input type="radio" id="star3" name="rating" value="3" />
        <label htmlFor="star3" title="3 estrelas">★</label>

        <input type="radio" id="star2" name="rating" value="2" />
        <label htmlFor="star2" title="2 estrelas">★</label>

        <input type="radio" id="star1" name="rating" value="1" />
        <label htmlFor="star1" title="1 estrela">★</label>
        <br /><br />
    </div>

                 <label htmlFor="sugestao"> </label>
                 <textarea type="textarea" id="sugestao" name="sugestao" rows="5" cols="50">Deixe aqui a sua sugestão de artistas e bandas, e como podemos melhorar para o próximo ano! </textarea>
                 <br /><br />

    <button onClick={goToReceiver} target="_blank">Clica aqui para verificares a tua resposta</button>

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



