import React from "react";
import ShowMore from "./calculadora/show-more";
import Portada from "./portada";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

function Step2({ setBotonEditar, setBotonEditar2, setIndex, setAsesores }) {
  return (
    <div>
      <Portada setAsesores={setAsesores} />
      <div className="titulo-show-more">
        <section>
          <FontAwesomeIcon icon={faCalculator} />
          <h2>Calculadora ROI</h2>
        </section>
        <a href="#detalles-procesos-container" className="ayuda">
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="icon-exclamation"
          />
          <p>¿Necesitas ayuda?</p>
        </a>
        <p>
          Calcula las inversiones para saber si la implementación del robot se
          justifica con los números.
        </p>
      </div>
      <ShowMore
        setBotonEditar={setBotonEditar}
        setBotonEditar2={setBotonEditar2}
        setIndex={setIndex}
      />
    </div>
  );
}

export default Step2;
