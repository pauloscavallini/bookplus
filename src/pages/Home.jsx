import SectionTitle from "../components/SectionTitle/SectionTitle.jsx";
import BookGrid from "../components/BookGrid/BookGrid.jsx";
import BookCard from "../components/BookCard/BookCard.jsx";
import Banner from "../components/Banner/Banner.jsx";
import { request } from "../dados/request.js";
import { dadosLivros } from "../dados/dadosLivros.js";
import { useState, useEffect } from "react";

export default function Home() {
    const [dados, setDados] = useState([])

    useEffect(() => {
        async function carregarDados() {
            const resultadoDados = await request("listar_livros", "GET");
            setDados(resultadoDados && resultadoDados["livros"]);
            // console.log(resultadoDados["livros"]);
        }
        carregarDados();
    }, [])

    return (
        <>
        <Banner />
        <div className="container py-5 fw-bold">
            <SectionTitle titulo={"NOVIDADES"} topico={"Destaques da Semana"} />
            <BookGrid>
            {dados ? dados.map((livro, index) => (
                <BookCard
                    key={livro.id_livro}
                    genero="POESIA"
                    nome={livro["titulo"]}
                    autor={livro["autor"]}
                />
            )): dadosLivros.map((livro) => (
                <BookCard
                    key={livro.id_livro}
                    genero="POESIA"
                    nome={livro["titulo"]}
                    autor={livro["autor"]}
                />
            ))}
            </BookGrid>
        </div>
        </>
    )
}