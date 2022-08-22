import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../componentes/paginas/Home';
import { Sabores } from '../componentes/paginas/Sabores';
import { Sobre } from '../componentes/paginas/Sobre';
import Header from '../componentes/Header';

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sabores" element={<Sabores />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
};
