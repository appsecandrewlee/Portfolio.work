import React, { useState, useEffect, useRef } from "react";
import "./newstyles.css";

function SeventhSection() {
  const [time, setTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }, // Trigger animation when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const updateTime = () => {
    setTime(new Date());
  };

  return (
    <div ref={sectionRef} style={{ paddingTop: "6vh" }}>
      <div
        style={{
          animation: "fadeIn 2s",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
          padding: "2vh",
        }}
      >
        <img
          src="send.png"
          alt="Send"
          className={`text-center ${isVisible ? "fall-down-animation" : ""}`}
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
          Don't be shy, let's get in touch!
        </h1>
        <p id="contact" style={{ fontFamily: "Playfair Display" }}>
          Let me know if you want to chat with me or discuss opportunities, I'm
          always happy to grow with likeminded people!
          <br />
          I'm based in Melbourne, Australia. Locale: MEL-
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
          <br></br>
          Click on the button Email me or you can fill out this form below to
          send me a message!
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

        <div>Form</div>
      </div>
    </div>
  );
}

export default SeventhSection;
