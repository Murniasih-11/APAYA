// src/data/questions.ts
import type { QuizQuestion } from "@/types/quiz";

const ANSWER_OPTIONS = [
  { value: 0, label: "Tidak pernah" },
  { value: 1, label: "Jarang" },
  { value: 2, label: "Kadang-kadang" },
  { value: 3, label: "Sering" },
  { value: 4, label: "Hampir selalu" },
];

export const questions: QuizQuestion[] = [
  {
    id: 1,
    text: "Ketika memikirkan skripsi, seberapa sering kamu memikirkan kemungkinan masalah yang bahkan belum terjadi?",
    options: ANSWER_OPTIONS,
  },
  {
    id: 2,
    text: "Seberapa sering kamu tertarik mengganti topik karena menemukan ide lain yang terasa lebih menarik?",
    options: ANSWER_OPTIONS,
  },
  {
    id: 3,
    text: "Seberapa sering kamu merasa bingung menentukan langkah pertama meskipun sudah tahu bahwa skripsi harus dikerjakan?",
    options: ANSWER_OPTIONS,
  },
  {
    id: 4,
    text: "Seberapa sering kamu menunda mengerjakan skripsi meskipun sebenarnya punya waktu untuk mulai?",
    options: ANSWER_OPTIONS,
  },
  {
    id: 5,
    text: "Seberapa sering kamu menyimpan artikel atau jurnal untuk dibaca nanti, tetapi akhirnya menumpuk?",
    options: ANSWER_OPTIONS,
  },
  {
    id: 6,
    text: "Seberapa sering kamu merasa ragu menghubungi dosen pembimbing ketika ada hal yang ingin ditanyakan?",
    options: ANSWER_OPTIONS,
  },
  {
    id: 7,
    text: "Seberapa sering kamu kesulitan mengubah ide yang sudah ada di kepala menjadi tulisan?",
    options: ANSWER_OPTIONS,
  },
  {
    id: 8,
    text: "Seberapa sering kamu merasa belum yakin dengan metode penelitian yang paling sesuai untuk topikmu?",
    options: ANSWER_OPTIONS,
  },
  {
    id: 9,
    text: "Seberapa sering kamu merasa kesulitan mengatur kutipan, sumber referensi, atau daftar pustaka?",
    options: ANSWER_OPTIONS,
  },
  {
    id: 10,
    text: "Seberapa sering kamu membuat target pengerjaan yang terlalu banyak hingga sulit menyelesaikannya?",
    options: ANSWER_OPTIONS,
  },
  {
    id: 11,
    text: "Seberapa sering kamu merasa tertinggal setelah melihat perkembangan skripsi teman-temanmu?",
    options: ANSWER_OPTIONS,
  },
  {
    id: 12,
    text: "Seberapa sering kamu kesulitan menemukan file skripsi atau membedakan dokumen versi terbaru?",
    options: ANSWER_OPTIONS,
  },
  {
    id: 13,
    text: "Seberapa sering kamu membuka dokumen skripsi tetapi bingung menentukan pekerjaan yang harus didahulukan?",
    options: ANSWER_OPTIONS,
  },
  {
    id: 14,
    text: "Seberapa sering kamu mengulang atau mengedit tulisan berkali-kali sebelum berani melanjutkan ke bagian berikutnya?",
    options: ANSWER_OPTIONS,
  },
  {
    id: 15,
    text: "Seberapa sering kamu justru mendapatkan ide atau fokus terbaik ketika malam sudah larut?",
    options: ANSWER_OPTIONS,
  },
  {
    id: 16,
    text: "Seberapa sering kamu memikirkan banyak tahapan skripsi sekaligus sampai sulit fokus pada pekerjaan hari ini?",
    options: ANSWER_OPTIONS,
  },
  {
    id: 17,
    text: "Seberapa sering kamu merasa sulit memilih topik karena beberapa pilihan terasa sama-sama menarik atau belum yakin mana yang paling layak diteliti?",
    options: ANSWER_OPTIONS,
  },
  {
    id: 18,
    text: "Seberapa sering kamu kesulitan merangkum beberapa sumber menjadi penjelasan yang runtut dengan bahasamu sendiri?",
    options: ANSWER_OPTIONS,
  },
  {
    id: 19,
    text: "Seberapa sering kamu menunda meminta masukan karena merasa hasil pekerjaanmu belum cukup bagus untuk diperlihatkan?",
    options: ANSWER_OPTIONS,
  },
  {
    id: 20,
    text: "Seberapa sering kamu mengerjakan skripsi terlalu lama hingga waktu istirahat terganggu atau ritme pengerjaan menjadi tidak teratur?",
    options: ANSWER_OPTIONS,
  },
];
