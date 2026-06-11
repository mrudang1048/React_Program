import React from "react";
import bgImage from "../assets/bg.png";
const Home = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center 
        align-items-center vh-100"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          // width: "100vw",
        }}
      >
        <div className="display-1 fw-bold text-white">
          <h1>HOMEPAGE</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
