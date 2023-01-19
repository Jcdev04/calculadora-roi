import React, { Component } from "react";
import "../Styles/ventana-inicio.css";
import logodignita from "../../../../img/logodignita.svg";
import login from "../../../../img/login.png";
import digni from "../../../../img/artificial-intelligence-head.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export default class VentanaInicio extends Component {
  render() {
    return (
      <div className="contenedor-login">
        <div className="login">
          <div className="columna1">
            <a href="https://dignita.tech/" className="logo">
              <img src={logodignita} alt="logo Dignita Tech" />
            </a>
            <h2>¡Queremos conocerte!</h2>
            <p>
              <FontAwesomeIcon
                className="icon-triangle"
                icon={faTriangleExclamation}
              />{" "}
              Los datos que se le solicita son para tener una comunicación más
              personalizada. No usaremos ni guardaremos los datos ingresados.
            </p>
            <input
              id="nombreCliente"
              type="text"
              placeholder="Nombres completos"
            />
            <input
              id="nombreEmpresa"
              type="text"
              placeholder="Nombre de la empresa"
            />
            <div className="texto">
              <a href="https://dignita.tech/contacto/">
                ¿Necesitas ayuda? <span>Contáctanos</span>
              </a>
            </div>
            <div className="botones">
              <button className="anterior" /* onclick="cerrar()" */>
                Cancelar
              </button>
              <button className="siguiente" /* onclick="obtenerDatos()" */>
                Siguiente
              </button>
            </div>
          </div>
          <div className="columna2">
            <img className="first" src={login} alt="logo" />
          </div>
          <div className="columna2-responsive">
            <img src={digni} alt="digni-head" />
            <section>
              ¡Hola!
              <br />
              En Dignita queremos conocerte. ¡Cuéntanos!
            </section>
          </div>
        </div>
      </div>
    );
  }
}
