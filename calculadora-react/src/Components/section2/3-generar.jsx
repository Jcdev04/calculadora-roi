import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faCloudMoon,
  faBook,
  faCalendar,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import "./3-generar.css";
function Generar() {
  return (
    <div className="necesitas-container" id="generar">
      <section className="necesitas">
        <h2>¿Tu empresa necesita generar un proyecto RPA?</h2>
        <div className="cards">
          <div className="card">
            <FontAwesomeIcon className="icons" icon={faSackDollar} />
            <h3>Dinero y tiempo invertido</h3>
            <p>
              En procesos y tareas rutinarias que no aportan valor al negocio.
            </p>
          </div>

          <div className="card">
            <FontAwesomeIcon className="icons" icon={faCloudMoon} />
            <h3>Escasa rentabilidad</h3>
            <p>
              Proviene de la cantidad de horas que invierten los empleados en
              hacer sus tareas
            </p>
          </div>

          <div className="card">
            <FontAwesomeIcon className="icons" icon={faBook} />
            <h3>Alto volumen de tareas</h3>
            <p>Y poca previsibilidad y rendimiento en estas tareas.</p>
          </div>
          <div className="card">
            <FontAwesomeIcon className="icons" icon={faCalendar} />
            <h3>Dificultades para alinear</h3>
            <p>
              Los recursos humanos a demandas variables y de agilidad ante
              necesidades imprevistas por la lentitud en el tiempo de respuesta.
            </p>
          </div>

          <div className="card">
            <FontAwesomeIcon className="icons" icon={faCodeBranch} />
            <h3>Poca capacidad de mejora</h3>
            <p>
              Con el sistema productivo actual sin invertir mucho en la
              modificación de los sistemas actuales.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Generar;
