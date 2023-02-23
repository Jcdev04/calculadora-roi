import React, { useState } from "react";
import quintaSeccion from "../../img/quinta-seccion.svg";
import "./step-5.css";
import Mensajes from "./mensajes";

const copies1 = [
  {
    id: "copy1-1",
    texto:
      "A los miembros de nuestro equipo les encantará disfrutar de un ambiente laboral más agradable y cómodo con la ayuda de RPA, lo que a su vez aumentará la eficiencia en nuestros procesos empresariales.",
  },
  {
    id: "copy1-2",
    texto:
      "RPA nos permitirá ahorrar en costos y reducir errores en tareas repetitivas, lo que podría tener un impacto significativo en nuestra rentabilidad y escalabilidad como empresa.",
  },
  {
    id: "copy1-3",
    texto:
      "Con la ayuda de RPA, podremos mejorar la seguridad y comodidad en el desempeño de nuestras tareas, lo que a su vez nos ayudará a ser más eficaces y eficientes.",
  },
];
const copies2 = [
  {
    id: "copy2-1",
    texto:
      "Con la ayuda de RPA, podríamos mejorar la organización y el control de nuestras finanzas y tiempo, lo que a su vez nos ayudaría a tomar decisiones más informadas y efectivas.",
  },
  {
    id: "copy2-2",
    texto:
      "La automatización con RPA nos permitiría ahorrar en costos y reducir el margen de error en nuestros procesos empresariales, lo que podría tener un impacto significativo en nuestra rentabilidad y escalabilidad.",
  },
  {
    id: "copy2-3",
    texto:
      "RPA podría ayudarnos a mejorar nuestra eficiencia y productividad, permitiéndonos enfocarnos en actividades de mayor valor y mejorando nuestro rendimiento como organización.",
  },
];
const copies3 = [
  {
    id: "copy3-1",
    texto:
      "Con la ayuda de RPA, podríamos aumentar la productividad en nuestra empresa, lo que a su vez mejoraría nuestro rendimiento y resultados como equipo.",
  },
  {
    id: "copy3-2",
    texto:
      "RPA nos permitiría obtener un mayor conocimiento sobre el retorno de inversión de nuestra empresa, lo que podría ayudarnos a tomar decisiones más informadas y efectivas.",
  },
  {
    id: "copy3-3",
    texto:
      "Con la ayuda de RPA, podríamos conseguir alcanzar nuestros objetivos profesionales y sociales como equipo, lo que a su vez podría mejorar nuestro ambiente laboral y aumentar nuestra satisfacción en el trabajo.",
  },
];

function Step5({ nombreEmpresa, nombrePersona }) {
  const [showMore, setShowMore] = useState([false, false, false]);
  return (
    <div className="implementar-container">
      <div className="implementar">
        <div className="first-section">
          <h3>#5 Envía tu proyecto</h3>
          <p>
            Ahora sí <strong>{nombrePersona}</strong>, como paso final tendrás
            que enviar tu proyecto a <strong>{nombreEmpresa}</strong> para que
            lo evalúen y puedas comenzar a trabajar. En la parte inferior, te
            dejamos unos mensajes para que puedes{" "}
            <strong>copiar al dar click</strong>. ¡Mucha suerte!
          </p>
          <div className="group-mensajes-personalizados">
            <Mensajes
              active={0}
              showMore={showMore}
              setShowMore={setShowMore}
              persona="Para los Miembros de tu equipo"
              copies={copies1}
            />
            <Mensajes
              active={1}
              showMore={showMore}
              setShowMore={setShowMore}
              persona="Para la Junta directiva"
              copies={copies2}
            />
            <Mensajes
              active={2}
              showMore={showMore}
              setShowMore={setShowMore}
              persona="Para el Jefe directo"
              copies={copies3}
            />
          </div>
        </div>
        <div className="second-section">
          <img src={quintaSeccion} alt="implementación" />
        </div>
      </div>
    </div>
  );
}

export default Step5;
