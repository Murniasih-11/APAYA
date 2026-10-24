// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Skripsi, Tapi Santai Dulu | Kuis Skripsi Asih",
  description:
    "Kuis skripsi seru-seruan untuk mahasiswa semester akhir. Kenali kebiasaanmu, dapatkan resep kecil, dan jalani skripsi dengan lebih santai.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Skripsi, Tapi Santai Dulu",
    description:
      "Kuis skripsi seru-seruan untuk mahasiswa semester akhir. 20 pertanyaan. 15 kemungkinan nasib skripsi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
