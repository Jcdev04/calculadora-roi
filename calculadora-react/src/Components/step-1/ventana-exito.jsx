import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion/dist/framer-motion";
const CSS = {
  ventanaExitoContainer: {
    position: "absolute",
    top: 30,
    borderRadius: "20px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    overflow: "hidden",
    width: 300,
    zIndex: 900,
    backgroundColor: "white",
  },
  ventanaExito: {
    backgroundColor: "#14A44D",
    color: "white",
    padding: "1rem",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  description: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
function ventanaExito({ setActivateSuccess, handleTranslate }) {
  useEffect(() => {
    setTimeout(() => {
      setActivateSuccess(false);
    }, 3000);
  }, []);
  return (
    <motion.div
      className="ventanaExitoContainer"
      style={CSS.ventanaExitoContainer}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -500 }}
    >
      <section style={CSS.ventanaExito}>
        <FontAwesomeIcon
          style={{ fontSize: 35 }}
          icon={faCheckCircle}
          className="iconoExito"
        />
        <h1 style={{ fontSize: 25, fontWeight: "400" }}>¡Proceso agregado!</h1>
      </section>
      <section style={CSS.description}>
        <p style={{ alignSelf: "flex-start", fontWeight: "400" }}>
          Ahora puedes comenzar a editar la información de tu proceso en la
          calculadora.
        </p>
        <a>
          <button
            className="exito-button"
            onClick={() => {
              setActivateSuccess(false);
              handleTranslate(3);
              setTimeout(() => {
                const element = document.getElementById("calculator");
                const offsetTop = 100;
                window.scrollTo({
                  top: element.offsetTop + -offsetTop,
                  left: element.offsetLeft,
                  behavior: "smooth",
                });
              }, 300);
            }}
          >
            Ir a la calculadora
          </button>
        </a>
      </section>
    </motion.div>
  );
}

export default ventanaExito;
