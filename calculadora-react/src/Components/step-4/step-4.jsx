import React, { useState } from "react";
import quintaSeccion from "../../img/quinta-seccion.svg";
import "./step-4.css";
import Mensajes from "./mensajes";

const copies1 = [
  {
    id: "copy1-1",
    texto:
      "Asunto: Solicitud de revisión del proyecto de implementación de RPA\n\nEstimado equipo\n\nEspero que se encuentren muy bien. Les escribo para solicitar su ayuda en la revisión del proyecto de implementación de RPA que hemos estado trabajando. Como saben, este proyecto es muy importante para nuestra organización y estamos comprometidos en asegurarnos de que sea un éxito.\n\nEn este sentido, necesitamos que revisen el análisis ROI y el aumento de productividad que hemos presentado para el proyecto. Estos son aspectos críticos que necesitamos demostrar para que se apruebe el proyecto y se nos otorgue más tiempo para trabajar en actividades de mayor impacto.\n\nComo equipo, sabemos que tenemos las habilidades y la experiencia necesarias para lograr los objetivos de este proyecto y hacerlo realidad. Sin embargo, necesitamos asegurarnos de que nuestro análisis y estrategia sean sólidos y estén bien fundamentados.\n\nPor favor, tomen el tiempo para revisar cuidadosamente los documentos que hemos preparado y háganme saber si tienen alguna pregunta o sugerencia para mejorar el proyecto. Como siempre, agradecemos su colaboración y compromiso con nuestro equipo y con la organización en general.\n\nQuedo a la espera de su respuesta.\n\nSaludos cordiales,\n\n[Su nombre]",
  },
  {
    id: "copy1-2",
    texto:
      "Asunto: Se solicita su colaboración en la revisión del análisis ROI y el aumento de productividad para el proyecto de implementación de RPA\n\nEstimados colegas,\n\nEspero que se encuentren muy bien. Les escribo para pedirles que me ayuden con la revisión del análisis ROI y el aumento de productividad que hemos presentado para el proyecto de implementación de RPA. Como saben, este proyecto es muy importante para la organización y necesitamos asegurarnos de que todo esté en orden antes de presentarlo a los gerentes.\n\nNecesitamos demostrar que este proyecto traerá beneficios significativos a la empresa y que se justifica el tiempo y los recursos que se invertirán en él. Es por eso que su opinión es fundamental. Confiamos en que sus habilidades y experiencia serán de gran ayuda para pulir el análisis y mejorar la estrategia.\n\nLes agradezco de antemano su colaboración y compromiso con este proyecto. Quedo a la espera de su respuesta.\n\nCordialmente,\n\n[Su nombre]",
  },
  {
    id: "copy1-3",
    texto:
      "Asunto: ¿Pueden revisar el análisis ROI y el aumento de productividad para el proyecto de RPA?\n\nEstimado equipo,\n\nComo saben, estamos trabajando en un importante proyecto de implementación de RPA para la organización. Hemos preparado un análisis ROI y un plan para aumentar la productividad, pero necesitamos su ayuda para asegurarnos de que todo esté en orden antes de presentarlo a los gerentes.\n\nNos encantaría contar con su experiencia y conocimientos para revisar el análisis y mejorar la estrategia. Confiamos en que juntos podemos hacer que este proyecto sea un éxito y traer grandes beneficios a la empresa.\n\nPor favor, háganme saber si tienen alguna pregunta o sugerencia y les agradezco de antemano por su tiempo y esfuerzo en ayudarnos con este proyecto.\n\nSaludos cordiales,\n\n[Su nombre]",
  },
];
const copies2 = [
  {
    id: "copy2-1",
    texto:
      "Asunto: Solicitud de aprobación para el proyecto de implementación de RPA - adjuntos de precios y descripción.\n\nEstimado [Nombre de su jefe],\n\nEspero que se encuentre muy bien. Le escribo para solicitar su aprobación para el proyecto de implementación de RPA que hemos estado trabajando. Como sabrá, este proyecto es un paso importante para mejorar la eficiencia y la productividad en nuestra empresa, y estamos seguros de que puede tener un gran impacto en nuestro rendimiento y costos generales.\n\nAdjunto a este correo electrónico los documentos que contienen los precios y la descripción completa del proyecto a implementar. También queremos destacar que hemos realizado un análisis ROI detallado y hemos identificado que este proyecto puede generar ahorros significativos en los costos de la empresa. Además, esperamos un aumento de productividad importante que nos permitirá dedicar más tiempo y recursos a actividades de mayor impacto.\n\nNos gustaría pedir su aprobación para avanzar con el proyecto y aprovechar esta oportunidad para mejorar nuestra eficiencia y productividad. Estamos dispuestos a trabajar con usted y su equipo para asegurarnos de que todo se haga de manera efectiva y eficiente.\n\nTambién nos gustaría programar una reunión para discutir detalles y para que pueda aprobar el proyecto. En esta reunión podemos abordar cualquier inquietud o pregunta que tenga y asegurarnos de que estamos en la misma página para avanzar con el proyecto.\n\nAgradecemos su colaboración y compromiso con nuestro equipo y con la organización en general. Esperamos su respuesta y estamos a su disposición para cualquier duda o consulta.\n\nSaludos cordiales,\n\n[Su nombre]",
  },
  {
    id: "copy2-2",
    texto:
      "Asunto: Aproveche esta oportunidad única: aprobación del proyecto de implementación de RPA\n\nEstimado [Nombre de su jefe],\n\nLe escribo para presentarle nuestro proyecto de implementación de RPA, una solución única para mejorar la eficiencia y la productividad en nuestra empresa. Adjunto a este correo electrónico encontrará los documentos que contienen los precios y la descripción completa del proyecto.\n\nNuestro equipo ha realizado un análisis ROI detallado y ha identificado que este proyecto puede generar ahorros significativos en los costos de la empresa. Además, esperamos un aumento de productividad importante que nos permitirá dedicar más tiempo y recursos a actividades de mayor impacto.\n\nEstamos seguros de que esta solución es la mejor opción para nuestra empresa. Con su aprobación, podremos aprovechar esta oportunidad única para mejorar nuestra eficiencia y productividad. Estamos dispuestos a trabajar con usted y su equipo para asegurarnos de que todo se haga de manera efectiva y eficiente.\n\nPor favor, tome en consideración esta oportunidad y permítanos presentarle más detalles sobre este proyecto en una reunión. Estamos ansiosos de escuchar sus comentarios y responder cualquier pregunta que pueda tener.\n\nGracias por su tiempo y atención.\n\nSaludos cordiales,\n\n[Su nombre]",
  },
  {
    id: "copy2-3",
    texto:
      "Asunto: Impulsemos juntos la eficiencia de nuestra empresa: aprobación del proyecto de implementación de RPA\n\nEstimado [Nombre de su jefe],\n\nMe dirijo a usted para solicitar su aprobación para el proyecto de implementación de RPA que hemos estado trabajando. Como líder en el área de …   entiendo la importancia de impulsar la eficiencia de nuestra empresa y creo que este proyecto es una excelente oportunidad para lograrlo.\n\nAdjunto a este correo electrónico encontrará los documentos que contienen los precios y la descripción completa del proyecto. Hemos realizado un análisis ROI detallado y hemos identificado que este proyecto puede generar ahorros significativos en los costos de la empresa. Además, esperamos un aumento de productividad importante que nos permitirá dedicar más tiempo y recursos a actividades de mayor impacto.\n\nEstamos dispuestos a trabajar con usted y su equipo para asegurarnos de que todo se haga de manera efectiva y eficiente. También nos gustaría programar una reunión para discutir detalles y para que pueda aprobar el proyecto. En esta reunión podemos abordar cualquier inquietud o pregunta que tenga y asegurarnos de que estamos en la misma página para avanzar con el proyecto.\n\nLe agradezco de antemano por su consideración y espero poder contar con su aprobación. Juntos, podemos impulsar la eficiencia de nuestra empresa y lograr resultados positivos.\n\nSaludos cordiales,\n\n[Su nombre]",
  },
];
const copies3 = [
  {
    id: "copy3-1",
    texto:
      "Asunto: Aprobación del proyecto de implementación de RPA para (nombre de la empresa)\n\nEstimado [Nombre del cliente],\n\nEspero que esté teniendo un buen día. Le escribo para hacerle seguimiento al proyecto de implementación de RPA que hemos estado discutiendo en las últimas semanas. Adjunto encontrará los documentos detallados con los precios y la descripción completa del proyecto para que pueda revisarlos con más detalle.\n\nAdemás de los beneficios ya mencionados, me gustaría destacar que la implementación de RPA también mejorará el ambiente laboral al eliminar tareas repetitivas y aburridas, permitiendo que su equipo pueda enfocarse en tareas más interesantes y desafiantes. Además, al reducir los errores y mejorar la eficiencia, su empresa destacará en su área e industria.\n\nLe agradecería mucho si pudiera revisar los documentos adjuntos y darnos su aprobación. Me gustaría solicitarle una reunión para ultimar detalles y asegurarnos de que estamos alineados en todos los aspectos del proyecto.\n\nPor favor, no dude en ponerse en contacto conmigo si tiene alguna pregunta o inquietud. Muchas gracias por su tiempo y consideración.\n\nAtentamente,\n\n[Nombre del remitente]",
  },
  {
    id: "copy3-2",
    texto:
      "Asunto: Proyecto de implementación de RPA para aumentar la producitividad y eliminar los errores  para (nombre de la empresa)\n\nEstimado [Nombre del cliente],\n\nLe escribo para presentarle nuestra propuesta de implementación de RPA que, sin duda, mejorará el ambiente laboral de su empresa y le permitirá eliminar errores y aumentar la eficiencia.\n\nLa automatización de tareas repetitivas y aburridas liberará a su equipo de trabajo para enfocarse en tareas más creativas y desafiantes, lo que mejorará el ambiente laboral en su empresa. Además, al reducir errores y aumentar la eficiencia, su empresa estará en una posición destacada dentro de su industria.\n\nAdjunto encontrará los documentos detallados con los precios y la descripción completa del proyecto para que pueda revisarlos con más detalle. Espero que pueda considerar esta propuesta y darnos su aprobación.\n\nPor favor, háganos saber cuándo sería conveniente programar una reunión para discutir los detalles y asegurarnos de que estamos alineados en todos los aspectos del proyecto.\n\nGracias por su atención y espero su respuesta.\n\nSaludos cordiales,\n\n[Nombre del remitente]",
  },
  {
    id: "copy3-3",
    texto:
      "Asunto: Aumento de productividad y eliminación de errores - implementación de RPA  para (nombre de la empresa)\n\nEstimado [Nombre del cliente],\n\nEspero que se encuentre bien. Me dirijo a usted para presentarle nuestra propuesta de implementación de RPA que, sin duda, mejorará el ambiente laboral en su empresa y le permitirá destacar en su área e industria.\n\nLa automatización de tareas repetitivas y aburridas permitirá que su equipo de trabajo se enfoque en tareas más interesantes y desafiantes, mejorando así el ambiente laboral en su empresa. Además, al eliminar errores y aumentar la eficiencia, su empresa estará en una posición destacada dentro de su industria.\n\nAdjunto encontrará los documentos detallados con los precios y la descripción completa del proyecto para que pueda revisarlos con más detalles. Nuestra propuesta no sólo implica la implementación de RPA, sino también un análisis detallado del retorno de inversión (ROI) que puede esperar después de la implementación.\n\nEstamos seguros de que nuestra propuesta es la solución perfecta para optimizar sus procesos empresariales y reducir costos, mientras se aumenta la productividad y la satisfacción de sus empleados.\n\nPor favor, háganos saber si tiene alguna duda o inquietud con respecto a la propuesta. Nos gustaría reunirnos con usted para presentarle la propuesta de manera más detallada y responder cualquier pregunta que pueda tener.\n\nAgradecemos su tiempo y esperamos poder trabajar con usted en este emocionante proyecto.\n\nSaludos cordiales,\n\n[Tu nombre]",
  },
];

function Step5({ nombreEmpresa, nombrePersona }) {
  const [showMore, setShowMore] = useState([false, false, false]);
  return (
    <div className="implementar-container">
      <div className="implementar">
        <div className="first-section">
          <h3>#4 Envía tu proyecto</h3>
          <p>
            Ahora sí <strong>{nombrePersona}</strong>, como paso final tendrás
            que enviar tu proyecto a <strong>{nombreEmpresa}</strong> para que
            lo evalúen y puedas comenzar a trabajar. En la parte inferior, te
            dejamos unos mensajes para que puedas{" "}
            <strong>copiar dándole click al mensaje</strong>. ¡Mucha suerte!
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
              persona="Para el Cliente"
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
