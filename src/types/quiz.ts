// src/types/quiz.ts

export interface AnswerOption {
  value: number; // 0–4
  label: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: AnswerOption[];
}

export interface DiagnosisType {
  id: string;
  name: string;
  description: string;
  recipe: string;
  mission: string;
  questionIds: number[]; // pertanyaan yang berkontribusi ke tipe ini
}

export interface TypeScore {
  typeId: string;
  normalizedScore: number; // 0–1
  rawScore: number;
  maxPossible: number;
}

export interface QuizResult {
  primaryType: DiagnosisType;
  primaryScore: TypeScore;
  secondaryTypes: Array<{ type: DiagnosisType; score: TypeScore }>;
  allScores: TypeScore[];
}

export interface QuizState {
  answers: Record<number, number>; // questionId -> answer value (0-4)
  currentQuestion: number;
  isComplete: boolean;
}

export interface EvaluateRequest {
  answers: number[]; // array of 20 values, index = questionId - 1
}

export interface EvaluateResponse {
  result: QuizResult;
}
