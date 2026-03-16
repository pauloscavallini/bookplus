import BookCard from "../components/BookCard/BookCard";
import BookGrid from "../components/BookGrid/BookGrid";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { request } from "../dados/request";
import { dadosLivros } from "../dados/dadosLivros";

export default function Catalogo() {
    return (
        <div className="container py-5">
            <SectionTitle titulo={"NOVIDADES"} topico={"Destaques da Semana"} />
                <BookGrid>
                    {dadosLivros.map((livro, index) => (
                        <BookCard
                        key={livro.id_livro}
                        genero={"POESIA"}
                        nome={livro.titulo}
                        autor={livro.autor}
                        imagem={livro.imagem}
                        />
                    ))}
                </BookGrid>
        </div>
    )
}