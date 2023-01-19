import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

function SubAreas({ subArea }) {
  const [areas, setAreas] = useState(subArea);
  const [areaEspecifica, setAreaEspecifica] = useState(false),
    [index, setIndex] = useState(0);
  const handleDisplayArea = (index) => {
    const newAreas = [...areas];
    newAreas[index].desplegar = !newAreas[index].desplegar;
    setAreas(newAreas);
    setAreaEspecifica(!areaEspecifica);
  };
  const handleDisplayAreaOnly = () => {
    const newAreas = [...areas];
    newAreas[index].desplegar = !newAreas[index].desplegar;
    setAreaEspecifica(!areaEspecifica);
    setAreas(newAreas);
  };
  return (
    <motion.div>
      {subArea
        .filter((subArea) => subArea.desplegar === areaEspecifica)
        .map((subArea, index) => {
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
                    handleDisplayArea(index);
                    setIndex(index);
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
              {desplegar && <SubAreas subArea={area.subArea} />}
            </div>
          );
        })}
    </motion.div>
  );
}

export default SubAreas;
