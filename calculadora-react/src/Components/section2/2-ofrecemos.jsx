import React from "react";
import chico from "../../img/chico.png";
import "./2-ofrecemos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faArrowUpRightDots,
  faRobot,
  faMoneyBillWheat,
} from "@fortawesome/free-solid-svg-icons";
function Ofrecemos({ handleTranslate }) {
  return (
    <div className="ofrecemos-container">
      <section className="ofrecemos">
        <div className="fondo">
          <div className="circulo"></div>
          <img src={chico} alt="" />
        </div>

        <div className="contenido">
          <h2>Te ofrecemos:</h2>
          <ul>
            <li>
              <FontAwesomeIcon className="icons" icon={faPeopleGroup} />
              <div>
                <h3>Fidelidad del equipo</h3>
                <p>
                  Entendemos la importancia de garantizar la integridad de sus
                  operaciones comerciales, especialmente cuando se trata de
                  automatizar procesos sensibles. Trabajaremos con total
                  fidelidad, estando siempre dentro de nuestras normas éticas
                </p>
              </div>
            </li>

            <li>
              <FontAwesomeIcon className="icons" icon={faArrowUpRightDots} />
              <div>
                <h3>Escalabilidad</h3>
                <p>
                  RPA se puede ampliar o reducir fácilmente para satisfacer las
                  necesidades cambiantes de una empresa, lo que la convierte en
                  una solución flexible y adaptable.
                </p>
              </div>
            </li>

            <li>
              <FontAwesomeIcon className="icons" icon={faRobot} />
              <div>
                <h3>Orquestar</h3>
                <p>
                  Administra tus robots desde un panel para implementar,
                  proteger y gestionar la productividad y rendibilidad de tu
                  empresa
                </p>
              </div>
            </li>

            <li>
              <FontAwesomeIcon className="icons" icon={faMoneyBillWheat} />
              <div>
                <h3>Vender la empresa</h3>
                <p>
                  Administra tus robots desde un panel para implementar,
                  proteger y gestionar la productividad y rendibilidad de tu
                  empresa
                </p>
              </div>
            </li>
          </ul>

          <div className="botones">
            <button onClick={() => handleTranslate(2)} className="empecemos">
              Empecemos
            </button>
            <a href="#generar">
              <button>Leer más</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ofrecemos;
