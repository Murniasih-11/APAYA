// src/app/quiz/page.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuestionCard from "@/components/quiz/QuestionCard";
import AnswerOptions from "@/components/quiz/AnswerOptions";
import ProgressBar from "@/components/quiz/ProgressBar";
import { questions } from "@/data/questions";
import { safeSessionStorage, SESSION_KEYS } from "@/lib/utils";
import { evaluateQuiz } from "@/lib/scoring";

const TOTAL = questions.length; // 20

export default function QuizPage() {
  const router = useRouter();

  // currentIndex: 0-based index into questions array
  const [currentIndex, setCurrentIndex] = useState(0);
  // answers: Record<questionId, value>
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [validationError, setValidationError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Inisialisasi state kuis dari sessionStorage jika belum selesai
  useEffect(() => {
    if (typeof window === "undefined") return;

    const urlParams = new URLSearchParams(window.location.search);
    const isRestart = urlParams.get("restart") === "true";
    const savedResult = safeSessionStorage.getItem(SESSION_KEYS.RESULT);

    // Jika pengguna meminta restart atau kuis sebelumnya sudah selesai:
    // Hapus bersih seluruh data lama, mulai di Pertanyaan 1, tanpa ada jawaban terpilih!
    if (isRestart || savedResult) {
      safeSessionStorage.removeItem(SESSION_KEYS.ANSWERS);
      safeSessionStorage.removeItem(SESSION_KEYS.RESULT);
      setAnswers({});
      setCurrentIndex(0);
      setValidationError(false);
      if (isRestart) {
        window.history.replaceState({}, "", "/quiz");
      }
      return;
    }

    // Hanya pulihkan jawaban jika kuis sedang berjalan di sesi ini
    const savedAnswers = safeSessionStorage.getItem(SESSION_KEYS.ANSWERS);
    if (savedAnswers) {
      try {
        const parsed = JSON.parse(savedAnswers);
        if (typeof parsed === "object" && !Array.isArray(parsed) && Object.keys(parsed).length > 0) {
          setAnswers(parsed);
        }
      } catch {
        safeSessionStorage.removeItem(SESSION_KEYS.ANSWERS);
        setAnswers({});
      }
    }
  }, []);

  // Simpan jawaban ke sessionStorage hanya saat ada jawaban aktual
  useEffect(() => {
    if (Object.keys(answers).length > 0) {
      safeSessionStorage.setItem(SESSION_KEYS.ANSWERS, JSON.stringify(answers));
    } else {
      safeSessionStorage.removeItem(SESSION_KEYS.ANSWERS);
    }
  }, [answers]);

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentQuestion.id] ?? null;
  const isLastQuestion = currentIndex === TOTAL - 1;
  const allAnswered = Object.keys(answers).length === TOTAL;

  const handleSelect = useCallback(
    (value: number) => {
      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
      setValidationError(false);
    },
    [currentQuestion.id]
  );

  const handleNext = () => {
    if (currentAnswer === null) {
      setValidationError(true);
      return;
    }
    setValidationError(false);
    if (!isLastQuestion) {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handlePrev = () => {
    setValidationError(false);
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  const handleSubmit = async () => {
    if (!allAnswered) {
      setValidationError(true);
      return;
    }
    setIsSubmitting(true);

    try {
      // Calculate result client-side (no network dependency for core functionality)
      const result = evaluateQuiz(answers);
      safeSessionStorage.setItem(SESSION_KEYS.RESULT, JSON.stringify(result));
      router.push("/result");
    } catch {
      setIsSubmitting(false);
      alert("Terjadi kesalahan saat menghitung hasil. Coba lagi.");
    }
  };

  return (
    <>
      <Header />
      <main style={{ minHeight: "80dvh", paddingTop: "2rem", paddingBottom: "4rem" }}>
        <div className="container-narrow">
          {/* Progress */}
          <div style={{ marginBottom: "2rem" }}>
            <ProgressBar
              current={currentIndex + 1}
              total={TOTAL}
            />
          </div>

          {/* Microcopy */}
          <p
            style={{
              fontSize: "0.82rem",
              color: "#B6A397",
              textAlign: "center",
              marginBottom: "1.25rem",
              fontStyle: "italic",
            }}
          >
            Tidak ada jawaban salah. Yang ada, jawaban yang relate.
          </p>

          {/* Question Card */}
          <div key={currentIndex}>
            <QuestionCard
              questionNumber={currentIndex + 1}
              questionText={currentQuestion.text}
            >
              <AnswerOptions
                options={currentQuestion.options}
                selectedValue={currentAnswer}
                onSelect={handleSelect}
                questionId={currentQuestion.id}
              />
            </QuestionCard>
          </div>

          {/* Validation error */}
          {validationError && (
            <div
              role="alert"
              style={{
                marginTop: "1rem",
                padding: "0.75rem 1rem",
                backgroundColor: "#FFFEFA",
                border: "1.5px solid #D8B8B2",
                borderRadius: "10px",
                fontSize: "0.88rem",
                color: "#6B5A4E",
                textAlign: "center",
              }}
            >
              Pilih dulu jawabanmu, bestie. Kucingnya belum bisa baca pikiran.
            </div>
          )}

          {/* Navigation */}
          <div className="quiz-nav-grid">
            <button
              id="btn-prev"
              className="btn-secondary"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              style={{
                visibility: currentIndex === 0 ? "hidden" : "visible",
              }}
              aria-label="Kembali ke pertanyaan sebelumnya"
            >
              ← Sebelumnya
            </button>

            {isLastQuestion ? (
              <button
                id="btn-see-result"
                className="btn-primary"
                onClick={handleSubmit}
                disabled={!allAnswered || isSubmitting}
              >
                {isSubmitting ? "Menghitung..." : "Lihat hasilku →"}
              </button>
            ) : (
              <button
                id="btn-next"
                className="btn-primary"
                onClick={handleNext}
                aria-label="Lanjut ke pertanyaan berikutnya"
              >
                Lanjut →
              </button>
            )}
          </div>

          {/* Answer count hint */}
          <p
            style={{
              textAlign: "center",
              marginTop: "1.5rem",
              fontSize: "0.78rem",
              color: "#B6A397",
              fontStyle: "italic",
            }}
          >
            {Object.keys(answers).length} dari {TOTAL} pertanyaan sudah dijawab
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
