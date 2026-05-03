"use client";

import { useMemo, useState } from "react";

type TicketMode = "oneDollar" | "vipPair";

export default function Page() {
  const [ticketMode, setTicketMode] = useState<TicketMode>("vipPair");
  const [approved, setApproved] = useState(false);

  const ticket = useMemo(() => {
    if (ticketMode === "oneDollar") {
      return {
        label: "Lightsfest Test Ticket",
        total: 1,
        note: "Low-risk $1 test transaction for demo validation"
      };
    }

    return {
      label: "Lightsfest VIP Pair",
      total: 248,
      note: "Full-value ticket purchase for real checkout storytelling"
    };
  }, [ticketMode]);

  const payviaFee = ticket.total * 0.029 + 0.3;
  const platformShare = payviaFee * 0.1;
  const processorShare = payviaFee - platformShare;

  function chooseTicket(mode: TicketMode) {
    setTicketMode(mode);
    setApproved(false);
  }

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.badge}>Payvia powered by Deets</div>

        <h1 style={styles.title}>Lightsfest Demo Live</h1>

        <p style={styles.subtitle}>
          A clean Vercel-ready demo for secure embedded checkout, simulated
          approval, KOUNT logging, TicketSocket sync, and Payvia fee storytelling.
        </p>

        <div style={styles.toggleRow}>
          <button
            onClick={() => chooseTicket("oneDollar")}
            style={{
              ...styles.toggleButton,
              ...(ticketMode === "oneDollar" ? styles.toggleActive : {})
            }}
          >
            $1 Test Ticket
          </button>

          <button
            onClick={() => chooseTicket("vipPair")}
            style={{
              ...styles.toggleButton,
              ...(ticketMode === "vipPair" ? styles.toggleActive : {})
            }}
          >
            $248 VIP Pair
          </button>
        </div>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Secure Card Capture</h2>

            <div style={styles.iframeBox}>TokenEx iframe placeholder</div>

            <button style={styles.button} onClick={() => setApproved(true)}>
              Simulate Payment Approval
            </button>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Order Status</h2>
            <p>{ticket.label}</p>
            <p style={styles.price}>${ticket.total.toFixed(2)}</p>
            <p style={styles.note}>{ticket.note}</p>

            <p>Status: {approved ? "Approved ✅" : "Waiting for payment"}</p>
            <p>KOUNT session: logged</p>
            <p>TicketSocket sync: ready</p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Payvia Fee Story</h2>
            <p>Transaction total: ${ticket.total.toFixed(2)}</p>
            <p>Payvia fee: ${payviaFee.toFixed(2)}</p>
            <p>Platform share: ${platformShare.toFixed(2)}</p>
            <p>Processor share: ${processorShare.toFixed(2)}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #6d28d9, #111827 45%, #020617)",
    color: "white",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    padding: 40
  },
  hero: {
    maxWidth: 1100,
    margin: "0 auto",
    paddingTop: 40
  },
  badge: {
    display: "inline-block",
    padding: "10px 18px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.14)",
    border: "1px solid rgba(255,255,255,0.25)",
    marginBottom: 28,
    fontWeight: 700
  },
  title: {
    fontSize: 64,
    lineHeight: 1,
    margin: 0,
    letterSpacing: -2
  },
  subtitle: {
    fontSize: 21,
    lineHeight: 1.45,
    maxWidth: 850,
    color: "#e5e7eb",
    marginTop: 26
  },
  toggleRow: {
    display: "flex",
    gap: 12,
    marginTop: 34,
    marginBottom: 8,
    flexWrap: "wrap"
  },
  toggleButton: {
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: 999,
    padding: "12px 18px",
    background: "rgba(255,255,255,0.1)",
    color: "white",
    fontSize: 16,
    fontWeight: 800,
    cursor: "pointer"
  },
  toggleActive: {
    background: "#a855f7",
    borderColor: "#c084fc",
    boxShadow: "0 0 24px rgba(168,85,247,0.45)"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 22,
    marginTop: 32
  },
  card: {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: 24,
    padding: 28,
    boxShadow: "0 24px 70px rgba(0,0,0,0.25)"
  },
  cardTitle: {
    fontSize: 28,
    marginTop: 0
  },
  iframeBox: {
    border: "1px dashed rgba(255,255,255,0.45)",
    borderRadius: 16,
    padding: 26,
    margin: "24px 0",
    color: "#f3f4f6",
    background: "rgba(0,0,0,0.22)",
    fontWeight: 700
  },
  button: {
    width: "100%",
    border: 0,
    borderRadius: 14,
    padding: "16px 18px",
    fontSize: 17,
    fontWeight: 900,
    cursor: "pointer",
    background: "#a855f7",
    color: "white"
  },
  price: {
    fontSize: 42,
    fontWeight: 900,
    margin: "20px 0"
  },
  note: {
    color: "#d1d5db",
    marginBottom: 28
  }
};
