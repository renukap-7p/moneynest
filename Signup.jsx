import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { loanTypes } from "../data/loanTypes.js";

export default function Signup() {
  const [params] = useSearchParams();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    bankName: "",
    loanInterest: params.get("loan") || "",
    password: "",
  });
  const [error, setError] = useState("");

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }
    const result = signup(form);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    navigate("/profile");
  }

  return (
    <Layout showTrustProcess={false}>
      <section className="section auth-section">
        <div className="container auth-container">
          <form className="card" onSubmit={handleSubmit}>
            <span className="eyebrow-plain">Get started</span>
            <h1>Create your Money Nest account</h1>
            {error && <div className="form-error">{error}</div>}

            <div className="field">
              <label htmlFor="name">Full name</label>
              <input id="name" required value={form.name} onChange={(e) => update("name", e.target.value)} />
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="email">Email (optional)</label>
                <input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
              </div>
            </div>

            <div className="field">
              <label htmlFor="address">Address</label>
              <input id="address" required value={form.address} onChange={(e) => update("address", e.target.value)} />
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="bank">Which bank do you hold an account with?</label>
                <input
                  id="bank"
                  required
                  placeholder="e.g. State Bank of India"
                  value={form.bankName}
                  onChange={(e) => update("bankName", e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="loanInterest">Which loan are you looking for?</label>
                <select id="loanInterest" required value={form.loanInterest} onChange={(e) => update("loanInterest", e.target.value)}>
                  <option value="" disabled>Select a loan type</option>
                  {loanTypes.map((l) => (
                    <option key={l.slug} value={l.slug}>{l.name}</option>
                  ))}
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="password">Create a password</label>
              <input id="password" type="password" required value={form.password} onChange={(e) => update("password", e.target.value)} />
              <span className="hint">Minimum 6 characters.</span>
            </div>

            <button type="submit" className="btn btn-gold btn-block">Create account</button>
            <p className="hint" style={{ marginTop: 16 }}>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
}
