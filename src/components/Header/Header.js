import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.row}>
      <header className={styles.header}>
        <h1 className={styles.header__title}> Movies </h1>
      </header>
    </div>
  );
}