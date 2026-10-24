// src/lib/validation.ts

const TOTAL_QUESTIONS = 20;
const MIN_VALUE = 0;
const MAX_VALUE = 4;

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * Validasi array jawaban dari klien.
 * - Harus berisi tepat 20 elemen.
 * - Setiap elemen harus berupa integer 0–4.
 */
export function validateAnswers(answers: unknown): ValidationResult {
  if (!Array.isArray(answers)) {
    return { valid: false, error: "answers harus berupa array." };
  }

  if (answers.length !== TOTAL_QUESTIONS) {
    return {
      valid: false,
      error: `Jumlah jawaban harus ${TOTAL_QUESTIONS}, diterima ${answers.length}.`,
    };
  }

  for (let i = 0; i < answers.length; i++) {
    const val = answers[i];
    if (typeof val !== "number" || !Number.isInteger(val)) {
      return {
        valid: false,
        error: `Jawaban ke-${i + 1} harus berupa integer, diterima: ${JSON.stringify(val)}.`,
      };
    }
    if (val < MIN_VALUE || val > MAX_VALUE) {
      return {
        valid: false,
        error: `Jawaban ke-${i + 1} harus antara ${MIN_VALUE}–${MAX_VALUE}, diterima: ${val}.`,
      };
    }
  }

  return { valid: true };
}

/**
 * Ubah array jawaban (index = questionId - 1) ke Record<questionId, value>.
 */
export function answersArrayToRecord(
  answers: number[]
): Record<number, number> {
  const record: Record<number, number> = {};
  answers.forEach((val, idx) => {
    record[idx + 1] = val;
  });
  return record;
}
