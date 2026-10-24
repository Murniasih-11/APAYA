// src/data/diagnoses.ts
import type { DiagnosisType } from "@/types/quiz";

/**
 * Pemetaan pertanyaan ke tipe diagnosis:
 * Q1  -> Overthinking Akademik
 * Q2  -> Judul Wanderlust
 * Q3  -> Tipes Skripsi, Kompas Hilang
 * Q4  -> Besokologi
 * Q5  -> Jurnal Hunter
 * Q6  -> Konsul Anxiety
 * Q7  -> Bab Satu Saja
 * Q8  -> Metode Galau
 * Q9  -> Sitasi Survival, Folder Finalisasi
 * Q10 -> Ambis Lowbat
 * Q11 -> FOMO Skripsi
 * Q12 -> Folder Finalisasi
 * Q13 -> Kompas Hilang
 * Q14 -> Perfeksionis Pemula
 * Q15 -> Produktif Tengah Malam
 * Q16 -> Overthinking Akademik, Tipes Skripsi
 * Q17 -> Judul Wanderlust, Metode Galau
 * Q18 -> Jurnal Hunter, Bab Satu Saja
 * Q19 -> Konsul Anxiety, Perfeksionis Pemula
 * Q20 -> Ambis Lowbat, Produktif Tengah Malam
 */

