import css from './Header.module.css';
import logo from '/logo.svg';
import Button from "../Button/Button.jsx";
import { Link } from 'react-router-dom';

export default function Header({titulo = "BOOK PLUS"}) {
    return (
        <header className="container">
            <div className="col d-flex flex-column px-2 py-4">
                <div className="row d-flex align-items-center justify-content-between gap-1">
                    <div className="col-3 d-flex align-items-center gap-2 text-nowrap">
                        <Link to={"/"} className="d-flex" style={{color: "var(--primary-color) !important"}}>
                            <img className={css.logo} src={logo} alt="logo" />
                            <span className={css.logoText + " black ls-sm"}>{titulo}</span>
                        </Link>
                    </div>
                    <div className={css.search + " col-5 col-md-3 col-lg-4 rounded-pill"}>
                        <div className="row px-3 py-0">
                            <input className=" form-control-plaintext" placeholder={"Encontre sua próxima leitura..."} />
                        </div>
                    </div>
                    <div className="col-5 col-lg-4 d-none d-md-block">
                        <nav className={css.nav + " d-flex align-items-center justify-content-end fw-bold ls-md gap-3"}>
                            <Link to={"/catalogo"} href="#">CATALÓGO</Link>
                            <Button to={"/login"} texto="LOGIN ADMIN" />
                            <a></a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}