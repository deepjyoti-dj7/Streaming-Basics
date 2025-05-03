import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">🎬 DJ Player</h1>
      <video
        className="video"
        src="http://localhost:3000/video/video1.mkv"
        controls
        autoPlay
        muted
        loop
      />
      <p className="caption">Enjoy the show 🍿</p>
    </div>
  );
};

export default App;
