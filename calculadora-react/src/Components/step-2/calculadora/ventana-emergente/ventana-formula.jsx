import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import "../Styles/ventana-formula.css";
import nanoid from "nano-id";
import { motion } from "framer-motion/dist/framer-motion";

const CSS = {
  formFormula: {
    maxWidth: 350,
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
    gap: 5,
    overflow: "hidden",
  },
  principalBox: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },
  cabecera: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
    top: 0,
    color: "white",
    backgroundColor: "#FC4D19",
    height: 70,
  },
  formula: {
    marginTop: 80,
    marginBottom: 20,
    width: "100%",
  },
  formulaEscribir: {},
  leyenda: {},
  boton: {},
};
const dropIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 50,
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
  },
};
export default class VentanaFormula extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { setTrigger, contentMostrar } = this.props;
    return (
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={CSS.principalBox}
      >
        <div style={CSS.formFormula}>
          {/* cabecera */}
          <div style={CSS.cabecera}>
            <FontAwesomeIcon
              style={{ color: "#FFD848", fontSize: 25, marginRight: 10 }}
              icon={faCalculator}
            />
            <h2 style={{ fontsize: 20 }}>¿Cómo se calcula?</h2>
          </div>
          {/* formula */}
          <div style={CSS.formula}>
            <div style={{ marginBottom: 15 }}>
              <h3
                style={{
                  fontSize: 16,
                  color: "#FC4D19",
                  textDecoration: "underline",
                }}
              >
                {contentMostrar.nombre}:
              </h3>
            </div>
            <div style={{ textAlign: "center", color: "#373838" }}>
              <h3 style={{ fontSize: 18 }}>{contentMostrar.formula}</h3>
            </div>
          </div>
          {/* Leyenda */}
          <ul
            className="leyenda"
            style={{ alignSelf: "start", paddingLeft: 10 }}
          >
            {contentMostrar.leyenda.map((element, i) => {
              return (
                <li key={`${nanoid(2)}`}>
                  <p style={{ fontSize: 15 }}>{element}</p>
                </li>
              );
            })}
          </ul>

          {/* botón */}

          <button className="btnCerrar" onClick={setTrigger} style={CSS.boton}>
            Cerrar
          </button>
        </div>
      </motion.div>
    );
  }
}
