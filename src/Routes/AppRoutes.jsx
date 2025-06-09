import { Routes, Route } from "react-router-dom";
import Atributes from "../Pages/Atributes";
import Login from "../Pages/Login";
import Navbar from "../Components/Navbar";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/"element={<Navbar/>}>
                <Route index path="/" element={<Login />} />
                <Route path="/ficha" element={<Atributes />} />
            </Route>
        </Routes>
    );
}