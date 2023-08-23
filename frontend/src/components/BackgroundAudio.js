import React, { useState } from "react";
import VolumeHigh from "../data/images/volume-high.svg";
import VolumeOff from "../data/images/volume-xmark.svg";

const BackgroundAudio = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center justify-center">
      {isPlaying && <audio src={src} autoPlay loop />}
      <button onClick={toggleAudio}>
        {isPlaying ? (
          <img src={VolumeHigh} alt="Turn Off Music" width={20} />
        ) : (
          <img src={VolumeOff} alt="Turn On Music" width={20} />
        )}
      </button>
    </div>
  );
};

export default BackgroundAudio;
