import React, { useEffect } from "react";
import video from "../../img/felicidades/confeti.mp4";
import sonido from "../../img/felicidades/diamond-sparkle.mp3";
import { motion } from "framer-motion/dist/framer-motion";
const principalBox = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  zIndex: 300,
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function ventanaFelicitaciones({ setVentanaFelicidades, ventanaFelicidades }) {
  useEffect(() => {
    const audio = new Audio(sonido);
    audio.play();
    console.log("se ejecuto el audio");
    return () => audio.pause();
  }, [ventanaFelicidades]);
  return (
    <motion.div
      style={principalBox}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <video
        autoPlay
        loop
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: "0.5",
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div
        style={{
          position: "absolute",
          inset: "0px",
          margin: "auto",
          width: "300px",
          height: "280px",
          borderRadius: "20px",
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >
        <section
          style={{
            backgroundColor: "#DE6262",
            boxSizing: "border-box",
            width: "100%",
            padding: "20px",
          }}
        >
          <h1 style={{ textAlign: "center", color: "white", fontSize: 28 }}>
            ¡Felicidades!
          </h1>
        </section>
        <section
          style={{ textAlign: "center", boxSizing: "border-box", padding: 20 }}
        >
          <p>
            Has llegado al último paso. Ahora solo falta que envíes el proyecto
            a las personas encargadas de aprobarlo.
          </p>
        </section>
        <button
          className="boton-aceptar"
          style={{
            width: "130px",
            height: "40px",
            borderRadius: 20,
            border: "none",
            backgroundColor: "",
            margin: "10px auto",
            display: "block",
            transition: "all 0.3s ease",
          }}
          onClick={() => setVentanaFelicidades(false)}
        >
          Aceptar
        </button>
      </div>
    </motion.div>
  );
}

export default ventanaFelicitaciones;
