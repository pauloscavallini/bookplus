import logo from '/logo.svg';
import styles from './Branding.module.css';
import { Link } from 'react-router-dom';

export function Branding({titulo = "BOOK PLUS"}) {
    return (
    <Link className={"d-flex align-items-center gap-2 fs-4 black"} to={"/"}>
        <img src={logo} alt="Logo" width={30} />
        <span className={styles.logoText}>{titulo}</span>
    </Link>
    )
}