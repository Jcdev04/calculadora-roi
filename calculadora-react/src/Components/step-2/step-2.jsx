import React from "react";
import ProcesosComun from "./calculadora/procesos-comun";
import ShowMore from "./calculadora/show-more";
import GoogleSlide from "./google-slide";
import Portada from "./portada";

function Step2({ setBotonEditar, setBotonEditar2, setIndex }) {
  return (
    <div>
      <Portada />
      <ShowMore
        setBotonEditar={setBotonEditar}
        setBotonEditar2={setBotonEditar2}
        setIndex={setIndex}
      />
      <ProcesosComun />
      <GoogleSlide />
    </div>
  );
}

export default Step2;
