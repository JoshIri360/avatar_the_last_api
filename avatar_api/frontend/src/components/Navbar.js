import React, { useState } from "react";
import aipLogo from "../data/images/apiLogo.png";
import audio from "../data/audio/audio.mp3";
import BackgroundAudio from "./BackgroundAudio";
import HamburgerMenu from "../data/images/bars-solid.svg";
import CloseMenu from "../data/images/xmark-solid.svg";
import VolumeHigh from "../data/images/volume-high.svg"
import VolumeLow from "../data/images/volume-low.svg"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between p-3 items-center">
      <div>
        <img src={aipLogo} alt="logo" />
      </div>
      <div className="font-space-grotesk font-bold">
        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <img src={HamburgerMenu} alt="Menu" width={20} />
          </button>
        </div>
        {/* Navigation Menu */}
        <ul
          className={`flex gap-8 items-center ${
            menuOpen ? "block" : "hidden lg:flex"
          }`}
        >
          <li>
            <BackgroundAudio src={audio} />
          </li>
          <li>
            <a href="docs.html">Docs</a>
          </li>
          <li>
            <a href="blog.html">Blog</a>
          </li>
          <li>
            <a href="github.com">Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
