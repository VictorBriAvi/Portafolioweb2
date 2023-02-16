import React from "react";
import "../style/Home.css";

import LenguajesProgramacion from "./LenguajesProgramacion";
import Proyectos from "./Proyectos";
import Cursos from "./Cursos";

/* Aca estamos llamando a la imagenes que estan en la pagina home */

import Contacto from "./Contacto";
import Presentacion from "./Presentacion";

const Home = () => {
  return (
    <>
      {/*       <div>
        <LoginScreen />
      </div> */}
      {/* Esta es la presentacion 2 */}
      <div>
        <Presentacion />
      </div>
      {/* Aca estamos agregando todo la parte de lenguajes de programacion */}
      <div className="">
        <LenguajesProgramacion />
      </div>
      {/* Aca se agregan todos los proyectos  */}
      <div className="">
        <Proyectos />
      </div>

      {/* Aca agregamos todos los cursos */}
      <div className="contenedor_cursos ">
        <Cursos />
      </div>

      {/* Aca estamos agregando el contato */}
      <div>
        <Contacto />
      </div>
    </>
  );
};

export default Home;
