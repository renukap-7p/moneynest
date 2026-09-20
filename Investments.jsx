import { useState } from "react";
import Layout from "../components/Layout.jsx";

const plans = [
  {
    name: "Steady Start SIP",
    risk: "Low",
    horizon: "2–3 years",
    blurb: "Debt-oriented mutual funds for money you'll need soon and can't afford to see shrink.",
  },
  {
    name: "Balanced Growth SIP",
    risk: "Moderate",
    horizon: "5–7 years",
    blurb: "A mix of equity and debt funds, built for goals like a down payment or a child's education.",
  },
  {
    name: "Long Horizon Equity SIP",
    risk: "High",
    horizon: "10+ years",
    blurb: "Equity mutual funds for retirement or wealth-building, where time is the biggest asset.",
  },
];

function futureValue(monthly, years, annualReturn) {
  const months = years * 12;
  const r = annualReturn / 12 / 100;
  if (r === 0) return monthly * months;
  return monthly * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
}

export default function Investments() {
  const [monthly, setMonthly] = useState("5000");
  const [years, setYears] = useState("10");
  const [returnRate, setReturnRate] = useState("12");
  const [result, setResult] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const m = Number(monthly);
    const y = Number(years);
    const r = Number(returnRate);
    if (!m || !y || !r) return;
    const invested = m * y * 12;
    const value = futureValue(m, y, r);
    setResult({ invested: Math.round(invested), value: Math.round(value), gain: Math.round(value - invested) });
  }

  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow-plain">Investments</span>
          <h1>Plan a SIP around a goal, not a guess</h1>
          <p>
            A Systematic Investment Plan (SIP) lets you invest a fixed amount every
            month into mutual funds. Here's how the numbers work, and which style of
            plan tends to fit which goal.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow-plain">SIP plans we guide you through</span>
          <h2>Three starting points, depending on your horizon</h2>
          <hr className="hr-gold" />
          <div className="plan-grid">
            {plans.map((p) => (
              <div key={p.name} className="card plan-card">
                <span className="tag">{p.risk} risk</span>
                <h3>{p.name}</h3>
                <p>{p.blurb}</p>
                <p className="hint">Typical horizon: {p.horizon}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container emi-grid">
          <form className="card" onSubmit={handleSubmit}>
            <h3>SIP growth estimator</h3>
            <div className="field">
              <label htmlFor="monthly">Monthly investment (₹)</label>
              <input id="monthly" type="number" min="1" value={monthly} onChange={(e) => setMonthly(e.target.value)} />
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="years">Duration (years)</label>
                <input id="years" type="number" min="1" value={years} onChange={(e) => setYears(e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="return">Expected annual return (%)</label>
                <input id="return" type="number" min="0" step="0.1" value={returnRate} onChange={(e) => setReturnRate(e.target.value)} />
              </div>
            </div>
            <button type="submit" className="btn btn-gold btn-block">Estimate growth</button>
            <p className="hint" style={{ marginTop: 12 }}>
              Mutual fund returns are market-linked and not guaranteed — this is an
              illustration at your assumed rate, not a promised outcome.
            </p>
          </form>

          <div className="emi-result">
            {result ? (
              <div className="card emi-summary">
                <h3>Projected value</h3>
                <p className="emi-amount">₹{result.value.toLocaleString("en-IN")}</p>
                <dl className="fact-list">
                  <div>
                    <dt>Total invested</dt>
                    <dd>₹{result.invested.toLocaleString("en-IN")}</dd>
                  </div>
                  <div>
                    <dt>Estimated gain</dt>
                    <dd>₹{result.gain.toLocaleString("en-IN")}</dd>
                  </div>
                </dl>
              </div>
            ) : (
              <div className="card emi-placeholder">
                <p>Fill in the SIP form to see a projected value here.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
