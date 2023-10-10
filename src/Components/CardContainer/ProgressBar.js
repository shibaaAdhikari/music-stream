import React, { useState, useEffect } from "react";

const ProgressBar = ({ audioPlayer }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    // Update the progress bar as the audio plays
    const updateProgressBar = () => {
      setCurrentTime(audioPlayer.currentTime);
    };

    // Add event listener for timeupdate
    audioPlayer.addEventListener("timeupdate", updateProgressBar);

    // Clean up the event listener when the component unmounts
    return () => {
      audioPlayer.removeEventListener("timeupdate", updateProgressBar);
    };
  }, [audioPlayer]);

  // Play/pause the audio
  const togglePlayPause = () => {
    if (isPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Calculate the progress percentage
  const progress = (currentTime / audioPlayer.duration) * 100 || 0;

  // Apply a style to the progress bar to make it orange
  const progressBarStyle = {
    width: `${progress}%`,
    backgroundColor: "orange", // Set the background color to orange
  };

  return (
    <div className="progress-bar">
      <div className="progress" style={progressBarStyle}></div>
      {/* <button onClick={togglePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button> */}
    </div>
  );
};

export default ProgressBar;
