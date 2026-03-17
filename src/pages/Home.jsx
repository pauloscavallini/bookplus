import SectionTitle from "../components/SectionTitle/SectionTitle.jsx";
import BookGrid from "../components/BookGrid/BookGrid.jsx";
import BookCard from "../components/BookCard/BookCard.jsx";
import Banner from "../components/Banner/Banner.jsx";
import { request } from "../dados/request.js";
import { dadosLivros } from "../dados/dadosLivros.js";
import { useState, useEffect } from "react";

export default function Home() {
    const [dados, setDados] = useState([])
    const [filtro, setFiltro] = useState("")

    async function carregarDados(filtroNome) {
        let resultadoDados = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro?${filtroNome}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        // console.log(await resultadoDados.json())
        let livros = await resultadoDados.json()
        return livros.livros;
    }

    useEffect(() => {
        const buscar = async () => {
            var lista1 = await carregarDados("titulo=" + filtro);
            var lista2 = await carregarDados("autor=" + filtro);
            var listaFinal = lista1.concat(lista2);
            setDados(listaFinal);
        }
        buscar();
    }, [filtro])

    return (
        <>
        <Banner />
        <div className="container py-5 fw-bold">
            <SectionTitle titulo={"NOVIDADES"} topico={"Destaques da Semana"} />
            <div className="d-flex">
                <input
                className="bg-secondary bg-opacity-25 rounded px-2 py-1"
                onChange={e => setFiltro(e.target.value)}
                value={filtro}
                placeholder="Procure por nome ou autor"
            />
            </div>
            <BookGrid>
            {dados ? dados.map((livro, index) => (
                <BookCard
                    key={index}
                    genero="POESIA"
                    nome={livro["titulo"]}
                    autor={livro["autor"]}
                    imagem={livro.imagem}
                />
            )): dadosLivros.map((livro, index) => (
                <BookCard
                    key={index}
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