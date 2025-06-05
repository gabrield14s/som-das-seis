import { Routes, Route } from "react-router-dom";
import Atributes from "../Pages/Atributes";
import Login from "../Pages/Login";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/ficha" element={<Atributes/>} />
        </Routes>
    );
}