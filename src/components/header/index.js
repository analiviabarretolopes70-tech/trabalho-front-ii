'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image 
          src="https://unsplash.com" 
          alt="Crepúsculo" 
          width={50} 
          height={50} 
          className={styles.logo}
        />
        <span className={styles.tituloLogo}>A Saga Crepúsculo</span>
      </div>

      <button className={styles.botaoHamburguer} onClick={alternarMenu}>
        ☰
      </button>

      <nav className={`${styles.navegacao} ${menuAberto ? styles.menuAtivo : ''}`}>
        <Link href="/sagasiniciais" onClick={() => setMenuAberto(false)}>O Início</Link>
        <Link href="/sagasintermediarias" onClick={() => setMenuAberto(false)}>O Conflito</Link>
        <Link href="/sagasfinais" onClick={() => setMenuAberto(false)}>Final da Saga</Link>
      </nav>
    </header>
  );
}
