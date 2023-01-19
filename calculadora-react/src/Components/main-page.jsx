import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Section1 from "./section1/section-1";
import Section2 from "./section2/section-2";
import "./main-page.css";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import required modules
import { Navigation } from "swiper";
import Step3 from "./step-3/step-3";
import Step4 from "./step-4/step-4";
import Step5 from "./step-5/step-5";
import Step2 from "./step-2/step-2";
import Step1 from "./step-1/step-1";
/* When the button is in the specific index */
const activeStyle = {
  backgroundColor: "#1c1b1e",
  color: "white",
};
const inactiveStyle = {
  backgroundColor: "white",
  color: "#1c1b1e",
};
function MainPage() {
  const [height, setHeight] = useState("100vh");
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState();
  const [responsive, setResponsive] = useState(false);
  function handleTranslate(index) {
    swiper.slideTo(index);
  }
  useEffect(() => {
    function handleResize() {
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
    }

    if (!responsive) {
      if (activeIndex === 1) {
        setHeight("500vh");
      } else {
        setHeight("100vh");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeIndex, responsive]);

  return (
    <div>
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
        <SwiperSlide>
          <Section2 />
        </SwiperSlide>
        {/* Step1 */}
        <SwiperSlide>
          <Step1 />
        </SwiperSlide>
        {/* Step2 */}
        <SwiperSlide>
          <Step2 />
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
      <nav className="navigation-buttons">
        <ul className="container-buttons-slide">
          <li
            style={activeIndex === 0 ? activeStyle : inactiveStyle}
            onClick={() => handleTranslate(0)}
            className="buttons-slide"
          >
            <p>1</p>
          </li>
          <li
            style={activeIndex === 1 ? activeStyle : inactiveStyle}
            onClick={() => handleTranslate(1)}
            className="buttons-slide"
          >
            <p>2</p>
          </li>
          <li
            style={activeIndex === 2 ? activeStyle : inactiveStyle}
            onClick={() => handleTranslate(2)}
            className="buttons-slide"
          >
            <p>3</p>
          </li>
          <li
            style={activeIndex === 3 ? activeStyle : inactiveStyle}
            onClick={() => handleTranslate(3)}
            className="buttons-slide"
          >
            <p>4</p>
          </li>
          <li
            style={activeIndex === 4 ? activeStyle : inactiveStyle}
            onClick={() => handleTranslate(4)}
            className="buttons-slide"
          >
            <p>5</p>
          </li>
          <li
            style={activeIndex === 5 ? activeStyle : inactiveStyle}
            onClick={() => handleTranslate(5)}
            className="buttons-slide"
          >
            <p>6</p>
          </li>
          <li
            style={activeIndex === 6 ? activeStyle : inactiveStyle}
            onClick={() => handleTranslate(6)}
            className="buttons-slide"
          >
            <p>7</p>
          </li>
          <li
            style={activeIndex === 7 ? activeStyle : inactiveStyle}
            onClick={() => handleTranslate(7)}
            className="buttons-slide"
          >
            <p>8</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainPage;
