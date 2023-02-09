import React from "react";
import "./contact.css";
import lalo from "../../img/asesores/lalo.png";
import leonidas from "../../img/asesores/leonidas.png";
import uziel from "../../img/asesores/uziel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronRight,
  faCircleHalfStroke,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="contacto-container">
      <div className="manchas-contenedor">
        <svg
          className="mancha1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="191.88 111.457 627.2 767.277"
        >
          <defs>
            <linearGradient id="b" gradientTransform="rotate(45 .5 .5)">
              <stop offset="0%" stopColor="rgba(255,235,233,0)" />
              <stop offset="100%" stopColor="#838282" />
            </linearGradient>
            <clipPath id="a">
              <path
                fill="currentColor"
                d="M799 715.5Q749 931 540 862T246 646.5Q161 500 209.5 290T479 117q221 37 295.5 210T799 715.5Z"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#a)">
            <path
              fill="url(#b)"
              d="M799 715.5Q749 931 540 862T246 646.5Q161 500 209.5 290T479 117q221 37 295.5 210T799 715.5Z"
            />
          </g>
        </svg>
        <svg
          className="mancha2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="135.5 281.75 710.25 528.75"
        >
          <defs>
            <linearGradient id="b" gradientTransform="rotate(105 .5 .5)">
              <stop offset="0%" stopColor="rgba(255,235,233,0)" />
              <stop offset="100%" stopColor="#838282" />
            </linearGradient>
            <clipPath id="a">
              <path
                fill="currentColor"
                d="M730.5 707Q500 914 257 707t0-352.5q243-145.5 473.5 0t0 352.5Z"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#a)">
            <path
              fill="url(#b)"
              d="M730.5 707Q500 914 257 707t0-352.5q243-145.5 473.5 0t0 352.5Z"
            />
          </g>
        </svg>
        <svg
          className="mancha3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="156.519 138.381 749.085 694.53"
        >
          <defs>
            <linearGradient id="b" gradientTransform="rotate(270 .5 .5)">
              <stop offset="0%" stopColor="rgba(255,235,233,0)" />
              <stop offset="100%" stopColor="#838282" />
            </linearGradient>
            <clipPath id="a">
              <path
                fill="currentColor"
                d="M838.5 672.5Q699 845 507.5 832T214 659.5q-102-159.5-23-359T473.5 147q203.5 46 354 199.5t11 326Z"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#a)">
            <path
              fill="url(#b)"
              d="M838.5 672.5Q699 845 507.5 832T214 659.5q-102-159.5-23-359T473.5 147q203.5 46 354 199.5t11 326Z"
            />
          </g>
        </svg>
        <svg
          className="mancha4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="238.498 134.675 574.162 700.349"
        >
          <defs>
            <linearGradient id="b" gradientTransform="rotate(60 .5 .5)">
              <stop offset="0%" stopColor="rgba(255,235,233,0)" />
              <stop offset="100%" stopColor="#838282" />
            </linearGradient>
            <clipPath id="a">
              <path
                fill="currentColor"
                d="M780 692.5q-58 192.5-241 125T277.5 625q-78.5-125 1-247.5t274.5-215Q748 70 793 285t-13 407.5Z"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#a)">
            <path
              fill="url(#b)"
              d="M780 692.5q-58 192.5-241 125T277.5 625q-78.5-125 1-247.5t274.5-215Q748 70 793 285t-13 407.5Z"
            />
          </g>
        </svg>
      </div>
      <div className="contacto">
        <div className="columna1">
          <div className="encabezado">
            <h3>Dignita</h3>
            <FontAwesomeIcon
              className="fa-solid fa-bars hamburguesa"
              icon={faBars}
              /* onClick="abrirMenu()" */
            />
            <FontAwesomeIcon
              className="fa-solid fa-xmark cerrar"
              icon={faXmark}
            />
          </div>
          <nav className="menu-2">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Área de Cliente</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </nav>
          <p>
            Asegura la eficiencia operativa para incrementar la rentabilidad de
            tu negocio. Pionero en el Perú aplicando automatizacion robótica de
            proceso
          </p>

          <div className="suscribete">
            <h3>Suscríbete</h3>
            <div className="input-contacto">
              <input type="email" placeholder="Tu e-mail" />
              <button>
                <FontAwesomeIcon
                  className="fa-solid fa-chevron-right"
                  icon={faChevronRight}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="columna2">
          <nav className="menu">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Área de Cliente</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </nav>

          <div className="equipo">
            <div>
              <img src={lalo} alt="Lalo" className="img1" />
              <div className="columna2">
                <div className="nombre-contacto">
                  <span>Lalo</span>
                  <FontAwesomeIcon
                    className="fa-sharp fa-solid fa-circle-half-stroke"
                    icon={faCircleHalfStroke}
                  />
                </div>
                <div className="redes-sociales">
                  <FontAwesomeIcon
                    className="fa-brands fa-linkedin-in"
                    icon={faLinkedinIn}
                  />
                  <FontAwesomeIcon
                    className="fa-brands fa-instagram"
                    icon={faInstagram}
                  />
                  <FontAwesomeIcon
                    className="fa-brands fa-tiktok"
                    icon={faTiktok}
                  />
                </div>
              </div>
            </div>
            <div>
              <img src={leonidas} alt="Leonidas" className="active" />
              <div className="columna2">
                <div className="nombre-contacto">
                  <span>Leonidas</span>
                  <FontAwesomeIcon
                    className="fa-sharp fa-solid fa-circle-half-stroke"
                    icon={faCircleHalfStroke}
                  />
                </div>
                <div className="redes-sociales">
                  <FontAwesomeIcon
                    className="fa-brands fa-linkedin-in"
                    icon={faLinkedinIn}
                  />
                  <FontAwesomeIcon
                    className="fa-brands fa-instagram"
                    icon={faInstagram}
                  />
                  <FontAwesomeIcon
                    className="fa-brands fa-tiktok"
                    icon={faTiktok}
                  />
                </div>
              </div>
            </div>
            <div>
              <img src={uziel} alt="Uziel" />
              <div className="columna2">
                <div className="nombre-contacto">
                  <span>Uziel</span>
                  <FontAwesomeIcon
                    className="fa-sharp fa-solid fa-circle-half-stroke"
                    icon={faCircleHalfStroke}
                  />
                </div>
                <div className="redes-sociales">
                  <FontAwesomeIcon
                    className="fa-brands fa-linkedin-in"
                    icon={faLinkedinIn}
                  />
                  <FontAwesomeIcon
                    className="fa-brands fa-instagram"
                    icon={faInstagram}
                  />
                  <FontAwesomeIcon
                    className="fa-brands fa-tiktok"
                    icon={faTiktok}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="boton-contacto">
            <a href="#">
              <button className="boton">Solicitar una Asesoria</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
