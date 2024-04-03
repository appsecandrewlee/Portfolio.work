import React, { useState, useEffect } from "react";
import "./newstyles.css";

function SeventhSection() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ paddingTop: "6vh" }}>
      <div
        style={{
          animation: "fadeIn 2s",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column", // Adjust to column layout
          padding: "2vh",
        }}
      >
        <img
          src="send.png"
          alt="Send"
          className="text-center fall-down-animation"
          style={{
            fontFamily: "Playfair Display",
            fontSize: "8vh",
            height: "8vh",
            width: "8vh",
          }}
        />

        <h1
          style={{
            fontFamily: "Playfair Display",
            fontSize: "7vh",
          }}
        >
          Get in touch
        </h1>
        <p id="contact" style={{ fontFamily: "Playfair Display" }}>
          Let me know if you want to chat with me or discuss opportunities!
          <br />
          I'm always happy to grow with likeminded people!
          <br />
          I'm based in Melbourne, Australia <br />
          MEL-
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
          -
          {time.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=appsec.andrewlee@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "black",
            border: "1px solid black",
            padding: "10px",
            fontFamily: "Playfair Display",
            transition: "color 0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.color = "black";
          }}
          onMouseOut={(e) => {
            e.target.style.color = "inherit";
          }}
        >
          Email me!
        </a>
      </div>
    </div>
  );
}

export default SeventhSection;
