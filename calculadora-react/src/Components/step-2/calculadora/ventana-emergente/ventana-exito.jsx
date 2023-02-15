import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { motion } from "framer-motion/dist/framer-motion";

const CSS = {
  principalBox: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100vw",
    zIndex: 300,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
function VentanaExito({
  setBotonEditar,
  setBotonEditar2,
  setBotonConfirmar,
  rotation,
  index,
}) {
  useEffect(() => {
    setTimeout(() => {
      setBotonConfirmar(false);
    }, 2000);
  }, []);
  const handleClick = () => {
    setBotonEditar2(true);
    setBotonConfirmar(false);
    setBotonEditar(false);
    rotation(index);
  };
  return (
    <motion.div
      style={CSS.principalBox}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="ventana-exito__container">
        <section className="ventana-exito__message">
          <FontAwesomeIcon icon={faCheckCircle} className="icon-exito" />
          <h2 className="ventana-exito__title">Enviado Correctamente</h2>
        </section>
        <p className="ventana-exito__text">
          Asegúrate de completar primero todos los campos antes ver los
          resultados.
        </p>
        <button className="ventana-exito__button" onClick={handleClick}>
          Ver tabla
        </button>
      </div>
    </motion.div>
  );
}
export default VentanaExito;
