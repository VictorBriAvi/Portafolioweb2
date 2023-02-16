import React from "react";

/* Estilos */

import "../style/Contacto.css";

/* Aca se estan importando  imagenes */

import contato from "../imagenes/Contacto/Social Growth-pana 1.svg";

/* Aca estamos importando los logos */

import {
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Contacto = () => {
  return (
    <div className="container contenedor_contacto">
      <div className="contenedor_imagen_texto">
        <h2 className="mb-0 mt-5 fw-bolder">Si te gusta mi trabajo</h2>

        <img
          src={contato}
          className="imagen_contacto animate__animated animate__bounce "
          alt=""
        />
      </div>

      <div className="contenedor_contactos_redes mb-5">
        <a
          rel="noopener noreferrer"
          href="https://instagram.com/victoravilab?igshid=ZDdkNTZiNTM="
          target="_blank"
          className="color_texto"
        >
          <AiFillInstagram className="me-5" />
        </a>

        <a
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send?phone=5491126875506&text=Hola, Nececito mas informacion de tu perfil como desarrollador!"
          target="_blank"
          className="color_texto"
        >
          <AiOutlineWhatsApp className="me-5" />
        </a>

        <a
          rel="noopener noreferrer"
          href="mailto:victor_15_avila@hotmail.es"
          target="_blank"
          className="color_texto"
        >
          <AiOutlineMail className="me-5" />
        </a>

        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/victoravilab27/"
          target="_blank"
          className="color_texto"
        >
          <AiFillLinkedin className="me-5" />
        </a>

        <a
          rel="noopener noreferrer"
          href="https://github.com/VictorBriAvi"
          target="_blank"
          className="color_texto"
        >
          <AiFillGithub className="me-5" />
        </a>
      </div>
      <h3 className="mt-5 mb-4">Espero que nos contactemos pronto</h3>
      <h2 className="mt-3  mb-5  fw-bolder">Gracias por visitarme</h2>
    </div>
  );
};

export default Contacto;
