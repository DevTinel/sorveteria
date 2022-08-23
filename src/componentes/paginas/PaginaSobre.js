import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from '../../css/PaginaSobre.module.css';

export const PaginaSobre = () => {
  return (
    <>
      <Header />
      <section>
        <div className={styles.PaginaSobre}>
          <h1>A GELATERIA</h1>
        </div>

        <div></div>
      </section>
      <Footer />
    </>
  );
};
