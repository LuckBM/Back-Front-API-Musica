import { Routes, Route } from "react-router-dom";
import Clientes from "../pages/Clientes/Clientes";
import CadastrarClientes from "../pages/Cadastrar/CadastrarClientes";
import DeletarClientes from "../pages/Deletar/DeletarCliente";
import AtualizarClientes from "../pages/Atualizar/AtualizarClientes";
import Home from "../pages/Home/Home";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/clientes" element={<Clientes/>} />
      <Route path="/clientes/cadastro" element={<CadastrarClientes/>} />
      <Route path="/clientes/deletar" element={<DeletarClientes/>} />
      <Route path="/clientes/atualizar" element={<AtualizarClientes/>} />
    </Routes>
  );
};

export default Rotas;
