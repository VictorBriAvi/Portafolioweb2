import React from "react";
import "../style/Home.css";

import LenguajesProgramacion from "./LenguajesProgramacion";
import Proyectos from "./Proyectos";
import Cursos from "./Cursos";

/* Aca estamos llamando a la imagenes que estan en la pagina home */

import Contacto from "./Contacto";
import Presentacion from "./Presentacion";
import Header from "../components/Header";
import LoginScreen from "./LoginScreen";

const Home = () => {
  return (
    <>
      {/*       <div>
        <LoginScreen />
      </div> */}
      {/* Esta es la presentacion 2 */}
      <Header />

      <div>
        <Presentacion />
      </div>
      <div>
        <LoginScreen />
      </div>
      {/* Aca estamos agregando todo la parte de lenguajes de programacion */}
      <div id="tecnologias">
        <LenguajesProgramacion />
      </div>
      {/* Aca se agregan todos los proyectos  */}
      <div id="proyectos">
        <Proyectos />
      </div>

      {/* Aca agregamos todos los cursos */}
      <div>
        <Cursos id="cursos" />
      </div>

      {/* Aca estamos agregando el contato */}
      <div>
        <Contacto id="contacto" />
      </div>
    </>
  );
};

export default Home;
