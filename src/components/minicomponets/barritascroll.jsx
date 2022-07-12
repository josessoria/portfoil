import React, { useState } from "react";
import "./barritascroll.scss";

function Barritascroll() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 1300) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className="fixedsection">
      <div className={color ? "fixedleftScroll" : "fixedleft"}>
        <iframe
          src="https://giphy.com/embed/h8mB9WD5K406EM1wn2"

          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          title="astronaut"
        ></iframe>
      </div>
    </div>
  );
}

export default Barritascroll;
