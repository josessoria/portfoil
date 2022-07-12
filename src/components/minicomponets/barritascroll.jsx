import React,{useState} from "react";
import "./barritascroll.jsx"

function Barritascroll() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 170) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
      <div className="fixedsection">
        <div className={color ? "fixedleftScroll" : "fixedleft"}>
          <span>Scrolldown -------</span>
        </div>
      </div>
  );
}

export default Barritascroll;
