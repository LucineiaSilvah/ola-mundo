import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";
import Menu from "./componentes/menu/Index";
import Rodape from "./componentes/rodape";
import PaginaPadrao from "componentes/paginaPadrao";
import Post from "componentes/Post";



function AppRoutes() {
  return <BrowserRouter>
   <Menu/>
   <Routes>

    <Route
            path="/"
            element={<PaginaPadrao/>}
            >
          <Route
              path="/"
              element={<Inicio/>}/>
              <Route
              path="/sobremim"
              element={<SobreMim/>}
              />
              <Route
              path="*"
              element={<div>
                ops.. pagina não encontrada
              </div>}
              />
              <Route
              path='posts/:id'
              element={<Post/>}
              >

              </Route>
              
    </Route>

   
   </Routes>
   <Rodape/>
  </BrowserRouter>;
}

export default AppRoutes;
