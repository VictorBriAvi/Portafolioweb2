import React, { lazy, Suspense, useEffect, useState } from "react";

import { Estudios } from "../models/Estudios";
import "../style/Cursos.css";
import queryString from "query-string"; //Esto se saca con el siguiente comando yarn add query-string
import { useLocation, useNavigate } from "react-router-dom";

/* Aca estoy importando las imagenes que se van a usar en la pagina */
import imagenEstudiando from "../imagenes/home/estudiando.svg";

/* Iconos react */
import { BsSearch } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import { GiClick } from "react-icons/gi";
import Loading from "../components/Loading";

/* Aca estoy importando los componentes con lazy */
/* import Card from "../components/Card"; */
const Card = lazy(() => import("../components/Card"));

const Cursos = ({ id }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { q = "" } = queryString.parse(location.search);

  /* 
    boton se encargara de mostrar y cerrar
    inputValue se encarga de lo que usuario escriba
     estudios se encarga de mostrar el contenido en arreglos
  */
  const [boton, setBoton] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [inputValue, setInputValue] = useState(q);
  const [estudios, setEstudios] = useState([]);

  /* Aca estamos filtrando a los cursos que sean type igual a " c " */
  const cursos = Estudios.filter((curso) => curso.type === "c");

  /* Aca estamos tomando el valor de boton en caso de que sea false o true (Esto seria para abrir y cerrar) */
  const botonBuscar = () => {
    setBoton(!boton);
  };

  /* Aca se esta tomando o escrito en el input */
  const handleChange = (e) => {
    const value = e.target.value;

    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${inputValue}`);
  };

  const getCursos = () => {
    if (inputValue.trim() !== "") {
      const value = inputValue.toLocaleLowerCase();
      const newValue = Estudios.filter((estudio) =>
        estudio.name.toLocaleLowerCase().includes(value)
      );
      setEstudios(newValue);
    } else {
      setEstudios([]);
    }
  };

  useEffect(() => {
    getCursos();
  }, [q]);

  const mostrar = () => {
    setShowAll(!showAll);
  };
  return (
    <Suspense fallback={<Loading />}>
      <div id={id} className="contenedor_pagina_cursos mx-3   text-center  ">
        <div className="contenedor_texto   mb-5">
          <h2 className="primer_texto  mt-5 mb-5 fw-bolder ">
            Te invito a conocer mi formacion como desarrollador.
          </h2>

          <div className="contenedor_imagen mt-5">
            <img
              src={imagenEstudiando}
              className="imagen_estudiando animate__animated animate__flash"
              alt=""
            />
            <h2 className="mt-5">Algunos de mis estudios certificados </h2>
          </div>
        </div>

        {/* Aca estoy se realiza el input del search */}
        <div className="container    mb-3">
          <div className="input-groups">
            <button
              className="learn-more contenedor_boton"
              onClick={botonBuscar}
            >
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">
                {!boton ? "Buscar " : "Cerrar"}
                {!boton ? (
                  <BsSearch className="icono_lupa_buscar" />
                ) : (
                  <GiCancel className="icono_lupa_buscar" />
                )}
              </span>
            </button>

            {/* Aca mostramos el input de busqueda de cursos */}
            {boton && (
              <>
                <form onSubmit={handleSubmit} className="mt-5">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder=" ¿ Necesitas buscar algun curso en especifico ?"
                      value={inputValue}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingInput">
                      ¿ Necesitas buscar algun curso en especifico ?
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn boton_buscador mt-5 mb-5"
                  >
                    Buscar
                    <BsSearch className="icono_lupa_buscar" />
                  </button>
                </form>
                <div className="row">
                  {/* <h2>Results : {estudios.length}</h2> */}
                  {estudios.length === 0 && (
                    <div className="alert alert-info text-center ">
                      No se encontro ningun resultado, por favor prueba otra vez
                    </div>
                  )}

                  {estudios.map((estudio) => (
                    <Card key={estudio.id} {...estudio} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Cuando boton sea false  mostra las cards (Tarjeta de los cursos) de todos los cursos*/}
        {!boton && (
          <>
            {!showAll ? (
              <div className="row justify-content-md-center">
                {cursos.slice(0, 5).map((curso) => (
                  <Card key={curso.id} {...curso} />
                ))}
              </div>
            ) : (
              <div className="row justify-content-md-center">
                {cursos.map((curso) => (
                  <Card key={curso.id} {...curso} />
                ))}
              </div>
            )}
            <button className="btn  boton_mostrar" onClick={mostrar}>
              {!showAll ? "Ver mas" : "Ver menos"}
              <GiClick className="icono_mostrasmas" />
            </button>
          </>
        )}
      </div>
    </Suspense>
  );
};

export default Cursos;
