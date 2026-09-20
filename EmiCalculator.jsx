import { useState } from "react";
import Layout from "../components/Layout.jsx";
import { calculateEmi, amortizationSchedule } from "../utils/emi.js";

export default function EmiCalculator() {
  const [principal, setPrincipal] = useState("1000000");
  const [rate, setRate] = useState("9.5");
  const [tenureYears, setTenureYears] = useState("10");
  const [result, setResult] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [showSchedule, setShowSchedule] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const p = Number(principal);
    const r = Number(rate);
    const years = Number(tenureYears);

    if (!p || p <= 0) return setError("Enter a loan amount greater than zero.");
    if (!r || r <= 0) return setError("Enter an interest rate greater than zero.");
    if (!years || years <= 0) return setError("Enter a tenure greater than zero.");

    setError("");
    const months = Math.round(years * 12);
    setResult(calculateEmi(p, r, months));
    setSchedule(amortizationSchedule(p, r, months));
    setShowSchedule(false);
  }

  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow-plain">EMI Calculator</span>
          <h1>Enter your numbers, see your monthly instalment</h1>
          <p>Fill in the loan amount, interest rate, and tenure directly — no dragging required.</p>
        </div>
      </section>

      <section className="section">
        <div className="container emi-grid">
          <form className="card" onSubmit={handleSubmit}>
            {error && <div className="form-error">{error}</div>}
            <div className="field">
              <label htmlFor="principal">Loan amount (₹)</label>
              <input
                id="principal"
                type="number"
                min="1"
                inputMode="numeric"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                placeholder="e.g. 1000000"
              />
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="rate">Interest rate (% per year)</label>
                <input
                  id="rate"
                  type="number"
                  min="0.1"
                  step="0.01"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  placeholder="e.g. 9.5"
                />
              </div>
              <div className="field">
                <label htmlFor="tenure">Tenure (years)</label>
                <input
                  id="tenure"
                  type="number"
                  min="1"
                  step="0.5"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(e.target.value)}
                  placeholder="e.g. 10"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-gold btn-block">Calculate EMI</button>
          </form>

          <div className="emi-result">
            {result ? (
              <>
                <div className="card emi-summary">
                  <h3>Your monthly EMI</h3>
                  <p className="emi-amount">₹{result.emi.toLocaleString("en-IN")}</p>
                  <dl className="fact-list">
                    <div>
                      <dt>Total interest payable</dt>
                      <dd>₹{result.totalInterest.toLocaleString("en-IN")}</dd>
                    </div>
                    <div>
                      <dt>Total payment (principal + interest)</dt>
                      <dd>₹{result.totalPayment.toLocaleString("en-IN")}</dd>
                    </div>
                  </dl>
                  <button
                    className="btn btn-outline btn-block"
                    onClick={() => setShowSchedule((s) => !s)}
                    type="button"
                  >
                    {showSchedule ? "Hide" : "View"} month-by-month schedule
                  </button>
                </div>

                {showSchedule && (
                  <div className="card schedule-card">
                    <div className="table-scroll">
                      <table>
                        <thead>
                          <tr>
                            <th>Month</th>
                            <th>Principal</th>
                            <th>Interest</th>
                            <th>Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          {schedule.map((row) => (
                            <tr key={row.month}>
                              <td>{row.month}</td>
                              <td>₹{row.principalPart.toLocaleString("en-IN")}</td>
                              <td>₹{row.interestPart.toLocaleString("en-IN")}</td>
                              <td>₹{row.balance.toLocaleString("en-IN")}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="card emi-placeholder">
                <p>Fill in the form and select <strong>Calculate EMI</strong> to see your results here.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
