import { useState } from "react";
import Layout from "../components/Layout.jsx";
import { estimateCreditHealth } from "../utils/creditScore.js";

export default function CreditChecker() {
  const [form, setForm] = useState({
    monthlyIncome: "50000",
    existingEmis: "5000",
    creditCardUtilisation: "30",
    repaymentHistory: "always-on-time",
    creditHistoryYears: "4",
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const income = Number(form.monthlyIncome);
    if (!income || income <= 0) {
      setError("Enter your monthly income to continue.");
      return;
    }
    setError("");
    setResult(
      estimateCreditHealth({
        monthlyIncome: income,
        existingEmis: Number(form.existingEmis) || 0,
        creditCardUtilisation: Number(form.creditCardUtilisation) || 0,
        repaymentHistory: form.repaymentHistory,
        creditHistoryYears: Number(form.creditHistoryYears) || 0,
      })
    );
  }

  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow-plain">Credit Checker</span>
          <h1>An honest estimate, before any lender pulls your report</h1>
          <p>
            This is an illustrative estimate based on what you enter — not a real bureau
            report. For your official score, use CIBIL, Experian, or CRIF directly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container emi-grid">
          <form className="card" onSubmit={handleSubmit}>
            {error && <div className="form-error">{error}</div>}
            <div className="field">
              <label htmlFor="income">Monthly income (₹)</label>
              <input
                id="income"
                type="number"
                min="0"
                value={form.monthlyIncome}
                onChange={(e) => update("monthlyIncome", e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="emis">Existing monthly EMIs / debt payments (₹)</label>
              <input
                id="emis"
                type="number"
                min="0"
                value={form.existingEmis}
                onChange={(e) => update("existingEmis", e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="utilisation">Credit card utilisation (%)</label>
              <input
                id="utilisation"
                type="number"
                min="0"
                max="100"
                value={form.creditCardUtilisation}
                onChange={(e) => update("creditCardUtilisation", e.target.value)}
              />
              <span className="hint">How much of your total credit limit you typically use.</span>
            </div>
            <div className="field">
              <label htmlFor="history">Repayment history</label>
              <select
                id="history"
                value={form.repaymentHistory}
                onChange={(e) => update("repaymentHistory", e.target.value)}
              >
                <option value="always-on-time">Always on time</option>
                <option value="mostly-on-time">Mostly on time, rare delays</option>
                <option value="some-delays">Some delays (30+ days, occasionally)</option>
                <option value="frequent-delays">Frequent delays</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="years">Years of credit history</label>
              <input
                id="years"
                type="number"
                min="0"
                value={form.creditHistoryYears}
                onChange={(e) => update("creditHistoryYears", e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-gold btn-block">Estimate my credit health</button>
          </form>

          <div className="emi-result">
            {result ? (
              <div className="card emi-summary">
                <h3>Your estimated band</h3>
                <p className="emi-amount">{result.score} <span className="score-max">/ 900</span></p>
                <span className="tag">{result.band}</span>
                <p style={{ marginTop: 16 }}>{result.message}</p>
              </div>
            ) : (
              <div className="card emi-placeholder">
                <p>Fill in the form to see your estimated credit-health band.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
