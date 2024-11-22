"use client";

import React from "react";
import styles from "./background.module.css";

const generateBackgroundElements = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: (i * 73) % 100,
    top: (i * 47) % 100,
    width: 50 + ((i * 83) % 100),
    height: 50 + ((i * 83) % 100),
    animationDelay: (i * 0.1) % 2,
    animationDuration: 17 + ((i * 89) % 10),
    moveX: 4 + ((i * 67) % 20),
    moveY: 4 + ((i * 53) % 20),
    scale: 1 + ((i) % 3) / 10,
  }));
};

const AnimatedBackground = ({
  count = 50,
  gradientFrom = "gray-50",
  gradientTo = "gray-100",
}) => {
  const backgroundElements = generateBackgroundElements(count);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-br from-${gradientFrom} to-${gradientTo}`}
      >
        {backgroundElements.map((element) => (
          <div
            key={element.id}
            className={`${styles.floatingBlob} absolute rounded-full bg-primary-500/10`}
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
              width: `${element.width}px`,
              height: `${element.height}px`,
              "--moveX": `${element.moveX}px`,
              "--moveY": `${element.moveY}px`,
              "--scale": element.scale,
              "--delay": `${element.animationDelay}s`,
              "--duration": `${element.animationDuration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
