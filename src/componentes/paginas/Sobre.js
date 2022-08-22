import React from 'react';
import sobreImg from '../../assets/sobre-image.jpg';
import '../../css/sobre.css';

export const Sobre = () => {
  return (
    <section className="sobre-container">
      <div className="sobre">
        <img className="sobre-img" src={sobreImg} alt="imagem sobre" />
        <div className="box-sobre">
          <h2>SOBRE NÓS </h2>
          <span>Alegria em cada casquinha!</span>
          <p className="paragrafo-sobre">
            Venha tomar o melhor sorvete da região aqui com a gente ! Nós
            estamos há anos no mercado produzindo o que tem de melhor para o
            nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma
            visita e aproveite o melhor atendimento e o melhor sorvete da cidade
          </p>
        </div>
      </div>
    </section>
  );
};
