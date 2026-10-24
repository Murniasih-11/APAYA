// src/app/api/evaluate/route.ts
import { NextRequest, NextResponse } from "next/server";
import { validateAnswers, answersArrayToRecord } from "@/lib/validation";
import { evaluateQuiz } from "@/lib/scoring";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { answers } = body;

    const validation = validateAnswers(answers);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const answersRecord = answersArrayToRecord(answers as number[]);
    const result = evaluateQuiz(answersRecord);

    return NextResponse.json({ result });
  } catch {
    return NextResponse.json(
      { error: "Terjadi kesalahan saat menghitung hasil kuis." },
      { status: 500 }
    );
  }
}
