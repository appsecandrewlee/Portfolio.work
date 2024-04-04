import React, { useState, useEffect, useRef } from "react";
import "./newstyles.css";
import ContactForm from "./ContactForm"; // Import the ContactForm component

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
          I'm based in Melbourne, Australia. Locale info: MEL-
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
          .<br></br>
          You can fill out this form below to send me a message, can't wait to
          hear from you!
        </p>
        <ContactForm />
      </div>
    </div>
  );
}

export default SeventhSection;
