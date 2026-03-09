import SectionTitle from "../components/SectionTitle/SectionTitle.jsx";
import BookGrid from "../components/BookGrid/BookGrid.jsx";
import BookCard from "../components/BookCard/BookCard.jsx";
import Banner from "../components/Banner/Banner.jsx";
import { dadosLivros } from "../dados/dadosLivros.js";

export default function Home() {
    return (
        <>
        <Banner />
        <div className="container py-5 fw-bold">
            <SectionTitle titulo={"NOVIDADES"} topico={"Destaques da Semana"} />
            <BookGrid>
            {dadosLivros.map((livro, index) => (
                <BookCard
                key={livro.id}
                genero="POESIA"
                nome={livro.titulo}
                autor={livro.autor}
                imagem={livro.imagem}
                />
            ))}
            </BookGrid>
        </div>
        </>
    )
}