import React, { useRef } from "react";
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
    marginTop: 20,
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
    fontSize: 17,
    zIndex: 2,
    borderRadius: 20,
    color: "white",
    border: "none",
    display: "flex",
    gap: 3,
    alignItems: "center",
  },
  botonClose: {
    display: "flex",
    gap: 3,
    alignItems: "center",
    padding: "5px 15px",
    fontSize: 17,
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
    n1: "Tiempo total de contrato",
    n2: "Tiempo mensual en este proceso",
    n3: "Tiempo libre para otras operaciones",
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
    n3: "Optimiza tu tiempo libre para otras operaciones",
  },
};

function VentanaMostrarFTE({ setTrigger, dropIn, index, proceso }) {
  const targetRef = useRef(null);
  console.log(proceso);
  const takeScreenshot = async () => {
    try {
      const canvas = await html2canvas(targetRef.current, {
        useCORS: true,
        backgroundColor: null,
      });
      canvas.toBlob(function (blob) {
        saveAs(blob, "mejoras-automatización.png");
      });
    } catch (error) {
      console.error(error);
    }
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
        <button onClick={takeScreenshot} style={CSS.botonCaptura}>
          <FontAwesomeIcon icon={faCamera} />
          Toma un screenshot
        </button>
        <button onClick={setTrigger} style={CSS.botonClose}>
          <FontAwesomeIcon icon={faCircleXmark} />
          Cerrar
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
              <Template proceso={procesoNormal} />
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
              <Template proceso={procesoAutomatizado} />
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
