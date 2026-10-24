// src/components/result/RecipeSection.tsx

interface RecipeSectionProps {
  recipe: string;
  mission: string;
}

export default function RecipeSection({ recipe, mission }: RecipeSectionProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {/* Recipe */}
      <div
        style={{
          backgroundColor: "#FFFEFA",
          border: "1px solid #E9DED2",
          borderRadius: "16px",
          padding: "1.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#B6A397",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Resep buat kamu
          </span>
        </div>
        <p
          style={{
            margin: 0,
            color: "#493B34",
            lineHeight: "1.65",
            fontSize: "0.95rem",
          }}
        >
          {recipe}
        </p>
      </div>

      {/* Mission */}
      <div
        style={{
          backgroundColor: "#E9DED2",
          borderRadius: "16px",
          padding: "1.5rem",
          borderLeft: "4px solid #B6A397",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#6B5A4E",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Misi kecil hari ini
          </span>
        </div>
        <p
          style={{
            margin: 0,
            color: "#493B34",
            lineHeight: "1.65",
            fontSize: "0.95rem",
            fontWeight: "500",
          }}
        >
          {mission}
        </p>
      </div>
    </div>
  );
}
