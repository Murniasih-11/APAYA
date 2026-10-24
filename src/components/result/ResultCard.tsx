// src/components/result/ResultCard.tsx
import type { QuizResult } from "@/types/quiz";
import CatMascot from "@/components/landing/CatMascot";
import RecipeSection from "@/components/result/RecipeSection";

interface ResultCardProps {
  result: QuizResult;
}

export default function ResultCard({ result }: ResultCardProps) {
  const { primaryType, primaryScore, secondaryTypes } = result;
  const matchPct = Math.round(primaryScore.normalizedScore * 100);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Opening line */}
      <p
        style={{
          fontFamily: "var(--font-lora, 'Lora', serif)",
          fontSize: "1rem",
          color: "#847A73",
          fontStyle: "italic",
          marginBottom: 0,
        }}
      >
        Oke, mari kita lihat isi kepala pejuang skripsi ini.
      </p>

      {/* Cat + Type name */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          padding: "2rem 1rem",
          backgroundColor: "#F7F3EC",
          borderRadius: "20px",
          border: "1px solid #E9DED2",
          textAlign: "center",
        }}
      >
        <CatMascot size={200} floating />

        <div>
          <div className="result-badge" style={{ marginBottom: "0.75rem" }}>
            Diagnosis skripsimu hari ini
          </div>
          <h1
            style={{
              fontFamily: "var(--font-lora, 'Lora', serif)",
              fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
              color: "#493B34",
              fontWeight: "700",
              margin: "0 0 0.5rem 0",
              lineHeight: "1.2",
            }}
          >
            {primaryType.name}
          </h1>
          <p
            style={{
              fontSize: "0.85rem",
              color: "#847A73",
              margin: 0,
            }}
          >
            Tingkat kecocokan jawaban dalam kuis: <strong>{matchPct}%</strong>
          </p>
          <p
            style={{
              fontSize: "0.75rem",
              color: "#B6A397",
              margin: "0.25rem 0 0 0",
              fontStyle: "italic",
            }}
          >
            (ini bukan persentase kondisi psikologis, ya. cuma seberapa kuat polamu muncul di kuis ini.)
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="card-soft">
        <p
          style={{
            margin: 0,
            color: "#493B34",
            lineHeight: "1.7",
            fontSize: "0.97rem",
          }}
        >
          {primaryType.description}
        </p>
      </div>

      {/* Recipe & Mission */}
      <RecipeSection recipe={primaryType.recipe} mission={primaryType.mission} />

      {/* Secondary types */}
      {secondaryTypes.length > 0 && (
        <div
          style={{
            backgroundColor: "#FFFEFA",
            border: "1px solid #E9DED2",
            borderRadius: "16px",
            padding: "1.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#B6A397",
              fontFamily: "Inter, sans-serif",
              marginBottom: "0.75rem",
            }}
          >
            Kecenderungan tambahan
          </p>
          <p
            style={{
              fontSize: "0.82rem",
              color: "#847A73",
              fontStyle: "italic",
              marginBottom: "1rem",
            }}
          >
            Ini bukan diagnosis pasti, hanya pola yang juga cukup muncul dari jawabanmu.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {secondaryTypes.map(({ type, score }) => (
              <div
                key={type.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.75rem 1rem",
                  backgroundColor: "#F7F3EC",
                  borderRadius: "10px",
                }}
              >
                <span style={{ fontSize: "0.9rem", fontWeight: "500", color: "#493B34" }}>
                  {type.name}
                </span>
                <span style={{ fontSize: "0.82rem", color: "#847A73" }}>
                  {Math.round(score.normalizedScore * 100)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Encouragement */}
      <div
        style={{
          textAlign: "center",
          padding: "1rem",
          color: "#847A73",
          fontSize: "0.88rem",
          fontStyle: "italic",
        }}
      >
        Satu langkah kecil tetap dihitung sebagai kemajuan. Kucingnya percaya padamu.
      </div>
    </div>
  );
}
