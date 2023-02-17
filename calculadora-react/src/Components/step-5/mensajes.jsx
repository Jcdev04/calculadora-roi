import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

function Mensajes({ active, showMore, setShowMore, copies, persona }) {
  function activar() {
    let newShowMore = [...showMore];
    newShowMore = newShowMore.map((item, index) => {
      if (index !== active) {
        return false;
      }
      return !item;
    });
    setShowMore(newShowMore);
  }
  return (
    <section className="enviar-mensaje-container">
      <h4
        className="enviar-mensaje-title"
        style={{ cursor: "pointer", textAlign: "start" }}
        onClick={() => activar()}
      >
        <FontAwesomeIcon
          style={{
            transform: `rotateX(${showMore[active] ? 180 : 0}deg)`,
            transition: "200ms all ease-in-out",
          }}
          icon={faCaretDown}
        />{" "}
        {persona}
      </h4>
      <AnimatePresence>
        {showMore[active] && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              listStyle: "inside",
              paddingLeft: 10,
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            {copies.map((copy) => {
              return (
                <CopyToClipboard key={copy.id} text={copy.texto}>
                  <li
                    className="enviar-mensaje-copy"
                    style={{ cursor: "pointer" }}
                    onClick={() => toast.success("Copiado en portapapeles")}
                  >
                    {copy.texto}
                  </li>
                </CopyToClipboard>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Mensajes;
