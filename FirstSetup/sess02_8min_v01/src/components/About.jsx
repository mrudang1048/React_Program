import React from "react";

const About = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#20232A",
        color: "#FFFFFF",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#61DAFB",
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          About Us
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            color: "#B0B3B8",
          }}
        >
          We are passionate developers dedicated to creating modern, responsive,
          and user-friendly web applications. Our goal is to build solutions
          that are fast, scalable, and easy to use.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              backgroundColor: "#282C34",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
            }}
          >
            <h3 style={{ color: "#61DAFB" }}>Mission</h3>
            <p>Deliver high-quality digital experiences.</p>
          </div>

          <div
            style={{
              backgroundColor: "#282C34",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
            }}
          >
            <h3 style={{ color: "#61DAFB" }}>Vision</h3>
            <p>Empower businesses through technology.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
