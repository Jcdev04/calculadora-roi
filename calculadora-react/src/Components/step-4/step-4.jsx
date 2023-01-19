import React from "react";
import "./step-4.css";
import terceraSeccion from "../../img/tercera-seccion.svg";
function Step4() {
  return (
    <div className="asesoramiento-personalizado-container">
      <div className="asesoramiento-personalizado">
        <div className="first-section">
          <h3>#4 Asesoramiento personalizado</h3>
          <p>
            Te vamos a preparar personalmente para la presentación de tu
            proyecto para que ganes la licitación y ascender en tu{" "}
            <strong>empresa</strong>.
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
