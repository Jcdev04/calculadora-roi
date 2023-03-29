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
              <p>¿No sabes como justificar el proyecto a implementar?</p>
            </section>
            <section>
              <p>¿Te toma mucho tiempo generar un proyecto de RPA+IA?</p>
            </section>
          </div>
          <div className="imagen">
            <img className="imagen-hombre-en-duda" src={hombreEnDuda} alt="" />
          </div>
          <div className="preguntas">
            <section>
              <p>
                ¿Quieres implementar robots dentro de tu área de trabajo pero no
                sabes como justificarlo?
              </p>
            </section>
            <section>
              <p>
                ¿Te interesa trabajar con la tecnología pero no tienes
                experiencia?
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dudas;
