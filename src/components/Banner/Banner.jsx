import Button from '../Button/Button';
import css from './Banner.module.css';

export default function Banner() {
    return (
        <div className={`${css.banner} container-fluid d-flex text-white p-5`}>
            <div className="m-5 col-7">
                <span className="tag-xs fw-bold ls-lg bg-secondary bg-opacity-50 rounded-pill px-3 py-1 border border-white border-opacity-25">
                    CURADORIA EXCLUSIVA
                </span>
                <div className={`${css.hero} fs-1 fw-bold mt-3`}>
                    Descubra seu próximo capítulo.
                </div>
                <div className={`${css.subtitle} fs-5 mt-2`}>
                    Mergulhe em histórias que transformam. Explore nossa seleção premium de obras clássicas e contemporâneas.
                </div>
                <div className="mt-5 fw-bold d-flex gap-4">
                    <Button 
                        href={"#"} 
                        texto={"EXPLORAR CATÁLOGO"}
                        type={"secondary"} />
                    <Button
                        href={"#"}
                        texto={"VER PROMOÇÕES"}
                        type={"third"}
                      />
                </div>
            </div>
        </div>
    )
}
