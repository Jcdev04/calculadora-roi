import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion/dist/framer-motion";
import primeraSeccion from "../../img/primera-seccion.svg";
import "./portada.css";
function Portada({ setOption, nombreEmpresa, nombrePersona }) {
  function handleOption(option) {
    setOption(option);
  }
  return (
    <motion.div
      className="area-automatizar-container"
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2 }}
      exit={{ y: "-100vh" }}
    >
      <div className="area-automatizar">
        <div className="area-automatizar-header">
          <h2 className="nombre-persona">
            Hola <strong>{nombrePersona}</strong>
          </h2>
          <h2 className="nombre-empresa">
            De <strong>{nombreEmpresa}</strong>
          </h2>
        </div>
        <div className="area-automatizar-portada">
          <h2>#1 Escoge el área que deseas automatizar</h2>
          <p>
            Nosotros te asesoraremos en el sector donde requieras apoyo para
            generar{" "}
            <strong>tu proyecto RPA más rentable, productivo y seguro.</strong>{" "}
            Asimismo, justificando el{" "}
            <strong> retorno sobre la inversión (ROI)</strong> y mejorando el
            proceso de <strong>{nombreEmpresa}</strong>.
          </p>
        </div>
        <div className="area-automatizar-opciones">
          <h2 className="title">
            Elige{" "}
            <span
              className="hand-pointer-container"
              style={{ position: "relative" }}
            >
              <FontAwesomeIcon className="hand-pointer" icon={faHandPointer} />
            </span>{" "}
            una de las <span>dos opciones</span>
          </h2>
          <section>
            <div className="buttons">
              <button
                onClick={() => handleOption("personalizada")}
                className="button-1"
              >
                <span>A.</span> Decides compartir con nosotros el proceso
                candidato a la automatización.
              </button>
              <button
                onClick={() => handleOption("areas")}
                className="button-2"
              >
                <span>B.</span> Decides que Dignita elija el proceso candidato a
                la automatización.
              </button>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

export default Portada;
