"use client";

export default function Page() {
  const tsCheckoutUrl =
    "https://clevergroup.tscheckout.com/event/testing-event--hi-l";

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.badge}>Payvia powered by Deets</div>

        <h1 style={styles.title}>Lightsfest Demo (Instant Load)</h1>

        <p style={styles.subtitle}>
          Same Lightsfest flow. Sub-second load. Real TS checkout.
        </p>

        <div style={styles.ctaRow}>
          <button
            style={styles.primaryBtn}
            onClick={() => window.open(tsCheckoutUrl, "_blank")}
          >
            Run $1 Live Test →
          </button>

          <div style={styles.priceTag}>
            $1 ticket → $2.88 total
          </div>
        </div>
      </section>

      <section style={styles.events}>
        <h2 style={styles.sectionTitle}>Upcoming Events</h2>

        <div style={styles.grid}>
          {[
            "Los Angeles",
            "Miami",
            "Dallas",
            "Chicago",
          ].map((city) => (
            <div key={city} style={styles.card}>
              <h3>{city}</h3>
              <p>Tickets available</p>

              <button
                style={styles.cardBtn}
                onClick={() => window.open(tsCheckoutUrl, "_blank")}
              >
                Register Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.demoBox}>
        <h2>What this demo proves</h2>

        <ul>
          <li>⚡ Instant page load (vs legacy redirect)</li>
          <li>💳 Real TS checkout opens</li>
          <li>💰 Fees preserved ($1 → $2.88)</li>
          <li>📊 Order appears in TS + Digitzs</li>
        </ul>
      </section>
    </main>
  );
}

const styles: any = {
  page: {
    minHeight: "100vh",
    padding: 40,
    background:
      "linear-gradient(135deg, #0b0f1f 0%, #1a1f3b 50%, #2a1f5f 100%)",
    color: "white",
    fontFamily: "system-ui",
  },

  hero: {
    maxWidth: 900,
    margin: "0 auto",
    textAlign: "center",
  },

  badge: {
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.1)",
    marginBottom: 20,
  },

  title: {
    fontSize: 48,
    fontWeight: 700,
    marginBottom: 10,
  },

  subtitle: {
    opacity: 0.8,
    marginBottom: 30,
  },

  ctaRow: {
    display: "flex",
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  primaryBtn: {
    background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
    border: "none",
    padding: "14px 24px",
    borderRadius: 12,
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
  },

  priceTag: {
    opacity: 0.7,
  },

  events: {
    marginTop: 80,
    textAlign: "center",
  },

  sectionTitle: {
    marginBottom: 20,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 20,
    maxWidth: 900,
    margin: "0 auto",
  },

  card: {
    padding: 20,
    borderRadius: 16,
    background: "rgba(255,255,255,0.05)",
  },

  cardBtn: {
    marginTop: 10,
    background: "#8b5cf6",
    border: "none",
    padding: "10px 16px",
    borderRadius: 8,
    color: "white",
    cursor: "pointer",
  },

  demoBox: {
    marginTop: 80,
    maxWidth: 600,
    marginLeft: "auto",
    marginRight: "auto",
    background: "rgba(255,255,255,0.05)",
    padding: 20,
    borderRadius: 16,
  },
};
