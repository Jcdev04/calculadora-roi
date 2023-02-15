import React, { useState } from "react";
import "./ventana-inicio.css";
import logodignita from "../img/logodignita.svg";
import login from "../img/login.png";
import digni from "../img/artificial-intelligence-head.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

function VentanaInicio({
  setVentanaInicio,
  setNombreEmpresa,
  setNombrePersona,
  nombreEmpresa,
  nombrePersona,
  setAsesores,
}) {
  const [bienvenida, setBienvenida] = useState(false);

  const animacionBienvenida = () => {
    setBienvenida(true);
    setTimeout(() => {
      setVentanaInicio(false);
    }, 3000);
  };
  const cancelar = () => {
    setNombreEmpresa("Empresa");
    setNombrePersona("Usuario");
    animacionBienvenida();
  };
  const continuar = () => {
    if (nombreEmpresa === "" || nombrePersona === "") {
      alert("Por favor ingrese los datos solicitados");
    } else {
      animacionBienvenida();
    }
  };
  return (
    <motion.div
      enter={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contenedor-login"
    >
      <AnimatePresence>
        {bienvenida && (
          <motion.div
            enter={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bienvenida"
          >
            <h1 className="title-bienvenida">Hola, {nombrePersona}</h1>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!bienvenida && (
          <motion.div
            enter={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="login"
          >
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
                value={nombrePersona}
                onChange={(e) => setNombrePersona(e.target.value)}
              />
              <input
                id="nombreEmpresa"
                type="text"
                placeholder="Nombre de la empresa"
                value={nombreEmpresa}
                onChange={(e) => setNombreEmpresa(e.target.value)}
              />
              <div className="texto">
                <a style={{ cursor: "pointer" }}>
                  ¿Necesitas ayuda?{" "}
                  <span onClick={() => setAsesores(true)}>Contáctanos</span>
                </a>
              </div>
              <div className="botones">
                <button className="anterior" onClick={() => cancelar()}>
                  Cancelar
                </button>
                <button className="siguiente" onClick={() => continuar()}>
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
export default VentanaInicio;
