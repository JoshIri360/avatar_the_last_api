import React, { useState } from "react";
import VolumeHigh from "../data/images/volume-high.svg";
import VolumeLow from "../data/images/volume-low.svg";

const BackgroundAudio = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {isPlaying && <audio src={src} autoPlay loop />}
      <div onClick={toggleAudio}>
        <img
          src={isPlaying ? VolumeHigh : VolumeLow}
          alt="Volume"
          className="w-5 cursor-pointer"
        />
      </div>
    </>
  );
};

export default BackgroundAudio;
