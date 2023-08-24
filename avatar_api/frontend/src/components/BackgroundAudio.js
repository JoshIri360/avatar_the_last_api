import React, { useState } from "react";

const BackgroundAudio = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {isPlaying && <audio src={src} autoPlay loop />}
      <button onClick={toggleAudio}>
        {isPlaying ? "Turn Off Music" : "Turn On Music"}
      </button>
    </>
  );
};

export default BackgroundAudio;
