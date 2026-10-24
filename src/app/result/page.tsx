// src/app/result/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ResultCard from "@/components/result/ResultCard";
import ShareButtons from "@/components/result/ShareButtons";
import { safeSessionStorage, SESSION_KEYS } from "@/lib/utils";
import type { QuizResult } from "@/types/quiz";

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = safeSessionStorage.getItem(SESSION_KEYS.RESULT);
    if (stored) {
      try {
        const parsed: QuizResult = JSON.parse(stored);
        setResult(parsed);
      } catch {
        // corrupted data
      }
    }
    setLoading(false);
  }, []);

  const handleRetry = () => {
    // Clear previous session data and go to quiz fresh
    safeSessionStorage.removeItem(SESSION_KEYS.ANSWERS);
    safeSessionStorage.removeItem(SESSION_KEYS.RESULT);
    router.push("/quiz?restart=true");
  };

  if (loading) {
    return (
      <>
        <Header />
        <main
          style={{
            minHeight: "80dvh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ color: "#847A73", fontStyle: "italic" }}>
            Kucingnya sedang berpikir...
          </p>
        </main>
        <Footer />
      </>
    );
  }

  if (!result) {
    return (
      <>
        <Header />
        <main
          style={{
            minHeight: "80dvh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "400px" }}>
            <p
              style={{
                fontFamily: "var(--font-lora, 'Lora', serif)",
                fontSize: "1.3rem",
                color: "#493B34",
                marginBottom: "1rem",
              }}
            >
              Hmm, hasilnya belum ada.
            </p>
            <p
              style={{
                fontSize: "0.92rem",
                color: "#847A73",
                marginBottom: "1.5rem",
                lineHeight: "1.6",
              }}
            >
              Sepertinya kamu belum menyelesaikan kuis, atau sesinya sudah berakhir.
              Yuk mulai dari awal — kucingnya sudah siap.
            </p>
            <button
              id="btn-go-to-quiz"
              className="btn-primary"
              onClick={() => router.push("/quiz")}
            >
              Ke halaman kuis
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main style={{ paddingTop: "2.5rem", paddingBottom: "4rem" }}>
        <div className="container-narrow animate-fade-in">
          <ResultCard result={result} />
          <div style={{ marginTop: "2rem" }}>
            <ShareButtons result={result} onRetry={handleRetry} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
