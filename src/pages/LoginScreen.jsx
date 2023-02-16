import React from "react";

import "../style/LoginScreen.css";

/* Aca se estan importando las imagenes */
import imagenPortafolio from "../imagenes/Login/Portfolio Update-cuate 1.svg";
/* import laser from "../imagenes/Login/laser.svg"; */

const LoginScreen = () => {
  /*   const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate(); */

  /*   const handleLogin = () => {
    dispatch({ type: AuthTypes.login });

    navigate("/");
  }; */

  return (
    <div className="loginScreen_contenedor mx-3 mt-5 vh-100">
      {/* Aca estamos agregando un contenedor para el texto  */}
      <div className="contenedor_texto animate__animated animate__slideInLeft">
        <h2 className="mb-5 fw-bolder">Bienvenidos</h2>
        <h3>A mi portafolio web</h3>
      </div>

      <div className="contenedor_imagen_boton">
        <img src={imagenPortafolio} className="imagen_portafolio " alt="" />
        {/*         <button className="btns" onClick={handleLogin}>
          Entrar
        </button> */}
      </div>
    </div>
  );
};

export default LoginScreen;
