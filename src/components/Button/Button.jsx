import css from './Button.module.css';

const estilos = {
    "primary": css.buttonPrimary,
    "secondary": css.buttonSecondary,
    "third": `${css.buttonThird} border border-white text-white`
}

export default function Button({texto = "LOREM IPSUM", href = "#", type = "primary", className}) {
    return (
        <a href={href} className={estilos[type] + " rounded-pill px-4 py-3 " + className}>
            {texto}
        </a>
    )
}