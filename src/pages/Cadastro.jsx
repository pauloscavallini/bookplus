import { useState } from "react"
import Button from "../components/Button/Button";

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');

    return (
        <div className="container d-flex py-5">
            <div className="col-6 bg-black rounded-3" style={{height: 330}}>
            </div>
            <div className="col-6 d-flex flex-column align-items-start px-5 gap-2">
                <div className="d-flex flex-column">
                    <label htmlFor="name" className="tag-sm fw-semibold text-black-50">Nome completo</label>
                    <input 
                        className="rounded-2 border border-1 px-2 py-1"
                        id="name"
                        name="name"
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        />
                </div>

                <div className="d-flex flex-column">
                    <label htmlFor="email" className="tag-sm fw-semibold text-black-50">Email</label>
                    <input 
                        className="rounded-2 border border-1 px-2 py-1"
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </div>

                <div className="d-flex flex-column">
                    <label htmlFor="password" className="tag-sm fw-semibold text-black-50">Senha</label>
                    <input 
                        className="rounded-2 border border-1 px-2 py-1"
                        id="password"
                        name="password"
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        />
                </div>

                <Button texto={"CRIE SUA CONTA"} className={"fw-bold"} />
            </div>
        </div>
    )
}