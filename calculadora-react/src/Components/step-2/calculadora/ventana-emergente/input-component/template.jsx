import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faCalendarDays,
  faBriefcase,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
function Template({ proceso }) {
  return (
    <div className="template-high-container">
      <h2 className="heading-template">{proceso.heading}</h2>
      <div className="template-container">
        <img className="image-cara" src={proceso.battery} alt="batería" />
        <div className="empresa-container">
          <h3>
            Empresa: <span>XXXX</span>
          </h3>
          <img src={proceso.img} alt="" />
          <p>Responsables del proceso</p>
          <div className="empleado-tiempo">
            <section className="primero">
              {/* AQUIIII */}
              {proceso.automatizado ? (
                <FontAwesomeIcon
                  style={{ fontSize: 25, color: "white" }}
                  icon={faCheck}
                />
              ) : (
                <h3>2 Años</h3>
              )}
              <p>{proceso.copies.n1}</p>
            </section>
            <section className="segundo">
              {/* Aquiii */}
              {proceso.automatizado ? (
                <FontAwesomeIcon
                  style={{ fontSize: 25, color: "white" }}
                  icon={faBriefcase}
                />
              ) : (
                <h3>192 hrs</h3>
              )}
              <p>{proceso.copies.n2}</p>
            </section>
            <section className="tercero">
              {/* Aqui */}
              {proceso.automatizado ? (
                <FontAwesomeIcon
                  style={{ fontSize: 25, color: "white" }}
                  icon={faClock}
                />
              ) : (
                <h3>30 hrs.</h3>
              )}
              <p>{proceso.copies.n3}</p>
            </section>
          </div>
        </div>
        <div className="icons-productivity">
          <section
            style={{ backgroundColor: !proceso.automatizado && "#FF5B5B" }}
          >
            <FontAwesomeIcon icon={faCalendar} />
            <p>4 meses</p>
          </section>
          <section
            style={{ backgroundColor: !proceso.automatizado && "#FF5B5B" }}
          >
            <FontAwesomeIcon icon={faCalendarDays} />
            <p>120 dias</p>
          </section>
          <section
            style={{ backgroundColor: !proceso.automatizado && "#FF5B5B" }}
          >
            <FontAwesomeIcon icon={faClock} />
            <p>2000 hrs</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Template;
