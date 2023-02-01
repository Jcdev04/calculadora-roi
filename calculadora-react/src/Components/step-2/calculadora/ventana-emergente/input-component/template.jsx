import React from "react";
import "./template.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faCalendarDays,
  faCheck,
  faBriefCase,
} from "@fortawesome/free-solid-svg-icons";
function Template() {
  return (
    <div className="template-container">
      <img className="image-cara" src="" alt="" />
      <div className="empresa-container">
        <h3>
          Empresa: <span>XXXX</span>
        </h3>
        <img src="" alt="" />
        <p>Responsables del proceso</p>
        <div className="empleado-tiempo">
          <section className="primero">
            <h3>2 Años</h3>
            <p>Tiempo Total de Contrato</p>
          </section>
          <section className="segundo">
            <h3>192 hrs</h3>
            <p>Tiempo mensual en este proceso</p>
          </section>
          <section className="tercero">
            <h3>30 hrs.</h3>
            <p>Tiempo libre para otras operaciones</p>
          </section>
        </div>
      </div>
      <div className="icons-productivity">
        <section>
          <FontAwesomeIcon icon={faCalendar} />
          <p>4 meses</p>
        </section>
        <section>
          <FontAwesomeIcon icon={faCalendarDays} />
          <p>120 dias</p>
        </section>
        <section>
          <FontAwesomeIcon icon={faClock} />
          <p>2000 hrs</p>
        </section>
      </div>
    </div>
  );
}

export default Template;
