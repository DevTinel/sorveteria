import React from 'react';
import styles from '../Card/Card.module.css';

export const Card = ({ img, alt, titulo, descricao }) => {
  return (
    <section className={styles.card}>
      <div className={styles.cardBox}>
        <img src={img} alt={alt} />
        <div className={styles.titSpan}>
          <h5>{titulo}</h5>
          <span className={styles.cardSpan}>{descricao}</span>
        </div>
      </div>
    </section>
  );
};
