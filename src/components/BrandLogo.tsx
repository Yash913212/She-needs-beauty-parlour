import React from "react";

interface BrandLogoProps {
  light?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BrandLogo({
  light = false,
  className = "",
  size = "md"
}: BrandLogoProps) {
  const textColor = light ? "text-white" : "text-[#241713]";
  const subColor = light ? "text-[#D6BB96]" : "text-[#6D4B3D]";
  const emblemColor = light ? "#D6BB96" : "#A47B55";

  return (
    <div className={`flex items-center gap-3 select-none tracking-tight ${className}`}>
      {/* Fine Botanical Emblem */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width={size === "sm" ? "28" : size === "lg" ? "40" : "34"}
          height={size === "sm" ? "28" : size === "lg" ? "40" : "34"}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-700 hover:rotate-12"
        >
          {/* Outer fine circle */}
          <circle cx="50" cy="50" r="44" stroke={emblemColor} strokeWidth="0.8" strokeDasharray="1.5 2.5" opacity="0.6" />
          
          {/* Center Lotus Petal */}
          <path
            d="M50 18C50 18 43 36 43 54C43 64 50 72 50 72C50 72 57 64 57 54C57 36 50 18 50 18Z"
            fill={emblemColor}
            fillOpacity="0.2"
            stroke={emblemColor}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Left Wing */}
          <path
            d="M50 72C50 72 32 66 26 50C21 38 32 30 32 30C32 30 35 44 50 72Z"
            fill={emblemColor}
            fillOpacity="0.1"
            stroke={emblemColor}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Right Wing */}
          <path
            d="M50 72C50 72 68 66 74 50C79 38 68 30 68 30C68 30 65 44 50 72Z"
            fill={emblemColor}
            fillOpacity="0.1"
            stroke={emblemColor}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Base Crescent */}
          <path
            d="M34 76C44 80 56 80 66 76"
            stroke={emblemColor}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typographic Wordmark */}
      <div className="flex flex-col text-left leading-none">
        <span
          className={`font-serif tracking-widest font-normal ${textColor} ${
            size === "sm"
              ? "text-lg"
              : size === "lg"
              ? "text-2xl"
              : "text-xl"
          }`}
        >
          SHE NEEDS
        </span>
        <span
          className={`font-sans uppercase tracking-[0.28em] font-medium ${subColor} ${
            size === "sm" ? "text-[8px]" : size === "lg" ? "text-[10px]" : "text-[9px]"
          } mt-1`}
        >
          BEAUTY PARLOUR
        </span>
      </div>
    </div>
  );
}
