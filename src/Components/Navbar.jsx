import { Outlet, NavLink } from "react-router-dom";
import sacramentoIcon from "../assets/sacramento-icon.png"
import "../styles/NavbarStyles.css"
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className="nav-container">
        <div className="div-logo">
          <img src={sacramentoIcon} alt="sacramento icon" style={{ height: "3.2rem" }} />
        </div>
        <div>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>
                <img src={sacramentoIcon} alt="sacramento icon" style={{ height: "3.2rem" }} />
            </li>
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
            <li>
              <div>
                <button className="button-login">Login</button>
              </div>
            </li>
          </ul>
        </div>
      </nav >

      <div>
        <Outlet />
      </div>
    </>
  );
}