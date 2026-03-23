import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PRIMARY = "#001f3f";

const GENEROS = [
    "Ficção", "Romance", "Poesia", "Terror", "Fantasia",
    "Biografia", "Histórico", "Infantil", "Técnico", "Outro"
];

export default function CadastroLivro() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        titulo: "",
        autor: "",
        categoria: "",
        descricao: "",
        faixa_etaria: "",
        imagem: "",
    });
    const [enviando, setEnviando] = useState(false);
    const [sucesso, setSucesso] = useState(false);
    const [erros, setErros] = useState({});

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/');
        }
    }, [])

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (erros[name]) setErros(prev => ({ ...prev, [name]: "" }));
    }

    function validar() {
        const novosErros = {};
        if (!form.titulo.trim()) novosErros.titulo = "Título obrigatório";
        if (!form.autor.trim()) novosErros.autor = "Autor obrigatório";
        if (!form.categoria) novosErros.categoria = "Categoria obrigatória";
        if (!form.descricao.trim()) novosErros.descricao = "Descrição obrigatória";
        if (!form.faixa_etaria) novosErros.faixa_etaria = "Faixa etária obrigatória";
        return novosErros;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const novosErros = validar();
        if (Object.keys(novosErros).length > 0) {
            setErros(novosErros);
            return;
        }

        setEnviando(true);
        try {
            const res = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(localStorage.getItem("token") && {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    })
                },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setSucesso(true);
                setTimeout(() => navigate("/catalogo"), 2000);
            } else {
                setErros({ geral: "Erro ao cadastrar livro. Tente novamente." });
            }
        } catch {
            setErros({ geral: "Erro de conexão. Verifique sua internet." });
        } finally {
            setEnviando(false);
        }
    }

    const inputStyle = (campo) => ({
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.9rem",
        color: PRIMARY,
        border: `1.5px solid ${erros[campo] ? "#c0392b" : "#ddd"}`,
        borderRadius: 6,
        padding: "0.65rem 0.85rem",
        width: "100%",
        background: "#fff",
        outline: "none",
    });

    if (sucesso) {
        return (
            <div
                className="d-flex flex-column align-items-center justify-content-center gap-3 py-5"
                style={{ minHeight: "60vh", color: PRIMARY }}
            >
                <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: 64, height: 64, background: PRIMARY, color: "#fff", fontSize: "1.8rem" }}
                >
                    ✓
                </div>
                <p className="black ls-sm mb-0" style={{ fontSize: "1.2rem", color: PRIMARY }}>
                    Livro cadastrado!
                </p>
                <span className="tag-xs ls-md" style={{ color: "#555" }}>
                    Redirecionando para o catálogo…
                </span>
            </div>
        );
    }

    return (
        <div style={{ fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
            <div className="container py-5">

                {/* Cabeçalho */}
                <div className="mb-5">
                    <span className="tag-xs ls-lg" style={{ color: PRIMARY, opacity: 0.5, display: "block", marginBottom: "0.5rem" }}>
                        ACERVO
                    </span>
                    <h1 className="black ls-sm mb-2" style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", lineHeight: 1, color: PRIMARY }}>
                        Novo{" "}
                        <span style={{ WebkitTextStroke: `2px ${PRIMARY}`, color: "transparent" }}>
                            Livro
                        </span>
                    </h1>
                    <p style={{ color: "#555", fontSize: "0.95rem", maxWidth: 480, lineHeight: 1.6 }}>
                        Preencha os dados para adicionar um novo título ao catálogo.
                    </p>
                </div>

                <form onSubmit={handleSubmit} noValidate style={{ maxWidth: 860 }}>

                    {/* Erro geral */}
                    {erros.geral && (
                        <div
                            className="tag-sm mb-3 px-3 py-2"
                            style={{ borderLeft: "3px solid #c0392b", background: "#fff0f0", color: "#c0392b", borderRadius: "0 4px 4px 0" }}
                        >
                            {erros.geral}
                        </div>
                    )}

                    {/* Linha 1 — Título + Autor */}
                    <div className="row g-3 mb-3">
                        <div className="col-12 col-md-7">
                            <label className="tag-xs ls-md d-block mb-1" style={{ color: PRIMARY, opacity: 0.6 }}>
                                TÍTULO *
                            </label>
                            <input
                                name="titulo"
                                value={form.titulo}
                                onChange={handleChange}
                                placeholder="Ex: Dom Casmurro"
                                style={inputStyle("titulo")}
                            />
                            {erros.titulo && <span className="tag-xs" style={{ color: "#c0392b" }}>{erros.titulo}</span>}
                        </div>
                        <div className="col-12 col-md-5">
                            <label className="tag-xs ls-md d-block mb-1" style={{ color: PRIMARY, opacity: 0.6 }}>
                                AUTOR *
                            </label>
                            <input
                                name="autor"
                                value={form.autor}
                                onChange={handleChange}
                                placeholder="Ex: Machado de Assis"
                                style={inputStyle("autor")}
                            />
                            {erros.autor && <span className="tag-xs" style={{ color: "#c0392b" }}>{erros.autor}</span>}
                        </div>
                    </div>

                    {/* Linha 2 — Categoria + Faixa Etária */}
                    <div className="row g-3 mb-3">
                        <div className="col-12 col-md-6">
                            <label className="tag-xs ls-md d-block mb-1" style={{ color: PRIMARY, opacity: 0.6 }}>
                                CATEGORIA *
                            </label>
                            <select
                                name="categoria"
                                value={form.categoria}
                                onChange={handleChange}
                                style={{ ...inputStyle("categoria"), cursor: "pointer" }}
                            >
                                <option value="">Selecionar</option>
                                {GENEROS.map(g => <option key={g} value={g}>{g}</option>)}
                            </select>
                            {erros.categoria && <span className="tag-xs" style={{ color: "#c0392b" }}>{erros.categoria}</span>}
                        </div>
                        <div className="col-12 col-md-6">
                            <label className="tag-xs ls-md d-block mb-1" style={{ color: PRIMARY, opacity: 0.6 }}>
                                FAIXA ETÁRIA *
                            </label>
                            <select
                                name="faixa_etaria"
                                value={form.faixa_etaria}
                                onChange={handleChange}
                                style={{ ...inputStyle("faixa_etaria"), cursor: "pointer" }}
                            >
                                <option value="">Selecionar</option>
                                <option value="Livre">Livre</option>
                                <option value="10+">10+</option>
                                <option value="12+">12+</option>
                                <option value="14+">14+</option>
                                <option value="16+">16+</option>
                                <option value="18+">18+</option>
                            </select>
                            {erros.faixa_etaria && <span className="tag-xs" style={{ color: "#c0392b" }}>{erros.faixa_etaria}</span>}
                        </div>
                    </div>

                    {/* Linha 3 — URL da capa */}
                    <div className="row g-3 mb-3">
                        <div className="col-12">
                            <label className="tag-xs ls-md d-block mb-1" style={{ color: PRIMARY, opacity: 0.6 }}>
                                URL DA CAPA
                            </label>
                            <input
                                name="imagem"
                                value={form.imagem}
                                onChange={handleChange}
                                placeholder="https://..."
                                style={inputStyle("imagem")}
                            />
                        </div>
                    </div>

                    {/* Preview da capa */}
                    {form.imagem && (
                        <div className="mb-3">
                            <span className="tag-xs ls-md d-block mb-2" style={{ color: PRIMARY, opacity: 0.6 }}>
                                PREVIEW DA CAPA
                            </span>
                            <div
                                style={{
                                    width: 90, height: 128, borderRadius: 4,
                                    overflow: "hidden", border: "1.5px solid #ddd", background: "#eee"
                                }}
                            >
                                <img
                                    src={form.imagem}
                                    alt="Capa"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    onError={e => e.target.style.display = "none"}
                                />
                            </div>
                        </div>
                    )}

                    {/* Descrição */}
                    <div className="mb-4">
                        <label className="tag-xs ls-md d-block mb-1" style={{ color: PRIMARY, opacity: 0.6 }}>
                            DESCRIÇÃO *
                        </label>
                        <textarea
                            name="descricao"
                            value={form.descricao}
                            onChange={handleChange}
                            placeholder="Descreva o livro brevemente…"
                            rows={5}
                            style={{ ...inputStyle("descricao"), resize: "vertical", minHeight: 110 }}
                        />
                        {erros.descricao && <span className="tag-xs" style={{ color: "#c0392b" }}>{erros.descricao}</span>}
                        <div className="tag-xs text-end mt-1" style={{ color: "#999" }}>
                            {form.descricao.length} caracteres
                        </div>
                    </div>

                    {/* Ações */}
                    <div className="d-flex flex-wrap gap-3">
                        <button
                            type="button"
                            className="tag-sm ls-md"
                            onClick={() => navigate(-1)}
                            disabled={enviando}
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                background: "transparent",
                                border: `1.5px solid ${PRIMARY}`,
                                color: PRIMARY,
                                borderRadius: 6,
                                padding: "0.75rem 2rem",
                                cursor: enviando ? "not-allowed" : "pointer",
                                opacity: enviando ? 0.55 : 1,
                                minWidth: 150,
                                transition: "background 0.2s, color 0.2s",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = PRIMARY; e.currentTarget.style.color = "#fff"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = PRIMARY; }}
                        >
                            CANCELAR
                        </button>
                        <button
                            type="submit"
                            className="tag-sm ls-md black"
                            disabled={enviando}
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                background: PRIMARY,
                                border: "none",
                                color: "#fff",
                                borderRadius: 6,
                                padding: "0.75rem 2rem",
                                cursor: enviando ? "not-allowed" : "pointer",
                                opacity: enviando ? 0.55 : 1,
                                minWidth: 180,
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "background 0.2s",
                            }}
                            onMouseEnter={e => { if (!enviando) e.currentTarget.style.background = "#003366"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = PRIMARY; }}
                        >
                            {enviando ? (
                                <span style={{
                                    display: "inline-block",
                                    width: 16, height: 16,
                                    border: "2px solid rgba(255,255,255,0.4)",
                                    borderTopColor: "#fff",
                                    borderRadius: "50%",
                                    animation: "spin 0.7s linear infinite",
                                }} />
                            ) : "CADASTRAR LIVRO"}
                        </button>
                    </div>

                </form>
            </div>

            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
}