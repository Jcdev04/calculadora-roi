import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import Procesos from "./procesos";

function SubAreas({
  thisArea,
  subArea,
  setAreas,
  areas,
  indexArea,
  setActivateSuccess,
}) {
  const [subAreaEspecifica, setSubAreaEspecifica] = useState(false),
    [index, setIndex] = useState(0);

  const handleDisplaySubArea = (index) => {
    thisArea.subArea[index].desplegar = !subArea[index].desplegar;
    setSubAreaEspecifica(!subAreaEspecifica);
  };
  function handleDisplaySubAreaOnly() {
    thisArea.subArea[index].desplegar = !subArea[index].desplegar;
    setSubAreaEspecifica(!subAreaEspecifica);
  }
  return (
    <motion.div
      className="sub-area"
      initial={{ height: "auto" }}
      transition={{ duration: 1 }}
      exit={{ height: 0 }}
    >
      <AnimatePresence>
        {subArea
          .filter((subArea) => subArea.desplegar === subAreaEspecifica)
          .map((subArea, i) => {
            return (
              <div className="sub-area__item" key={subArea.key}>
                <motion.button
                  className="sub-area__item__title"
                  style={{
                    backgroundColor: subArea.desplegar && "#e42118",
                    color: subArea.desplegar && "white",
                  }}
                  initial={{
                    opacity: 0,
                    height: 0,
                    marginBottom: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    marginBottom: 10,
                  }}
                  transition={{
                    ease: "easeInOut",
                    duration: 1,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    marginBottom: 0,
                  }}
                  onClick={() => {
                    if (!subAreaEspecifica) {
                      setIndex(i);
                      handleDisplaySubArea(i);
                    } else {
                      handleDisplaySubAreaOnly();
                    }
                  }}
                >
                  <h3>{subArea.nombre}</h3>
                  <FontAwesomeIcon
                    style={{
                      transform: `rotate(${subArea.desplegar ? "90" : "0"}deg)`,
                    }}
                    className="icon"
                    icon={faChevronCircleRight}
                  />
                </motion.button>
                <AnimatePresence>
                  {subArea.desplegar && (
                    <Procesos
                      setAreas={setAreas}
                      areas={areas}
                      procesos={subArea.proceso}
                      indexArea={indexArea}
                      indexSubArea={i}
                      setActivateSuccess={setActivateSuccess}
                    />
                  )}
                </AnimatePresence>
              </div>
            );
          })}
      </AnimatePresence>
    </motion.div>
  );
}

export default SubAreas;
