import React from "react";
import aangIntro from "../data/images/aangIntro.png";
import aangFlying2 from "../data/images/aangFlying2.png";
import "./Intro.css";

function Intro() {
  return (
    <div className="flex overflow-auto flex-col lg:flex-row border-black border-b-4">
      <div className="md:w-full w-auto hidden md:block">
        <img src={aangIntro} alt="Aang Flying" className="h-full" />
      </div>
      <div className="md:w-full w-auto md:hidden">
        <img src={aangFlying2} alt="Aang Flying" className="h-full" />
      </div>
      <div className="md:w-full w-auto p-9 lg:p-14 text-center text-xl md:text-3xl lg:text-4xl flex items-center justify-center font-herculanum">
        <p>
          Only the Avatar mastered all four elements. Only he could stop the
          ruthless firebenders. But when the world needed him most, he vanished.
        </p>
      </div>
    </div>
  );
}

export default Intro;
