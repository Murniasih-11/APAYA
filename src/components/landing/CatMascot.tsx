// src/components/landing/CatMascot.tsx
"use client";

import Image from "next/image";

interface CatMascotProps {
  size?: number;
  floating?: boolean;
  className?: string;
}

export default function CatMascot({
  size = 320,
  floating = true,
  className = "",
}: CatMascotProps) {
  return (
    <div
      className={`${floating ? "cat-float" : ""} ${className}`}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        position: "relative",
      }}
      aria-hidden="true"
    >
      <Image
        src="/cat-mascot.svg"
        alt="Kucing maskot kuis skripsi"
        width={size}
        height={size}
        priority
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
