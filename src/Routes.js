import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";
import Menu from "./componentes/menu/Index";
import Rodape from "./componentes/rodape";
import PaginaPadrao from "componentes/paginaPadrao";
import Post from "paginas/Post";
import NaoEncontrado from "paginas/naoEncontrado";
import ScrollToTop from "componentes/scrollToTop";



function AppRoutes() {
  return <BrowserRouter>
  <ScrollToTop/>
   <Menu/>
   <Routes>

    <Route
            path="/"
            element={<PaginaPadrao/>}
            >
          <Route
              index
              element={<Inicio/>}/>
              <Route
              path="sobremim"
              element={<SobreMim/>}
              />
          

             
              
              
    </Route>
    <Route
              path="posts/:id"
              element={<Post/>}
              />
    <Route
              path="*"
              element={
                <NaoEncontrado/>
              }
              />
   
   </Routes>
   <Rodape/>
  </BrowserRouter>;
}

export default AppRoutes;
