import React, { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import ventanaPrincipalComponent from "./input-component/ventanaPrincipal-input";
import { Field } from "redux-form";
import "../Styles/ventana-porcentaje.css";
const CSS = {
  ventanaPorcentaje: {
    maxWidth: 350,
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    padding: "10px 45px",
    borderRadius: 20,
  },
  btnCerrar: {
    position: "absolute",
    top: 10,
    right: 10,
    cursor: "pointer",
    fontSize: 20,
    color: "#d60718",
  },
};
function ventanaPorcentaje({ dropIn, setTriggerPorcentaje, porcentaje }) {
  const [sliderValue, setSliderValue] = useState(porcentaje);
  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={CSS.ventanaPorcentaje}
    >
      <FontAwesomeIcon
        icon={faXmarkCircle}
        onClick={() => setTriggerPorcentaje(false)}
        style={CSS.btnCerrar}
      />
      {/* RATEEMPLEADO */}
      <div style={{ display: "flex", marginTop: 20 }}>
        <Field
          icono={faStar}
          value={sliderValue}
          iconoEstilo={{ marginRight: 5, color: "#FCCA3E" }}
          onChange={(e) => setSliderValue(e.target.value)}
          step="5"
          min="0"
          max="100"
          style={{ width: "100%", zIndex: 2 }}
          name="automatizable"
          type="range"
          component={ventanaPrincipalComponent}
          title="Coloque el porcentaje automatizable del proceso"
        />
        <p className="indicador-slider1">0%</p>
        <p className="indicador-slider2">100%</p>
      </div>
      <div /* style={CSS.valorSlider} */>
        <p style={{ margin: 0 }}>{sliderValue}</p>
      </div>
    </motion.div>
  );
}
export default ventanaPorcentaje;
