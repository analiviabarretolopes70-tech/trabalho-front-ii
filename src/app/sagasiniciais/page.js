import Image from 'next/image';
import styles from './page.module.css';


export default function SagasIniciais() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>O Início da Saga</h1>
      <p className={styles.subtitulo}>O início da Saga Crepúsculo acontece quando a adolescente Bella Swan se muda de Phoenix, no Arizona, para a chuvosa cidade de Forks, em Washington, para morar com seu pai.</p>
     
      <ul className={styles.lista}>
        <li><strong>Crepúsculo (2008):</strong> Bella Swan muda-se da ensolarada Phoenix, Arizona para a chuvosa cidade de Forks (Washington), para viver com seu pai, Charlie, Segundo ela, a sua mãe (Renée) sentia-se triste por não poder acompanhar o seu novo marido (Phil Dwyer) aos jogos de beisebol, pois este é um jogador da segunda divisão e, então, Bella decide mudar-se para dar mais espaço ao casal.</li>
        <li><strong>Lua Nova (2009):</strong> O filme começa com uma lua cheia que se transforma em uma lua nova...</li>
        <Image src='/sagasIniciais.jpg' alt='altere' width={450} height={450}/>
      </ul>
    </div>
  );
}
