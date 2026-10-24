// src/components/quiz/AnswerOptions.tsx
"use client";

import type { AnswerOption } from "@/types/quiz";

interface AnswerOptionsProps {
  options: AnswerOption[];
  selectedValue: number | null;
  onSelect: (value: number) => void;
  questionId: number;
}

export default function AnswerOptions({
  options,
  selectedValue,
  onSelect,
  questionId,
}: AnswerOptionsProps) {
  return (
    <div
      role="group"
      aria-label="Pilihan jawaban"
      style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}
    >
      {options.map((option) => {
        const isSelected = selectedValue === option.value;
        const inputId = `q${questionId}-opt${option.value}`;

        return (
          <label
            key={option.value}
            htmlFor={inputId}
            className={`answer-option${isSelected ? " selected" : ""}`}
          >
            <input
              type="radio"
              id={inputId}
              name={`question-${questionId}`}
              value={option.value}
              checked={isSelected}
              onChange={() => onSelect(option.value)}
              style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
            />
            <span className="option-dot" aria-hidden="true" />
            <span style={{ flex: 1 }}>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}
