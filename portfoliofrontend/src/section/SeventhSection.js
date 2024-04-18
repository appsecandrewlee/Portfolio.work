import React, { useState, useEffect, useRef } from "react";
import "./newstyles.css";
import ContactForm from "./ContactForm";

function SeventhSection() {
  const [time, setTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
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
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/send.png"}
          className={`text-center ${isVisible ? "fall-down-animation" : ""}`}
          style={{
            fontFamily: "Playfair Display",
            fontSize: "8vh",
            height: "8vh",
            width: "8vh",
          }}
        />
         <h1 className="default-size">
        Let's get in touch!
        </h1>
        <div>
        <p id="contact" style={{ fontFamily: "Playfair Display"}}>
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
          {isMobile
            ? "Click this button to email me!"
            : "You can fill out this form below to send me a message, can't wait to hear from you!"}
        </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default SeventhSection;
