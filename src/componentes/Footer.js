import React from 'react';
import logo from '../assets/logo.png';
import '../css/footer.css';

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <img className="logo-footer" src={logo} alt="logo" />
        <div className="itens-footer ">
          <h4>ENDEREÇO</h4>
          <p>
            Av. Bernadino de <br /> Campos,98
          </p>
          <p>São Paulo ,SP 12345-678</p>
        </div>

        <div className="itens-footer">
          <h4>CONTATO</h4>
          <p>info@meusite.com</p>
          <p>Tel: (11) 3456 -7890</p>
        </div>
        <div className="itens-footer">
          <h4>HÓRARIOS</h4>
          <p>ABERTO TODOS OS DIAS </p>
          <p>10:00 - 22:00</p>
        </div>
      </div>
      <div className="copy">
        <p>Galeria.Orgulhosamente desenvolvido por 'DevTinel'</p>
      </div>
    </footer>
  );
};
