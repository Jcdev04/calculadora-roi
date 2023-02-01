import React from "react";

function NavButtons({ activeIndex, handleTranslate }) {
  const activeStyle = {
    backgroundColor: "#1c1b1e",
    color: "white",
  };
  const inactiveStyle = {
    backgroundColor: "white",
    color: "#1c1b1e",
  };

  return (
    <nav className="navigation-buttons">
      <ul className="container-buttons-slide">
        <li
          style={activeIndex === 0 ? activeStyle : inactiveStyle}
          onClick={() => handleTranslate(0)}
          className="buttons-slide"
        >
          <p>P</p>
        </li>
        <li
          style={activeIndex === 1 ? activeStyle : inactiveStyle}
          onClick={() => handleTranslate(1)}
          className="buttons-slide"
        >
          <p>B</p>
        </li>
        <li
          style={activeIndex === 2 ? activeStyle : inactiveStyle}
          onClick={() => handleTranslate(2)}
          className="buttons-slide"
        >
          <p>1</p>
        </li>
        <li
          style={activeIndex === 3 ? activeStyle : inactiveStyle}
          onClick={() => handleTranslate(3)}
          className="buttons-slide"
        >
          <p>2</p>
        </li>
        <li
          style={activeIndex === 4 ? activeStyle : inactiveStyle}
          onClick={() => handleTranslate(4)}
          className="buttons-slide"
        >
          <p>3</p>
        </li>
        <li
          style={activeIndex === 5 ? activeStyle : inactiveStyle}
          onClick={() => handleTranslate(5)}
          className="buttons-slide"
        >
          <p>4</p>
        </li>
        <li
          style={activeIndex === 6 ? activeStyle : inactiveStyle}
          onClick={() => handleTranslate(6)}
          className="buttons-slide"
        >
          <p>5</p>
        </li>
        <li
          style={activeIndex === 7 ? activeStyle : inactiveStyle}
          onClick={() => handleTranslate(7)}
          className="buttons-slide"
        >
          <p>C</p>
        </li>
      </ul>
    </nav>
  );
}

export default NavButtons;
