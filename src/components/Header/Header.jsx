import css from './Header.module.css';
import logo from '/logo.svg';
import Button from "../Button/Button.jsx";

export default function Header({titulo = "BOOK PLUS"}) {
    return (
        <header className="container">
            <div className="col d-flex flex-column px-2 py-4">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col-2 d-flex align-items-center gap-2 text-nowrap">
                        <img className={css.logo} src={logo} alt="logo" />
                        <span className={css.logoText + " black ls-sm"}>{titulo}</span>
                    </div>
                    <div className={css.search + " col-4 rounded-pill"}>
                        <div className="row px-3 py-0">
                            <input className="col form-control-plaintext" placeholder={"Encontre sua próxima leitura..."} />
                        </div>
                    </div>
                    <div className="col-6 d-none d-md-block text-nowrap">
                        <nav className={css.nav + " row d-flex align-items-center justify-content-end fw-bold ls-md"}>
                            <a className="col" href="#">CATALÓGO</a>
                            <a className="col" href="#">LANÇAMENTOS</a>
                            <a className="col" href="#">MAIS VENDIDOS</a>
                            <div className="col m-3">
                                <Button texto="LOGIN ADMIN" />
                            </div>
                            <a></a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}