import css from './BookCard.module.css';

const defaultImagem = "https://lh3.googleusercontent.com/aida-public/AB6AXuAfPUvluJk-HiK0Px5gMH_BQBTb27qwJ60GGLCTrpOAAYFz8ODYpVVOV2O3H0-BSlmEa2ohe6ftiet7tpJzzXqwrqqUor68qTw-bwD1uGjhWJcvHsWClI0VuBYce5rxZwgBVQV4bhHqPxrEBM3LkzshPTJe7ieqD4TS1WBM3tBpYhGbRcqANDyZcqO8gLGClOuhnWi0GrUe89miMPaSuLf43oTjqYI0bFS_SBPM5Oh-f_SIfyjMhezNzi5D1Mv_gaT50wKuwIsP8bdt";

export default function BookCard({ nome, genero, autor, imagem = defaultImagem}) {
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
            <span className="tag-xs ls-md fw-bold text-body-tertiary text-uppercase pt-3">{genero}</span>
            <span className={css.title + " fw-bold fs-5"}>{nome}</span>
            <span className="text-body-tertiary fst-italic fw-normal">{autor}</span>
        </div>
    )
}