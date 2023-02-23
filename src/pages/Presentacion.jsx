import React from "react";

import avatar from "../imagenes/home/Avatar-Maker.svg";

import waveCentral from "../imagenes/home/waveCentral.svg";

import "../style/Presentacion.css";
import "../style/Home.css";

const Presentacion = () => {
  return (
    <>
      <div className=" vh-100 contenedor_home  ">
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
            Hola mi nombre es Victor. Encantado de conocerte.
          </h3>
          <p className="texto_narrativa_descripcion_parrafo mt-5">
            Te doy la bienvenida a mi portafolio web. En el podras contemplar el
            crecimiento de mi dia a dia, conocer las tecnologias que uso, ver
            mis proyectos y algunos cursos certificados.
          </p>
        </div>
      </div>
    </>
  );
};

export default Presentacion;
