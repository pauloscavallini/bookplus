import BookCard from "../components/BookCard/BookCard";
import BookGrid from "../components/BookGrid/BookGrid";
import SectionTitle from "../components/SectionTitle/SectionTitle";
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
        const buscar = async () => {
            try {
                var lista1 = await carregarDados();
                setLivros(lista1);
            }
            catch(e) {
                console.log(e);
            };
        }

        buscar();
    }, [])

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