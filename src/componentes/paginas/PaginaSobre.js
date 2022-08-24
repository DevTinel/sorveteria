import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from '../../css/PaginaSobre.module.css';
import sobreImg from '../../assets/sobre-image.jpg';
import sorveteria from '../../assets/sorveteria.jpg';

export const PaginaSobre = () => {
  return (
    <>
      <Header />
      <section>
        <div className={styles.PaginaSobre}>
          <h1>A GELATERIA</h1>
        </div>

        <div className={styles.BoxSobreNos}>
          <h2>Sobre Nós</h2>
          <span>
            <em>Nós simplesmente amamos sorvete </em>
          </span>
          <p>
            Nós simplesmente amamos sorvete! Somos uma empresa apaixonada pelo
            que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor
            sorvete para os nossos clientes e gostamos de receber elogios.
            Estamos operando desde 2009 com as melhores matérias-primas para a
            produção final do sorvete. Vendemos tanto para varejo como para
            atacado.
          </p>
          <p>
            Nossos clientes podem comprar os nossos sorvetes e degustar na nossa
            loja ou levar para sua residência e aproveitar junto com a família.
            Também vendemos para estabelecimentos e criamos eventos como festa
            de aniversário, formaturas e eventos empresariais. Para contratar os
            nossos serviços, basta entrar em contato conosco. Iremos
            proporcionar o melhor atendimento e os melhores produtos para você
            fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
          </p>
        </div>
        <div className={styles.boxImages}>
          <img src={sobreImg} alt="" />
          <img src={sorveteria} alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
};
