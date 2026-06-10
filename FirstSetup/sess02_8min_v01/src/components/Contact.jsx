import React from "react";

const Contact = () => {
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
          maxWidth: "600px",
          margin: "0 auto",
          background: "#282C34",
          padding: "40px",
          borderRadius: "12px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#61DAFB",
            marginBottom: "30px",
          }}
        >
          Contact Us
        </h1>

        <form>
          <div style={{ marginBottom: "20px" }}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                borderRadius: "8px",
                border: "none",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                borderRadius: "8px",
                border: "none",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Message</label>
            <textarea
              rows="5"
              placeholder="Type your message..."
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                borderRadius: "8px",
                border: "none",
                outline: "none",
                resize: "none",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#61DAFB",
              color: "#20232A",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;