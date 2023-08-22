import React, { useState, useEffect } from "react";
import aang1 from "../data/images/aang1.png";
import sokka1 from "../data/images/sokka1.png";
import katara1 from "../data/images/kitara1.png";
import toff1 from "../data/images/toff1.png";
import zuko1 from "../data/images/zuko1.png";
import "./Shoji.css";

export default function Shoji() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div>
      <div className="flex w-screen border-black border-y-4">
        <img src={katara1} className="shoji-child" />
        {windowWidth > 768 && <img src={zuko1} className="shoji-child" />}
        {windowWidth > 576 && <img src={toff1} className="shoji-child toff1" />}
        <img src={aang1} className="shoji-child" />
        <img src={sokka1} className="shoji-child" />
      </div>
    </div>
  );
}
