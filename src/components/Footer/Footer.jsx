import styles from './Footer.module.css';
import { Branding } from '../Branding/Branding';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
    <footer className={styles.footer + " container-fluid inter border-top border-light-subtle p-5"}>
        <div className="container d-flex flex-wrap">
            <div className="col-6 d-flex flex-column justify-content-start">
                <Branding />
                <span style={{width: '55%'}}>Sua livraria digital de confiança. Uma curadoria minimalista das obras mais impactantes para o seu crescimento.</span>
                <div className="d-flex gap-2 mt-2">
                    <a href="#" className={styles.buttonIcon + " p-2 border border-secondary border-opacity-25 rounded-pill d-flex align-items-center justify-content-center"}>
                        <span className="material-symbols-outlined text-secondary text-opacity-75">share</span>
                    </a>
                    <a href="#" className={styles.buttonIcon + " p-2 border border-secondary border-opacity-25 rounded-pill d-flex align-items-center justify-content-center"}>
                        <span className="material-symbols-outlined text-secondary text-opacity-75">favorite</span>
                    </a>
                </div>
            </div>
            <div className="col-6">
                <div className="d-flex flex-column align-items-end">
                    <span className={styles.linkHeader + " mb-3 text-uppercase tag-xs fw-bold ls-md"}>Explorar</span>
                    <Link to={"/catalogo"} className="fs-6">Catálogo</Link>
                </div>
            </div>
            <div className={"col-12 pt-4 mt-5 border-top d-flex justify-content-between fw-semibold text-uppercase tag-xs text-secondary text-opacity-75"}>
                <span className="d-flex align-items-center">&copy; 2024 Book Plus. Todos os direitos reservados.</span>
                <span className="d-flex align-items-center gap-1">
                    Desenvolvido com <span className={styles.iconVermelho + " material-symbols-outlined"}>favorite</span> em SENAI
                </span>
            </div>
        </div>
    </footer>
    )
}