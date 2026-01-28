"use client";

import styles from "./styles.module.css";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const svgText = useRef<SVGTextPathElement>(null);

  useEffect(() => {
    const textPath = svgText.current;

    if (!textPath) {
      return;
    }

    // Get the text content and its length
    const originalText = textPath.textContent?.trim();
    const textLength = originalText?.length ?? 0;

    if (!textLength) {
      return;
    }

    // Set initial startOffset to 0 (assuming you want it to start from the beginning)
    textPath.setAttribute("startOffset", "0");

    let startTime: DOMHighResTimeStamp | undefined;
    const duration = 100000; // Duration of one complete animation loop in milliseconds
    const speedMultiplier = 10; // Adjust this value to control the speed of the animation

    function animateTextPath(timestamp: DOMHighResTimeStamp) {
      if (!textPath) {
        return;
      }

      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;

      // Calculate progress within the animation loop (0 to 1)
      const progress = (elapsed % duration) / duration;

      // Calculate offset based on progress, text length, and speed multiplier
      // Adjusting the calculation to maintain the text in place
      const offset = -progress * textLength * speedMultiplier;

      // Set the startOffset attribute with the adjusted offset
      textPath.setAttribute("startOffset", offset.toString());

      requestAnimationFrame(animateTextPath);
    }

    // Start the animation loop
    const animationId = requestAnimationFrame(animateTextPath);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* hero section */}
      <div className={styles.hero}>
        <svg viewBox="0 -50 1440 400" fill="none">
          <path
            id="textPath"
            d="M0 .5c155.69 0 155.69 64 311.39 64S467.08.5 622.77.5s155.7 64 311.39 64 155.7-64 311.39-64 155.7 64 311.39 64"
            stroke="white"
            strokeWidth="0"
          />
          <text>
            <textPath ref={svgText} id="textOnPath1" className={styles.textOnPath} href="#textPath">
              Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm
              Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen.
              Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm
              Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen.
              Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen. Hey! I'm Jen.
            </textPath>
          </text>
        </svg>
        <div className={styles.aboutMeWrapper}>
          <img src="/pages/about/hero.gif" alt="" />
          <div>
            <h1>Polymath art director/designer.</h1>
            <p>I’m fascinated by the connections that bring us together. </p>
            <p>Love collaborating with mission-driven organizations.</p>
          </div>
        </div>
      </div>
    </>
  );
};
