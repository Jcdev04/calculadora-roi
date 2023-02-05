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
  formExito: {
    maxWidth: 250,
    margin: "0 10px",
    width: "100%",
    position: "relative",
    padding: "20px 30px",
    backgroundColor: "white",
    borderRadius: 15,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
function VentanaExito({ setBotonConfirmar }) {
  useEffect(() => {
    setTimeout(() => {
      setBotonConfirmar(false);
    }, 2000);
  }, []);
  return (
    <motion.div
      style={CSS.principalBox}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={CSS.formExito}>
        <FontAwesomeIcon
          style={{ fontSize: "50px", color: "#05BE50" }}
          icon={faCheckCircle}
        />
        <h2
          style={{
            fontWeight: 400,
            fontSize: "23px",
            margin: "20px 0",
            color: "#656565",
            textAlign: "center",
          }}
        >
          Enviado correctamente
        </h2>
      </div>
    </motion.div>
  );
}
export default VentanaExito;
