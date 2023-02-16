import React from "react";
import { ProyectosJSON } from "../models/ProyectosJSON";
import CardProyecto from "../components/CardProyecto";
import { HiArrowDown } from "react-icons/hi2";

/* Importando imagenes */
import trabajos from "../imagenes/proyectos/trabajosRealizado.svg";

/* importaciones css */
import "../style/Proyectos.css";

const Proyectos = () => {
  /* tengo filtrando la busqueda de los proyectos  de archivo "Proyectos" */
  const proyectosCards = ProyectosJSON.filter(
    (proyectoJSON) => proyectoJSON.type === "p"
  );

  return (
    <div className="contenedor_proyectos container   col-8   mt-2  ">
      <div className="contenedor_texto_proyectos container ">
        <h2 className="my-5 fw-bolder">Mis trabajos mas recientes</h2>
        <img
          src={trabajos}
          className="imagen_trabajos_proyectos animate__animated animate__jello"
          alt=""
        />
        <h5 className="my-5">
          Algunos de los proyectos en los que trabaje. <HiArrowDown />
        </h5>
      </div>

      <div className="row  cards_proyectos   ">
        {proyectosCards.map((proyectoCard) => (
          <CardProyecto key={proyectoCard.id} {...proyectoCard} />
        ))}
      </div>
    </div>
  );
};
/*  */
export default Proyectos;
