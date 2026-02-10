import css from './Header.module.css';
import logo from '/logo.svg';
import Button from "../Button/Button.jsx";

export default function Header({titulo = "BOOK PLUS"}) {
    return (
        <header className="">
            <div className="container-fluid d-flex flex-column align-items-between px-3 py-2">
                <div className="row d-flex align-items-center">
                    <div className="col-4 d-flex align-items-center gap-2">
                        <img className={css.logo} src={logo} alt="logo" />
                        <span className={css.logoText + " black ls-sm"}>{titulo}</span>
                    </div>
                    <div className="col-8 align-self-center">
                        <nav className={css.nav + " d-flex align-items-center"}>
                            <a className="col-md-3 d-none d-md-block fw-bold ls-md" href="#">CATALÓGO</a>
                            <a className="col-md-3 d-none d-md-block fw-bold ls-md" href="#">LANÇAMENTOS</a>
                            <a className="col-md-3 d-none d-md-block fw-bold ls-md" href="#">MAIS VENDIDOS</a>
                            <Button texto="LOGIN ADMIN" />
                            <a></a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}