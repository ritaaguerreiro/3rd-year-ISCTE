import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './pages/App'; // Caminho ajustado após mover o ficheiro para 'pages'
import DadosForm from './pages/DadosForm'; // Caminho ajustado após mover o ficheiro para 'pages'
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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
