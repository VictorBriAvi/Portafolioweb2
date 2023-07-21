import React from "react";

import avatar from "../imagenes/home/Avatar-Maker.svg";

import waveCentral from "../imagenes/home/waveCentral.svg";

import "../style/Presentacion.css";
import "../style/Home.css";

const Presentacion = () => {
  return (
    <div>
      <div className="contenedor_home  ">
        <div className="contenedor_imagen_avatar ">
          <h2 className="texto_avatar fw-bolder my-5 ">
            Desarrollador Frontend y Backend
          </h2>
          <h2 className="texto_avatar x ">Creciendo Contastemente</h2>
          <img
            src={avatar}
            className="home_avatar animate__animated animate__fadeInDown "
            alt=""
          />
        </div>
      </div>

      {/*  Estamos agregando la descripcion de mi persona */}
      <div className="vh-50 ">
        <div className="contenedor_home_segundaparte">
          <h3 className="fw-bolder mb-2  texto_narrativa_descripcion mt-5">
            ¡Hola! Soy Víctor,
          </h3>
          <p className="texto_narrativa_descripcion_parrafo mt-5">
            un desarrollador apasionado con experiencia en React, JavaScript, C#
            .NET y SQL Server. En mi portafolio web, encontrarás proyectos
            destacados y algunos cursos certificados. Siempre en busca de
            desafíos emocionantes y soluciones innovadoras. ¡Explora mi trabajo
            y conoce más sobre mis habilidades en el desarrollo web!
            ¿Colaboramos en un proyecto? ¡Contáctame!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentacion;
