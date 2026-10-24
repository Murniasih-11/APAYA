# Skripsi, Tapi Santai Dulu

Kuis interaktif untuk mahasiswa semester akhir yang ingin mengenali kebiasaan dan tantangan mereka dalam mengerjakan skripsi. Dibuat oleh **Asih** sebagai proyek hiburan yang semoga bisa membuat perjalanan skripsi terasa sedikit lebih ringan.

## Fitur

- 20 pertanyaan tentang kebiasaan mengerjakan skripsi
- 15 tipe hasil dengan keterangan, resep, dan misi harian
- Sistem penilaian yang deterministik dan transparan
- Tombol salin dan bagikan hasil
- Responsif di desktop dan ponsel
- Tanpa login, tanpa data pribadi yang disimpan

## Teknologi

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **React 19**

## Cara Menjalankan

```bash
# Install dependencies (sudah otomatis saat bootstrap)
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Struktur Proyek

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Design system CSS
│   ├── quiz/page.tsx       # Halaman kuis
│   ├── result/page.tsx     # Halaman hasil
│   └── api/evaluate/       # API route validasi server-side
├── components/
│   ├── layout/             # Header, Footer
│   ├── landing/            # CatMascot
│   ├── quiz/               # QuestionCard, AnswerOptions, ProgressBar
│   └── result/             # ResultCard, RecipeSection, ShareButtons
├── data/
│   ├── questions.ts        # 20 pertanyaan (verbatim)
│   └── diagnoses.ts        # 15 tipe hasil
├── lib/
│   ├── scoring.ts          # Algoritma penilaian
│   ├── validation.ts       # Validasi server-side
│   └── utils.ts            # Clipboard, share, sessionStorage
└── types/
    └── quiz.ts             # TypeScript types
tests/
└── scoring.test.ts         # Unit test penilaian
```

## Algoritma Penilaian

Setiap jawaban bernilai 0–4. Skor tiap tipe dihitung dari pertanyaan yang dipetakan ke tipe tersebut, lalu dinormalisasi (dibagi dengan skor maksimum tipe tersebut) agar tipe dengan lebih banyak pertanyaan tidak otomatis menang.

Tie-break deterministik: jika dua tipe memiliki skor yang sama, tipe yang lebih dulu muncul dalam `src/data/diagnoses.ts` yang dipilih.

## Menjalankan Unit Test

```bash
npx tsx tests/scoring.test.ts
```

## Catatan

- Website tidak menyimpan jawaban pengguna ke server secara permanen
- Penilaian dilakukan secara client-side agar tidak bergantung pada koneksi internet
- API route `/api/evaluate` tersedia sebagai endpoint alternatif dengan validasi server-side
- Ini bukan alat diagnosis medis atau psikologis

---

*Dibuat oleh Asih, dengan niat baik dan sedikit kegelisahan akademik.*
