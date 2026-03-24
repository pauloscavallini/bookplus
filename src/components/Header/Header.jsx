import css from './Header.module.css';
import Button from "../Button/Button.jsx";
import { Link, useNavigate } from 'react-router-dom';
import { Branding } from '../Branding/Branding.jsx';

export default function Header({logado, setLogado}) {
    const navigate = useNavigate();

    async function deslogar() {
        localStorage.removeItem('token');
        localStorage.removeItem('user_email');
        localStorage.removeItem('user_nome');
        localStorage.removeItem('user_id');
        setLogado(false);
        navigate('/');
    }

    return (
        <header className="container">
            <div className="col d-flex flex-column px-2 py-4">
                <div className="row d-flex align-items-center justify-content-between gap-1">
                    <div className="col-3 d-flex align-items-center gap-2 text-nowrap">
                        {/* <Link to={"/"} className="d-flex" style={{color: "var(--primary-color) !important"}}> */}
                            <Branding />
                        {/* </Link> */}
                    </div>
                    <div className={css.search + " col-5 col-md-3 col-lg-4 rounded-pill"}>
                        <div className="row px-3 py-0">
                            <input className=" form-control-plaintext" placeholder={"Encontre sua próxima leitura..."} />
                        </div>
                    </div>
                    <div className="col-5 col-lg-4 d-none d-md-block">
                        <nav className={css.nav + " d-flex align-items-center justify-content-end fw-bold ls-md gap-3"}>
                            <Link to={"/catalogo"} href="#">CATALÓGO</Link>
                            {logado ?
                            <Button onClick={deslogar} texto="LOGOUT" /> :
                            <Button to={"/login"} texto="LOGIN ADMIN" />
                            }
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}