import React, { useRef, useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import Template from "./input-component/template";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import "./input-component/template.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import LowBattery from "../../../../img/antes-despues/bateria-baja.png";
import FullBattery from "../../../../img/antes-despues/bateria-llena.png";
import imgBefore from "../../../../img/antes-despues/imagen-antes.png";
import imgAfter from "../../../../img/antes-despues/imagen-despues.png";
import { connect } from "react-redux";

const CSS = {
  principalBox: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "0 15px",
    zIndex: 200,
    boxSizing: "border-box",
  },
  containerTabla: {
    position: "relative",
    backgroundColor: "#3E3D3D",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    flexDirection: "column",
    padding: "30px 0px",
    border: "2px solid #FFFFFF",
  },
  title: {
    position: "absolute",
    color: "white",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.17)",
  },
  botonCaptura: {
    cursor: "pointer",
    backgroundColor: "#43CA40",
    padding: "5px 15px",
    zIndex: 2,
    borderRadius: 20,
    color: "white",
    border: "none",
    display: "flex",
    gap: 5,
    alignItems: "center",
  },
  botonClose: {
    display: "flex",
    gap: 5,
    alignItems: "center",
    padding: "5px 15px",
    zIndex: 2,
    borderRadius: 20,
    color: "white",
    backgroundColor: "#b81522",
    border: "none",
    cursor: "pointer",
  },
};
const procesoNormal = {
  heading: "Proceso Normal",
  battery: LowBattery,
  img: imgBefore,
  automatizado: false,
  copies: {
    n1: "Operaciones mensuales en este proceso",
    n2: "Tiempo mensual en este proceso",
    n3: "Tiempo libre mensual para otros procesos",
  },
};
const procesoAutomatizado = {
  heading: "Proceso Automatizado",
  battery: FullBattery,
  img: imgAfter,
  automatizado: true,
  copies: {
    n1: "Disminuye la carga laboral",
    n2: "Rentabiliza tu proceso",
    n3: "Ahorradas, ahora podrán invertir tiempo en otras operaciones",
  },
};

function VentanaMostrarFTE({
  setTrigger,
  dropIn,
  proceso,
  tabla,
  nombreEmpresa,
}) {
  const targetRef = useRef(null);
  const takeScreenshot = async () => {
    try {
      const canvas = await html2canvas(targetRef.current, {
        useCORS: true,
        backgroundColor: null,
      });
      canvas.toBlob(function (blob) {
        saveAs(blob, "mejoras-automatización.png");
      });
    } catch (error) {}
  };
  let tiempoHorasSemanales =
    proceso.FTE.hTrabajadasXDia *
    proceso.FTE.dLaborablesXSemana *
    proceso.nPersonas *
    proceso.tabla.FTEresultado;
  let tiempoHorasMensuales = tiempoHorasSemanales * 4;
  let tiempoHorasAnuales = tiempoHorasSemanales * 52;

  let porcentajeAutomatizar = 1 - proceso.automatizable / 100;
  const fteNormal = {
    nPersonas: proceso.nPersonas,
    totalOperaciones:
      proceso.FTE.nOpDiarias *
      proceso.FTE.dLaborablesXSemana *
      4 *
      proceso.nPersonas,
    tiempoMensual: tiempoHorasMensuales,
    tiempoLibre:
      proceso.FTE.hTrabajadasXDia * proceso.FTE.dLaborablesXSemana * 4 -
      tiempoHorasMensuales,
    tSemanaOp: tiempoHorasSemanales,
    tMesOp: tiempoHorasMensuales,
    tYearOp: tiempoHorasAnuales,
  };
  const fteAutomatizado = {
    tAhorrado: tiempoHorasAnuales - tiempoHorasAnuales * porcentajeAutomatizar,
    tSemanaOp: tiempoHorasSemanales * porcentajeAutomatizar,
    tMesOp: tiempoHorasMensuales * porcentajeAutomatizar,
    tYearOp: tiempoHorasAnuales * porcentajeAutomatizar,
  };
  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={CSS.principalBox}
    >
      <div
        style={{
          maxWidth: 890,
          width: "100%",
          display: "flex",
          justifyContent: "end",
          gap: 10,
        }}
      >
        <button
          className="botones-tabla"
          onClick={takeScreenshot}
          style={CSS.botonCaptura}
        >
          <FontAwesomeIcon className="icono" icon={faCamera} />
          <p className="description-icon">Toma un screenshot</p>
        </button>
        <button
          className="botones-tabla"
          onClick={setTrigger}
          style={CSS.botonClose}
        >
          <FontAwesomeIcon className="icono" icon={faCircleXmark} />
          <p className="description-icon">Cerrar</p>
        </button>
      </div>
      <div style={{ maxWidth: 890, width: "100%" }} ref={targetRef}>
        <div className="container-mostrarFTE" style={CSS.containerTabla}>
          <h2 className="title-mostrarFTE" style={CSS.title}>
            EN EL ACTUAL PROCESO
          </h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              790: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination]}
            style={{
              display: "flex",
              width: "100%",
              overflow: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SwiperSlide
              style={{
                display: "flex",
                width: "100%",
                overflow: "auto",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Template
                fte={fteNormal}
                proceso={procesoNormal}
                nombreEmpresa={nombreEmpresa}
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                width: "100%",
                overflow: "auto",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Template
                fte={fteAutomatizado}
                proceso={procesoAutomatizado}
                nombreEmpresa={nombreEmpresa}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    proceso: state.user.procesos[ownProps.index],
  };
};

export default connect(mapStateToProps)(VentanaMostrarFTE);
