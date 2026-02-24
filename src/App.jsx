import Banner from "./components/Banner/Banner.jsx";
import BookCard from "./components/BookCard/BookCard.jsx";
import BookGrid from "./components/BookGrid/BookGrid.jsx";
import Header from "./components/Header/Header.jsx";
import SectionTitle from "./components/SectionTitle/SectionTitle.jsx";

const urlImagem = "https://lh3.googleusercontent.com/aida-public/AB6AXuAfPUvluJk-HiK0Px5gMH_BQBTb27qwJ60GGLCTrpOAAYFz8ODYpVVOV2O3H0-BSlmEa2ohe6ftiet7tpJzzXqwrqqUor68qTw-bwD1uGjhWJcvHsWClI0VuBYce5rxZwgBVQV4bhHqPxrEBM3LkzshPTJe7ieqD4TS1WBM3tBpYhGbRcqANDyZcqO8gLGClOuhnWi0GrUe89miMPaSuLf43oTjqYI0bFS_SBPM5Oh-f_SIfyjMhezNzi5D1Mv_gaT50wKuwIsP8bdt";

export default function App() {
    return (
        <>
            <Header titulo={"BOOK PLUS"} />
            <Banner />

            <div className="container pt-5 fw-bold">
                <SectionTitle titulo={"NOVIDADES"} topico={"Destaques da Semana"} />
                <BookGrid>
                   {Array.from({ length: 10 }, (_, index) => (
                    <BookCard
                    key={index}
                    genero="POESIA"
                    nome="O Silêncio do Mar"
                    autor="Helena Vasconcelos"
                    imagem={urlImagem}
                    />
                ))}
                </BookGrid>
            </div>
        </>
    )
}