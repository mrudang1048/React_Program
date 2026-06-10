import React from "react";

const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#20232A",
        color: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          style={{
            width: "120px",
            marginBottom: "20px",
            animation: "spin 15s linear infinite",
          }}
        />

        <h1
          style={{
            fontSize: "3rem",
            color: "#61DAFB",
            marginBottom: "10px",
          }}
        >
          Welcome to React
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#B0B3B8",
            marginBottom: "25px",
          }}
        >
          Build fast, modern, and scalable web applications.
        </p>

        <button
          style={{
            backgroundColor: "#61DAFB",
            color: "#20232A",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Get Started
        </button>
      </div>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
