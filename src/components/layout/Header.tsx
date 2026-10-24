// src/components/layout/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        padding: "1.25rem 0",
        borderBottom: "1px solid #E9DED2",
        backgroundColor: "#F7F3EC",
      }}
    >
      <div className="container-wide">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-lora, 'Lora', serif)",
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#493B34",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Skripsi, Tapi Santai Dulu.
          </Link>
        </div>
      </div>
    </header>
  );
}
