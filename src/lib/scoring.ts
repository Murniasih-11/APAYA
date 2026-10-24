// src/lib/scoring.ts
import { diagnoses } from "@/data/diagnoses";
import type { DiagnosisType, TypeScore, QuizResult } from "@/types/quiz";

const MAX_ANSWER_VALUE = 4;

/**
 * Hitung skor tiap tipe berdasarkan jawaban pengguna.
 * Skor dinormalisasi (0–1) berdasarkan jumlah pertanyaan yang berkontribusi
 * agar tipe dengan lebih banyak pertanyaan tidak otomatis lebih unggul.
 *
 * @param answers - Record<questionId, answerValue> (questionId: 1-20)
 */
export function calculateScores(
  answers: Record<number, number>
): TypeScore[] {
  return diagnoses.map((type: DiagnosisType) => {
    let rawScore = 0;

    for (const qId of type.questionIds) {
      const val = answers[qId];
      if (val !== undefined && val !== null) {
        rawScore += val;
      }
    }

    const maxPossible = type.questionIds.length * MAX_ANSWER_VALUE;
    // Jika tidak ada jawaban sama sekali untuk tipe ini, normalizedScore = 0
    const normalizedScore = maxPossible > 0 ? rawScore / maxPossible : 0;

    return {
      typeId: type.id,
      normalizedScore,
      rawScore,
      maxPossible,
    };
  });
}

/**
 * Pilih tipe utama dengan skor tertinggi.
 * Tie-break deterministik: urutkan berdasarkan indeks dalam array diagnoses
 * (urutan definisi data), bukan acak.
 */
export function getTopResult(scores: TypeScore[]): TypeScore {
  if (scores.length === 0) {
    throw new Error("scores array kosong");
  }

  // Urutkan:
  // 1. normalizedScore descending (skor kecocokan tertinggi)
  // 2. rawScore descending (jika persentase sama, tipe dengan jumlah poin bukti lebih banyak menang)
  // 3. indeks urutan definisi data ascending (tie-break final yang deterministik)
  const sorted = [...scores].sort((a, b) => {
    if (b.normalizedScore !== a.normalizedScore) {
      return b.normalizedScore - a.normalizedScore;
    }
    if (b.rawScore !== a.rawScore) {
      return b.rawScore - a.rawScore;
    }
    const idxA = diagnoses.findIndex((d) => d.id === a.typeId);
    const idxB = diagnoses.findIndex((d) => d.id === b.typeId);
    return idxA - idxB;
  });

  return sorted[0];
}

/**
 * Ambil tipe sekunder (yang punya skor tinggi tapi bukan yang pertama).
 * Hanya tampilkan tipe yang skornya relevan (>= 40% dan mendekati skor utama).
 * Batasi maksimal 2 tipe sekunder.
 */
export function getSecondaryResults(
  scores: TypeScore[],
  primaryTypeId: string
): TypeScore[] {
  const primary = scores.find((s) => s.typeId === primaryTypeId);
  const primaryNorm = primary ? primary.normalizedScore : 0;
  // Threshold dinamis: minimal 0.4, atau 70% dari skor tertinggi
  const threshold = Math.max(0.4, primaryNorm * 0.7);

  return scores
    .filter(
      (s) =>
        s.typeId !== primaryTypeId &&
        s.normalizedScore >= threshold &&
        s.normalizedScore > 0
    )
    .sort((a, b) => {
      if (b.normalizedScore !== a.normalizedScore) {
        return b.normalizedScore - a.normalizedScore;
      }
      return b.rawScore - a.rawScore;
    })
    .slice(0, 2);
}

/**
 * Entry point utama: hitung hasil kuis lengkap.
 */
export function evaluateQuiz(
  answers: Record<number, number>
): QuizResult {
  const allScores = calculateScores(answers);
  const primaryScore = getTopResult(allScores);

  const primaryType = diagnoses.find((d) => d.id === primaryScore.typeId);
  if (!primaryType) {
    throw new Error(`Tipe tidak ditemukan: ${primaryScore.typeId}`);
  }

  const secondaryScores = getSecondaryResults(allScores, primaryScore.typeId);
  const secondaryTypes = secondaryScores
    .map((score) => {
      const type = diagnoses.find((d) => d.id === score.typeId);
      if (!type) return null;
      return { type, score };
    })
    .filter((x): x is { type: DiagnosisType; score: TypeScore } => x !== null);

  return {
    primaryType,
    primaryScore,
    secondaryTypes,
    allScores,
  };
}
