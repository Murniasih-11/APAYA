// src/components/quiz/ProgressBar.tsx

interface ProgressBarProps {
  current: number; // 1-based current question number
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <span
          style={{
            fontSize: "0.82rem",
            color: "#847A73",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Pertanyaan {current} dari {total}
        </span>
        <span
          style={{
            fontSize: "0.82rem",
            color: "#B6A397",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="progress-bar-track" role="progressbar" aria-valuenow={current} aria-valuemin={1} aria-valuemax={total}>
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
