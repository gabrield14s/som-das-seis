import { Outlet, NavLink } from "react-router-dom";
import sacramentoIcon from "../assets/sacramento-icon.png"
import "../styles/NavbarStyles.css"
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
      <nav className="nav-container" style={{ padding: "1.2rem" }}>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <div>
          <img src={sacramentoIcon} alt="sacramento icon" style={{height: "3rem"}}/>
        </div>
        <div>
          <ul style={{ listStyle: "none", display: "flex", gap: "50px", margin: 0, padding: 0 }}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ficha"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Ficha
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button className="button-login">Login</button>
        </div>
      </nav >

      <div>
        <Outlet />
      </div>
    </>
  );
}