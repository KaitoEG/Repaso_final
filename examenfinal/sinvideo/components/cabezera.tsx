import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.css';

const Cabezera = () => {
  return (
    <div className={styles.info}>
      <b className={styles.title}>Exercícios</b>
      <div className={styles.div}>4</div>
    </div>
  );
};

export default Cabezera;
