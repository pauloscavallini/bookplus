import { Link, useParams } from "react-router-dom"
import { dadosLivros } from "../dados/dadosLivros";

export default function PaginaLivro() {
    const {id} = useParams();
    const livro = dadosLivros.find((item) => item.id === parseInt(id));

    if (!livro) {
    return (
      <section className="secao container estado-vazio">
        <h1>Livro não encontrado</h1>
        <p>Não encontramos o livro solicitado. Talvez ele tenha sido movido ou não exista.</p>
        <Link to="/">
          Voltar para a Home
        </Link>
      </section>
    )}

    return (
    <div className="container d-flex py-3">
        <div className="col-6">
            <img src={livro.imagem} alt="Capa do livro" />
        </div>
        <div className="col-6">
            <p className="fs-3">{livro.titulo}</p>
            <p className="fs-5">Autor: {livro.autor}</p>
            <p className="fs-6">Ano publicação: {livro.ano_publicacao}</p>
        </div>
    </div>
    )
}