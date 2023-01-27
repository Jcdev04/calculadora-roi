import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion/dist/framer-motion";
import primeraSeccion from "../../img/primera-seccion.svg";
import "./portada.css";
function Portada({ setOption }) {
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
          <h2>
            Hola <strong>Gsus</strong>
          </h2>
          <h2>
            De <strong>Coca Cola</strong>
          </h2>
        </div>
        <div className="area-automatizar-portada">
          <h2>#1 Escoge tu área a automatizar</h2>
          <p>
            Te ayudaremos en el sector donde necesites más apoyo para generar tu
            proyecto RPA para que te salga rentable, aumente la productividad y
            sea un proceso más seguro, asimismo, justificando el retorno sobre
            la inversión (ROI) y sobre todo, mejorando el proceso de{" "}
            <strong>empresa</strong>.
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
                <span>A.</span> Que nos compartas el proceso candidato a
                automatizar
              </button>
              <button
                onClick={() => handleOption("areas")}
                className="button-2"
              >
                <span>B.</span> Que Dignita te recomiende el proceso candidato a
                automatizar
              </button>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

export default Portada;
