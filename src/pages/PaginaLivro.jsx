import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function PaginaLivro() {
    const {id} = useParams();
    const [livro, setLivro] = useState({});

    useEffect(() => {
      const buscar = async () => {
        let resposta = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro/${id}`)
        let data = await resposta.json();
        setLivro(data.livro);

        console.log(data.livro);
      }
      buscar();
    }, [])

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
        <div className="col-6 pe-5" style={{ height: 500, overflow: "hidden" }}>
          <img
            src={livro.imagem}
            alt="Capa do livro"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        {/* <div className="col-6" style={{backgroundImage: `src(${livro.imagem})`}}>
            <img src={livro.imagem} alt="Capa do livro" />
        </div> */}
        <div className="col-6">
            <p className="fs-3">{livro.titulo} - {livro.faixa_etaria}</p>
            <p className="fs-6 d-flex flex-column"><span className="fw-semibold">Autor:</span> {livro.autor}</p>
            <p className="fs-6 d-flex flex-column"><span className="fw-semibold">Descrição:</span> {livro.descricao}</p>
        </div>
    </div>
    )
}