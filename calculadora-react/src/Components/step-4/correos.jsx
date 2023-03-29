import React from "react";
import "./correos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion/dist/framer-motion";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
function Correos({ setPopUp, messagePopUp }) {
  const mesageSplit = messagePopUp.split("\n\n");
  console.log(mesageSplit);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="correos-container"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="correos-content"
      >
        <div className="correos-botones-auxiliares">
          <CopyToClipboard text={messagePopUp}>
            <button
              className="btn_copiarElCorreo"
              style={{ cursor: "pointer" }}
              onClick={() => toast.success("Copiado en portapapeles")}
            >
              Copiar correo
            </button>
          </CopyToClipboard>
          <FontAwesomeIcon
            onClick={() => setPopUp(false)}
            icon={faXmarkCircle}
            style={{ cursor: "pointer", fontSize: 20, color: "#d60718" }}
          />
        </div>
        <div className="correos-text">
          {mesageSplit.map((item, index) => {
            let word = "oracion" + index;
            return (
              <p key={word} style={{ fontWeight: index == 0 && "600" }}>
                {item}
                <br />
                <br />
              </p>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Correos;
