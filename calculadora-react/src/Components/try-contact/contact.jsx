import React from "react";
import "./contact.css";
import lalo from "../../img/asesores/lalo.png";
import leonidas from "../../img/asesores/leonidas.png";
import uziel from "../../img/asesores/uziel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCalendar,
  faChevronRight,
  faCircleHalfStroke,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Contact({ setAsesores }) {
  return (
    <div className="contacto-container">
      <div className="blobs-container">
        <svg
          width="400"
          className="first-blob"
          height="400"
          viewBox="0 0 440 440"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#838282" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M220,331.3739916203278C276.79008163318764,342.41081132465507,352.28457296499454,363.1754548674481,380.8720591558431,312.8795266587154C409.41121684822656,262.66862609714997,340.78371189113363,216.88524720888438,314.22356657049875,165.59999847651594C283.24065893505554,105.77479400742683,287.3720476401593,2.3034727425939026,220.00000000000006,2.250067809862757C152.6279100651101,2.1966628436050986,145.03110800602292,100.96619534416648,125.51734472932763,165.45041354572663C114.99286932433871,200.22907509087133,122.17591128239695,234.52207152349527,140.15623880076828,266.09781702148854C158.38841359544128,298.11583841755646,183.83154335785358,324.3448639370552,220,331.3739916203278"
            fill="url(#gradient)"
          />
        </svg>

        <svg
          className="second-blob"
          width="600"
          height="600"
          viewBox="0 0 440 440"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#838282" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M220,434.13421353992277C311.023696750325,434.13421353992277,312.04986106906387,311.023696750325,312.04986106906387,220C312.04986106906387,146.91387261505764,293.08612738494236,57.05377488875306,220,57.05377488875308C120.12411320932037,57.0537748887531,22.88157797745754,120.12411320932034,22.881577977457557,219.99999999999997C22.881577977457564,333.66144516146073,106.33855483853924,434.13421353992277,220,434.13421353992277"
            fill="url(#gradient)"
          />
        </svg>
        <svg
          className="third-blob"
          height="700"
          width="700"
          viewBox="0 0 440 440"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#838282" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M220,417.4019970235208C288.47449946499285,407.09260029440975,268.72924022819035,308.4601088466283,285.4102760854247,241.25308703618674C296.4193294711697,196.89818621705075,327.74221087451735,148.8458633847911,294.4192642298184,117.57067017931084C249.3343989671991,75.25634885695644,180.53670337366233,60.69755545239667,128.32680176476296,93.82266735724978C64.9947912496607,134.00431625571284,21.18385979172862,205.7932333560474,41.628405349112626,277.9564443505454C64.37195611219002,358.23446510054714,137.49231270419344,429.8242051182111,220,417.4019970235208"
            fill="url(#gradient)"
          />
        </svg>
        <svg
          width="700"
          height="700"
          className="fourth-blob"
          viewBox="0 0 440 440"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#838282" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M220,298.09344660387274C287.1639883835525,303.42932737954004,373.595835024449,340.2539511470888,401.8342309368894,279.08152308075825C434.588332883806,208.1267864364467,383.8823802304542,127.28459508813273,318.86452856326537,83.92465030961569C261.48555535310464,45.65901947062997,185.64222653446078,55.58273683540772,132.35602329174822,99.36841502056555C87.328576219519,136.36781049304153,86.09842160563545,202.54282416758684,109.61563926537026,255.86605295875944C127.19106577012982,295.71679134862984,176.58250229546582,294.64411911596056,220,298.09344660387274"
            fill="url(#gradient)"
          />
        </svg>
      </div>
      <div className="contacto">
        <div className="columna1">
          <section>
            <div className="encabezado">
              <h3>Dignita</h3>
              <FontAwesomeIcon
                className="fa-solid fa-bars hamburguesa"
                icon={faBars}
                /* onClick="abrirMenu()" */
              />
              <FontAwesomeIcon
                className="fa-solid fa-xmark cerrar"
                icon={faXmark}
              />
            </div>
            <nav className="menu-2">
              <li>
                <a href="https://dignita.tech/" target="_blank">
                  Inicio
                </a>
              </li>
              <li>
                <a href="https://dignita.tech/nosotros/" target="_blank">
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="https://cliente.dignita.tech/index.php/signin"
                  target="_blank"
                >
                  Área de Cliente
                </a>
              </li>
              <li>
                <a href="https://dignita.tech/rpa/" target="_blank">
                  Servicios
                </a>
              </li>
              <li>
                <a href="https://dignita.tech/blog/" target="_blank">
                  Blog
                </a>
              </li>
            </nav>
            <p>
              Asegura la eficiencia operativa para incrementar la rentabilidad
              de tu negocio. Pionero en el Perú aplicando automatizacion
              robótica de proceso
            </p>
            <div className="iconos-social-media-dignita">
              <a target="_blank" href="https://www.facebook.com/dignita.tech">
                <FontAwesomeIcon className="iconos" icon={faFacebook} />
              </a>
              <a
                target="_blank"
                href="https://wa.me/+51930591017?text=urlencodedtext"
              >
                <FontAwesomeIcon className="iconos" icon={faWhatsapp} />
              </a>
              <a target="_blank" href="https://www.instagram.com/dignita.tech/">
                <FontAwesomeIcon className="iconos" icon={faInstagram} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/dignita-tech-b045b1232/"
              >
                <FontAwesomeIcon className="iconos" icon={faLinkedin} />
              </a>
              <a target="_blank" href="https://www.tiktok.com/@dignitatech">
                <FontAwesomeIcon className="iconos" icon={faTiktok} />
              </a>
            </div>
          </section>
          <div className="suscribete">
            <h3>Suscríbete</h3>
            <div className="input-contacto">
              <input type="email" placeholder="Tu e-mail" />
              <button htmltype="submit">
                <FontAwesomeIcon
                  className="fa-solid fa-chevron-right"
                  icon={faChevronRight}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="columna2">
          <nav className="menu">
            <li>
              <a href="https://dignita.tech/" target="_blank">
                Inicio
              </a>
            </li>
            <li>
              <a href="https://dignita.tech/nosotros/" target="_blank">
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="https://cliente.dignita.tech/index.php/signin"
                target="_blank"
              >
                Área de Cliente
              </a>
            </li>
            <li>
              <a href="https://dignita.tech/rpa/" target="_blank">
                Servicios
              </a>
            </li>
            <li>
              <a href="https://dignita.tech/blog/" target="_blank">
                Blog
              </a>
            </li>
          </nav>
          {/* <button className="boton-secciones">Click aquí para ver</button> */}
          <div className="equipo">
            <div className="asesor-container">
              <img src={lalo} alt="Lalo" className="img1" />
              <div className="columna2">
                <div className="nombre-contacto">
                  <span>Jose Eduardo</span>
                  <FontAwesomeIcon
                    className="fa-sharp fa-solid fa-circle-half-stroke"
                    icon={faCircleHalfStroke}
                  />
                </div>
                <div className="redes-sociales">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/jose-eduardo-de-la-guardia-c-a78b9678/"
                  >
                    <FontAwesomeIcon
                      className="fa-brands fa-linkedin-in"
                      icon={faLinkedinIn}
                    />
                  </a>
                  <a target="_blank" href="">
                    <FontAwesomeIcon icon={faCalendar} />
                  </a>
                </div>
              </div>
            </div>
            <div className="asesor-container">
              <img src={leonidas} alt="Leonidas" className="active" />
              <div className="columna2">
                <div className="nombre-contacto">
                  <span>Leonidas</span>
                  <FontAwesomeIcon
                    className="fa-sharp fa-solid fa-circle-half-stroke"
                    icon={faCircleHalfStroke}
                  />
                </div>
                <div className="redes-sociales">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/uzielsoto/"
                  >
                    <FontAwesomeIcon
                      className="fa-brands fa-linkedin-in"
                      icon={faLinkedinIn}
                    />
                  </a>
                  <a target="_blank" href="">
                    <FontAwesomeIcon icon={faCalendar} />
                  </a>
                </div>
              </div>
            </div>
            <div className="asesor-container">
              <img src={uziel} alt="Uziel" />
              <div className="columna2">
                <div className="nombre-contacto">
                  <span>Uziel</span>
                  <FontAwesomeIcon
                    className="fa-sharp fa-solid fa-circle-half-stroke"
                    icon={faCircleHalfStroke}
                  />
                </div>
                <div className="redes-sociales">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/leonidasyauri/"
                  >
                    <FontAwesomeIcon
                      className="fa-brands fa-linkedin-in"
                      icon={faLinkedinIn}
                    />
                  </a>
                  <a target="_blank" href="">
                    <FontAwesomeIcon icon={faCalendar} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="boton-contacto">
            <a href="#">
              <button className="boton" onClick={() => setAsesores(true)}>
                Solicitar una asesoría
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
