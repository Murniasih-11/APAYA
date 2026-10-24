// src/components/quiz/QuestionCard.tsx
"use client";

interface QuestionCardProps {
  questionNumber: number;
  questionText: string;
  children: React.ReactNode;
}

export default function QuestionCard({
  questionNumber,
  questionText,
  children,
}: QuestionCardProps) {
  return (
    <div className="card question-enter" key={questionNumber}>
      <div style={{ marginBottom: "1.5rem" }}>
        <p
          style={{
            fontSize: "0.78rem",
            color: "#B6A397",
            fontFamily: "Inter, sans-serif",
            fontWeight: "600",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          Pertanyaan {questionNumber}
        </p>
        <h2
          style={{
            fontFamily: "var(--font-lora, 'Lora', serif)",
            fontSize: "clamp(1.15rem, 3vw, 1.4rem)",
            color: "#493B34",
            fontWeight: "600",
            lineHeight: "1.45",
            margin: 0,
          }}
        >
          {questionText}
        </h2>
      </div>
      <p
        style={{
          fontSize: "0.82rem",
          color: "#847A73",
          marginBottom: "1.25rem",
          fontStyle: "italic",
        }}
      >
        Jawab sejujurnya. Kucing ini sudah melihat banyak hal.
      </p>
      {children}
    </div>
  );
}
