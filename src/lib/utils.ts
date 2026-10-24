// src/lib/utils.ts

/**
 * Salin teks ke clipboard. Menggunakan navigator.clipboard jika tersedia,
 * dengan fallback ke execCommand untuk browser lama.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const success = document.execCommand("copy");
      document.body.removeChild(textarea);
      return success;
    }
  } catch {
    return false;
  }
}

/**
 * Bagikan hasil menggunakan Web Share API jika tersedia.
 * Fallback ke copyToClipboard jika tidak didukung.
 */
export async function shareResult(
  title: string,
  text: string,
  url?: string
): Promise<"shared" | "copied" | "failed"> {
  if (
    typeof navigator !== "undefined" &&
    navigator.share &&
    navigator.canShare?.({ title, text })
  ) {
    try {
      await navigator.share({ title, text, url });
      return "shared";
    } catch {
      // User cancelled or error
    }
  }

  const success = await copyToClipboard(text);
  return success ? "copied" : "failed";
}

/**
 * Format persentase skor untuk ditampilkan ke pengguna.
 * Ditampilkan sebagai "tingkat kecocokan jawaban dalam kuis", bukan kondisi psikologis.
 */
export function formatMatchPercentage(normalizedScore: number): string {
  const pct = Math.round(normalizedScore * 100);
  return `${pct}%`;
}

/**
 * Safe sessionStorage accessor — hindari hydration error di Next.js.
 */
export const safeSessionStorage = {
  getItem(key: string): string | null {
    if (typeof window === "undefined") return null;
    try {
      return sessionStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem(key: string, value: string): void {
    if (typeof window === "undefined") return;
    try {
      sessionStorage.setItem(key, value);
    } catch {
      // storage might be full or blocked
    }
  },
  removeItem(key: string): void {
    if (typeof window === "undefined") return;
    try {
      sessionStorage.removeItem(key);
    } catch {
      // ignore
    }
  },
};

export const SESSION_KEYS = {
  ANSWERS: "skripsi_quiz_answers",
  RESULT: "skripsi_quiz_result",
} as const;
