import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Lista from "./pages/Lista";
import Form from "./pages/Form";
import Detalhes from "./pages/Detalhes";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/gerenciar" element={<Form />} />
        <Route path="/" element={<Lista />} />
        <Route path="/novo" element={<Form />} />
        <Route path="/musica/:id" element={<Detalhes />} />
        <Route path="/editar/:id" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;