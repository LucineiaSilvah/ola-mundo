import styles from './SobreMim.module.css'
import PostModelo from "componentes/PostModelo";
import fotoCapa from '../../assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/luh02.jpg'

export default function SobreMim(){
  return(
   <PostModelo
    fotoCapa={fotoCapa}
    titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
      Olá, Sou Lucineia!
      </h3>
      <img 
      src={fotoSobreMim}
      alt='fotu lucineia'
      className={styles.fotoSobreMim}
      />
<p className={styles.paragrafo}>
Oi, tudo bem? Eu sou Desenvolvedora Front- End
</p>
  

<p className={styles.paragrafo}>
  Eu sempre gostei de tecnologia, porém não tive a oportunidade de estudar sobre isso anos atraz, nem imagina que isso poderia ser uma profissão
</p>
  

<p className={styles.paragrafo}>
Até então trabalhava no setor comercial, onde atuei por mais de 10 anos, em fim com meu 29 anos resolvi estudar para conseguir entrar a área de tecnologia...
</p>
  

<p className={styles.paragrafo}>
Em 2020 comecei a minha graduação em Gestão de Tecnologia da informação pela Uniasselvi, com conclusão em 2023
</p>


<p className={styles.paragrafo}>
E foi apartir dessa formação que encontrei o desenvolvimento web, que descobri ser minha paixão, e venho me especializando para desenvolvimento Front-end, e espero logo logo estar atuando nessa área, aprendendo cada vez mais!
</p>
  

   </PostModelo>
  
  )
}