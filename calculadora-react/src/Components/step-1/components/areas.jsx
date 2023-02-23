import React, { useState } from "react";
import SubAreas from "./sub-areas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import "./areas.css";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

function Areas({ setOption, setActivateSuccess, style, areasProcesos }) {
  const [areas, setAreas] = useState(areasProcesos);
  const [areaEspecifica, setAreaEspecifica] = useState(false),
    [index, setIndex] = useState(0);
  const handleDisplayArea = (index) => {
    areas[index].desplegar = !areas[index].desplegar;
    setAreaEspecifica(!areaEspecifica);
  };
  const handleDisplayAreaOnly = () => {
    areas[index].desplegar = !areas[index].desplegar;
    setAreaEspecifica(!areaEspecifica);
    areas[index].subArea.forEach((element) => {
      element.desplegar = false;
    });
  };

  const closeAll = () => {
    areas[index].desplegar = false;
    areas[index].subArea.forEach((subArea) => {
      subArea.desplegar = false;
    });
  };

  return (
    <div className="apoyo-container">
      <div className="apoyo">
        <button
          onClick={() => {
            setOption("");
            closeAll();
          }}
          className="button-comeback"
          style={style.button}
        >
          <FontAwesomeIcon icon={faArrowUp} />
          Regresar
        </button>
        <h3 className="heading">¿En qué área necesitas más apoyo?</h3>
        <p className="description">Lista de procesos</p>
        <AnimatePresence>
          {areas
            .filter((area) => area.desplegar === areaEspecifica)
            .map((area, i) => {
              return (
                <div className="areas-container" key={area.nombre}>
                  {/* BOTÓN */}
                  <motion.button
                    initial={{ height: 0, margin: 0, opacity: 0 }}
                    animate={{
                      height: 40,
                      margin: "0px 0px 15px 0px",
                      opacity: 1,
                    }}
                    transition={{
                      ease: "ease",
                      duration: 0.5,
                    }}
                    exit={{ height: 0, margin: 0, opacity: 0 }}
                    onClick={() => {
                      if (!areaEspecifica) {
                        handleDisplayArea(i);
                        setIndex(i);
                      } else {
                        handleDisplayAreaOnly();
                      }
                    }}
                    className="areas"
                    style={{ backgroundColor: area.desplegar && "#fc4d19" }}
                  >
                    <h4 style={{ color: area.desplegar && "white" }}>
                      {area.nombre}
                    </h4>
                    <FontAwesomeIcon
                      style={{
                        transform: `rotate(${area.desplegar ? "90" : "0"}deg)`,
                        color: area.desplegar && "white",
                      }}
                      className="icon"
                      icon={faChevronCircleRight}
                    />
                  </motion.button>
                  {/* CONTENIDO SUB-AREAS */}
                  <AnimatePresence>
                    {area.desplegar && (
                      <SubAreas
                        thisArea={areas[index]}
                        subArea={area.subArea}
                        setAreas={setAreas}
                        areas={areas}
                        indexArea={i}
                        setActivateSuccess={setActivateSuccess}
                      />
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Areas;
