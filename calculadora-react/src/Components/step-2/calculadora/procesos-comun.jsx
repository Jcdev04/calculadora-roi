import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import "./Styles/proceso-comun.css";
import nanoid from "nano-id";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
const CSS = {
  principalContainer: {
    maxWidth: 650,
    width: "100%",
    margin: "30px auto",
    padding: "10px 35px",
    boxShadow: "0px 5px 16px rgba(0, 0, 0, 0.27)",
    borderRadius: "20px",
    boxSizing: "border-box",
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 30,
    fontWeight: 600,
    color: "#FC4D19",
    margin: "8px 0px",
  },
  subtitulo: {
    fontSize: 15,
    margin: 0,
    marginBottom: 40,
  },
  precios: {
    fontWeight: 400,
    margin: "15px 0",
    color: "#2E2E2E",
    display: "flex",
  },
  boxProceso: {
    borderTop: "1px solid #8D8D8E",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    gap: 15,
  },
};
const dropIn = {
  hidden: {
    opacity: 0,
    y: "-100px",
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 40,
      stiffness: 500,
    },
    y: "0px",
  },
  exit: {
    opacity: 0,
    y: "-15px",
  },
};

class ProcesosComun extends Component {
  render() {
    const { procesos } = this.props;
    let arreglo = procesos.user.procesos.filter((i) => i.procesoComun);
    let sumaTotal = 0;
    return (
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {arreglo.length > 0 && (
          <div style={{ padding: "0 10px" }}>
            <motion.div
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="contenedorPrincipal"
              style={CSS.principalContainer}
            >
              <h1 style={CSS.titulo}>Procesos en común:</h1>
              <p style={CSS.subtitulo}>
                Selecciona los procesos que consideres en común y obtén la suma
                de sus precios
              </p>
              {
                /* MOSTRAMOS todos los valores seleccionados */
                arreglo.map((valores, i) => {
                  let mantenimiento = 0;
                  for (const element of valores.costosExtras) {
                    mantenimiento += element.precioExtra;
                  }
                  let costoImplementacion = valores.costoImplementacion;
                  let total = costoImplementacion + mantenimiento * 4;
                  if (isNaN(total)) {
                    total = 0;
                  }
                  sumaTotal += total;
                  return (
                    <div key={`${nanoid(4)}`} style={CSS.boxProceso}>
                      <h2 className="proceso-comun-name" style={CSS.precios}>
                        {valores.nombreProceso !== ""
                          ? `${valores.nombreProceso}`
                          : `Proceso ${String(i + 1).padStart(3, "0")}`}
                      </h2>
                      <span
                        className="proceso-comun-name"
                        style={{
                          ...CSS.precios,
                          lineHeight: "1.1",
                          marginTop: 18,
                        }}
                      >
                        <FontAwesomeIcon
                          style={{ color: "#43CA40" }}
                          icon={faDollarSign}
                        />
                        {total.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                    </div>
                  );
                })
              }
              <div
                style={{
                  ...CSS.boxProceso,
                  border: "1px solid #FC4D19",
                  borderRadius: 10,
                  marginBottom: 10,
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                }}
              >
                <h2
                  className="proceso-comun-name"
                  style={{
                    ...CSS.precios,
                    color: "#FC4D19",
                    fontWeight: 500,
                  }}
                >
                  Suma total
                </h2>
                <span
                  className="proceso-comun-name"
                  style={{
                    ...CSS.precios,
                    color: "#FC4D19",
                    fontWeight: 500,
                    lineHeight: "1.1",
                    marginTop: 18,
                  }}
                >
                  <FontAwesomeIcon
                    style={{ color: "#43CA40" }}
                    icon={faDollarSign}
                  />
                  {sumaTotal.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    procesos: state,
  };
};

export default connect(mapStateToProps)(ProcesosComun);
