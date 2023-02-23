import React from "react";
import Lenguajes from "../components/CardLenguajeProgramacion";
import { Skills } from "../models/Skills";
import "../style/Lenguajes.css";
import manosNotebook from "../imagenes/home/Hand coding-bro 1.svg";

import LoginScreen from "./LoginScreen";

const LenguajesProgramacion = ({ id }) => {
  const lenguajes = Skills.filter((curso) => curso.type === "s");
  return (
    <>
      <div className="container contendor_lenguajes   " id={id}>
        <div className="contenedor_imagenes mt-5">
          <h4 className="texto_lenguajes">Te presento algunas</h4>
          <h2 className="texto_lenguajes my-5 fw-bold">
            Tecnologias estudiadas
          </h2>
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
