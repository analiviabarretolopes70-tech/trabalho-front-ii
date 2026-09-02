import styles from './page.module.css';

export default function SagasIniciais() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>O Início da Saga</h1>
      <p className={styles.subtitulo}>O início da Saga Crepúsculo acontece quando a adolescente Bella Swan se muda de Phoenix, no Arizona, para a chuvosa cidade de Forks, em Washington, para morar com seu pai.</p>
      
      <ul className={styles.lista}>
        <li><strong>Crepúsculo (2008):</strong> Bella Swan muda-se para Forks e apaixona-se pelo misterioso vampiro Edward Cullen...</li>
        <li><strong>Lua Nova (2009):</strong> O filme começa com uma lua cheia que se transforma em uma lua nova...</li>
      </ul>
    </div>
  );
}
