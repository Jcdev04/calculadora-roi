import React from "react";
import "./step-4.css";
import cuartaSeccion from "../../img/cuarta-seccion.svg";
function Step4({ setAsesores }) {
  return (
    <div className="asesoramiento-personalizado-container">
      <div className="asesoramiento-personalizado">
        <div className="first-section">
          <h3>#4 Prueba de concepto</h3>
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
          <div className="button-group-4">
            <button onClick={() => setAsesores(true)}>
              <div className="circle"></div>
              <span>Hagámoslo ahora</span>
            </button>
          </div>
        </div>
        <div className="second-section">
          <img src={cuartaSeccion} alt="asesoramiento-personalizado" />
        </div>
      </div>
    </div>
  );
}

export default Step4;
