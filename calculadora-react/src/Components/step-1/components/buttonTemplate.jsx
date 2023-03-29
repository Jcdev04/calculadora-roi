import React from "react";

const CSS = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    borderRadius: "15px",
    color: "white",
    padding: "3px 15px",
  },
};

function buttonTemplate({ image, backGroundColor, text }) {
  let alt = `imagen-${text}`;
  return (
    <span style={{ ...CSS.container, background: backGroundColor }}>
      <img src={image} alt={alt} />
      <p style={{ fontSize: "clamp(14px, 2vw, 16px)", fontWeight: "700" }}>
        {text}
      </p>
    </span>
  );
}

export default buttonTemplate;
