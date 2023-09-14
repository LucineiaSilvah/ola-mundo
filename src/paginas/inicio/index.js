
import styles from '../inicio/inicio.module.css'
import posts from '../../assets/json/posts.json'
import Post from '../../componentes/PostCard';


export default function Inicio(){
  return(
   
    <ul className={styles.posts}>
    {posts.map((post) => (
      <li key={post.id}>
        <Post post={post}/>
      </li>
    ))}
  </ul>
    
  )
}