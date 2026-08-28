//import Image from "next/image";
//import styles from "./page.module.css";

//export default function Home() {
  //return (
   // <div className={styles.page}>
     // <main className={styles.main}>
     // </main>
    //</div>
 // );
//}

import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>A Saga Crepúsculo</h1>
      <p className={styles.subtitulo}>Acompanhe a trajetória romântica e sobrenatural que marcou uma geração.</p>
      
      <div className={styles.linksCard}>
        <Link href="/sagasiniciais" className={styles.card}>
          <h2>O Início da Saga ➔</h2>
          <p>A chegada em Forks, a descoberta dos vampiros e a crise do romance proibido.</p>
        </Link>
        <Link href="/sagasintermediarias" className={styles.card}>
          <h2>O Conflito Crescente ➔</h2>
          <p>A ameaça de Victoria, o exército de recém-criados e a aliança com os lobos.</p>
        </Link>
        <Link href="/sagasfinais" className={styles.card}>
          <h2>O Desfecho Épico ➔</h2>
          <p>O casamento, a transformação de Bella e o confronto final contra os Volturi.</p>
        </Link>
      </div>
    </div>
  );
}
