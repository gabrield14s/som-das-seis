import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase";
import { useNavigate } from "react-router-dom";

import "../styles/LoginStyles.css"

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log("Usuário logado:", user);
                navigate("/ficha")
                // aqui você pode redirecionar com useNavigate
            })
            .catch((error) => {
                console.error("Erro no login:", error);
            });
    }
    return (
        <div className="container">
            <p className="text-login">Realize o Login para ter Acesso</p>
            <button className="button-login" onClick={handleLogin}>Login</button>
        </div>
    );
}