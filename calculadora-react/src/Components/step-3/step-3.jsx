import React, { useState } from "react";
import "./step-3.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import GoogleSlideIcon from "../../img/google-slides-icon.svg";
import videoFull from "../../img/video-full.svg";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import GoogleSlide from "./google-slide";
function Step3({ nombreEmpresa, setAsesores }) {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [nameSlide, setNameSlide] = useState("");
  const popUp = (idSlide, name) => {
    setId(idSlide);
    setNameSlide(name);
    setShow(true);
  };
  return (
    <div className="construccion-proyecto-container">
      <div className="construccion-proyecto">
        <div className="first-section">
          <h3>#3 Construcción del proyecto</h3>
          <div className="comunicar-asesor">
            <h5 onClick={() => setAsesores(true)}>
              <FontAwesomeIcon
                style={{ marginRight: 10 }}
                icon={faTriangleExclamation}
              />
              Para este paso es necesario de que usted se comunique con un
              asesor.
            </h5>
          </div>
          <p>
            Implementa RPA+IA y automatiza tareas repetitivas en
            <strong> {nombreEmpresa}</strong> para mejorar la precisión de
            datos, lo que reduce errores y aumenta el rendimiento y las
            ganancias. Ofrecemos dos opciones de plantillas, A para usuarios
            experimentados en RPA+IA y B para usuarios nuevos. Nuestro objetivo
            es asegurar el éxito del proyecto y brindar una experiencia de
            usuario eficiente.
          </p>
          <div className="button-group-3">
            <button
              onClick={() =>
                popUp(
                  "1JNFECAjSiMTPoGR83y112yi77_jtU4zC55cdQ02c9ow",
                  "Mi primer proyecto RPA"
                )
              }
            >
              <img
                style={{ width: 28 }}
                src={GoogleSlideIcon}
                alt="google slide"
              />
              <span>Primera vez que implemento RPA</span>
              <ul>
                <FontAwesomeIcon className="icons" icon={faArrowRight} />
              </ul>
            </button>
            <h4>O</h4>
            <button
              onClick={() =>
                popUp(
                  "1eEFo3R1w7OPO2EzOAuGSP74iUE4rXIUkmgjT7lZrhww",
                  "Mi proyecto RPA"
                )
              }
            >
              <img
                style={{ width: 28 }}
                src={GoogleSlideIcon}
                alt="google slide"
              />
              <span>Ya he trabajado con robots antes</span>
              <ul>
                <FontAwesomeIcon className="icons" icon={faArrowRight} />
              </ul>
            </button>
          </div>
        </div>
        <div className="second-section">
          <img src={videoFull} alt="video" />
        </div>
      </div>
      <AnimatePresence>
        {show && (
          <GoogleSlide nameSlide={nameSlide} setShow={setShow} id={id} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Step3;
