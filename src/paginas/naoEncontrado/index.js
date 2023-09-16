import BotaoPrincipal from 'componentes/botaoPrincipal'
import styles from './naoEncontrado.module.css'
import erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom'
export default function NaoEncontrado(){
  const navegar = useNavigate()
  return (
    <>
      <div className={styles.conteudoContainer}>
      <span className={styles.texto404}>404</span>
      <h1 className={styles.titulo}>
        Ops! Página não encontrada.
      </h1>
      <p className={styles.paragrafo}>
        Tem certeza que era isso que estava procurando?
      </p>
      <p className={styles.paragrafo}>
      aguarde alguns instantes e recarregue a pagina, ou volte para pagina inicial.
      </p>
      <div className={styles.botaoContainer}
onClick={()=>navegar(-1)}
      
      >
        <BotaoPrincipal
        tamanho='lg'>
          voltar
        </BotaoPrincipal>
      </div>
      <img className={styles.imagemCachorro}
      src={erro404}
      alt='foto erro 404, cachorro de oculos vestido como humano'/>
    </div>
    
    <div className={styles.espacoEmBranco}> </div>
    
    </>
  
  )
}