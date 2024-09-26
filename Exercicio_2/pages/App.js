import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import festaImage from '../Festa no ano anterior_gif.gif';
import DadosForm from './DadosForm';

function Cabecalho() {
return (
<section class="Cabeçalho">
<h1>  Festa do Destino Final </h1>
 <img src={festaImage} alt="Imagem de festa" width="600" height="400"/>
 </section>
);
}

function ListaDasBandas() {
return (
<section class="Lista dos Artistas e Bandas">
<ul>
  <li><b>ARTISTAS</b> que não vais querer perder:</li>
  <li>Piruka</li>
  <li>Connor Kauffman</li>
  <li>XXXTENTACION</li>
  <li>Toy</li>
  <li>Aurora</li>
  <li>Chico da Tina</li>
  <li>Queen</li>
  <li>Xutos & Pontapés</li>
  <li>Rosinha</li>
</ul>
</section>
      );
}

function FormFesta() {
    return (
        <section class="Forms da Festa">
            <form>
                <h2>Em que dia(s) foste à festa?</h2>

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

                <input type="radio" id="Piruka" name="artist" value="1" />
                <label htmlFor="Piruka">Piruka (dia 27)</label>
                <br /><br />

                <input type="radio" id="CK" name="artist" value="2" />
                <label htmlFor="CK">Queen (dia 27)</label>
                <br /><br />

                <input type="radio" id="Connor" name="artist" value="3" />
                <label htmlFor="Connor">Connor Kauffman (dia 27)</label>
                <br /><br />

                <input type="radio" id="Toy" name="artist" value="4" />
                <label htmlFor="Toy">XXXTENTACION (dia 28)</label>
                <br /><br />

                <input type="radio" id="Aurora" name="artist" value="5" />
                <label htmlFor="Aurora">Aurora (dia 28)</label>
                <br /><br />

                <input type="radio" id="Chico" name="artist" value="6" />
                <label htmlFor="Chico">Chico da Tina (dia 28)</label>
                <br /><br />

                <input type="radio" id="Rosinha" name="artist" value="7" />
                <label htmlFor="Rosinha">Rosinha (dia 29)</label>
                <br /><br />

                <input type="radio" id="Xutos" name="artist" value="8" />
                <label htmlFor="Xutos">Xutos & Pontapés (dia 29)</label>
                <br /><br />

                <input type="radio" id="ToyAgain" name="artist" value="9" />
                <label htmlFor="ToyAgain">Toy (dia 29)</label>
                <br /><br />

                <input type="radio" id="None" name="artist" value="10" />
                <label htmlFor="None">Não gostei de nenhum :(</label>
                <br /><br />

                <h2>Diz-nos a(s) atividade(s) que mais adoraste!</h2>

                <input type="checkbox" id="SMR" name="option1" value="1" />
                <label htmlFor="SMR">Simulador de Montanha Russa (VR)</label>
                <br /><br />

                <input type="checkbox" id="RG" name="option2" value="2" />
                <label htmlFor="RG">Roda Gigante</label>
                <br /><br />

                <input type="checkbox" id="SS" name="option3" value="3" />
                <label htmlFor="SS">Salas de Sustos</label>
                <br /><br />

                <input type="checkbox" id="LM" name="option4" value="4" />
                <label htmlFor="LM">Lançamento de Machados</label>
                <br /><br />

                <input type="checkbox" id="TM" name="option5" value="5" />
                <label htmlFor="TM">Touro Mecânico</label>
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



