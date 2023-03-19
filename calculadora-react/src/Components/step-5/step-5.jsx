import React, { useState } from "react";
import "./step-5.css";
import Copy from "./copy";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import cuartaSeccion from "../../img/cuarta-seccion.svg";
function Step4({ setAsesores }) {
  const [showCopy, setShowCopy] = useState(false);
  return (
    <div className="asesoramiento-personalizado-container">
      <div className="asesoramiento-personalizado">
        <div className="first-section">
          <h3>#5 Prueba de concepto</h3>
          <p>
            ¿Temes a que no te acepten tu proyecto de RPA? Quizás tus
            supervisores aún no han visto el potencial de los robots como tú,
            innovador. Te ofrecemos la oportunidad de experimentar con una{" "}
            <strong>muestra gratuita</strong> cómo nuestros robots pueden
            transformar la{" "}
            <strong>eficiencia y productividad de tu negocio</strong>.<br></br>
            <br></br>
            <span className="copy-eliminar">
              Te dejamos unos mensajes para que puedas{" "}
              <strong>copiar al hacer click en ellos</strong> y se te facilite
              el envío del proyecto. Pero antes... ¡No pierdas más tiempo y{" "}
              <strong>solicita una reunión</strong> con uno de nuestros
              asesores!
            </span>
          </p>
          <div className="button-group-4">
            <button onClick={() => setAsesores(true)}>
              <div className="circle"></div>
              <span>Contáctate con un asesor</span>
            </button>
            <button onClick={() => setShowCopy(true)}>
              <div className="circle"></div>
              <span>Mensajes que te pueden servir</span>
            </button>
          </div>
        </div>
        <div className="second-section">
          <img src={cuartaSeccion} alt="asesoramiento-personalizado" />
        </div>
      </div>
      <AnimatePresence>
        {showCopy && <Copy setShowCopy={setShowCopy} />}
      </AnimatePresence>
    </div>
  );
}

export default Step4;
