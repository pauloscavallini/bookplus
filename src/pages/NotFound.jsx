import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="container d-flex flex-column">
            <div className="d-flex flex-column">
                <span className="fw-bolder fs-1">OOPS</span>
                <span className="fw-normal">404: Essa página não existe</span>
                
                <Link to={"/"} className="fw-bold mt-4">Retornar à Página inicial</Link>
            </div>
        </div>
    )
}