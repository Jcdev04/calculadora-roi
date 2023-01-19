import React from "react";
import "./step-3.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import videoFull from "../../img/video-full.svg";
function Step3() {
  return (
    <div className="construccion-proyecto-container">
      <div className="construccion-proyecto">
        <div className="first-section">
          <h3>#3 Construcción del proyecto</h3>
          <p>
            Calcula las inversiones para saber si la implementación del robot se
            justifica con los números. No queremos que pierdas, queremos que tu{" "}
            <strong>empresa</strong> sea más productiva. Por eso, estima el
            resultado del ROI en nuestra calculadora que diseñamos exactamente
            para eso y coloca todos los datos importantes.
          </p>
          <div className="button-group-3">
            <button>
              <span>Primera vez que implemento RPA</span>
              <ul>
                <FontAwesomeIcon className="icons" icon={faArrowRight} />
              </ul>
            </button>
            <h4>O</h4>
            <button>
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
    </div>
  );
}

export default Step3;
