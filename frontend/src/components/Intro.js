import React from "react";
import aangIntro from "../data/images/aangIntro.png";
import aangIntromobile from "../data/images/aangIntrosm.png";
import "./Intro.css";

function Intro() {
  return (
    <div className="flex overflow-auto flex-col lg:flex-row border-black border-b-4">
      <div className="md:w-full w-auto hidden lg:block">
        <img src={aangIntro} alt="Aang Flying" />
      </div>
      <div className="w-full lg:hidden overflow-hidden">
        <img src={aangIntromobile} className="w-full" alt="Aang Flying" />
      </div>
      <div className="md:w-full w-auto p-12 lg:p-16 text-center text-lg md:text-3xl lg:text-5xl flex items-center justify-center font-herculanum">
        <p>
          "Only the Avatar mastered all four elements. Only he could stop the
          ruthless firebenders. But when the world needed him most, he vanished."
        </p>
      </div>
    </div>
  );
}

export default Intro;
