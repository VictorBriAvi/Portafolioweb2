import React from "react";
import Lenguajes from "../components/CardLenguajeProgramacion";
import { Skills } from "../models/Skills";
import "../style/Lenguajes.css";
import manosNotebook from "../imagenes/home/Hand coding-bro 1.svg";

import LoginScreen from "./LoginScreen";

const LenguajesProgramacion = () => {
  const lenguajes = Skills.filter((curso) => curso.type === "s");
  return (
    <>
      <div className="container contendor_lenguajes   ">
        <div className="contenedor_imagenes mt-5">
          {/*         <h2 className="texto_lenguajes fw-bolder">
            Lenguajes de Programacion
          </h2> */}
          <LoginScreen />
          {/*           <img
            src={manosNotebook}
            alt=""
            className="manosnotebook animate__animated animate__bounceIn"
          /> */}
          <h2 className="texto_lenguajes  fw-bold">Lenguajes estudiados</h2>
        </div>

        <div className="row   mt-5 mb-5  ">
          {lenguajes.map((lenguaje) => (
            <Lenguajes key={lenguaje.id} {...lenguaje} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LenguajesProgramacion;
