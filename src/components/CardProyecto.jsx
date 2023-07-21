import React, { useState } from "react";

import "../style/Proyectos.css";
/* PresentacionProyecto seria igual a card, solo que card de los proyectos es diferente diseno */
const PresentacionProyecto = ({ id, url, type, descripcion, name }) => {
  const path = `/Portafolioweb2/assets/proyectoImagenes/${type}-${id}.png`;
  const [event, setEvent] = useState(false);

  /* Estas funciones es para saber cuando el mouse entro y salio del div  */
  const handleMouseEnter = () => {
    setEvent(true);
  };
  const handleMouseLeave = () => {
    setEvent(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="card  text-white col-lg-4  m-5 p-0 fondo_contenedor_carProyecto "
    >
      {/* En Esta operacion ternario que tenemos si es false muestra la imagen 
      del proyecto, si es true muestra el bloque con la direccion de link */}
      {!event ? (
        <img src={path} className="card-img  imagen_false" alt={id} />
      ) : (
        <>
          <img src={path} className="card-img" alt={id} />

          <div className="card_fondo_true card-img-overlay text-white   text-center    ">
            <h5 className=" card-title  ">{name.toUpperCase()}</h5>
            <p className="card-text mb-4">{descripcion}</p>
            <button type="button" className="btn button_card_true ">
              <a
                className="text-white"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                Visita mis proyectos
              </a>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PresentacionProyecto;
