import React from "react";
import imagenes from "../imagenes/logo.png";
import "../style/Footer.css";

/* Importando iconos de react */
import {
  AiFillGithub,
  AiFillMail,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { BiCopyright } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footerContainer container-fluid  vh-50    ">
      <div className="   mb-3   ">
        <h2 className="texto_motivador my-5 fw-bolder">Victor Avila</h2>
        {/*         <img
          className="img-fluid "
          style={{
            width: 200,
            height: 200,
          }}
          src={imagenes}
          alt="Logo"
        /> */}
      </div>

      <h2 className="texto_motivador mb-5">
        Aprendiendo y subiendo de nivel un día a la vez.
      </h2>

      <div className=" logos   ">
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/victoravilab27/"
          target="_blank"
        >
          <AiFillLinkedin className="me-3" />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://github.com/VictorBriAvi"
          target="_blank"
        >
          <AiFillGithub className="me-3" />
        </a>
        <a
          rel="noopener noreferrer"
          href="mailto:victor_15_avila@hotmail.es"
          target="_blank"
        >
          <AiFillMail className="me-3" />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send?phone=5491126875506&text=Hola, Nececito mas informacion de tu perfil como desarrollador!"
          target="_blank"
        >
          <BsWhatsapp className="me-3" />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://instagram.com/victoravilab?igshid=ZDdkNTZiNTM="
          target="_blank"
        >
          <AiFillInstagram className="me-5" />
        </a>
        <div className="text-white margin__derechos   ">
          <h6>
            Realizado por <BiCopyright className="hovers" /> Victor Avila
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
