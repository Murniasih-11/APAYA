// src/app/page.tsx — Landing Page
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CatMascot from "@/components/landing/CatMascot";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== HERO ===== */}
        <section
          style={{
            paddingTop: "4rem",
            paddingBottom: "2rem",
          }}
        >
          <div className="container-narrow" style={{ textAlign: "center" }}>
            {/* Cat mascot */}
            <div
              className="animate-fade-in"
              style={{ marginBottom: "1.5rem" }}
            >
              <CatMascot size={280} floating />
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-in-up delay-100"
              style={{
                fontFamily: "var(--font-lora, 'Lora', serif)",
                fontSize: "clamp(2rem, 6vw, 3rem)",
                fontWeight: "700",
                color: "#493B34",
                lineHeight: "1.2",
                marginBottom: "1.25rem",
              }}
            >
              Skripsi,{" "}
              <em style={{ color: "#847A73", fontStyle: "italic" }}>
                Tapi Santai Dulu.
              </em>
            </h1>

            {/* Subheading */}
            <p
              className="animate-fade-in-up delay-200"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
                color: "#6B5A4E",
                lineHeight: "1.7",
                marginBottom: "0.75rem",
                maxWidth: "520px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Dua puluh pertanyaan. Lima belas kemungkinan nasib skripsi.
              Satu kucing yang siap menilai hidupmu dengan tatapan datar.
            </p>

            {/* CTA Buttons */}
            <div
              className="animate-fade-in-up delay-300"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                justifyContent: "center",
                marginTop: "2rem",
                marginBottom: "1rem",
              }}
            >
              <Link id="btn-start-quiz" href="/quiz" className="btn-primary">
                Cek nasib skripsiku
              </Link>
              <a id="btn-meet-cat" href="#about" className="btn-secondary">
                Kenalan dulu sama kucingnya
              </a>
            </div>

            <p
              className="animate-fade-in-up delay-400"
              style={{
                fontSize: "0.8rem",
                color: "#B6A397",
                fontStyle: "italic",
                marginTop: "0.5rem",
              }}
            >
              Pelan-pelan, skripsi bukan lomba lari.
            </p>
          </div>
        </section>

        {/* ===== DISCLAIMER ===== */}
        <section style={{ paddingTop: "1.5rem", paddingBottom: "2rem" }}>
          <div className="container-narrow">
            <div className="disclaimer-box">
              <p style={{ margin: 0, lineHeight: "1.7" }}>
                <strong style={{ color: "#493B34" }}>Disclaimer tipis-tipis:</strong>{" "}
                ini cuma seru-seruan buat nyemangatin pejuang skripsi semester akhir, bukan diagnosis
                beneran, bukan penentu masa depan, dan bukan alasan buat menyerah.
              </p>
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section style={{ paddingTop: "1rem", paddingBottom: "3rem" }}>
          <div className="container-narrow">
            <h2
              style={{
                fontFamily: "var(--font-lora, 'Lora', serif)",
                fontSize: "1.5rem",
                color: "#493B34",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              Gimana cara kerjanya?
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  num: "01",
                  title: "Jawab 20 pertanyaan",
                  desc: "Tentang kebiasaan dan tantanganmu saat mengerjakan skripsi. Nggak ada jawaban salah.",
                },
                {
                  num: "02",
                  title: "Dapatkan tipe skripsimu",
                  desc: "Dari 15 tipe yang tersedia, sistem akan menemukan yang paling cocok dengan polamu.",
                },
                {
                  num: "03",
                  title: "Baca resepnya",
                  desc: "Tiap tipe punya resep praktis dan misi kecil untuk hari ini. Mulai dari satu langkah.",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="card-soft"
                  style={{ textAlign: "center" }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontFamily: "var(--font-lora, 'Lora', serif)",
                      color: "#D8B8B2",
                      fontWeight: "700",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {step.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      color: "#493B34",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#6B5A4E", margin: 0, lineHeight: "1.6" }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ABOUT / MEET THE CAT ===== */}
        <section
          id="about"
          style={{
            paddingTop: "2rem",
            paddingBottom: "4rem",
            backgroundColor: "#FFFEFA",
            borderTop: "1px solid #E9DED2",
            borderBottom: "1px solid #E9DED2",
          }}
        >
          <div className="container-narrow" style={{ textAlign: "center" }}>
            <h2
              style={{
                fontFamily: "var(--font-lora, 'Lora', serif)",
                fontSize: "1.6rem",
                color: "#493B34",
                marginBottom: "1rem",
              }}
            >
              Ini kucingnya.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#6B5A4E",
                lineHeight: "1.75",
                maxWidth: "520px",
                margin: "0 auto 1.5rem",
              }}
            >
              Ekspresinya datar, tatapannya dalam, dan hidupnya sesantai kucing yang nggak punya deadline. Dia nggak menghakimi, nggak menuntut kamu harus cepat, dan nggak bakal bikin kamu merasa tertinggal. Dia cuma duduk menemani, mengingatkan kalau kamu boleh istirahat, boleh pelan-pelan, dan nggak harus menyelesaikan semuanya hari ini. Satu langkah kecil tetap kemajuan, kok.!
            </p>
            <p
              style={{
                fontSize: "0.88rem",
                color: "#847A73",
                fontStyle: "italic",
              }}
            >
              &ldquo;Tidak ada jawaban salah. Yang ada, jawaban yang relate.&rdquo;
            </p>
            <div style={{ marginTop: "2rem" }}>
              <Link id="btn-start-quiz-2" href="/quiz" className="btn-primary">
                Mulai kuis sekarang
              </Link>
            </div>
          </div>
        </section>

        {/* ===== CLOSING THOUGHT ===== */}
        <section style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div className="container-narrow" style={{ textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--font-lora, 'Lora', serif)",
                fontSize: "1.25rem",
                color: "#6B5A4E",
                fontStyle: "italic",
                lineHeight: "1.7",
                maxWidth: "460px",
                margin: "0 auto",
              }}
            >
              &ldquo;Skripsi memang serius, tapi kamu nggak harus menjalani semuanya sambil tegang.&rdquo;
            </p>
            <p
              style={{
                marginTop: "1rem",
                fontSize: "0.82rem",
                color: "#B6A397",
              }}
            >
              — Tenang, kamu tidak harus menyelesaikan satu bab hari ini.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
