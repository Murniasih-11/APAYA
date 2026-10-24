// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer
      style={{
        padding: "2.5rem 0",
        borderTop: "1px solid #E9DED2",
        textAlign: "center",
        color: "#847A73",
        fontSize: "0.85rem",
        lineHeight: "1.7",
      }}
    >
      <div className="container-wide">
        <p style={{ marginBottom: "0.25rem" }}>
          Dibuat oleh <strong style={{ color: "#6B5A4E" }}>Asih</strong>, dengan niat baik dan sedikit kegelisahan akademik.
        </p>
        <p style={{ marginBottom: 0, fontSize: "0.78rem", color: "#B6A397" }}>
          Bukan diagnosis beneran. Bukan penentu masa depan. Cuma seru-seruan buat pejuang skripsi.
        </p>
      </div>
    </footer>
  );
}
