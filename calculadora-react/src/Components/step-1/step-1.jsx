import React, { useState } from "react";
import Portada from "./portada";
import Areas from "./components/areas";
import AreaPersonalizada from "./components/area-personalizada";
import VentanaExito from "./ventana-exito";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import "./step-1.css";

const CSS = {
  button: {
    alignSelf: "start",
    backgroundColor: "#FC4D19",
    borderRadius: "20px",
    gap: "5px",
    display: "flex",
    padding: "5px 10px",
    fontSize: "16.5px",
    color: "white",
    border: "none",
    marginBottom: "10px",
    transition: "all 0.2s ease-in-out",
  },
};

function Step1({ setActivateSuccess, activateSuccess, handleTranslate }) {
  const [option, setOption] = useState("");
  return (
    <div>
      <AnimatePresence>
        {option === "" && <Portada setOption={setOption} />}
      </AnimatePresence>
      <AnimatePresence>
        {option === "areas" && (
          <Areas
            setOption={setOption}
            setActivateSuccess={setActivateSuccess}
            style={CSS}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {option === "personalizada" && (
          <AreaPersonalizada
            setOption={setOption}
            setActivateSuccess={setActivateSuccess}
            style={CSS}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activateSuccess && (
          <VentanaExito
            setActivateSuccess={setActivateSuccess}
            handleTranslate={handleTranslate}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Step1;
