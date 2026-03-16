import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import PaginaLivro from "./pages/PaginaLivro.jsx";

export default function App() {
    return (
        <>
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/livro/:id" element={<PaginaLivro />} />
                
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
        <Footer />
        </>
    )
}