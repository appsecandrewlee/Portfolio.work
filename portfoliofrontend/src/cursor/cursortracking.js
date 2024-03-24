import React, { useState, useEffect, useRef } from "react";

function CursorTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveredClickable, setHoveredClickable] = useState(false);
  const animationFrameId = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      animationFrameId.current = requestAnimationFrame(() => {
        setPosition({
          x: event.pageX,
          y: event.pageY,
        });
      });
    };

    const handleMouseEnterClickable = () => {
      setHoveredClickable(true);
    };

    const handleMouseLeaveClickable = () => {
      setHoveredClickable(false);
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Add event listeners for clickable elements
    const clickableElements = document.querySelectorAll(".clickable-element");
    clickableElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnterClickable);
      element.addEventListener("mouseleave", handleMouseLeaveClickable);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);

      // Remove event listeners for clickable elements
      clickableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnterClickable);
        element.removeEventListener("mouseleave", handleMouseLeaveClickable);
      });

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "absolute",
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: hoveredClickable ? "30px" : "20px", // Increase size when over clickable
        height: hoveredClickable ? "30px" : "20px", // Increase size when over clickable
        backgroundColor: hoveredClickable
          ? "rgba(169, 169, 169, 0.6)"
          : "rgba(128, 128, 128, 0.6)", // Change color and opacity
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        transition: "width 0.3s, height 0.3s, background-color 0.3s", // Add transition for smooth change
      }}
    />
  );
}

export default CursorTracker;
