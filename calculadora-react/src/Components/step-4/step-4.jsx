import React from "react";
import "./step-4.css";
import terceraSeccion from "../../img/tercera-seccion.svg";
function Step4() {
  return (
    <div className="asesoramiento-personalizado-container">
      <div className="asesoramiento-personalizado">
        <div className="first-section">
          <h3>#4 Asesoramiento pesonalizado</h3>
          <p>
            Dignita te garantiza la{" "}
            <strong>asesoría y preparación para la presentación</strong> de tu
            proyecto y así lograr que consigas la licitación y puedas{" "}
            <strong> ascender en tu empresa.</strong>
          </p>
        </div>
        <div className="second-section">
          <img src={terceraSeccion} alt="asesoramiento-personalizado" />
        </div>
      </div>
    </div>
  );
}

export default Step4;
