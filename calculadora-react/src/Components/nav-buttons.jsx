import React, { useEffect } from "react";

function NavButtons({ activeIndex, handleTranslate }) {
  const [activeStyle, setActiveStyle] = React.useState({
    backgroundColor: "#1c1b1e",
    color: "white",
  });
  const [inactiveStyle, setInactiveStyle] = React.useState({
    backgroundColor: "white",
    color: "#1c1b1e",
  });
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeIndex, handleTranslate]);

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
          style={activeIndex === 3 ? activeStyle : inactiveStyle}
          onClick={() => handleTranslate(3)}
          className="buttons-slide"
        >
          <p style={{ color: activeIndex === 3 && activeStyle.color }}>2</p>
        </li>
        <li
          style={activeIndex === 4 ? activeStyle : inactiveStyle}
          onClick={() => handleTranslate(4)}
          className="buttons-slide"
        >
          <p style={{ color: activeIndex === 4 && activeStyle.color }}>3</p>
        </li>
        <li
          style={activeIndex === 5 ? activeStyle : inactiveStyle}
          onClick={() => handleTranslate(5)}
          className="buttons-slide"
        >
          <p style={{ color: activeIndex === 5 && activeStyle.color }}>4</p>
        </li>
        <li
          style={activeIndex === 6 ? activeStyle : inactiveStyle}
          onClick={() => handleTranslate(6)}
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