export const diagnoses: DiagnosisType[] = [
  {
    id: "overthinking-akademik",
    name: "Overthinking Akademik",
    description:
      "Kamu sering memikirkan berbagai kemungkinan buruk sebelum masalahnya benar-benar terjadi. Akibatnya, energi habis untuk mengkhawatirkan tahap yang bahkan belum kamu mulai.",
    recipe:
      "Fokus pada satu tahap yang sedang dihadapi. Tulis kekhawatiranmu, pisahkan hal yang bisa dikendalikan dan yang belum, lalu kerjakan satu hal kecil hari ini.",
    mission:
      "Tulis tiga kekhawatiran terbesar tentang skripsimu hari ini. Tandai mana yang bisa kamu kendalikan sekarang, dan biarkan yang lainnya menunggu.",
    questionIds: [1, 16],
  },
  {
    id: "judul-wanderlust",
    name: "Judul Wanderlust",
    description:
      "Kamu punya banyak minat dan ide, tetapi sulit menetapkan satu topik. Setiap menemukan ide baru, pilihan yang sebelumnya terasa cocok mendadak terlihat kurang menarik.",
    recipe:
      "Nilai setiap topik berdasarkan minat, ketersediaan data, manfaat, dan kelayakan dikerjakan. Pilih topik yang paling realistis, bukan yang terlihat paling sempurna.",
    mission:
      "Buat daftar maksimal tiga topik yang sedang kamu pertimbangkan. Berikan skor 1–5 untuk masing-masing dari segi minat, kemudahan data, dan manfaat. Topik dengan total tertinggi adalah kandidatmu.",
    questionIds: [2, 17],
  },
  {
    id: "tipes-skripsi",
    name: "Tipes Skripsi",
    description:
      "Kamu ingin segera menyelesaikan skripsi, tetapi begitu melihat banyaknya tahapan, semangatmu langsung melemah. Bukan tidak mau berusaha, kamu hanya belum tahu bagaimana memulainya dengan ringan.",
    recipe:
      "Pecah pekerjaan menjadi tugas kecil, misalnya mencari tiga artikel atau menulis satu paragraf. Target hari ini cukup satu langkah yang benar-benar selesai.",
    mission:
      "Pilih satu tugas skripsi yang bisa selesai dalam 20 menit. Hanya satu. Kerjakan sekarang.",
    questionIds: [3, 16],
  },
  {
    id: "besokologi",
    name: "Besokologi",
    description:
      "Kamu sering menunda pekerjaan sambil meyakinkan diri bahwa nanti akan ada waktu atau suasana yang lebih tepat. Sayangnya, waktu yang ideal terus bergeser.",
    recipe:
      "Gunakan aturan sepuluh menit. Buka dokumen dan kerjakan bagian termudah selama sepuluh menit saja. Kamu tidak perlu menunggu motivasi untuk mulai.",
    mission:
      "Buka dokumen skripsimu sekarang. Set timer 10 menit. Tulis atau perbaiki apa saja. Selesai.",
    questionIds: [4],
  },
  {
    id: "jurnal-hunter",
    name: "Jurnal Hunter",
    description:
      "Folder referensimu semakin penuh, tetapi belum semua sumber benar-benar dibaca atau diolah. Kamu rajin mencari bahan, namun masih kesulitan mengubahnya menjadi dasar argumen penelitian.",
    recipe:
      "Setelah membaca satu artikel, catat masalah, metode, temuan, dan relevansinya dengan penelitianmu. Utamakan memahami beberapa sumber yang relevan daripada mengumpulkan banyak PDF.",
    mission:
      "Pilih satu artikel dari koleksimu yang belum dibaca tuntas. Baca hari ini, lalu tulis tiga kalimat tentang apa yang relevan untuk skripsimu.",
    questionIds: [5, 18],
  },
  {
    id: "konsul-anxiety",
    name: "Konsul Anxiety",
    description:
      "Kamu sebenarnya punya pertanyaan, tetapi terlalu lama memikirkan bagaimana cara menghubungi dosen pembimbing. Pesan sederhana pun bisa berkali-kali ditulis dan dihapus.",
    recipe:
      "Sampaikan salam, identitas singkat, konteks masalah, dan pertanyaan spesifik. Konsultasi adalah bagian dari proses bimbingan, bukan tanda bahwa kamu tidak mampu.",
    mission:
      "Draft pesan ke dosen pembimbingmu hari ini. Cukup satu pertanyaan yang paling mengganjal. Kirim sebelum malam.",
    questionIds: [6, 19],
  },
  {
    id: "bab-satu-saja",
    name: "Bab Satu Saja",
    description:
      "Kamu punya gambaran tentang apa yang ingin dibahas, tetapi kesulitan menuangkannya menjadi kalimat. Akhirnya, waktu habis untuk memikirkan atau mengedit bagian pembuka.",
    recipe:
      "Tulis ide dalam bentuk poin terlebih dahulu. Susun menjadi paragraf setelah alurnya terlihat. Draf pertama bertugas menampung ide, bukan langsung menjadi tulisan sempurna.",
    mission:
      "Buka dokumen dan tulis tiga poin apa saja yang ingin kamu sampaikan di bagian yang sedang dikerjakan. Jangan edit dulu. Tulis titik, lanjut.",
    questionIds: [7, 18],
  },
  {
    id: "metode-galau",
    name: "Metode Galau",
    description:
      "Kamu belum mantap menentukan pendekatan penelitian, cara memperoleh data, atau teknik analisis yang sesuai. Banyak pilihan terasa mungkin, tetapi belum jelas mana yang paling tepat.",
    recipe:
      "Mulai dari rumusan masalah dan tujuan penelitian. Tentukan data yang dibutuhkan untuk menjawabnya, pelajari metode yang relevan, lalu diskusikan pilihanmu dengan dosen pembimbing.",
    mission:
      "Tulis rumusan masalah skripsimu dalam satu kalimat. Dari sana, tanyakan: data apa yang dibutuhkan untuk menjawabnya? Itu titik awal memilih metode.",
    questionIds: [8, 17],
  },
  {
    id: "sitasi-survival",
    name: "Sitasi Survival",
    description:
      "Kamu kesulitan menjaga kutipan, identitas sumber, dan daftar pustaka tetap rapi. Hal teknis seperti format referensi bisa menyita perhatian yang seharusnya digunakan untuk memahami isi penelitian.",
    recipe:
      "Gunakan Zotero atau Mendeley sejak awal. Simpan metadata setiap sumber dan ikuti satu gaya sitasi secara konsisten sesuai pedoman kampus.",
    mission:
      "Hari ini, buka Zotero atau Mendeley (atau install kalau belum ada). Masukkan minimal tiga referensi yang sudah kamu punya ke dalam aplikasi tersebut.",
    questionIds: [9],
  },
  {
    id: "ambis-lowbat",
    name: "Ambis Lowbat",
    description:
      "Kamu ingin banyak hal selesai sekaligus dan menetapkan target yang tinggi. Ketika energi tidak sebanding dengan target, kamu bisa merasa bersalah meskipun sebenarnya sudah berusaha.",
    recipe:
      "Tentukan satu prioritas utama dan dua tugas tambahan yang realistis. Jadwalkan istirahat sebagai bagian dari rencana, bukan sebagai hadiah setelah semua pekerjaan selesai.",
    mission:
      "Tulis rencanamu hari ini: satu tugas utama skripsi, dua tugas kecil pendukung, dan satu waktu istirahat yang sudah dipastikan ada di jadwal.",
    questionIds: [10, 20],
  },
  {
    id: "fomo-skripsi",
    name: "FOMO Skripsi",
    description:
      "Perkembangan teman membuatmu merasa harus berlari lebih cepat. Kamu jadi sulit menghargai kemajuan sendiri karena terus membandingkannya dengan perjalanan orang lain.",
    recipe:
      "Gunakan target berdasarkan kondisimu sendiri. Catat kemajuan mingguan dan jadikan pencapaian teman sebagai inspirasi, bukan alat untuk mengukur harga dirimu.",
    mission:
      "Tulis satu hal yang sudah kamu capai minggu ini terkait skripsi, sekecil apapun itu. Itu kemajuanmu. Tidak perlu dibandingkan.",
    questionIds: [11],
  },
  {
    id: "folder-finalisasi",
    name: "Folder Finalisasi",
    description:
      "Kamu punya banyak versi dokumen, tetapi bingung mana yang paling baru. File bernama final, final revisi, dan final terbaru mulai membingungkan saat harus mengirimkan hasil bimbingan.",
    recipe:
      "Buat satu folder utama, pisahkan berdasarkan bab, dan gunakan format nama file yang konsisten dengan tanggal atau nomor versi. Simpan cadangan di tempat lain.",
    mission:
      "Buka folder skripsimu sekarang. Beri nama ulang file terbaru dengan format: NAMASKRIPSI_v[nomor]_[YYYYMMDD]. Arsipkan versi lama ke subfolder.",
    questionIds: [9, 12],
  },
  {
    id: "kompas-hilang",
    name: "Kompas Hilang",
    description:
      "Saat melihat daftar pekerjaan skripsi, semuanya terasa sama-sama penting. Kamu berpindah dari satu tugas ke tugas lain tanpa merasa ada kemajuan yang jelas.",
    recipe:
      "Tulis tiga tugas untuk hari ini, urutkan berdasarkan kepentingan dan ketergantungan antarpekerjaan, lalu mulai dari satu tugas yang paling memungkinkan diselesaikan.",
    mission:
      "Buat daftar tiga pekerjaan skripsi yang menggantung. Pilih satu yang paling mungkin selesai hari ini. Fokus di sana dulu.",
    questionIds: [3, 13],
  },
  {
    id: "perfeksionis-pemula",
    name: "Perfeksionis Pemula",
    description:
      "Kamu ingin tulisan langsung bagus sejak awal. Karena terlalu fokus pada kualitas setiap kalimat, proses menulis menjadi lambat dan kamu mungkin enggan menunjukkan draf yang masih perlu diperbaiki.",
    recipe:
      "Pisahkan sesi menulis dan mengedit. Selesaikan draf kasar terlebih dahulu, kemudian revisi berdasarkan masukan. Tulisan berkembang melalui perbaikan, bukan hanya melalui kesempurnaan sejak awal.",
    mission:
      "Set timer 15 menit. Tulis tanpa mengedit apapun selama itu. Setelah timer berbunyi, baru kamu boleh melihat ke atas dan memperbaiki.",
    questionIds: [14, 19],
  },
  {
    id: "produktif-tengah-malam",
    name: "Produktif Tengah Malam",
    description:
      "Ide dan fokusmu sering muncul ketika malam sudah larut. Akibatnya, jadwal pengerjaan dapat bergeser dan waktu istirahat berisiko berkurang.",
    recipe:
      "Kenali jam fokusmu dan atur pekerjaan yang membutuhkan konsentrasi pada waktu tersebut jika memungkinkan. Tetap tentukan batas waktu kerja agar kebutuhan tidur tidak terus dikorbankan.",
    mission:
      "Tentukan jam berhenti kerja malam ini. Tulis di kertas atau set alarm. Ketika alarm berbunyi, simpan dokumen dan tutup laptop.",
    questionIds: [15, 20],
  },
];
