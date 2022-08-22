import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../css/header.css';

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav-header">
        <img className="logo" src={logo} alt="logo" />
        <div className="links-header">
          <Link to="/">Home</Link>
          <Link to="pagina-sabores">Sabores</Link>
          <Link to="pagina-sobre">Sobre</Link>
        </div>
      </nav>
    </header>
  );
};
