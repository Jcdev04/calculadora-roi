import React, { useEffect } from "react";

function NavButtons({ activeIndex, handleTranslate, pasos, setPasos }) {
  const [activeStyle, setActiveStyle] = React.useState({
    backgroundColor: "#1c1b1e",
    color: "white",
  });
  const [inactiveStyle, setInactiveStyle] = React.useState({
    backgroundColor: "white",
    color: "#1c1b1e",
  });
  const blockedStyle = {
    color: "white",
    backgroundColor: "#d60718",
    cursor: "not-allowed",
    borderColor: "#d60718",
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 750) {
      setActiveStyle({
        backgroundColor: "#FC4D19",
        color: "#000000",
      });
      setInactiveStyle({
        backgroundColor: "#D8D8D8",
        color: "#D8D8D8",
      });
    } else {
      setActiveStyle({
        backgroundColor: "#1c1b1e",
        color: "white",
      });
      setInactiveStyle({
        backgroundColor: "white",
        color: "#1c1b1e",
      });
    }
  };
  useEffect(() => {
    /* Habilitar los pasos del navbar conforme avance */
    if (activeIndex === 2) {
      enablePaso(2);
    } else if (activeIndex === 3) {
      enablePaso(3);
    } else if (activeIndex === 4) {
      enablePaso(4);
    } else if (activeIndex === 5) {
      enablePaso(5);
    }
  }, [activeIndex]);
  function enablePaso(paso) {
    const aux = { ...pasos };
    aux["paso" + paso] = true;
    setPasos(aux);
  }
  return (
    <nav className="navigation-buttons">
      <ul className="container-buttons-slide">
        <li
          style={activeIndex === 0 ? activeStyle : inactiveStyle}
          onClick={() => handleTranslate(0)}
          className="buttons-slide"
        >
          <p style={{ color: activeIndex === 0 && activeStyle.color }}>P</p>
        </li>
        <li
          style={activeIndex === 1 ? activeStyle : inactiveStyle}
          onClick={() => handleTranslate(1)}
          className="buttons-slide"
        >
          <p style={{ color: activeIndex === 1 && activeStyle.color }}>B</p>
        </li>
        <li
          style={activeIndex === 2 ? activeStyle : inactiveStyle}
          onClick={() => handleTranslate(2)}
          className="buttons-slide"
        >
          <p style={{ color: activeIndex === 2 && activeStyle.color }}>1</p>
        </li>
        <li
          style={
            activeIndex === 3
              ? activeStyle
              : pasos.paso2
              ? inactiveStyle
              : blockedStyle
          }
          onClick={() => pasos.paso2 && handleTranslate(3)}
          className="buttons-slide"
        >
          <p style={{ color: activeIndex === 3 && activeStyle.color }}>2</p>
        </li>
        <li
          style={
            activeIndex === 4
              ? activeStyle
              : pasos.paso3
              ? inactiveStyle
              : blockedStyle
          }
          onClick={() => pasos.paso3 && handleTranslate(4)}
          className="buttons-slide"
        >
          <p style={{ color: activeIndex === 4 && activeStyle.color }}>3</p>
        </li>
        <li
          style={
            activeIndex === 5
              ? activeStyle
              : pasos.paso4
              ? inactiveStyle
              : blockedStyle
          }
          onClick={() => pasos.paso4 && handleTranslate(5)}
          className="buttons-slide"
        >
          <p style={{ color: activeIndex === 5 && activeStyle.color }}>4</p>
        </li>
        <li
          style={
            activeIndex === 6
              ? activeStyle
              : pasos.paso5
              ? inactiveStyle
              : blockedStyle
          }
          onClick={() => pasos.paso5 && handleTranslate(6)}
          className="buttons-slide"
        >
          <p style={{ color: activeIndex === 6 && activeStyle.color }}>5</p>
        </li>
        <li
          style={activeIndex === 7 ? activeStyle : inactiveStyle}
          onClick={() => handleTranslate(7)}
          className="buttons-slide"
        >
          <p style={{ color: activeIndex === 7 && activeStyle.color }}>C</p>
        </li>
      </ul>
    </nav>
  );
}

export default NavButtons;
