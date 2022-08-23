import React from 'react';
import { Eventos } from './Eventos';
import { Sabores } from './Sabores';
import { Sobre } from './Sobre';
import { Home } from './Home';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const PaginaInicial = () => {
  return (
    <>
      <Header />
      <Home />
      <Sabores />
      <Eventos />
      <Sobre />
      <Footer />
    </>
  );
};
