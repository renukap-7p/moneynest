import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const result = login(phone.trim(), password);
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
            <span className="eyebrow-plain">Welcome back</span>
            <h1>Log in to Money Nest</h1>
            {error && <div className="form-error">{error}</div>}
            <div className="field">
              <label htmlFor="phone">Phone number</label>
              <input id="phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-gold btn-block">Log in</button>
            <p className="hint" style={{ marginTop: 16 }}>
              New here? <Link to="/signup">Create an account</Link>
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
}
