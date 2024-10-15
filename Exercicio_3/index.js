import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import DadosForm from './pages/DadosForm';
import HistoricoForm from './pages/HistoricoForm';
import EstatisticasForm from './pages/EstatisticasForm';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Define a rota principal (/) que renderiza App no caso, é a primeira pág. aberta por def.*/}
        <Route path="/" element={<App />} />
        {/* Define a rota para /dados-form que renderiza DadosForm */}
        <Route path="/dados-form" element={<DadosForm />} />
         {/* Define a rota para /historico-form que renderiza HistoricoForm */}
        <Route path="/historico-form" element={<HistoricoForm />} />
        {/* Define a rota para /estatisticas-form que renderiza EstatisticasForm */}
        <Route path="/estatisticas-form" element={<EstatisticasForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
