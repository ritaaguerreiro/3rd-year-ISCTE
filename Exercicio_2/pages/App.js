import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import festaImage from '../fantasy.jpg';
import DadosForm from './DadosForm';

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
return(<section id="feedback">
<h2>Dá-nos o teu feedback sobre a festa</h2>
<p>O teu feedback é importante para que possamos melhor satisfazer os teus gostos nas próximas festas :)</p>
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

    <h2>Qual o artista/banda que mais gostaste de ouvir?</h2>

    <input type="radio" id="Shanin Blake" name="artist" value="1" />
    <label htmlFor="ShaninBlake">Shanin Blake (dia 27)</label>
    <br /><br />

    <input type="radio" id="Toy" name="artist" value="2" />
    <label htmlFor="Toy">Toy (dia 27)</label>
    <br /><br />

    <input type="radio" id="Aurora" name="artist" value="5" />
    <label htmlFor="Aurora">Aurora (dia 28)</label>
    <br /><br />

    <input type="radio" id="Rosinha" name="artist" value="7" />
    <label htmlFor="Rosinha">Rosinha (dia 29)</label>
    <br /><br />

    <input type="radio" id="Clairo" name="artist" value="3" />
    <label htmlFor="Clairo">Clairo (dia 27)</label>
    <br /><br />

    <input type="radio" id="DAMA" name="artist" value="6" />
    <label htmlFor="DAMA">D.A.M.A. (dia 28)</label>
    <br /><br />

    <input type="radio" id="Tunng" name="artist" value="8" />
    <label htmlFor="Tunng">Tunng (dia 29)</label>
    <br /><br />

   <input type="radio" id="Quim" name="artist" value="8" />
    <label htmlFor="Quim">Quim Barreiros (dia 29)</label>
    <br /><br />

    <input type="radio" id="Big" name="artist" value="8" />
    <label htmlFor="Big">Big Thief (dia 29)</label>
    <br /><br />

    <input type="radio" id="None" name="artist" value="10" />
    <label htmlFor="None">Não gostei de nenhum :(</label>
    <br /><br />

    <h2>Diz-nos a(s) atividade(s) que mais adoraste!</h2>

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

    <h2>Classifica a tua satisfação neste festival! (de 1 a 5 estrelas)</h2>

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

    <div>
        <label htmlFor="first-name">Nome:</label>
        <input type="text" id="first-name" name="first-name" placeholder="Escreve aqui o teu nome" />
    </div>
    <br />
    <div>
        <label htmlFor="idade">Idade:</label>
        <input type="number" id="idade" name="idade" min="16" placeholder="Escreve aqui a tua idade" />
    </div>
    <br />
    <input type="submit" value="Submeter" />
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
     <DadosForm />
 </div>
 );
}
export default App;



