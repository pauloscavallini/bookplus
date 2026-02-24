import css from './BookCard.module.css';

export default function BookCard({ nome, genero, autor, imagem }) {
    return (
        <div className={css.card + " col-12 col-md-5 col-lg-2 d-flex flex-column"}>
            <div 
                style={{
                    width: '100%',
                    height: '300px',
                    backgroundImage: `url(${imagem})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                className="rounded-4"
            ></div>
            <span className="tag-xs ls-md fw-bold text-body-tertiary pt-3">{genero}</span>
            <span className={css.title + " fw-bold fs-5"}>{nome}</span>
            <span className="text-body-tertiary fst-italic fw-normal">{autor}</span>
        </div>
    )
}