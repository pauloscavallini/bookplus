import BookCard from "../components/BookCard/BookCard";
import BookGrid from "../components/BookGrid/BookGrid";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { request } from "../dados/request";
import { dadosLivros } from "../dados/dadosLivros";
import { useEffect, useState } from "react";

export default function Catalogo() {
    const [livros, setLivros] = useState([]);

    async function carregarDados() {
        let resultadoDados = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        let livros = await resultadoDados.json();
        return livros.livros;
    }

    useEffect(() => {
        const carregar = async () => {
            const data = await carregarDados();
            setLivros(data);
        }
        carregar();
    }, []);

    return (
        <div className="container py-5">
            <SectionTitle titulo={"NOVIDADES"} topico={"Destaques da Semana"} />
                <BookGrid>
                    {livros.map((livro) => (
                        <BookCard
                            key={livro.id}
                            genero="POESIA"
                            nome={livro["titulo"]}
                            autor={livro["autor"]}
                            imagem={livro.imagem}
                        />
                    ))}
                </BookGrid>
        </div>
    )
}