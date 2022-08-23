import React from 'react';
import styles from '../../css/PaginaSabores.module.css';
import { Card } from '../Card/Card';
import oreo from '../../assets/sabor-oreo.png';
import pistache from '../../assets/sabor-pistache.png';
import cookiesAvela from '../../assets/sabor-cookies-avela.png';
import kiwi from '../../assets/sorbet-kiwi.png';
import morango from '../../assets/sorbet-morango.png';
import limao from '../../assets/sorbet-limao.png';
import { Footer } from '../Footer';
import { Header } from '../Header';
export const PaginaSabores = () => {
  return (
    <section className={styles.PaginaSabores}>
      <Header />
      <section className={styles.PaginaSaboresTit}>
        <h1>NOSSOS SABORES</h1>
      </section>
      <section className={styles.SaboresArea}>
        <h2>SABORES DE SORVETE </h2>
        <div className={styles.BoxSabores}>
          <Card
            img={oreo}
            alt="sabor oreo"
            titulo="Sorvete de Oreo"
            descricao="Delicioso sorvete Sabor Oreo.uama explosão de sabor"
          />

          <Card
            img={pistache}
            alt="sabor pistache"
            titulo="Sorvete de Pistache"
            descricao="Cremoso sorvete sabor pistache com pedacinhos de semente"
          />
          <Card
            img={cookiesAvela}
            alt="sabor Cookies e Avelã"
            titulo="Sorvete Cookies & Avelã"
            descricao="O nosso melhor sorvete. Você vai adorar o sabor"
          />
          <Card
            img={kiwi}
            alt="sabor kiwi"
            titulo="Sorvete de Kiwi"
            descricao="Delicioso e refrescante sorvete sabor kiwi.Rico em vitamina C"
          />
          <Card
            img={morango}
            alt="sabor morango"
            titulo="Sorvete de Morango"
            descricao="Sorvete de morango gourmet .Tradicional e saboroso"
          />
          <Card
            img={limao}
            alt="sabor limao"
            titulo="Sorvete de Limão Siciliano"
            descricao="O incrivel sorvete gourmet de limão siciliano vai te encantar"
          />
        </div>
      </section>
      <Footer />
    </section>
  );
};
