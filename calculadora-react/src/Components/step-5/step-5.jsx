import React from "react";
import quintaSeccion from "../../img/quinta-seccion.svg";
import "./step-5.css";
function Step5() {
  return (
    <div className="implementar-container">
      <div className="implementar">
        <div className="first-section">
          <h3>#5 Implementar</h3>
          <p>
            Ahora sí <strong>Nombre</strong>, hecho lo anterior, para el paso
            final tendrás que enviar una orden de compra a rpa@dignita.tech y
            comenzamos el proyecto. No pierdas esta oportunidad,{" "}
            <strong>empresa</strong> necesita de esta propuesta de proyecto, ya
            lo comprobaste durante este proceso.
          </p>
          <div className="button-group-4">
            <button>
              <div className="circle"></div>
              <span>Implementémoslo ahora</span>
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
