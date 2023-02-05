import React from "react";
import "../Styles/ventana-error.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
const VentanaError = ({ setBotonError, setTrigger2, rotation, index }) => {
  const handleClick = () => {
    setBotonError(false);
    setTrigger2(false);
    rotation(index);
  };
  return (
    <div className="ventana-error" style={{ zIndex: 300 }}>
      <div className="ventana-error__container">
        <section className="ventana-error__message">
          <FontAwesomeIcon icon={faCircleExclamation} className="icon-error" />
          <h2 className="ventana-error__title">¡Ups!</h2>
        </section>
        <p className="ventana-error__text">
          Al parecer no ha completado todos los campos. Inténtelo de nuevo.
        </p>
        <button className="ventana-error__button" onClick={() => handleClick()}>
          Aceptar
        </button>
      </div>
    </div>
  );
};
export default VentanaError;
