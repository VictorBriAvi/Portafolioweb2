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
/* import { Link } from "react-router-dom"; */
import { Link, animateScroll as scroll } from "react-scroll";

import logo from "../imagenes/header/logoVictorAvila2.png";
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
          <Link to="/home">
            <img
              className="img-fluid "
              style={{
                width: 100,
                height: 100,
              }}
              src={logo}
              alt="Logo"
            />
          </Link>

          {/*  aca comienza el inicio     */}
          <div className=" " id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link
                  activeClass="active"
                  to="tecnologias"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Tecnologias
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="proyectos"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Proyectos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="cursos"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Cursos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="contacto"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
