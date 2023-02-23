import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import "../Styles/ventana-porcentaje.css";
import { connect } from "react-redux";
import { modificarAutomatizable } from "../../../../Reducers/inputs.js";
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
function ventanaPorcentaje({
  dropIn,
  setTriggerPorcentaje,
  modificarAutomatizable,
  index,
  sliderValue,
  setSliderValue,
}) {
  const handleClose = () => {
    console.log(index);
    modificarAutomatizable(index, sliderValue);
    setTriggerPorcentaje(false);
  };
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
        onClick={() => handleClose()}
        style={CSS.btnCerrar}
      />
      {/* RATEEMPLEADO */}
      <div style={{ display: "flex", marginTop: 20 }}>
        <div style={{ width: "100%", zIndex: 2 }}>
          <p
            style={{ marginBottom: 8, lineHeight: 1.2 }}
            className="title-inputs"
          >
            <FontAwesomeIcon icon={faStar} style={{ color: "#FCCA3E" }} />{" "}
            Coloque el porcentaje automatizable del proceso
          </p>
          <input
            type="range"
            step="5"
            min="0"
            max="100"
            name="automatizable"
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
          />
        </div>
        <p className="indicador-slider1">0%</p>
        <p className="indicador-slider2">100%</p>
      </div>
      <div /* style={CSS.valorSlider} */>
        <p style={{ margin: 0 }}>{sliderValue}%</p>
      </div>
    </motion.div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  modificarAutomatizable: (index, porcentaje) =>
    dispatch(modificarAutomatizable(index, porcentaje)),
});
const mapStateToProps = (state, ownProps) => ({
  porcentaje: state.user.procesos[ownProps.index].automatizable,
});

export default connect(mapStateToProps, mapDispatchToProps)(ventanaPorcentaje);
