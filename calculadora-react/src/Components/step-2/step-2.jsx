import React from "react";
import ProcesosComun from "./calculadora/procesos-comun";
import ShowMore from "./calculadora/show-more";
import GoogleSlide from "./google-slide";
import Portada from "./portada";

function Step2() {
  return (
    <div>
      <Portada />
      <ShowMore />
      <ProcesosComun />
      <GoogleSlide />
    </div>
  );
}

export default Step2;
