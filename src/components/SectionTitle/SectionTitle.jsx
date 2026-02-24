import css from './SectionTitle.module.css';

export default function SectionTitle({titulo = "LOREM IPSUM", topico="Lorem Ipsum"}) {
    return (
    <>
    <div className="tag-sm ls-lg d-flex align-items-center gap-2">
        <div className={css.line + " bg-black"}></div>
        <span className="text-secondary">
            {titulo.toUpperCase()}
        </span>
    </div>
    <span className="fs-2">{topico}</span>
    </>
    )
}