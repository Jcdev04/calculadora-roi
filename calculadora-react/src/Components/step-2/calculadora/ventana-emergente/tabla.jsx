import React, { useState, useRef } from "react";
import "../Styles/tabla.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rotation } from "../../../../Reducers/inputs";
import {
  faCircleXmark,
  faCircleInfo,
  faEye,
  faPersonDigging,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import VentanaFormula from "./ventana-formula";
import VentanaDatosBrutos from "./ventana-datosBrutos";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
/* SLIDER */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import VentanaMostrarFTE from "./ventana-mostrarFTE";

const CSS = {
  principalBox: {
    padding: "0 15px",
    boxSizing: "border-box",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    width: "100%",
    height: "100%",
    zIndex: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  tabla: {
    maxWidth: 850,
    width: "100%",
    position: "relative",
    backgroundColor: "white",
    borderRadius: 15,
    boxShadow: "-20px -20px 60px #FFDDD3, 20px 20px 60px #dfdfdf",
    overflow: "hidden",
  },
  close: {
    padding: "5px 15px",
    zIndex: 2,
    borderRadius: 20,
    color: "white",
    backgroundColor: "#b81522",
    border: "none",
    cursor: "pointer",
  },
  verDatos: {
    padding: "5px 15px",
    zIndex: 2,
    borderRadius: 20,
    color: "white",
    backgroundColor: "#EE911D",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 5,
  },
  containerBotones: {
    maxWidth: 850,
    zIndex: 2,
    width: "100%",
    display: "flex",
    justifyContent: "end",
    gap: 10,
  },
  moreInfo: {
    color: "#c80b0b",
    cursor: "pointer",
    fontSize: 13,
    marginRight: 5,
  },
  captura: {
    cursor: "pointer",
    backgroundColor: "#43CA40",
  },
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

function Tabla({
  tabla,
  setTriggerClose,
  setBotonError,
  index,
  nombreEmpresa,
  rotation,
}) {
  const [trigger, setTrigger] = useState(false);
  const [triggerDB, setTriggerDB] = useState(false);
  const [triggerFTE, setTriggerFTE] = useState(false);
  const targetRef = useRef(null);
  const content = {
    costoAnual: {
      nombre: "Costo anual",
      formula: "P x F x SA",
      leyenda: [
        "P = número de personas",
        "F = FTE",
        "SA= salario promedio anual",
      ],
    },
    horasAnuales: {
      nombre: "Horas anuales invertidas",
      formula: "P x H x D x 52",
      leyenda: [
        "H = Horas por día",
        "D = Días laborables por semana",
        "P = Número de personas",
        "52 = Semanas en el año",
      ],
    },
    costoRobot: {
      nombre: "Costo total por el robot",
      formula: "I + CE",
      leyenda: [
        "I = Costo por implementación (solo el primer año)",
        "CE = Suma de todos los costos extras",
      ],
    },
    netROI: {
      nombre: "Net ROI",
      formula: "CA - CR",
      leyenda: ["CA = Costo anual actualmente", "CR = Costo anual con el robo"],
    },
    /* ROI ACUMULADO */
    ROIAcumulado1: {
      nombre: "ROI anual acumulado 1",
      formula: "(NR x 100) / CT",
      leyenda: ["NR = Net ROI", "CR = Costo anual con el robot"],
    },
    ROIAcumulado2_5: {
      nombre: "ROI anual acumulado (2-5)",
      formula: "((CA - M) x A + NR) / ((C + (M x A)) x 100)",
      leyenda: [
        "CA = Costo anual actualmente",
        "C = Costo de implementación",
        "M = Mantenimiento",
        "NR = Net ROI",
        "A = año - 1",
      ],
    },
  };
  const [contentMostrarAux, setContentMostrarAux] = useState({});
  let notANumber = true;
  /* CONTENIDO que irá dentro de la fórmula */

  /* VERIFICAR que al momento de procesor todo esté bien */
  if (
    tabla === null ||
    isNaN(tabla.fila1_Y1Y5) ||
    isNaN(tabla.fila2_Y1Y5) ||
    isNaN(tabla.fila5_Y1)
  ) {
    notANumber = false;
    setBotonError(true);
  }
  /* ABRIOCERRAR ventanas */
  /* SetTrigger */
  const setTrigger1 = (content) => () => {
    setTrigger(!trigger);
    setContentMostrarAux({ ...content });
  };
  /* setTriggerDB */
  const setTrigger2 = () => () => {
    setTriggerDB(!triggerDB);
  };
  /*  setTriggerFTE*/
  const setTrigger3 = () => () => {
    setTriggerFTE(!triggerFTE);
  };

  function escribir(valor) {
    return notANumber ? `$${valor.toFixed()}` : "-";
  }
  function escribirHoras(valor) {
    return notANumber ? `${valor.toFixed()}` : "-";
  }
  function escribirPorcentaje(valor) {
    return notANumber ? `${valor.toFixed()}%` : "-";
  }
  const takeScreenshot = async () => {
    try {
      const canvas = await html2canvas(targetRef.current, {
        useCORS: true,
        backgroundColor: null,
      });
      canvas.toBlob(function (blob) {
        saveAs(blob, "tabla-resultados.png");
      });
    } catch (error) {}
  };

  return !triggerFTE ? (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={CSS.principalBox}
    >
      <div style={CSS.containerBotones}>
        {/* TAKE A SCREENSHOT */}
        <button
          className="botones-tabla"
          style={{ ...CSS.verDatos, ...CSS.captura }}
          onClick={takeScreenshot}
        >
          <FontAwesomeIcon className="icono" icon={faCamera} />
          <p className="description-icon">Toma un screenshot</p>
        </button>
        {/* END TAKE A SCREENSHOT */}

        {/* VENTANA MOSTRAR FTE */}
        <button
          className="botones-tabla"
          style={{ ...CSS.verDatos, backgroundColor: "#0084F0" }}
          onClick={setTrigger3()}
        >
          <FontAwesomeIcon className="icono" icon={faPersonDigging} />
          <p className="description-icon">Ver FTE</p>
        </button>
        {/* FIN VENTANA MOSTRAR FTE */}
        {/* VENTANA DATOS BRUTOS */}
        <button
          className="botones-tabla"
          style={CSS.verDatos}
          onClick={setTrigger2()}
        >
          <FontAwesomeIcon className="icono" icon={faEye} />
          <p className="description-icon">Ver datos</p>
        </button>
        {/* FIN VENTANA DATOS BRUTOS */}
        <button
          className="botones-tabla"
          style={{ ...CSS.verDatos, ...CSS.close }}
          onClick={() => {
            setTriggerClose();
            rotation(index);
          }}
        >
          <FontAwesomeIcon className="icono" icon={faCircleXmark} />
          <p className="description-icon">Cerrar</p>
        </button>
      </div>
      <div
        ref={targetRef}
        style={{ ...CSS.tabla, margin: 10 }}
        className="tabla"
      >
        <div className="items">
          <div className="cabecera-box">
            <h2 className="cabecera">Ítems</h2>
          </div>
          <div className="item1 ">
            <p style={{ lineHeight: "1.1" }}>
              <FontAwesomeIcon
                onClick={setTrigger1(content.costoAnual)}
                style={CSS.moreInfo}
                icon={faCircleInfo}
              />
              Costos anuales por las horas dedicadas a realizar este trabajo
            </p>
          </div>
          <div className="item2 ">
            <p style={{ lineHeight: "1.1" }}>
              <FontAwesomeIcon
                onClick={setTrigger1(content.horasAnuales)}
                style={CSS.moreInfo}
                icon={faCircleInfo}
              />
              Horas dedicadas a esta actividad en cada año por todos los
              trabajadores
            </p>
          </div>
          <div className="item3 ">
            <p style={{ lineHeight: "1.1" }}>
              <FontAwesomeIcon
                onClick={setTrigger1(content.costoRobot)}
                style={CSS.moreInfo}
                icon={faCircleInfo}
              />
              Costo total anual por implementación del bot (1 año) mantenimiento
              (+5 años)
            </p>
          </div>
          <div className="item4 net-roi">
            <p style={{ lineHeight: "1.1" }}>
              <FontAwesomeIcon
                onClick={setTrigger1(content.netROI)}
                style={CSS.moreInfo}
                icon={faCircleInfo}
              />
              Net ROI
            </p>
          </div>
          <div className="item5 roi-acumulado">
            <p style={{ lineHeight: "1.1" }}>
              <FontAwesomeIcon
                onClick={setTrigger1(content.ROIAcumulado1)}
                style={{ ...CSS.moreInfo, color: "#FC4D19" }}
                icon={faCircleInfo}
              />{" "}
              <FontAwesomeIcon
                onClick={setTrigger1(content.ROIAcumulado2_5)}
                style={{ ...CSS.moreInfo, color: "FFD848" }}
                icon={faCircleInfo}
              />
              ROI acumulado anual
            </p>
          </div>
        </div>
        <Swiper
          slidesPerView={6}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            240: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 3,
            },
            678: {
              slidesPerView: 4,
            },
            850: {
              slidesPerView: 6,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="cabecera-box">
              <h2 className="cabecera">1 AÑO</h2>
            </div>
            <div className="item1">
              <h3>{escribir(tabla.fila1_Y1Y5)}</h3>
            </div>
            <div className="item2">
              <h3>{escribirHoras(tabla.fila2_Y1Y5)}</h3>
            </div>
            <div className="item3">
              <h3>{escribir(tabla.fila3_Y1)}</h3>
            </div>
            <div className="item4">
              <h3>{escribir(tabla.fila4_Y1)}</h3>
            </div>
            <div className="item5">
              <h3>{escribirPorcentaje(tabla.fila5_Y1)}</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cabecera-box">
              <h2 className="cabecera">2 AÑOS</h2>
            </div>
            <div className="item1">
              <h3>{escribir(tabla.fila1_Y1Y5)}</h3>
            </div>
            <div className="item2">
              <h3>{escribirHoras(tabla.fila2_Y1Y5)}</h3>
            </div>
            <div className="item3">
              <h3>{escribir(tabla.fila3_Y2Y5)}</h3>
            </div>
            <div className="item4">
              <h3>{escribir(tabla.fila4_Y2Y5)}</h3>
            </div>
            <div className="item5">
              <h3>{escribirPorcentaje(tabla.fila5_Y2)}</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cabecera-box">
              <h2 className="cabecera">3 AÑOS</h2>
            </div>
            <div className="item1">
              <h3>{escribir(tabla.fila1_Y1Y5)}</h3>
            </div>
            <div className="item2">
              <h3>{escribirHoras(tabla.fila2_Y1Y5)}</h3>
            </div>
            <div className="item3">
              <h3>{escribir(tabla.fila3_Y2Y5)}</h3>
            </div>
            <div className="item4">
              <h3>{escribir(tabla.fila4_Y2Y5)}</h3>
            </div>
            <div className="item5">
              <h3>{escribirPorcentaje(tabla.fila5_Y3)}</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cabecera-box">
              <h2 className="cabecera">4 AÑOS</h2>
            </div>
            <div className="item1">
              <h3>{escribir(tabla.fila1_Y1Y5)}</h3>
            </div>
            <div className="item2">
              <h3>{escribirHoras(tabla.fila2_Y1Y5)}</h3>
            </div>
            <div className="item3">
              <h3>{escribir(tabla.fila3_Y2Y5)}</h3>
            </div>
            <div className="item4">
              <h3>{escribir(tabla.fila4_Y2Y5)}</h3>
            </div>
            <div className="item5">
              <h3>{escribirPorcentaje(tabla.fila5_Y4)}</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cabecera-box">
              <h2 className="cabecera">5 AÑOS</h2>
            </div>
            <div className="item1">
              <h3>{escribir(tabla.fila1_Y1Y5)}</h3>
            </div>
            <div className="item2">
              <h3>{escribirHoras(tabla.fila2_Y1Y5)}</h3>
            </div>
            <div className="item3">
              <h3>{escribir(tabla.fila3_Y2Y5)}</h3>
            </div>
            <div className="item4">
              <h3>{escribir(tabla.fila4_Y2Y5)}</h3>
            </div>
            <div className="item5">
              <h3>{escribirPorcentaje(tabla.fila5_Y5)}</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cabecera-box">
              <h2 className="cabecera">5 AÑOS EN TOTAL</h2>
            </div>
            <div className="item1">
              <h3>{escribir(tabla.fila1_Suma)}</h3>
            </div>
            <div className="item2">
              <h3>{escribirHoras(tabla.fila2_Suma)}</h3>
            </div>
            <div className="item3">
              <h3>{escribir(tabla.fila3_Suma)}</h3>
            </div>
            <div className="item4">
              <h3>{escribir(tabla.fila4_Suma)}</h3>
            </div>
            <div className="item5">
              <h3>-</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <AnimatePresence>
        {trigger && (
          <VentanaFormula
            contentMostrar={contentMostrarAux}
            setTrigger={setTrigger1()}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {triggerDB && (
          <VentanaDatosBrutos index={index} setTrigger={setTrigger2()} />
        )}
      </AnimatePresence>
    </motion.div>
  ) : (
    <AnimatePresence>
      {triggerFTE && (
        <VentanaMostrarFTE
          dropIn={dropIn}
          index={index}
          setTrigger={setTrigger3()}
          nombreEmpresa={nombreEmpresa}
          tabla={tabla}
        />
      )}
    </AnimatePresence>
  );
}

const mapStateToProps = (state, ownProps) => {
  try {
    return {
      tabla: state.user.procesos[ownProps.index].tabla,
    };
  } catch (error) {
    return { tabla: {} };
  }
};

const mapDispatchToProps = (dispatch) => ({
  rotation: (index) => dispatch(rotation(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabla);
