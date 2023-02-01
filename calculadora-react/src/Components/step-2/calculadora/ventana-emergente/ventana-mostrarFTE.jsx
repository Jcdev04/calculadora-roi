import React, { useRef } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import Template from "./input-component/template";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
const CSS = {
  principalBox: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "0 15px",
    zIndex: 5,
    boxSizing: "border-box",
  },
  containerTabla: {
    maxWidth: 890,
    width: "100%",
    position: "relative",
    backgroundColor: "white",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    flexDirection: "column",
    padding: "20px 30px",
  },
  botonCerrar: {
    alignSelf: "flex-start",
  },
};
function VentanaMostrarFTE({ setTrigger }) {
  const targetRef = useRef(null);
  const takeScreenshot = async () => {
    try {
      const canvas = await html2canvas(targetRef.current);
      canvas.toBlob(function (blob) {
        saveAs(blob, "mejoras-automatización.png");
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div style={CSS.principalBox} ref={targetRef}>
      <div
        style={{
          maxWidth: 890,
          width: "100%",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <button onClick={takeScreenshot}>
          <FontAwesomeIcon icon={faCamera} />
          Toma un screenshot
        </button>
        <button onClick={setTrigger} style={CSS.botonCerrar}>
          Cerrar
        </button>
      </div>
      <div style={CSS.containerTabla}>
        <h2>EN EL ACTUAL PROCESO</h2>
        <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          <Template />
          <Template />
        </div>
      </div>
    </motion.div>
  );
}

export default VentanaMostrarFTE;
