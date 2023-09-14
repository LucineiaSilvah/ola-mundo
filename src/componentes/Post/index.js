import { useParams } from "react-router-dom"

export default function Post(){
  const parametros = useParams();
  return(
    <h1>POst{parametros.id}</h1>
  )
}