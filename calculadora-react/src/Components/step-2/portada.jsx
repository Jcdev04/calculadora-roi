import React from "react";
import "./step-2.css";
import videoFull from "../../img/video-full.svg";
function Portada() {
  return (
    <div className="detalles-procesos-container">
      <div className="detalles-procesos">
        <div className="first-section">
          <h3>#2 Conoce los detalles del proceso</h3>
          <p>
            Calcula las inversiones para saber si la implementación del robot se
            justifica con los números. No queremos que pierdas, queremos que
            empresa sea más productiva. Por eso, estima el resultado del ROI en
            nuestra calculadora que diseñamos exactamente para eso y coloca
            todos los datos importantes.
          </p>
          <div className="button-group-2">
            <a href="">
              <button className="first">Probar calculadora</button>
            </a>
            <a href="">
              <button className="second">Contactar con un asesor</button>
            </a>
          </div>
        </div>
        <div className="second-section">
          <img src={videoFull} alt="video" />
        </div>
      </div>
    </div>
  );
}

export default Portada;
