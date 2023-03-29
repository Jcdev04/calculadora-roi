import React, { useState } from "react";
import { toast } from "react-hot-toast";
import CopyToClipboard from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion/dist/framer-motion";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const correos = [
  {
    id: "copyJefe1",
    text: "Asunto: Propuesta de prueba de concepto para demostrar los beneficios de los robots RPA+IA\n\nEstimado [Nombre del jefe],\n\nEntiendo que puede haber ciertas dudas sobre si los robots RPA+IA son efectivos en nuestra área de trabajo. Sin embargo, me gustaría proponerle una prueba de concepto que le permitirá experimentar de primera mano cómo la implementación de esta tecnología puede transformar la eficiencia de nuestra organización.\n\nHe contactado a un desarrollador externo que es experto en la implementación de robots RPA+IA en empresas de nuestro sector. Él estaría encantado de trabajar con nosotros para demostrar los beneficios de esta tecnología en nuestra área de trabajo.\n\nDurante esta prueba de concepto, un desarrollador experto  hará unas pruebas demostrativas de  cómo los robots pueden realizar esas tareas de manera más rápida y precisa que los humanos. Creo que esta experiencia será muy valiosa para entender cómo la implementación de robots RPA+IA puede mejorar significativamente la eficiencia en nuestra organización.\n\nPor favor, hágamelo saber si está interesado en esta propuesta. Si lo está, estaré encantado de programar una reunión para discutir los detalles y establecer un plan de acción.\n\nAgradezco su consideración.\n\nSaludos cordiales,\n\n[Nombre del remitente]",
    mostrarMas: false,
  },
  {
    id: "copyJefe2",
    text: "Asunto: Organización de la prueba de concepto para la implementación de robots RPA+IA\n\nEstimado [Nombre del jefe],\n\nLe escribo para proponerle una prueba de concepto que transformará la eficiencia de nuestra organización mediante la implementación de robots RPA+IA. Como sabemos, la automatización de tareas repetitivas puede ayudar a mejorar la eficiencia, la productividad y la precisión en nuestra área de trabajo.\n\nPara demostrar cómo los robots pueden ser beneficiosos en nuestra empresa, he contactado a un desarrollador externo experto en la implementación de robots RPA+IA en empresas de nuestro sector. Él estará encantado de trabajar con nosotros en una prueba de concepto que nos permitirá experimentar de primera mano los beneficios que los robots pueden aportar a nuestra empresa.\n\nSi está interesado en esta propuesta, me encantaría programar una reunión para discutir los detalles y establecer un plan de acción.\n\nAgradezco su consideración y espero su respuesta.\n\nSaludos cordiales,\n\n[Nombre del remitente]",
    mostrarMas: false,
  },
  {
    id: "copyJefe3",
    text: "Asunto: Aumente la eficiencia de nuestra organización con una prueba de concepto de robots RPA+IA\n\nEstimado [Nombre del jefe],\n\nMe dirijo a usted para presentarle una propuesta para aumentar la eficiencia de nuestra organización mediante la implementación de robots RPA+IA. Entiendo que puede haber algunas dudas sobre cómo los robots pueden ser efectivos en nuestra área de trabajo, pero creo que una prueba de concepto nos permitirá experimentar de primera mano los beneficios que pueden aportar a nuestra empresa.\n\nPara realizar esta prueba de concepto, he contactado a un desarrollador externo experto en la implementación de robots RPA+IA en empresas de nuestro sector. Él trabajará con nosotros para demostrar cómo los robots pueden ser beneficiosos en nuestra empresa, especialmente en tareas repetitivas y de baja complejidad.\n\nSi está interesado en esta propuesta, por favor hágamelo saber para programar una reunión donde podamos discutir los detalles y establecer un plan de acción.\n\nAgradezco su consideración y espero su respuesta.\n\nSaludos cordiales,\n\n[Nombre del remitente]",
    mostrarMas: false,
  },
];

function CopyJefe({ setShowCopy }) {
  const [copies, setCopies] = useState(correos);
  const [eliminarResto, setEliminarResto] = useState(false);
  const verMas = (id) => {
    const copia = copies.map((copy) => {
      if (copy.id === id) {
        setEliminarResto(!copy.mostrarMas);
        copy.mostrarMas = !copy.mostrarMas;
      }
      return copy;
    });
    setCopies(copia);
  };
  const apagarTodos = () => {
    const copia = copies.map((copy) => {
      copy.mostrarMas = false;
      return copy;
    });
    setCopies(copia);
    setEliminarResto(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="copy-jefe-container"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="copy-jefe"
      >
        <FontAwesomeIcon
          onClick={() => {
            setShowCopy(false);
            apagarTodos();
          }}
          icon={faCircleXmark}
          className="icon-cerrar"
        />
        <div className="container-opciones-pruebas">
          {copies.map((copy) => {
            const copySplit = copy.text.split("\n\n");
            if (!eliminarResto || copy.mostrarMas) {
              return (
                /* Correo con botones */
                <div className="copy-jefe__item" key={copy.id}>
                  {/* Correo sin botones */}
                  <div
                    className="container-copy-jefe"
                    style={{
                      maxHeight: copy.mostrarMas && "410px",
                      overflow: copy.mostrarMas && "auto",
                    }}
                  >
                    {/* Efecto degradado */}
                    <div
                      className="degradado"
                      style={{ display: copy.mostrarMas && "none" }}
                    ></div>
                    <p className="copy-jefe__text">
                      {copySplit.map((text, index) => {
                        let sentence = "sentence" + index;
                        return (
                          <span
                            key={sentence}
                            style={{
                              fontWeight: index === 0 && "600",
                            }}
                          >
                            {text}
                          </span>
                        );
                      })}
                    </p>
                  </div>

                  <div className="botones-prueba-de-concepto">
                    <button
                      className="btn-ver-mas"
                      onClick={() => verMas(copy.id)}
                    >
                      {copy.mostrarMas ? "Mostrar menos" : "Ver más"}
                    </button>
                    <CopyToClipboard text={copy.text}>
                      <button
                        onClick={() => toast.success("Copiado en portapapeles")}
                        className="btn-copy-to-clipboard"
                      >
                        Copiar al portapapeles
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
              );
            }
            return "";
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default CopyJefe;
