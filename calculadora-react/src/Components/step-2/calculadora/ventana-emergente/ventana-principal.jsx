import React, { useState } from "react";

/* REDUX */
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import "../Styles/ventana-principal.css";
import ventanaPrincipalComponent from "./input-component/ventanaPrincipal-input";
import VentanaPorcentaje from "./ventana-porcentajeAutomatizar";
import { reset } from "redux-form";
import VentanaFTE from "./ventana-fte";
import { modificarTabla } from "../../../../Reducers/inputs.js";
import VentanaCostosExtras from "./ventana-costosExtras";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faPlusCircle,
  faUsers,
  faStopwatch,
  faMoneyBillWave,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

const validate = (values) => {
  const errors = {};
  if (!values.nPersonas) {
    errors.nPersonas = "Campo Obligatorio";
  }
  if (!values.salarioPromedio) {
    errors.salarioPromedio = "Campo Obligatorio";
  }
  if (!values.costoImplementacion) {
    errors.costoImplementacion = "Campo Obligatorio";
  }
  if (!values.FTE) {
    errors.FTE = "Campo Obligatorio";
  }
  if (!values.nOperaciones) {
    errors.nOperaciones = "Campo Obligatorio";
  }
  if (!values.nHorasXDia) {
    errors.nHorasXDia = "Campo Obligatorio";
  }
  if (!values.diasLaborables) {
    errors.diasLaborables = "Campo Obligatorio";
  }
  if (!values.tiempoXOperacion) {
    errors.tiempoXOperacion = "Campo Obligatorio";
  }
  if (!values.rendimiento) {
    errors.rendimiento = "Campo Obligatorio";
  }
  return errors;
};

