import styles from './Banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import luh from '../../assets/luh1.jpg'


export default function Banner(){
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
            Olá Devs
            </h1>
            <p className={styles.paragrafo}>
            Boas vindas ao meu espaço pessoal! Eu sou Lucineia Silva, Desenvolvedora Front-end . Aqui compartilho vários conhecimentos, espero que aprenda algo novo 
            </p>
        </div> 

        <div className={styles.imagens}>
            <img 
            className={styles.circuloColorido}
            src={circuloColorido}
            aria-hidden={true}
            alt='#'/>
            <img className={styles.luh}
            src={luh}
            alt='foto de lucineia sorrindo'/>
        </div>
    </div>
  )
}