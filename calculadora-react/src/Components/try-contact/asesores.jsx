import React, { useState } from "react";
import "./asesores.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion/dist/framer-motion";
import {
  faCalendar,
  faCaretDown,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import leonidas from "../../img/asesores/leonidas.png";
import lalo from "../../img/asesores/lalo.png";
import uziel from "../../img/asesores/uziel.png";
import peru from "../../img/paises/peru.svg";
import argentina from "../../img/paises/argentina.svg";
import bolivia from "../../img/paises/bolivia.svg";
import canada from "../../img/paises/canada.svg";
import chile from "../../img/paises/chile.svg";
import colombia from "../../img/paises/colombia.svg";
import costaRica from "../../img/paises/costa-rica.svg";
import india from "../../img/paises/india.svg";
import mexico from "../../img/paises/mexico.svg";
import panama from "../../img/paises/panama.svg";
import republicaDominicana from "../../img/paises/republica-dominicana.svg";
import spain from "../../img/paises/spain.svg";
import suiza from "../../img/paises/suiza.svg";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Asesores({ setAsesores }) {
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container-asesores"
    >
      <div className="asesores">
        <FontAwesomeIcon
          onClick={() => setAsesores(false)}
          icon={faCircleXmark}
          className="icon-x"
        />
        <div>
          <h3 className="asesor-title">
            Te recomendamos elegir un asesor según tu país
          </h3>
          <p className="asesor-subtitle">
            Y si no encuentras el tuyo, siéntete libre de escoger a cualquiera
            de los 3
            <span role="img" aria-label="smiley face">
              😁
            </span>
          </p>
        </div>
        <section className="Leonidas-container">
          <img
            className="asesor-contact"
            src={leonidas}
            alt="leonidas imagen"
          />
          <div className="Leonidas">
            <FontAwesomeIcon
              onClick={() => setDrop1(!drop1)}
              className="icon"
              icon={faCaretDown}
              style={{ transform: `rotate(${drop1 ? -180 : 0}deg)` }}
            />
            {drop1 && (
              <div className="container-paises">
                <img src={peru} alt="" />
                <img src={chile} alt="" />
                <img src={panama} alt="" />
                <img src={bolivia} alt="" />
                <img src={costaRica} alt="" />
              </div>
            )}
          </div>
          <div>
            <section>
              <h4>Leonidas</h4>
              <img src={peru} alt="" />
            </section>
            <span className="container-social-media">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/leonidasyauri/"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                target="_blank"
                href="https://doodle.com/bp/leonidasyuriyaurivillanueva/reunion-de-conexion"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faCalendar} />
              </a>
            </span>
          </div>
        </section>
        <section className="uziel-container">
          <img className="asesor-contact" src={uziel} alt="Uziel imagen" />
          <div className="Uziel">
            <FontAwesomeIcon
              onClick={() => setDrop2(!drop2)}
              className="icon"
              icon={faCaretDown}
              style={{ transform: `rotate(${drop2 ? -180 : 0}deg)` }}
            />
            {drop2 && (
              <div className="container-paises">
                <img src={mexico} alt="" />
                <img src={colombia} alt="" />
                <img src={republicaDominicana} alt="" />
                <img src={argentina} alt="" />
                <img src={spain} alt="" />
              </div>
            )}
          </div>
          <div>
            <section>
              <h4>Uziel</h4>
              <img src={mexico} alt="" />
            </section>
            <span className="container-social-media">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/uzielsoto/"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                target="_blank"
                href="https://doodle.com/bp/uzielsotohernandez/agenda-de-reunion"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faCalendar} />
              </a>
            </span>
          </div>
        </section>
        <section className="uziel-container">
          <img
            className="asesor-contact"
            src={lalo}
            alt="Jose Eduardo imagen"
          />
          <div className="Jose-Eduardo">
            <FontAwesomeIcon
              onClick={() => setDrop3(!drop3)}
              className="icon"
              icon={faCaretDown}
              style={{ transform: `rotate(${drop3 ? -180 : 0}deg)` }}
            />
            {drop3 && (
              <div className="container-paises">
                <img src={mexico} alt="" />
                <img src={canada} alt="" />
                <img src={india} alt="" />
                <img src={suiza} alt="" />
              </div>
            )}
          </div>
          <div>
            <section>
              <h4>Jose Eduardo</h4>
              <img src={mexico} alt="" />
            </section>
            <span className="container-social-media">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/jose-eduardo-de-la-guardia-c-a78b9678/"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                target="_blank"
                href="https://doodle.com/bp/joseeduardodelaguardiacivallero/reunin-de-conexin-"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faCalendar} />
              </a>
            </span>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default Asesores;
