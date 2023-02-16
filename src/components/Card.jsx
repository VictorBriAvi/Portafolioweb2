import React from "react";
import { Link } from "react-router-dom";

/* Aca se esta llamando las importaciones de Rect-Iconos */
import { TbHandClick } from "react-icons/tb";

const Card = ({ name, type, id, description }) => {
  /* path guarda la direccion de las imagenes */
  const path = `/Portafolioweb2/assets/${type}-${id}.png`;

  return (
    <>
      <div
        className="card_fondo card m-3 p-0 mx-auto  "
        style={{
          width: 200,
        }}
      >
        <img
          src={path}
          className="card-img-top"
          alt={id}
          style={{ width: "100%" }}
        />
        <div className="card-body mb-3">
          <h6 className="card-title">{name}</h6>
          <p className="card-text">{description}</p>
          <Link
            className="boton_vermas btn  fw-bold   position-absolute fixed-bottom  mt-5  "
            to={`/Estudios/${id}`}
          >
            <TbHandClick className="icono_boton_vermas me-5" />
            Ver
            <TbHandClick className="icono_boton_vermas ms-5" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
