import React from "react";
import { useState } from "react";
import "../style/Lenguajes.css";

const Lenguajes = ({ id, name, type }) => {
  const path = `/Portafolioweb2/assets/skills/${type}-${id}.svg`;

  const [image, setImage] = useState(false);
  const handleImg = () => {
    setImage(!image);
  };
  return (
    /* Tarteja react */
    <div className="container col col-lg-4 mb-4 lenguajes ">
      <div className=" p-3 " style={{ width: "10rem" }}>
        <img
          onClick={handleImg}
          src={path}
          className="card-img-top "
          alt="..."
          style={{ height: "100px" }}
        />
      </div>
    </div>
  );
};

export default Lenguajes;
