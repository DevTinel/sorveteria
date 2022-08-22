import React from 'react';
import './global.css';
import { Header } from './componentes/Header';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './componentes/paginas/Home';
import { Sabores } from './componentes/paginas/Sabores';
import { Eventos } from './componentes/paginas/Eventos';
import { Sobre } from './componentes/paginas/Sobre';
import { Footer } from './componentes/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Sabores />
      <Eventos />
      <Sobre />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
