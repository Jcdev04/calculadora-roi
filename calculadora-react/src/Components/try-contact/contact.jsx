import React from "react";
import "./contact.css";
import lalo from "../../img/asesores/lalo.png";
import leonidas from "../../img/asesores/leonidas.png";
import uziel from "../../img/asesores/uziel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <div className="contacto">
      <div className="columna1">
        <h3>Dignita</h3>
        <p>
          Asegura la eficiencia operativa para incrementar la rentabilidad de tu
          negocio. Pionero en el Perú aplicando automatizacion robótica de
          proceso
        </p>
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
            <img src={lalo} alt="Lalo" />
            <div className="nombre-contenedor">
              <span>Lalo</span>
              <FontAwesomeIcon icon={faCircleHalfStroke} />
            </div>
            <div className="redes-sociales">
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-tiktok"></i>
            </div>
          </div>
          <div>
            <img src={leonidas} alt="Leonidas" className="active" />
            <div className="nombre-contenedor">
              <span>Leonidas</span>
              <i className="fa-sharp fa-solid fa-circle-half-stroke"></i>
            </div>
            <div className="redes-sociales">
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-tiktok"></i>
            </div>
          </div>
          <div>
            <img src={uziel} alt="Uziel" />
            <div className="nombre-contenedor">
              <span>Uziel</span>
              <i className="fa-sharp fa-solid fa-circle-half-stroke"></i>
            </div>
            <div className="redes-sociales">
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-tiktok"></i>
            </div>
          </div>
        </div>

        <div className="boton-contenedor">
          <a href="#">
            <button className="boton">Solicitar una Asesoria</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
