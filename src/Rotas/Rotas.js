import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PaginaInicial } from '../componentes/paginas/PaginaInicial';
import { PaginaSabores } from '../componentes/paginas/PaginaSabores';
import { PaginaSobre } from '../componentes/paginas/PaginaSobre';

export const Rotas = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<PaginaInicial />} />
        <Route path="/pagina-sabores" element={<PaginaSabores />} />
        <Route path="/pagina-sobre" element={<PaginaSobre />} />
      </Routes>
    </>
  );
};
