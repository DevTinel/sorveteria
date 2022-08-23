import React from 'react';
import './global.css';
import { BrowserRouter } from 'react-router-dom';
import { Rotas } from './Rotas/Rotas';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </div>
  );
};

export default App;
