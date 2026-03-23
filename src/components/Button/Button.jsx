import { Link } from 'react-router-dom';
import css from './Button.module.css';

const estilos = {
    "primary": css.buttonPrimary,
    "secondary": css.buttonSecondary,
    "third": `${css.buttonThird} border border-white text-white`
}

export default function Button({ texto = "LOREM IPSUM", to = "#", type = "primary", className, ...rest }) {
    return (
        <Link 
            to={to} 
            className={`${estilos[type]} rounded-pill px-4 py-3 ${className || ''}`}
            {...rest}
        >
            {texto}
        </Link>
    )
}
