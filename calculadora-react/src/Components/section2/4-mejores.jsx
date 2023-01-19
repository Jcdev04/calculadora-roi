import React from "react";
import "./4-mejores.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faCheck,
  faGlobe,
  faLock,
  faMoneyBill,
  faPhone,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
function Mejores() {
  return (
    <div className="somos-container">
      <section className="somos">
        <h2>Somos el mejor para generar proyectos RPA</h2>
        <div className="contenedor-cards">
          <div className="linea"></div>

          <div className="card">
            <div className="nada derecha">
              <FontAwesomeIcon className="icons" icon={faPhone} />
            </div>

            <div className="circulo">
              <FontAwesomeIcon className="icons pc" icon={faCheck} />
              <FontAwesomeIcon className="icons mobile" icon={faPhone} />
            </div>

            <div className="contenido">
              <h3>Asesoramiento personalizado</h3>
              <p>
                Nuestro equipo trabajará con usted para desarrollar un plan que
                se adapte a sus necesidades y objetivos específicos. Ofrecemos
                un entorno seguro y de apoyo donde puede resolver sus dudas
                cuando lo necesite.
              </p>
            </div>
          </div>

          <div className="card izquierda">
            <div className="nada">
              <FontAwesomeIcon className="icons" icon={faMoneyBill} />
            </div>

            <div className="circulo">
              <FontAwesomeIcon className="icons pc" icon={faCheck} />
              <FontAwesomeIcon className="icons mobile" icon={faMoneyBill} />
            </div>

            <div className="contenido">
              <h3>% Comisión</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                aliquet turpis a purus blandit hendrerit. Nulla malesuada
              </p>
            </div>
          </div>

          <div className="card">
            <div className="nada derecha">
              <FontAwesomeIcon className="icons" icon={faUserGroup} />
            </div>

            <div className="circulo">
              <FontAwesomeIcon className="icons pc" icon={faCheck} />
              <FontAwesomeIcon className="icons mobile" icon={faUserGroup} />
            </div>

            <div className="contenido">
              <h3>ERP</h3>
              <p>
                La comunicación efectiva es esencial para el éxito de cualquier
                negocio. Te ofrecemos servicios de planificación de recursos
                empresariales (ERP) para ayudar a mejorar la comunicación y la
                colaboración dentro de su organización. Nuestra solución ERP
                proporciona una plataforma centralizada para todos sus procesos
                comerciales, lo que facilita que su equipo acceda y comparta
                información importante
              </p>
            </div>
          </div>

          <div className="card izquierda">
            <div className="nada">
              <FontAwesomeIcon className="icons" icon={faLock} />
            </div>
            <div className="circulo">
              <FontAwesomeIcon className="icons pc" icon={faCheck} />
              <FontAwesomeIcon className="icons mobile" icon={faLock} />
            </div>

            <div className="contenido">
              <h3>Confiables</h3>
              <p>
                Nuestro software de automatización de procesos está diseñado
                para seguir instrucciones precisas y reducir errores, lo que lo
                convierte en una opción confiable para empresas de todos los
                tamaños.{" "}
              </p>
            </div>
          </div>

          <div className="card">
            <div className="nada derecha">
              <FontAwesomeIcon className="icons" icon={faChartSimple} />
            </div>

            <div className="circulo">
              <FontAwesomeIcon className="icons pc" icon={faCheck} />
              <FontAwesomeIcon className="icons mobile" icon={faChartSimple} />
            </div>

            <div className="contenido">
              <h3>Marcas</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                aliquet turpis a purus blandit hendrerit. Nulla malesuada
              </p>
            </div>
          </div>

          <div className="card izquierda ultimo">
            <div className="nada">
              <FontAwesomeIcon className="icons" icon={faGlobe} />
            </div>

            <div className="circulo">
              <FontAwesomeIcon className="icons pc" icon={faCheck} />
              <FontAwesomeIcon className="icons mobile" icon={faGlobe} />
            </div>

            <div className="contenido">
              <h3>Partners</h3>
              <p>
                En DignitaTech, nos enorgullece asociarnos con algunos de los
                nombres líderes en RPA. Nuestras alianzas nos permiten ofrecer a
                nuestros clientes las mejores y más innovadoras soluciones del
                mercado. Con el apoyo de nuestros socios, podemos brindar
                servicios de RPA de alta calidad e impulsar el éxito comercial
                de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mejores;
