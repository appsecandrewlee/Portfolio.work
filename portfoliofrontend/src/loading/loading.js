import React, { useState, useEffect } from "react";
import TextAnimation from "react-text-animations";

function LoadingAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        fontFamily: "Playfair Display",
        position: "fixed",
        bottom: "52.5%", // Center vertically
        left: "47.9%",
        fontSize: "3vh",
        transform: "translate(-50%, -50%)",
        zIndex: "10000",
        color: "white", // Set font color to white
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-out", // Apply fade-out transition
      }}
    >
      <TextAnimation.Slide
        target="Visitor!"
        text={["Visitor!", "Friend!"]}
        animation={{
          duration: 2000, // Set animation duration to 1000 milliseconds (1 second)
          delay: 500, // Set animation delay to 2000 milliseconds (2 seconds)
          timingFunction: "ease-out", // Set animation timing function to ease-out
        }}
        loop={false}
      >
        Greetings,Visitor!
      </TextAnimation.Slide>
    </div>
  );
}

export default LoadingAnimation;
