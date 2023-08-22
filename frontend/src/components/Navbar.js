import React from "react";
import aipLogo from "../data/images/apiLogo.png";
import audio from "../data/audio/audio.mp3";
import BackgroundAudio from "./BackgroundAudio";

function Navbar() {
  return (
    <div className="flex justify-between p-3 items-center">
      <div>
        <img src={aipLogo} alt="logo" />
      </div>
      <div className="font-space-grotesk font-bold">
        <ul className="flex gap-8">
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
