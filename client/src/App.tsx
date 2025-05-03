import React from "react";

// Define the type for the styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #141e30, #243b55)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    padding: "2rem",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  video: {
    width: "80%",
    maxWidth: "800px",
    borderRadius: "1rem",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    marginBottom: "1rem",
  },
  caption: {
    fontSize: "1.1rem",
    color: "#ccc",
  },
};

const App: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎬 My Video Player</h1>
      <video
        src="http://localhost:3000/video/video1.mkv"
        style={styles.video}
        controls
        autoPlay
        muted
        loop
      />
      <p style={styles.caption}>Enjoy the show 🍿</p>
    </div>
  );
};

export default App;
