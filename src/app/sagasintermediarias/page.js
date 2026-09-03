import Image from 'next/image';
import styles from './page.module.css';

export default function SagasIntermediarias() {
  return (
    <div>
      <h1 className={styles.titulo}>O Conflito Crescente</h1>
      <p className={styles.subtitulo}>A rivalidade antiga se transforma em cooperação contra um perigo comum:</p>
      
      <ul className={styles.lista}>
        <li><strong>Eclipse (2010):</strong> Seattle é devastada por assassinatos causados por um exército de vampiros.O exército de recém-criados: A vilã Victoria cria um exército de vampiros novos e sedentos de sangue em Seattle, espalhando o caos e assassinatos na cidade. O objetivo dela é destruir Bella Swan para se vingar da morte de seu parceiro, James.A aliança improvável: Sabendo que os Cullen sozinhos não conseguiriam proteger Bella e a cidade do exército invasor, Edward Cullen e Jacob Black firmam uma trégua. 
        O treinamento e a batalha. 
        Os Cullen usam sua experiência para treinar os lobisomens, ensinando como combater os recém-criados, culminando em uma grande batalha na floresta de Forks.</li>
        <Image src='/sagasIntermediarias.jpg' alt='altere' width={450} height={500}/>
      </ul>
    </div>
  );
}
