import React from "react";
import Dudas from "./1-dudas";
import Ofrecemos from "./2-ofrecemos";
import Generar from "./3-generar";
import Mejores from "./4-mejores";

function Section2({ handleTranslate }) {
  return (
    <div>
      <Dudas />
      <Ofrecemos handleTranslate={handleTranslate} />
      <Generar />
      <Mejores />
    </div>
  );
}
export default Section2;
