import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
/* SWIPER */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
/* SECCIONES */
import Section1 from "./section1/section-1";
import Section2 from "./section2/section-2";
import Step3 from "./step-3/step-3";
import Step4 from "./step-4/step-4";
import Step5 from "./step-5/step-5";
import Step2 from "./step-2/step-2";
import Step1 from "./step-1/step-1";
/* Font awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import "./main-page.css";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
/* Ventanas emergentes */
import NavButtons from "./nav-buttons";
import VentanaInicio from "./ventana-inicio";
import Tabla from "./step-2/calculadora/ventana-emergente/tabla";
import VentanaExito from "./step-2/calculadora/ventana-emergente/ventana-exito";
import VentanaPrincipal from "./step-2/calculadora/ventana-emergente/ventana-principal";
import Burbujas from "./burbujas";
/* REDUX */
import { modificarInputs } from "../Reducers/inputs";
import { connect } from "react-redux";

function MainPage(props) {
  const [height, setHeight] = useState("100vh");
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState();

  const [responsive, setResponsive] = useState(false);
  const [activateSuccess, setActivateSuccess] = useState(false);
  const [arrowDown, setArrowDown] = useState(false);
  /* VENTANAS EMERGENTES */
  const todosProcesos = props.procesos.user.procesos;
  const [botonEditar, setBotonEditar] = useState(false);
  const [botonConfirmar, setBotonConfirmar] = useState(false);
  const [botonEditar2, setBotonEditar2] = useState(false);
  const [index, setIndex] = useState(0);
  /* Nombre empresa y persona */
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [nombrePersona, setNombrePersona] = useState("");
  const [ventanaInicio, setVentanaInicio] = useState(true);
  function handleTranslate(index) {
    swiper.slideTo(index);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1169) {
        setResponsive(true);
        if (activeIndex === 1) {
          setHeight("600vh");
        } else {
          setResponsive(false);
        }
      } else {
        setResponsive(false);
      }
    };
    const handleScroll = () => {
      if (!responsive) {
        let name;
        if (activeIndex === 1) {
          name = ".swiper-slide";
        } else if (activeIndex === 3) {
          name = ".swiper-slide2";
        }
        let secondSlide = document.querySelector(name);
        if (secondSlide) {
          const bottomPosition = secondSlide.getBoundingClientRect().bottom;
          if (bottomPosition <= window.innerHeight + 50) {
            setArrowDown(false);
          } else {
            setArrowDown(true);
          }
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    if (!responsive) {
      if (activeIndex === 1) {
        setHeight("500vh");
        setArrowDown(true);
      } else if (activeIndex === 3) {
        setHeight("200vh");
        setArrowDown(true);
      } else {
        setHeight("100vh");
        setArrowDown(false);
      }
    }

    handleResize();
    console.log(todosProcesos);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex, responsive]);

  /* SUBMIT */
  const submit = (payload) => {
    props.modificarInputs(parseInt(index), payload);
    setBotonConfirmar(true);
  };
  /*  */
  return (
    <div>
      {/* <Burbujas />
      <AnimatePresence>
        {ventanaInicio && (
          <VentanaInicio
            setVentanaInicio={setVentanaInicio}
            nombreEmpresa={nombreEmpresa}
            setNombreEmpresa={setNombreEmpresa}
            nombrePersona={nombrePersona}
            setNombrePersona={setNombrePersona}
          />
        )}
      </AnimatePresence> */}
      {/* COLOCAR LUEGO DENTRO DE UN COMPONENTE */}
      {/* TABLA */}
      {todosProcesos[parseInt(index)] !== null && (
        <AnimatePresence>
          {botonEditar2 && (
            <Tabla
              index={index}
              trigger2={botonEditar2}
              setTrigger2={setBotonEditar2}
            />
          )}
        </AnimatePresence>
      )}
      {/* VENTANA principal */}
      {
        <AnimatePresence>
          {botonEditar && (
            <VentanaPrincipal
              className="ventanaPrincipal"
              index={index}
              FTEvalue={todosProcesos[index]}
              onSubmit={(payload) => submit(payload)}
              setTrigger={setBotonEditar}
            />
          )}
        </AnimatePresence>
      }
      {/* VENTANA exito */}
      <AnimatePresence>
        {botonConfirmar && (
          <VentanaExito setBotonConfirmar={setBotonConfirmar} />
        )}
      </AnimatePresence>
      {/* SLIDER */}
      <Swiper
        style={{
          height: height,
          overflow: "hidden",
          transition: "all 0.05s ease-in-out",
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        onSlideChange={(activeIndex) => setActiveIndex(activeIndex.activeIndex)}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {/* SECTION1 */}
        <SwiperSlide>
          <Section1 />
        </SwiperSlide>
        {/* SECTION2 */}
        <SwiperSlide className="swiper-slide">
          <Section2 />
        </SwiperSlide>
        {/* Step1 */}
        <SwiperSlide>
          <Step1
            setActivateSuccess={setActivateSuccess}
            activateSuccess={activateSuccess}
            handleTranslate={handleTranslate}
          />
        </SwiperSlide>
        {/* Step2 */}
        <SwiperSlide className="swiper-slide2">
          <Step2
            setBotonEditar={setBotonEditar}
            setBotonEditar2={setBotonEditar2}
            setIndex={setIndex}
          />
        </SwiperSlide>
        {/* Step3 */}
        <SwiperSlide>
          <Step3 />
        </SwiperSlide>
        {/* Step4 */}
        <SwiperSlide>
          <Step4 />
        </SwiperSlide>
        {/* Step5 */}
        <SwiperSlide>
          <Step5 />
        </SwiperSlide>
        {/* CONTACT */}
        <SwiperSlide>Slide 8</SwiperSlide>
      </Swiper>
      {/* BOTONES DE NAVEGACIÓN */}
      <NavButtons activeIndex={activeIndex} handleTranslate={handleTranslate} />

      <button
        style={{ display: arrowDown ? "block" : "none" }}
        className="arrow-down-container"
      >
        <FontAwesomeIcon className="arrow-down" icon={faAnglesDown} />
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    procesos: state,
  };
};

const mapDispatchToProps = (dispatch) => ({
  modificarInputs: (index, valores) =>
    dispatch(modificarInputs(index, valores)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
