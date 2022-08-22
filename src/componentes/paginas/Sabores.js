import React from 'react';
import bolasSorvete from '../../assets/banner-sabores.jpg';
import '../../css/saboresHome.css';

export const Sabores = () => {
  return (
    <section className="sabores-container">
      <div className="sabores">
        <img className="sabor-img" src={bolasSorvete} alt="banner sabores" />
        <div className="box-sabor">
          <h2>NOSSOS SABORES</h2>
          <span>Novos e deliciosos</span>
          <p className="paragrafo-sabor">
            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
            gelateria todos os nossos produtos são naturais , à base de frutas e
            sem nenhum conservante!Também temos opções sem lactose e sem açúcar
            . Venha conhecer e perceber que tem como o sorvete ser delicioso e
            saudável ao mesmo tempo
          </p>
        </div>
      </div>
    </section>
  );
};
