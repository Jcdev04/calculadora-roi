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
function Step3({ nombreEmpresa }) {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const popUp = (idSlide) => {
    setShow(true);
    setId(idSlide);
  };
  return (
    <div className="construccion-proyecto-container">
      <div className="construccion-proyecto">
        <div className="first-section">
          <h3>#3 Construcción del proyecto</h3>
          <div className="comunicar-asesor">
            <a>
              <FontAwesomeIcon
                style={{ marginRight: 10 }}
                icon={faTriangleExclamation}
              />
              Para este paso es necesario de que usted se comunique con un
              asesor.
            </a>
          </div>
          <p>
            Calcula las inversiones para saber si la implementación del robot se
            justifica con los números. No queremos que pierdas, queremos que tu{" "}
            <strong>{nombreEmpresa}</strong> sea más productiva. Por eso, estima
            el resultado del ROI en nuestra calculadora que diseñamos
            exactamente para eso y coloca todos los datos importantes.
          </p>
          <div className="button-group-3">
            <button onClick={() => popUp("1233232")}>
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
            <button onClick={() => popUp("123456789")}>
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
        {show && <GoogleSlide setShow={setShow} id={id} />}
      </AnimatePresence>
    </div>
  );
}

export default Step3;
