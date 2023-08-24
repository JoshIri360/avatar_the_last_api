import React from "react";
import aangIntro from "../data/images/aangIntro.png";
import "./Intro.css";

function Intro() {
  return (
    <div className="flex overflow-auto flex-col lg:flex-row border-black border-b-4">
      <div className="md:w-full w-auto">
        <img src={aangIntro} alt="Aang Flying" />
      </div>
      <div className="md:w-full w-auto hidden">
        <img src={aangIntro} alt="Aang Flying" />
      </div>
      <div className="md:w-full w-auto p-16 text-center text-5xl flex items-center justify-center font-herculanum">
        <p>
          Only the Avatar mastered all four elements. Only he could stop the
          ruthless firebenders. But when the world needed him most, he vanished.
        </p>
      </div>
    </div>
  );
}

export default Intro;
