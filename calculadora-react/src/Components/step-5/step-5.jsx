import React from "react";
import quintaSeccion from "../../img/quinta-seccion.svg";
import "./step-5.css";
function Step5({ nombreEmpresa, nombrePersona, setAsesores }) {
  return (
    <div className="implementar-container">
      <div className="implementar">
        <div className="first-section">
          <h3>#5 Implementar</h3>
          <p>
            Ahora sí <strong>{nombrePersona}</strong>, como paso final tendrás
            que enviar una orden de compra a <strong>rpa@dignita.tech</strong> y
            comenzamos con el proyecto.{" "}
            <strong>No pierdas esta gran oportunidad</strong>, durante el
            proceso ya comprobaste que <strong>{nombreEmpresa}</strong> necesita
            de esta propuesta.
          </p>
          <div className="button-group-4">
            <button>
              <div className="circle"></div>
              <span onClick={() => setAsesores(true)}>
                Implementémoslo ahora
              </span>
            </button>
          </div>
        </div>
        <div className="second-section">
          <img src={quintaSeccion} alt="implementación" />
        </div>
      </div>
    </div>
  );
}

export default Step5;
