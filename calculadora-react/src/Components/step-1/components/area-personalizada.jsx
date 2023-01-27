import React, { useState } from "react";
import { connect } from "react-redux";
import { agregarProceso, modificarProceso1 } from "../../../Reducers/inputs";
import "./area-personalizada.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
function AreaPersonalizada({
  procesosCalculadora,
  agregarProceso,
  modificarProceso1,
  setActivateSuccess,
  setOption,
  style,
}) {
  const [procesoPersonalizado, setProcesoPersonalizado] = useState("");
  function enviarProcesoACalculadora() {
    let indexProceso = procesosCalculadora.length;
    if (procesosCalculadora[indexProceso - 1].nombreProceso !== "") {
      agregarProceso();
      modificarProceso1(procesoPersonalizado, indexProceso);
    } else {
      modificarProceso1(procesoPersonalizado, indexProceso - 1);
    }
    setProcesoPersonalizado("");
    setActivateSuccess(true);
  }
  return (
    <div className="area-personalizada-container">
      <section className="area-personalizada">
        <button
          onClick={() => setOption("")}
          className="button-comeback"
          style={style.button}
        >
          <FontAwesomeIcon icon={faArrowUp} />
          Regresar
        </button>
        <h3>
          ¡Escribe el <span>nombre</span> de tu proceso!
        </h3>
        <section>
          <input
            value={procesoPersonalizado}
            onChange={(e) => setProcesoPersonalizado(e.target.value)}
            placeholder="Ej: Conciliación bancaria"
            className="proceso-name"
            type="text"
          />
          <button
            onClick={enviarProcesoACalculadora}
            className="proceso-enviar"
          >
            Enviar
          </button>
        </section>
      </section>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  agregarProceso: () => dispatch(agregarProceso()),
  modificarProceso1: (payload, index) =>
    dispatch(modificarProceso1(payload, index)),
});
const mapStateToProps = (state) => {
  return {
    procesosCalculadora: state.user.procesos,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AreaPersonalizada);
