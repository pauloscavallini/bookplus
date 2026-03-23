import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import PaginaLivro from "./pages/PaginaLivro.jsx";
import { useState } from "react";
import CadastroLivro from "./pages/CadastroLivro.jsx";

export default function App() {
    const [logado, setLogado] = useState(localStorage.getItem('token') ? true : false);

    return (
        <>
        <Header logado={logado} setLogado={setLogado} />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login logado={logado} setLogado={setLogado} />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/livro/:id" element={<PaginaLivro />} />
                <Route path="/livro/criar" element={<CadastroLivro />} />
                
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
        <Footer />
        </>
    )
}