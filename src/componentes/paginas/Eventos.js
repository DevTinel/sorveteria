import React from 'react';
import eventoImg from '../../assets/eventos-image.jpg';
import '../../css/eventos.css';

export const Eventos = () => {
  return (
    <section className="evento-container">
      <div className="eventos">
        <div className="box-eventos">
          <h2>NOSSOS EVENTOS</h2>
          <span>Delicias com sorvete!</span>
          <p className="paragrafo-eventos">
            Mais do que uma sorveteria,uma extensão da sua casa! estamos aqui
            prontinhos para te atender e oferecer os melhores eventos com os
            melhores sorvetes da sua vida! venha nos conhecer e passar um tempo
            aqui com a gente
          </p>
        </div>
        <img className="eventos-img" src={eventoImg} alt="eventos img" />
      </div>
    </section>
  );
};
