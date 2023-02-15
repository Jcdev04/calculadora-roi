import React from "react";
import "./step-2.css";
import videoFull from "../../img/video-full.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
function Portada({ setAsesores }) {
  function handleClick() {
    const element = document.getElementById("calculator");
    const offsetTop = 100;
    window.scrollTo({
      top: element.offsetTop + -offsetTop,
      left: element.offsetLeft,
      behavior: "smooth",
    });
  }
  return (
    <div
      className="detalles-procesos-container"
      id="detalles-procesos-container"
    >
      <div className="detalles-procesos">
        <div className="first-section">
          <h3>#2 Conoce cada detalle del proceso</h3>
          <div className="comunicar-asesor">
            <a onClick={() => setAsesores(true)}>
              <FontAwesomeIcon
                style={{ marginRight: 10 }}
                icon={faTriangleExclamation}
              />
              Para este paso es necesario de que usted se comunique con un
              asesor.
            </a>
          </div>
          <p>
            Calcula las inversiones para saber si la implementación del robot se
            justifica con tu presupuesto. Dignita no quiere que pierdas,
            queremos que <strong> tu empresa sea más productiva.</strong> Por
            eso, <strong>estima el resultado del ROI</strong> utilizando la
            <strong>calculadora</strong> que nosotros ponemos a tu total
            disposición de manera <strong>gratuita</strong>.
          </p>
          <div className="button-group-2">
            <button className="first" onClick={() => handleClick()}>
              Probar calculadora
            </button>
            <button onClick={() => setAsesores(true)} className="second">
              Contactar con un asesor
            </button>
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
