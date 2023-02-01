import React from "react";
import "./1-dudas.css";
import hombreEnDuda from "../../img/hombre-en-duda.png";

function Dudas() {
  return (
    <div className="quejas-container">
      <section className="quejas">
        <h2>¿Alguna vez te has encontrado en alguna de estas situaciones?</h2>
        <div className="contenedor">
          <div className="preguntas">
            <section>
              <p>No se justifican bien el proyecto a implementar</p>
            </section>
            <section>
              <p>¿Se demoran en generar un proyecto de RPA?</p>
            </section>
          </div>
          <div className="imagen">
            <img className="imagen-hombre-en-duda" src={hombreEnDuda} alt="" />
          </div>
          <div className="preguntas">
            <section>
              <p>
                Quieres trabajar con robots pero no sabes cómo justificar su
                implementación
              </p>
            </section>
            <section>
              <p>
                No tienes experiencia en la tecnología pero te gustaría probarlo
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dudas;
