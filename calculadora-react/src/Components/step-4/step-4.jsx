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
            Para generar más confianza, tus supervisores te pedirán una prueba
            de concepto. En <strong></strong> DignitaTech, te ofrecemos una{" "}
            <strong>muestra gratuita</strong> de nuestra increíble capacidad
            para <strong>automatizar procesos</strong>. Ahora podrán
            experimentar de primera mano cómo los robots pueden{" "}
            <strong>transformar la eficiencia y productividad</strong> de su
            negocio. ¡Aprovecha esta oportunidad para dar el salto hacia la
            automatización y dejar atrás los días de{" "}
            <strong>trabajo monótono y desgastante</strong>!
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
