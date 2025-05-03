import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  // State to manage the video file name dynamically
  const [videoFile, setVideoFile] = useState(1); // Start from video1

  const handleChangeVideo = (direction: "next" | "previous") => {
    setVideoFile((prevVideo) => {
      if (direction === "next") {
        // If it's the last video (video 2), go back to video 1
        return prevVideo === 2 ? 1 : prevVideo + 1;
      } else if (direction === "previous") {
        // If it's the first video (video 1), go to the last video
        return prevVideo === 1 ? 2 : prevVideo - 1;
      }
      return prevVideo;
    });
  };

  return (
    <div className="container">
      {/* Dynamically updating the video source */}
      <video
        className="video"
        src={`http://localhost:3000/video/video${videoFile}.mkv`}
        controls
        autoPlay
        muted
        loop
      />

      {/* Button to change the video dynamically */}
      <div className="video-controls">
        <button
          className="change-video-btn prev-btn"
          onClick={() => handleChangeVideo("previous")} // Change to previous video when clicked
        >
          ◀️Prev
        </button>
        <button
          className="change-video-btn next-btn"
          onClick={() => handleChangeVideo("next")} // Change to next video when clicked
        >
          Next▶️
        </button>
      </div>

      <p className="caption">Enjoy the show 🍿</p>
    </div>
  );
};

export default App;
