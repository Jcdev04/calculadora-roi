import React from "react";
import ProcesosComun from "./calculadora/procesos-comun";
import ShowMore from "./calculadora/show-more";
import Portada from "./portada";

function Step2() {
  return (
    <div>
      <Portada />
      <ShowMore />
      <ProcesosComun />
    </div>
  );
}

export default Step2;
