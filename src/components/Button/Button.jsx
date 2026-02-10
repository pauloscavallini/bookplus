import css from './Button.module.css';

export default function Button({texto = "LOREM IPSUM", href = "#"}) {
    return (
        <a href={href} className={css.buttonPrimary + " rounded-pill"}>
            {texto}
        </a>
    )
}