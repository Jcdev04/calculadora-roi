import React, { Component } from "react";
import { Field } from "redux-form";
import ventanaPrincipalComponent from "./input-component/ventanaPrincipal-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faCalculator,
  faHourglassHalf,
  faCalendarDay,
  faClock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
const CSS = {
  indicadoresSlider: {
    marginTop: -45,
    fontSize: 12,
    width: "100%",
    zIndex: 1,
  },
  valorSlider: {
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)",
    fontSize: 15,
    width: 60,
    borderRadius: 15,
    margin: "auto",
    textAlign: "center",
    color: "#FC4D19",
    fontWeight: "bold",
    marginTop: 50,
    padding: "1px 0px",
  },
  btnListo: {
    marginTop: 10,
    width: 180,
    height: 37,
    fontSize: 17,
    border: "none",
    backgroundColor: "#FC4D19",
    color: "white",
    cursor: "pointer",
  },
};

export default class VentanaFTE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 5.5,
    };
  }

  componentDidMount() {
    this.setState({
      sliderValue: ((this.props.rendimiento - 0.68) / 0.022).toFixed(1),
    });
  }

  render() {
    const { openVentanaFTE, estilos } = this.props;
    const { sliderValue } = this.state;

    const changeValue = (newValue) => {
      this.setState({
        sliderValue: newValue,
      });
    };
    return (
      <>
        {/* REGRESAR */}
        <FontAwesomeIcon
          style={{
            fontSize: 25,
            color: "#D60718",
            cursor: "pointer",
            position: "absolute",
            top: 10,
            left: 10,
          }}
          onClick={openVentanaFTE}
          icon={faChevronCircleLeft}
        />
        {/* NUMERODEOPERACIONESDIARIAS */}
        <div style={estilos.inputBoxes}>
          <Field
            icono={faCalculator}
            iconoEstilo={{ ...estilos.iconStyle, color: "#4427F8" }}
            style={{ ...estilos.inputs, ...estilos.inputStyle }}
            name="nOperaciones"
            type="number"
            component={ventanaPrincipalComponent}
            placeholder="0"
            title="N° de operaciones diarias por persona"
          />
        </div>
        {/* HORASTRABAJADASXDIA */}
        <div style={estilos.inputBoxes}>
          <Field
            icono={faHourglassHalf}
            iconoEstilo={{ ...estilos.iconStyle, color: "#FC4D19" }}
            style={{ ...estilos.inputs, ...estilos.inputStyle }}
            name="nHorasXDia"
            type="number"
            component={ventanaPrincipalComponent}
            placeholder="0"
            title="Horas trabajadas por día"
          />
        </div>
        {/* DIASLABORABLESXSEMANA */}
        <div style={estilos.inputBoxes}>
          <Field
            icono={faCalendarDay}
            iconoEstilo={{ ...estilos.iconStyle, color: "#05BE50" }}
            style={{ ...estilos.inputs, ...estilos.inputStyle }}
            name="diasLaborables"
            type="number"
            component={ventanaPrincipalComponent}
            placeholder="0"
            title="Días laborables por semana "
          />
        </div>
        {/* TIEMPOPOROPERACIONENMINUTOS */}
        <div style={estilos.inputBoxes}>
          <Field
            icono={faClock}
            iconoEstilo={{ ...estilos.iconStyle, color: "#4427F8" }}
            style={{ ...estilos.inputs, ...estilos.inputStyle }}
            name="tiempoXOperacion"
            type="number"
            component={ventanaPrincipalComponent}
            placeholder="0"
            title="Tiempo por operación en minutos"
          />
        </div>
        {/* RATEEMPLEADO */}
        <div style={{ ...estilos.inputBoxes, position: "relative" }}>
          <Field
            icono={faStar}
            value={sliderValue}
            iconoEstilo={{ ...estilos.iconStyle, color: "#FCCA3E" }}
            onChange={(e) => changeValue(e.target.value)}
            step="0.5"
            min="1"
            max="10"
            style={{ width: "100%", zIndex: 2 }}
            name="rendimiento"
            type="range"
            component={ventanaPrincipalComponent}
            title="¿Cómo evalúas el desempeño del encargado en ese proceso?"
          />
          <div style={CSS.indicadoresSlider}>
            <p style={{ position: "absolute", bottom: "45%" }}>1</p>
            <p style={{ position: "absolute", right: 0, bottom: "45%" }}>10</p>
          </div>
          <div style={CSS.valorSlider}>
            <p style={{ margin: 0 }}>{sliderValue}</p>
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <button style={CSS.btnListo}>Listo!</button>
        </div>
      </>
    );
  }
}