const CSS = {
  principalBox: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    width: "100%",
    height: "100%",
    zIndex: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formCostosROI: {
    maxWidth: 400,
    width: "100%",
    position: "relative",
    boxSizing: "border-box",
    padding: "20px 30px",
    backgroundColor: "white",
    borderRadius: 15,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
  inputs: {
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
    paddingLeft: 7,
    borderStyle: "none",
    boxShadow: "rgba(0,0,0, 0.35) 0px 1px 4px",
  },
  inputStyle: {
    height: 23,
    fontSize: 16,
  },
  btnGeneral: {
    cursor: "pointer",
    padding: "5px 13px",
    borderRadius: 15,
    border: "none",
  },
  btnCerrar: {
    position: "absolute",
    cursor: "pointer",
    right: 6,
    top: 6,
    fontSize: 20,
    color: "#D60718",
  },
  btnRegistrar: {
    height: 30,
    backgroundColor: "#00C922",
    color: "white",
  },
  btnAgregarCostos: {
    backgroundColor: "#43CA40",
    height: "32px",
    fontSize: 16,
    color: "white",
    display: "flex",
    alignItems: "center",
  },
  porcentajeBox: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    gridTemplateColumns: "80px 1fr",
    gridGap: 8,
  },
  porcentajeFTE: {
    backgroundColor: "#7A64FF",
    color: "white",
    width: "100%",
    boxSizing: "border-box",
    paddingLeft: 7,
    margin: 0,
    padding: "0px 5px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputBoxes: {
    margin: "20px 0",
  },
  iconStyle: {
    marginRight: 7,
  },
};
const procesarDatos = (valores) => {
  //Extrayendo los valores del objeto guardado en redux
  let nOpDiarias = valores.FTE.nOpDiarias,
    hTrabajadasXDia = valores.FTE.hTrabajadasXDia,
    dLaborablesXSemana = valores.FTE.dLaborablesXSemana,
    tXOperacionMinutos = valores.FTE.tXOperacionMinutos,
    rateEmpleado = valores.FTE.rateEmpleado;

  //Calculando el FTE
  let FTEresultado =
    (nOpDiarias * tXOperacionMinutos) / (hTrabajadasXDia * 60 * rateEmpleado);
  FTEresultado = FTEresultado.toFixed(2);
  let mantenimiento = 0;
  for (const element of valores.costosExtras) {
    mantenimiento += element.precioExtra;
  }
  //Llenando matriz que irá en la tabla
  const tabla = {};
  /* EXTRAS */
  tabla.FTEresultado = FTEresultado;
  tabla.mantenimiento = mantenimiento;
  // Fila 1
  tabla.fila1_Y1Y5 =
    valores.nPersonas * FTEresultado * (valores.salarioPromedio * 12);
  tabla.fila1_Suma = tabla.fila1_Y1Y5 * 5;
  // Fila 2
  tabla.fila2_Y1Y5 =
    valores.nPersonas * (hTrabajadasXDia * dLaborablesXSemana) * 52;
  tabla.fila2_Suma = tabla.fila2_Y1Y5 * 5;
  // Fila 3
  tabla.fila3_Y1 = valores.costoImplementacion + mantenimiento;
  tabla.fila3_Y2Y5 = mantenimiento;
  tabla.fila3_Suma = tabla.fila3_Y1 + mantenimiento * 4;
  // Fila 4
  tabla.fila4_Y1 = tabla.fila1_Y1Y5 - tabla.fila3_Y1;
  tabla.fila4_Y2Y5 = tabla.fila1_Y1Y5 - mantenimiento;
  tabla.fila4_Suma = tabla.fila4_Y1 + tabla.fila4_Y2Y5 * 4;
  // Fila 5
  tabla.fila5_Y1 = (tabla.fila4_Y1 * 100) / tabla.fila3_Y1;

  tabla.fila5_Y2 =
    ((tabla.fila1_Y1Y5 - mantenimiento + tabla.fila4_Y1) /
      (tabla.fila3_Y1 + mantenimiento)) *
    100;

  tabla.fila5_Y3 =
    (((tabla.fila1_Y1Y5 - mantenimiento) * 2 + tabla.fila4_Y1) /
      (tabla.fila3_Y1 + mantenimiento * 2)) *
    100;

  tabla.fila5_Y4 =
    (((tabla.fila1_Y1Y5 - mantenimiento) * 3 + tabla.fila4_Y1) /
      (tabla.fila3_Y1 + mantenimiento * 3)) *
    100;

  tabla.fila5_Y5 =
    (((tabla.fila1_Y1Y5 - mantenimiento) * 4 + tabla.fila4_Y1) /
      (tabla.fila3_Y1 + mantenimiento * 4)) *
    100;
  return tabla;
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
const dropInWindows = {
  hidden: {
    opacity: 0,
    y: "100px",
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 40,
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
    y: "100vh",
  },
};

function VentanaPrincipal({
  modificarTabla,
  setTrigger,
  handleSubmit,
  dispatch,
  pristine,
  submitting,
  FTEvalue,
  index,
}) {
  const [popUp, setPopUp] = useState(false);
  const [triggerPorcentaje, setTriggerPorcentaje] = useState(false);
  const [popUp2, setPopUp2] = useState(false);
  const [sliderValue, setSliderValue] = useState(FTEvalue.automatizable);
  const [changeValue, setChangeValue] = useState(
    ((FTEvalue.FTE.rateEmpleado - 0.68) / 0.022).toFixed(1)
  );
  const botonCerrar = () => {
    setTrigger(false);
    dispatch(reset("v_principal"));
  };
  const abrirFTE = () => () => {
    setPopUp(!popUp);
  };

  const abrirCostosExtras = () => () => {
    setPopUp2(!popUp2);
  };
  const cerrar = () => () => {
    botonCerrar();
    modificarTabla(index, procesarDatos(FTEvalue));
  };

  const ventanaPrincipal = () => {
    /* EXTRAYENDO los valores de la clase FTE */
    let nOpDiarias = FTEvalue.FTE.nOpDiarias,
      hTrabajadasXDia = FTEvalue.FTE.hTrabajadasXDia,
      tXOperacionMinutos = FTEvalue.FTE.tXOperacionMinutos,
      rateEmpleado = FTEvalue.FTE.rateEmpleado;

    let FTEresultado =
      (nOpDiarias * tXOperacionMinutos) / (hTrabajadasXDia * 60 * rateEmpleado);
    FTEresultado = (FTEresultado * 100).toFixed(2);
    if (isNaN(FTEresultado)) {
      FTEresultado = 0;
    }
    return (
      <motion.div
        variants={dropInWindows}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={CSS.formCostosROI}
      >
        {/* BOTONCERRAR */}
        <div style={{ marginBottom: 10 }}>
          <FontAwesomeIcon
            style={CSS.btnCerrar}
            onClick={cerrar()}
            icon={faCircleXmark}
          />
        </div>
        {/* NPERSONAS */}
        <div style={CSS.inputBoxes}>
          <Field
            style={{ ...CSS.inputs, ...CSS.inputStyle }}
            icono={faUsers}
            iconoEstilo={{ ...CSS.iconStyle, color: "#FC4D19" }}
            name="nPersonas"
            type="number"
            component={ventanaPrincipalComponent}
            placeholder="0"
            title="¿Cuántas personas están actualmente trabajando en esta actividad?"
          />
        </div>
        {/* FTE */}
        <div
          style={{
            ...CSS.inputBoxes,
            backgroundColor: "#5F0DFC",
            borderRadius: 15,
            padding: "10px 15px 15px 15px",
          }}
        >
          <p
            className="title-inputs"
            style={{ marginBottom: 8, marginTop: 0, color: "white" }}
          >
            <FontAwesomeIcon
              style={{ ...CSS.iconStyle, color: "#FCCA3E" }}
              icon={faStopwatch}
            />
            Porcentaje de tiempo invertido diariamente por las personas
          </p>
          <div style={CSS.porcentajeBox}>
            <button
              onClick={abrirFTE()}
              style={{ ...CSS.btnRegistrar, ...CSS.btnGeneral }}
              type="button"
            >
              Registrar
            </button>
            {/* Este input se cambia automáticamente */}
            <div style={CSS.porcentajeFTE} name="FTE" type="number">
              {/* MOSTRANDO el resultado de calcular el FTE */}
              <h1 style={{ fontSize: 22, margin: 0 }}>{FTEresultado}%</h1>
            </div>
          </div>
        </div>
        {/* SALARIOPROMEDIO */}
        <div style={CSS.inputBoxes}>
          <Field
            style={{ ...CSS.inputs, ...CSS.inputStyle }}
            icono={faMoneyBillWave}
            iconoEstilo={{ ...CSS.iconStyle, color: "#05BE50" }}
            name="salarioPromedio"
            type="number"
            component={ventanaPrincipalComponent}
            placeholder="0"
            title="Salario promedio mensual de las personas que realizan esta operación"
          />
          <div></div>
        </div>
        {/* COSTOIMPLEMENTACION */}
        <div style={CSS.inputBoxes}>
          <Field
            style={{ ...CSS.inputs, ...CSS.inputStyle }}
            icono={faRobot}
            iconoEstilo={{ ...CSS.iconStyle, color: "#4427F8" }}
            name="costoImplementacion"
            type="number"
            component={ventanaPrincipalComponent}
            placeholder="0"
            title="Estimación del costo por la implementación del robot"
          />
        </div>
        {/* Porcentaje automatizable */}
        <div
          style={{
            ...CSS.inputBoxes,
            borderRadius: 15,
            padding: "5px 15px 5px 15px",
            backgroundColor: "#0084f0",
            marginBottom: 0,
          }}
        >
          <div style={CSS.porcentajeBox}>
            <button
              onClick={() => setTriggerPorcentaje(true)}
              style={{
                ...CSS.btnRegistrar,
                ...CSS.btnGeneral,
              }}
              type="button"
            >
              Editar
            </button>
            <div style={{ ...CSS.porcentajeFTE, backgroundColor: "#71b4eb" }}>
              {/* Se muestra el porcentaje automatizable */}
              <h1 style={{ fontSize: 15, margin: 0 }}>
                {sliderValue}% Automatizable
              </h1>
            </div>
          </div>
        </div>
        {/* AGREGARCOSTOS */}
        <div
          style={{
            ...CSS.inputBoxes,
            marginTop: 15,
            marginBottom: 15,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            onClick={abrirCostosExtras()}
            style={{
              ...CSS.btnAgregarCostos,
              ...CSS.btnGeneral,
            }}
            type="button"
          >
            <FontAwesomeIcon
              icon={faPlusCircle}
              style={{ color: "#4427F8", marginRight: 5, fontSize: 17 }}
            />
            Agregar costos extras
          </button>
        </div>
        {/* BOTONCALCULAR */}
        <div
          style={{
            marginTop: 10,
            marginBottom: 3,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => procesarDatos(FTEvalue)}
            className="btnCalcular"
            disabled={pristine || submitting}
          >
            Calcular
          </button>
        </div>
      </motion.div>
    );
  };
  const ventanaFTE = () => {
    return (
      <motion.div
        variants={dropInWindows}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div
          style={{
            ...CSS.formCostosROI,
            width: "100%",
            maxWidth: "380px",
            padding: "20px 40px",
          }}
        >
          <VentanaFTE
            Pristine={pristine}
            rendimiento={FTEvalue.FTE.rateEmpleado}
            Submitting={submitting}
            estilos={CSS}
            openVentanaFTE={abrirFTE()}
            changeValue={changeValue}
            setChangeValue={setChangeValue}
            index={index}
          />
        </div>
      </motion.div>
    );
  };

  const ventanaCostosExtras = () => {
    return (
      <motion.div
        variants={dropInWindows}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div
          style={{
            ...CSS.formCostosROI,
            width: 280,
            padding: "10px 20px",
            overflow: "hidden",
          }}
        >
          <VentanaCostosExtras
            index={index}
            actualizarCostosExtras={[...FTEvalue.costosExtras]}
            openVentanaCostosExtras={abrirCostosExtras()}
          />
        </div>
      </motion.div>
    );
  };
  /* FUNCION PRINCIPAL */
  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={CSS.principalBox}
    >
      <form
        style={{ padding: "0px 10px", boxSizing: "border-box" }}
        onSubmit={handleSubmit}
      >
        {popUp && ventanaFTE()}
        {popUp2 && ventanaCostosExtras()}
        {!popUp && !popUp2 && ventanaPrincipal()}
      </form>
      <AnimatePresence>
        {triggerPorcentaje && (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              ...CSS.principalBox,
              zIndex: 500,
              padding: "0px 10px",
              boxSizing: "border-box",
            }}
          >
            <VentanaPorcentaje
              dropIn={dropInWindows}
              setTriggerPorcentaje={setTriggerPorcentaje}
              index={index}
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
const mapStateToProps = (state, ownProps) => {
  // Specify which pieces of state you want to pass down to your component as props
  const { FTEvalue } = ownProps;
  let performance;
  try {
    performance = ((FTEvalue.FTE.rateEmpleado - 0.68) / 0.022).toFixed(1);
  } catch (error) {
    return {};
  }

  return {
    initialValues: {
      nPersonas: FTEvalue.nPersonas,
      salarioPromedio: FTEvalue.salarioPromedio,
      costoImplementacion: FTEvalue.costoImplementacion,
      nOperaciones: FTEvalue.FTE.nOpDiarias,
      nHorasXDia: FTEvalue.FTE.hTrabajadasXDia,
      diasLaborables: FTEvalue.FTE.dLaborablesXSemana,
      tiempoXOperacion: FTEvalue.FTE.tXOperacionMinutos,
      rendimiento: performance,
      automatizable: FTEvalue.automatizable,
    },
  };
};
const mapDispatchToProps = (dispatch) => ({
  modificarTabla: (index, tabla) => dispatch(modificarTabla(index, tabla)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "v_principal",
    validate,
    enableReinitialize: true,
  })(VentanaPrincipal)
);
