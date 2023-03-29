import React from "react";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// Buttons
import ButtonTemplate from "./buttonTemplate";
import imgRPA from "../../../img/Procesos/img-rpa.svg";
import imgIA from "../../../img/Procesos/img-ia.svg";
import {
  agregarProceso,
  modificarProceso1,
  eliminarProceso,
} from "../../../Reducers/inputs";
import { connect } from "react-redux";

function Procesos({
  procesos,
  agregarProceso,
  modificarProceso1,
  eliminarProceso,
  procesosCalculadora,
  setActivateSuccess,
}) {
  const agregarProcesoHandler = (nombreProceso, index) => {
    setActivateSuccess(true);
    let indexProceso = procesosCalculadora.length;
    procesos[index].added = !procesos[index].added;
    if (procesosCalculadora[indexProceso - 1].nombreProceso !== "") {
      agregarProceso();
      modificarProceso1(nombreProceso, indexProceso);
    } else {
      modificarProceso1(nombreProceso, indexProceso - 1);
    }
  };
  const deshacer = (index) => {
    procesos[index].added = !procesos[index].added;
    agregarProceso();
    eliminarProceso(procesosCalculadora.length - 1);
  };
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      transition={{ duration: 0.5 }}
      exit={{ height: 0 }}
      className="proceso-container"
    >
      <AnimatePresence>
        {procesos.map((proceso, i) => {
          return (
            <motion.div
              className="proceso-container__item"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{
                ease: "ease",
                duration: 0.5,
              }}
              exit={{ opacity: 0 }}
              key={proceso.key}
            >
              {proceso.added ? (
                <FontAwesomeIcon
                  className="icon"
                  style={{ color: "#cf0000" }}
                  icon={faMinusCircle}
                  onClick={() => deshacer(i)}
                />
              ) : (
                <FontAwesomeIcon
                  className="icon"
                  icon={faPlusCircle}
                  onClick={() => agregarProcesoHandler(proceso.nombre, i)}
                />
              )}
              <h3
                style={{
                  textDecoration: !proceso.added ? "none" : "line-through",
                }}
              >
                {proceso.nombre}
                <span
                  className="buttons-process"
                  style={{ display: "flex", gap: "5px" }}
                >
                  <ButtonTemplate
                    text="RPA"
                    image={imgRPA}
                    backGroundColor="linear-gradient(95.66deg, #399BE2 10.95%, #0783DB 27.63%, #1892DF 44.46%, #64D5DB 66.35%, #BBEDEF 86.64%)"
                  />
                  {proceso.hasOwnProperty("IA") && (
                    <ButtonTemplate
                      text="IA"
                      image={imgIA}
                      backGroundColor="linear-gradient(90.21deg, #FFA57A 0.22%, #F8905F 49%, #FF6060 99.85%)"
                    />
                  )}
                </span>
              </h3>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  agregarProceso: () => dispatch(agregarProceso()),
  eliminarProceso: (index) => dispatch(eliminarProceso(index)),
  modificarProceso1: (payload, index) =>
    dispatch(modificarProceso1(payload, index)),
});
const mapStateToProps = (state) => {
  return {
    procesosCalculadora: state.user.procesos,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Procesos);
