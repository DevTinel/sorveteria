import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../componentes/paginas/Home';
import { PaginaSabores } from '../componentes/paginas/PaginaSabores';
import { PaginaSobre } from '../componentes/paginas/PaginaSobre';

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="pagina-sabores" element={<PaginaSabores />} />
        <Route path="pagina-sobre" element={<PaginaSobre />} />
      </Routes>
    </BrowserRouter>
  );
};
