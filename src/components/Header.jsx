import React /*  { useContext }  */ from "react";
/* import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthTypes } from "../types/AuthTypes"; */

/* Estilos */

import "../style/Header.css";

/* Importando iconos de react */
import {
  AiFillGithub,
  AiFillMail,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

import { BsWhatsapp } from "react-icons/bs";

const Header = () => {
  /*   const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext); */

  /*   const handleLogout = () => {
    dispatch({ type: AuthTypes.logout });
    navigate("/PortafolioWeb");
  }; */

  return (
    <div>
      <nav className="header navbar navbar-expand-lg  ">
        <div className="container ">
          {/*           <a className="navbar-brand" href="/">
            Victor Avilaa
          </a> */}
          {/*           <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button> */}
          {/*  aca comienza el inicio     */}
          <div className=" " id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/victoravilab27/"
                  target="_blank"
                  className="logos"
                >
                  <AiFillLinkedin className="" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/VictorBriAvi"
                  target="_blank"
                  className="logos"
                >
                  <AiFillGithub className="" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=5491126875506&text=Hola, Nececito mas informacion de tu perfil como desarrollador!"
                  target="_blank"
                  className="logos"
                >
                  <BsWhatsapp className="" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  rel="noopener noreferrer"
                  href="mailto:victor_15_avila@hotmail.es"
                  target="_blank"
                  className="logos"
                >
                  <AiFillMail className="" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  rel="noopener noreferrer"
                  href="https://instagram.com/victoravilab?igshid=ZDdkNTZiNTM="
                  target="_blank"
                  className="logos"
                >
                  <AiFillInstagram className="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
