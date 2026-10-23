"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fade-up" | "scale" | "fade";
  delayMs?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delayMs = 0,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Fire once
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    if (animation === "scale") {
      return `reveal-scale ${isVisible ? "is-visible" : ""}`;
    }
    return `reveal-item ${isVisible ? "is-visible" : ""}`;
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delayMs}ms`,
      }}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
}
