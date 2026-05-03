"use client";

import { useState } from "react";

export default function Page() {
  const [approved, setApproved] = useState(false);

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.badge}>Payvia powered by Deets</div>
        <h1 style={styles.title}>Lightsfest Demo Live</h1>
        <p style={styles.subtitle}>
          A clean Vercel-ready demo for secure embedded checkout, simulated approval,
          KOUNT logging, TicketSocket sync, and Payvia fee storytelling.
        </p>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h2>Secure Card Capture</h2>
            <div style={styles.iframeBox}>TokenEx iframe placeholder</div>
            <button style={styles.button} onClick={() => setApproved(true)}>
              Simulate Payment Approval
            </button>
          </div>

          <div style={styles.card}>
            <h2>Order Status</h2>
            <p>Lightsfest VIP Pair</p>
            <p style={styles.price}>$248.00</p>
            <p>Status: {approved ? "Approved ✅" : "Waiting for payment"}</p>
            <p>KOUNT session: logged</p>
            <p>TicketSocket sync: ready</p>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #7c3aed, #111827 45%, #020617)",
    color: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    padding: 32
  },
  hero: { maxWidth: 1000, margin: "0 auto", paddingTop: 60 },
  badge: {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.2)",
    marginBottom: 24
  },
  title: { fontSize: 56, margin: 0 },
  subtitle: { fontSize: 20, maxWidth: 760, color: "#e5e7eb", lineHeight: 1.5 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 20,
    marginTop: 40
  },
  card: {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: 24,
    padding: 24
  },
  iframeBox: {
    border: "1px dashed rgba(255,255,255,0.45)",
    borderRadius: 16,
    padding: 24,
    margin: "20px 0",
    background: "rgba(0,0,0,0.2)"
  },
  button: {
    width: "100%",
    border: 0,
    borderRadius: 14,
    padding: "14px 18px",
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
    background: "#a855f7",
    color: "white"
  },
  price: { fontSize: 36, fontWeight: 800 }
};
