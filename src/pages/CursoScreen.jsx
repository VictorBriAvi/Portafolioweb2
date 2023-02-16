import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Estudios } from "../models/Estudios";

const CursoScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  /* Declaracion de variables para obtener el type y el name de la carpeta models/Estudios */
  const { type, name } = Estudios.find((estudio) => estudio.id === id);

  /* Aca estamos tomando las rutas de las carpetas donde estan agregadas las imagenes */
  const path = `http://VictorBriAvi.github.io/PortafolioWeb/assets/${type}-${id}.png`;
  /* const pathSecond = `http://VictorBriAvi.github.io/PortafolioWeb/assets/${type}-${id}-2.png`; */

  /* Aca estamos haciendo la funcion para que retorne a la pagina anterior */
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container row mt-5 my-5 mx-auto">
      <div className="col-8 mb-4  mx-auto w-100  text-center ">
        <h2>{name}</h2>
      </div>
      <div
        id="carouselExampleIndicators"
        className=" col-10 carousel slide mx-auto "
        data-bs-ride="true"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={path} className="d-block w-100" alt="..." />
          </div>

          {/* ACA ESTAMOS PASANDO A UNA SEGUNDA IMAGEN QUE AUN NO ESTA DISPONIBLE */}
          {/*           <div className="carousel-item">
            <img src={pathSecond} className="d-block w-100" alt="..." />
          </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
        <div className="container text-center mt-5">
          <button
            onClick={handleBack}
            className="btn btn-outline-danger  fw-bold"
          >
            Atras
          </button>
        </div>
      </div>
    </div>
  );
};

export default CursoScreen;
