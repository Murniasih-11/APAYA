// src/components/result/ShareButtons.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { shareResult } from "@/lib/utils";
import type { QuizResult } from "@/types/quiz";

interface ShareButtonsProps {
  result: QuizResult;
  onRetry: () => void;
}

export default function ShareButtons({ result, onRetry }: ShareButtonsProps) {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const showMsg = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleShare = async () => {
    const text = buildShareText(result);
    const outcome = await shareResult(
      "Skripsi, Tapi Santai Dulu",
      text,
      typeof window !== "undefined" ? window.location.origin : ""
    );
    if (outcome === "shared") {
      showMsg("Berhasil dibagikan!");
    } else if (outcome === "copied") {
      showMsg("Teks hasil disalin ke clipboard!");
    } else {
      showMsg("Gagal membagikan. Silakan coba lagi.");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          marginTop: "0.5rem",
        }}
      >
        <button
          id="btn-retry"
          className="btn-primary"
          onClick={onRetry}
          style={{ flex: "1 1 auto" }}
        >
          Coba kuis lagi
        </button>
        <Link
          id="btn-home"
          href="/"
          className="btn-secondary"
          style={{ flex: "1 1 auto", textAlign: "center" }}
        >
          Kembali ke beranda
        </Link>
        <button
          id="btn-share"
          className="btn-secondary"
          onClick={handleShare}
          style={{ flex: "1 1 auto" }}
        >
          Bagikan hasil
        </button>
      </div>

      {/* Toast */}
      <div
        className={`toast${showToast ? " show" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toastMessage}
      </div>
    </>
  );
}

function buildShareText(result: QuizResult): string {
  const pct = Math.round(result.primaryScore.normalizedScore * 100);
  return (
    `Diagnosis skripsinya: ${result.primaryType.name} (${pct}% kecocokan)\n\n` +
    `${result.primaryType.description}\n\n` +
    `Resep: ${result.primaryType.recipe}\n\n` +
    `Cek tipe skripsimu di: Skripsi, Tapi Santai Dulu`
  );
}
