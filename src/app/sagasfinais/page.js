import Image from 'next/image';
import styles from './page.module.css';

export default function SagasFinais() {
  return (
    <div>
      <h1 className={styles.titulo}>O Desfecho Épico</h1>
      <p className={styles.subtitulo}>A conclusão da jornada humana de Bella e as consequências de suas escolhas eternas:</p>
      
      <ul className={styles.lista}>
        <li><strong>Amanhecer - Parte 1 (2011):</strong> O casamento de Bella e Edward. O Casamento e a Lua de Mel: Bella e Edward finalmente se casam em uma cerimônia linda e viajam para a Ilha Esme, no Brasil.
        A Gravidez Inesperada: Contra todas as expectativas, Bella engravida de um híbrido. A gestação avança em ritmo acelerado, consumindo a saúde e a força vital de Bella a cada dia.O Conflito com os Quileutes: O pacto com os lobos é ameaçado, pois a matilha enxerga a criança como uma ameaça mortal que precisa ser destruída. Jacob Black se recusa a seguir as ordens do bando e cria uma facção própria para proteger Bella.O Nascimento e a Transformação: No limite da morte durante um parto violento, Bella dá à luz Renesmee.
        Para salvar sua vida, Edward injeta seu próprio veneno diretamente no coração dela. O filme encerra com os olhos de Bella se abrindo, agora vermelhos como os de uma vampira recém-criada.</li>
        <li><strong>Amanhecer - Parte 2 (2012):</strong> Bella acorda transformada em vampira. A Nova Bella: Bella acorda transformada, descobrindo que possui uma força impressionante e um autocontrole raro para recém-nascidos. Ela também descobre seu "escudo mental", um poder de proteção psicológica.A Ameaça dos Volturi: Irina, uma vampira do clã de Denali, vê Renesmee e a confunde com uma "criança imortal" (crianças transformadas em vampiros, o que é estritamente proibido pelas leis dos Volturi). Ela relata o caso aos líderes em Volterra, que decidem marchar para destruir os Cullen.A Reunião de Aliados: Para provar que Renesmee é uma criança híbrida biológica (que cresce e aprende) e não uma criança transformada, os Cullen viajam pelo mundo reunindo clãs de vampiros aliados para servirem de testemunhas.
        O Confronto Final: Ocorre um confronto tenso na neve entre os Volturi e os Cullen (apoiados por seus aliados vampiros e lobos).
        Uma reviravolta memorável revela o futuro através das visões de Alice, garantindo a paz e o final feliz definitivo para Bella, Edward e Renesmee.</li>
        <Image src='/sagasFinais.webp' alt='altere' width={400} height={400}/>
      </ul>
    </div>
  );
}
