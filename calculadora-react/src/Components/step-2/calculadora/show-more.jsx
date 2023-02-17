import React from "react";
import { connect } from "react-redux";
import { toast } from "react-hot-toast";
import {
  agregarProceso,
  eliminarProceso,
  modificarProceso1,
  modificarCheck,
  rotation,
} from "../../../Reducers/inputs";
import "./Styles/show-more.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCaretDown,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import ProcesosComun from "./procesos-comun";

import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

const CSS = {
  button: {
    border: "none",
    borderRadius: "15px",
    width: "80px",
    height: "26px",
    margin: "0 2.5px",
    fontSize: "15px",
    cursor: "pointer",
    transition: "all ease-in 100ms",
  },
  iconos: {
    border: "none",
    borderRadius: "15px",
    height: "28px",
    margin: "0 2.5px",
    fontSize: "17px",
    cursor: "pointer",
    transition: "all ease-in 100ms",
    color: "#232323",
  },
};
const dropIn = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 40,
      stiffness: 500,
    },
    height: "auto",
  },
  exit: {
    opacity: 0,
  },
};

function ShowMore({
  agregarProceso,
  eliminarProceso,
  modificarProceso1,
  modificarCheck,
  rotation,
  procesos,
  /* propsHandle */
  setBotonEditar,
  setBotonEditar2,
  setIndex,
}) {
  const todosProcesos = procesos.user.procesos;
  /* console.log(todosProcesos) */
  let objeto = {};

  /* EDITAR */
  const editar = (i) => () => {
    setBotonEditar(true);
    /* Función para obtener el index del botón presionado */
    setIndex(i); //will log the index of the clicked item
  };
  /* ELIMINAR */
  const eliminar = (i) => () => {
    if (todosProcesos.length > 1) {
      eliminarProceso(i);
    } else {
      alert("No se puede eliminar el último proceso");
    }
  };
  /* DESPLEGAR */
  const desplegar = (i, objeto) => () => {
    setBotonEditar2(true);
    setIndex(i); //will log the index of the clicked item
    rotation(i);
    toast(
      (t) => (
        <span style={{ display: "flex", alignItems: "center" }}>
          <span>
            Para una correcta estimación del ROI, es necesario contactarse con
            un consultor de RPA. ¡Contáctanos!
          </span>
          <button
            style={{
              borderRadius: "15px",
              color: "white",
              backgroundColor: "#fc4d19",
              border: "none",
              padding: "5px 10px",
            }}
            onClick={() => toast.dismiss(t.id)}
          >
            Dismiss
          </button>
        </span>
      ),
      {
        icon: "👀",
      },
      {
        duration: 6000,
      }
    );
  };
  return (
    <div className="principal-container" id="calculator">
      <AnimatePresence>
        {todosProcesos.map((data, i) => {
          let numeroProceso = `Proceso ${String(i + 1).padStart(3, "0")}`;
          objeto = { ...data };
          return (
            <motion.div
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, height: 0 }}
              className="proceso"
              style={{ padding: "0 10px" }}
              key={objeto.id}
            >
              {/*NOMBRE DEL PROCESO*/}
              <div className="CRUD-container">
                {/* 1 */}
                {/* NOMBRE */}
                <input
                  className="nombreProceso"
                  placeholder={numeroProceso}
                  type="text"
                  value={objeto.nombreProceso}
                  onChange={(e) => modificarProceso1(e.target.value, i)}
                />
                {/* 2 */}
                <div
                  className="botonesCRUD"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifySelf: "end",
                  }}
                >
                  {/* EDITAR */}
                  <button
                    onClick={editar(i)}
                    className="botonIcono"
                    style={{ ...CSS.iconos, backgroundColor: "#ffd555" }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    style={CSS.button}
                    className="btnEditar"
                    onClick={editar(i)}
                  >
                    Editar
                  </button>
                  {/* ELIMINAR */}
                  <button
                    onClick={eliminar(i)}
                    className="botonIcono"
                    style={{ ...CSS.iconos, backgroundColor: "#FF0015" }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button
                    style={CSS.button}
                    className="btnEliminar"
                    onClick={eliminar(i)}
                  >
                    Eliminar
                  </button>
                  {/* DESPLEGAR */}

                  <FontAwesomeIcon
                    onClick={desplegar(i, objeto.rotation)}
                    icon={faCaretDown}
                    style={{
                      color: "#FC4D19",
                      fontSize: 35,
                      cursor: "pointer",
                      margin: "0px 10px",
                      transform: objeto.rotation
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: `all 200ms ease-in-out`,
                    }}
                  />
                </div>
                {/* 3 */}
              </div>
              {/* SELECCIONAR */}
              <div className="checkbox-wrapper-13">
                <input
                  className="c1-13"
                  type="checkbox"
                  checked={objeto.procesoComun}
                  onChange={() => modificarCheck(i)}
                />
                <label htmlFor="c1-13"></label>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* AGREGAR PROCESO */}
      <div className="agregar-proceso">
        <button
          style={{ fontSize: 17, display: "flex", alignItems: "center" }}
          onClick={agregarProceso}
        >
          <FontAwesomeIcon
            style={{ color: "#4427F8", marginRight: 5 }}
            icon={faPlusCircle}
          />
          Agregar Proceso
        </button>
      </div>
      <ProcesosComun />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    procesos: state,
  };
};

const mapDispatchToProps = (dispatch) => ({
  agregarProceso: () => dispatch(agregarProceso()),
  eliminarProceso: (index) => dispatch(eliminarProceso(index)),
  modificarProceso1: (payload, index) =>
    dispatch(modificarProceso1(payload, index)),
  modificarCheck: (index) => dispatch(modificarCheck(index)),
  rotation: (index) => dispatch(rotation(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
